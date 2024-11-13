"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Statistics from "@/app/components/Statistics";
import Syllabus from "@/app/components/Syllabus";
import PercentileChart from "@/app/components/PercentileChart";
import ScoreChart from "@/app/components/ScoreChart";
import UpdateModal from "@/app/components/UpdateModal";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentStats, setStudentStats] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleSubmit = (updatedStats) => {
    setStudentStats(updatedStats);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-4 lg:p-6 lg:ml-64">
          <p className="text-gray-600 font-medium mb-4">Skill Test</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="w-full lg:flex-1 space-y-4 lg:space-y-6">
              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <img
                      src="/icons/html5.svg"
                      alt="Test"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      HyperText Markup Language
                    </h2>
                    <p className="text-gray-600 font-medium mt-2 text-sm">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 bg-[#132277] text-white font-medium rounded-lg hover:bg-blue-900 w-full sm:w-auto"
                  >
                    Update
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4 lg:mb-6">
                  Quick Statistics
                </h2>
                <Statistics stats={studentStats} />
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                  <p className="text-gray-600 flex-1">
                    <span className="font-bold">
                      You scored {studentStats.percentile}% percentile
                    </span>{" "}
                    which is lower than the average percentile 72% of all the
                    engineers who took this assessment.
                  </p>
                  <div className="hidden sm:block w-14 h-14 bg-gray-100 rounded-full p-4 flex-shrink-0">
                    <img
                      src="/icons/graph.png"
                      alt="Graph"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full h-[300px]">
                  <PercentileChart percentile={studentStats.percentile} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 space-y-4 lg:space-y-6">
              <Syllabus />

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <div className="text-lg font-semibold mb-4 sm:mb-6 flex justify-between items-center">
                  <h2>Questions Analysis</h2>
                  <p className="text-blue-600">{studentStats.score}/15</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <p className="text-gray-600">
                    <span className="font-bold">
                      You scored {studentStats.score} questions correct out of
                      15.
                    </span>{" "}
                    However it still needs some improvement.
                  </p>
                </div>
                <div className="flex justify-center mt-10">
                  <ScoreChart score={studentStats.score} total={15} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stats={studentStats}
        onSubmit={handleSubmit}
      />

      {(isSidebarOpen || isModalOpen) && (
        <div
          className={`fixed inset-0 bg-black/50 ${
            isModalOpen ? "z-20" : "z-5"
          }`}
          onClick={() => {
            setSidebarOpen(false);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
