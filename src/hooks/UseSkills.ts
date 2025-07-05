//=======Reusable React Query hook for fetching skills=====//

import { FetchSkills } from "@/services/FetchSkills";
import type { Skill } from "@/types/Types";
import { useQuery } from "@tanstack/react-query";

export const useSkills = () => {
  return useQuery<Skill[]>({
    queryKey: ["Skills"],
    queryFn: FetchSkills,
  });
};
// ==================== FETCH FUNCTION ====================
