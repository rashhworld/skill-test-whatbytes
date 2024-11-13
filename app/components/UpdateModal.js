import { useState, useEffect } from "react";

export default function UpdateModal({ isOpen, onClose, stats, onSubmit }) {
  const [formData, setFormData] = useState({
    percentile: "",
    score: "",
    rank: "",
  });

  const [errors, setErrors] = useState({
    percentile: "",
    score: "",
    rank: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        percentile: stats.percentile,
        score: stats.score,
        rank: stats.rank,
      });

      setErrors({
        percentile: "",
        score: "",
        rank: "",
      });
    }
  }, [isOpen, stats]);

  const validate = (name, value) => {
    const errorMessages = {
      rank: "required | should be number",
      percentile: "required | percentile 0-100",
      score: "required | score 0-15",
    };

    if (
      value === "" ||
      (name === "rank" && value < 1) ||
      (name === "percentile" && (value < 0 || value > 100)) ||
      (name === "score" && (value < 0 || value > 15))
    ) {
      return errorMessages[name];
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validate(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      percentile: validate("percentile", formData.percentile),
      score: validate("score", formData.score),
      rank: validate("rank", formData.rank),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const updatedStats = {
      percentile: Number(formData.percentile),
      score: Number(formData.score),
      rank: Number(formData.rank),
    };

    onSubmit(updatedStats);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg z-30">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Update Scores</h2>
        <img src="/icons/html5.svg" alt="html" className="w-10 h-10" />
      </div>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-[300px] flex items-center gap-2 shrink-0">
            <p className="w-7 h-7 bg-blue-800 rounded-full text-white flex items-center justify-center text-sm shrink-0">
              1
            </p>
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Update Your <span className="font-bold">Rank</span>
            </label>
          </div>
          <div className="w-full sm:w-[200px]">
            <input
              type="number"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.rank ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.rank && (
              <p className="text-red-500 text-sm mt-1">{errors.rank}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-[300px] flex items-center gap-2 shrink-0">
            <p className="w-7 h-7 bg-blue-800 rounded-full text-white flex items-center justify-center text-sm shrink-0">
              2
            </p>
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Update Your <span className="font-bold">Percentile</span>
            </label>
          </div>
          <div className="w-full sm:w-[200px]">
            <input
              type="number"
              name="percentile"
              value={formData.percentile}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.percentile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.percentile && (
              <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-[300px] flex items-center gap-2 shrink-0">
            <p className="w-7 h-7 bg-blue-800 rounded-full text-white flex items-center justify-center text-sm shrink-0">
              3
            </p>
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Update Your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
          </div>
          <div className="w-full sm:w-[200px]">
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.score ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.score && (
              <p className="text-red-500 text-sm mt-1">{errors.score}</p>
            )}
          </div>
        </div>

        <div className="flex gap-3 justify-end font-medium">
          <button
            type="button"
            onClick={onClose}
            className="w-28 px-4 py-2 text-[#132277] border border-[#132277] rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-28 px-4 py-2 bg-[#132277] text-white rounded-lg hover:bg-blue-900 flex items-center justify-center gap-2"
          >
            Save
            <img src="/icons/arrow-right.svg" alt="save" className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
