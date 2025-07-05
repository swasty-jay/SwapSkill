import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSkillById } from "@/services/FetchSkills";

const SkillDetailPage = () => {
  const { id } = useParams();
  const {
    data: skill,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skill", id],
    queryFn: () => fetchSkillById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !skill) return <p>Skill not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">{skill.title}</h1>
      <p className="text-gray-700 mb-4">{skill.description}</p>
      <p className="text-sm text-gray-500">Category: {skill.category}</p>
      <p className="text-sm text-gray-500">Location: {skill.location}</p>
      <p className="text-sm text-gray-500">Teacher: {skill.userName}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SkillDetailPage;
