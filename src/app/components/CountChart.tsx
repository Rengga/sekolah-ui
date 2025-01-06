"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 42,
    fill: "#7469B6",
  },
  {
    name: "Boys",
    count: 48,
    fill: "#E95793",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/logo.png" alt="" width={50} height={50} className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-purple rounded-full" />
          <h1 className="font-bold">1,034</h1>
          <h2 className="text-xs text-gray-400">Boys (42%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-pink rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-400">Girls (48%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
