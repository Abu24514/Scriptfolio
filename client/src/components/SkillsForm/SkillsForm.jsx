import { Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const trimmedSkill = newSkill.trim();

    if (trimmedSkill && !data.includes(trimmedSkill)) {
      onChange([...data, trimmedSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Heading */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Skills
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Add your technical and soft skills
        </p>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="JavaScript, React, Communication..."
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <button
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      {/* Skills List */}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {data.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-100"
            >
              <span>{skill}</span>

              <button
                onClick={() => removeSkill(index)}
                className="rounded-full p-1 transition-all hover:bg-indigo-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 py-10 text-center">
          <Sparkles className="mx-auto mb-3 h-10 w-10 text-gray-300" />

          <p className="font-medium text-gray-600">
            No skills added yet
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Add your technical and soft skills above
          </p>
        </div>
      )}

      {/* Tip */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
        <p className="text-sm leading-6 text-indigo-900">
          <span className="font-semibold">Tip:</span> Add 8–12 relevant
          skills including technical skills, tools, and soft skills like
          communication and leadership.
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;