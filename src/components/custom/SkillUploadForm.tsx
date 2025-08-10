import { useState } from "react";
import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
// import { Badge } from "../ui/badge";

interface SkillFormData {
  title: string;
  description: string;
  location: string;
  userName: string;
  category: string;
  tags: string;
}

export const SkillUploadForm = () => {
  const [form, setForm] = useState<SkillFormData>({
    title: "",
    description: "",
    location: "",
    userName: "",
    category: "",
    tags: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const skillData = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()),
      createdAt: new Date(),
      status: "pending", // For admin review
    };

    try {
      // TODO: Replace with your Firebase/Supabase submission logic
      console.log("Submitted skill:", skillData);

      // Reset form
      setForm({
        title: "",
        description: "",
        location: "",
        userName: "",
        category: "",
        tags: "",
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting skill:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl space-y-6 bg-gray-900 p-6 rounded-xl border border-gray-700"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Share a Skill
      </h2>

      <div>
        <Label className="text-gray-300">Skill Title</Label>
        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g., Digital Marketing"
          required
        />
      </div>

      <div>
        <Label className="text-gray-300">Description</Label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe what you can teach..."
          rows={4}
        />
      </div>

      <div>
        <Label className="text-gray-300">Your Name</Label>
        <Input
          name="userName"
          value={form.userName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label className="text-gray-300">Your Name</Label>
        <Input
          name="userName"
          value={form.userName}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div>
        <Label className="text-gray-300">Location</Label>
        <Input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g., Accra, Ghana"
          required
        />
      </div>

      <div>
        <Label className="text-gray-300">Category</Label>
        <Input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="e.g., Tech, Art, Trade"
          required
        />
      </div>

      <div>
        <Label className="text-gray-300">Tags (comma separated)</Label>
        <Input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="e.g., UI Design, Photoshop, Branding"
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Skill"}
        </Button>
      </div>

      {success && (
        <div className="text-green-400 font-medium">
          Skill submitted for review ✅
        </div>
      )}
    </form>
  );
};
export default SkillUploadForm;
