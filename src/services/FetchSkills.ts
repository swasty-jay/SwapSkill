import { db } from "@/firebase/Firebase";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";
import type { Skill } from "@/types/Types";

// ==================== FETCH FUNCTION ====================

export const FetchSkills = async (): Promise<Skill[]> => {
  const querySnapshot = await getDocs(collection(db, "Skills"));

  return querySnapshot.docs
    .map((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();

      // Only return approved skills//
      if (!data.approved) return null;

      return {
        id: doc.id,
        title: data.title || "Untitled",
        description: data.description || "",
        category: data.category || "",
        userId: data.userId,
        userName: data.userName,
        userAvatar: data.userAvatar,
        createdAt: data.createdAt?.toDate?.() || new Date(),
        price: data.price || 0,
        level: data.level || "",
        location: data.location || "",
        tags: data.tags || [],
        exchangeType: data.exchangeType || "",
        imageUrl: data.imageUrl || "",
        approved: data.approved || false,
      };
    })
    .filter(Boolean) as Skill[];
};

export const fetchSkillById = async (id: string): Promise<Skill | null> => {
  try {
    const docRef = doc(db, "Skills", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Skill;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching skill by ID:", error);
    throw new Error("Failed to fetch skill");
  }
};
