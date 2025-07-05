import { FetchSkills } from "@/services/FetchSkills";
import { useQuery } from "@tanstack/react-query";
import SkillListItem from "./SkillListItem";

const SkillsPage = () => {
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Skills"],
    queryFn: FetchSkills,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load skills.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {skills?.map((skill) => (
        <SkillListItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsPage;
