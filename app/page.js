"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import PercentileChart from "@/app/components/PercentileChart";
import ScoreChart from "@/app/components/ScoreChart";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    {
      label: "HTML Tools, Forms, History",
      bg: "bg-blue-500",
      color: "text-blue-500",
      progress: "80%",
    },
    {
      label: "Tags and References in HTML",
      bg: "bg-orange-500",
      color: "text-orange-500",
      progress: "60%",
    },
    {
      label: "Table and Reference in HTML",
      bg: "bg-red-500",
      color: "text-red-500",
      progress: "24%",
    },
    {
      label: "Tables & CSS Basics",
      bg: "bg-green-500",
      color: "text-green-500",
      progress: "96%",
    },
  ];

  const userPercentile = 30;
  const studentsData = [
    2,
    3,
    5,
    7,
    9,
    12,
    15,
    18,
    21,
    24, // 0-9th percentiles
    27,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70, // 10-19th percentiles
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120, // 20-29th percentiles
    125,
    130,
    135,
    140,
    145,
    150,
    155,
    160,
    165,
    170, // 30-39th percentiles
    175,
    180,
    185,
    190,
    195,
    200,
    205,
    210,
    215,
    220, // 40-49th percentiles (peak)
    215,
    210,
    205,
    200,
    195,
    190,
    185,
    180,
    175,
    170, // 50-59th percentiles
    165,
    160,
    155,
    150,
    145,
    140,
    135,
    130,
    125,
    120, // 60-69th percentiles
    115,
    110,
    105,
    100,
    95,
    90,
    85,
    80,
    75,
    70, // 70-79th percentiles
    65,
    60,
    55,
    50,
    45,
    40,
    35,
    30,
    25,
    20, // 80-89th percentiles
    15,
    12,
    10,
    8,
    6,
    4,
    3,
    2,
    1,
    1, // 90-99th percentiles
  ];

  return (
    <div className="min-h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex pt-16">
        <Sidebar isOpen={isOpen} />

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
                  <button className="px-6 py-2 bg-[#132277] text-white font-medium rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                    Update
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4 lg:mb-6">
                  Quick Statistics
                </h2>
                <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full p-4 flex-shrink-0">
                      <img
                        src="/icons/trophy.svg"
                        alt="Stat 1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="font-medium">
                      <h1 className="text-2xl font-bold">1</h1>
                      <span className="text-gray-400 uppercase">Your Rank</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full p-4 flex-shrink-0">
                      <img
                        src="/icons/sheet.svg"
                        alt="Stat 2"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="font-medium">
                      <h1 className="text-2xl font-bold">30%</h1>
                      <span className="text-gray-400 uppercase">
                        Percentile
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full p-4 flex-shrink-0">
                      <img
                        src="/icons/check.svg"
                        alt="Stat 3"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="font-medium">
                      <h1 className="text-2xl font-bold">10/15</h1>
                      <span className="text-gray-400 uppercase">
                        Correct Answers
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                  <p className="text-gray-600 flex-1">
                    <span className="font-bold">You scored 30% percentile</span>{" "}
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
                  <PercentileChart
                    percentile={userPercentile}
                    studentsData={studentsData}
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 space-y-4 lg:space-y-6">
              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4 lg:mb-6">
                  Syllabus Wise Analysis
                </h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-400">{skill.label}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`${skill.bg} h-2 rounded-full`}
                            style={{ width: skill.progress }}
                          ></div>
                        </div>
                        <span className={`font-bold ${skill.color}`}>
                          {skill.progress}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <div className="text-lg font-semibold mb-4 sm:mb-6 flex justify-between items-center">
                  <h2>Questions Analysis</h2>
                  <p className="text-blue-600">10/15</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <p className="text-gray-600">
                    <span className="font-bold">
                      You scored 10 questions correct out of 15.
                    </span>{" "}
                    However it still needs some improvement.
                  </p>
                </div>
                <div className="flex justify-center mt-10">
                  <ScoreChart score={10} total={15} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
