export default function Syllabus() {
  const subjects = [
    {
      label: "HTML Tools, Forms, History",
      color: "blue-500",
      thumb: "bg-blue-100",
      progress: "80%",
    },
    {
      label: "Tags and References in HTML",
      color: "orange-500",
      thumb: "bg-orange-100",
      progress: "60%",
    },
    {
      label: "Table and Reference in HTML",
      color: "red-500",
      thumb: "bg-red-100",
      progress: "24%",
    },
    {
      label: "Tables & CSS Basics",
      color: "green-500",
      thumb: "bg-green-100",
      progress: "96%",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 lg:p-6 border">
      <h2 className="text-lg font-semibold mb-4 lg:mb-6">
        Syllabus Wise Analysis
      </h2>
      <div className="space-y-6">
        {subjects.map((sub, index) => (
          <div key={index}>
            <p className="font-medium text-gray-400">{sub.label}</p>
            <div className="flex items-center gap-5 mt-2">
              <div className={`flex-1 ${sub.thumb} rounded-full h-2`}>
                <div
                  className={`bg-${sub.color} h-2 rounded-full`}
                  style={{ width: sub.progress }}
                ></div>
              </div>
              <span className={`font-bold text-${sub.color}`}>
                {sub.progress}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
