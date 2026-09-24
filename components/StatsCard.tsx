"use client";

interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-2xl font-medium text-gray-800">{value}</span>
    </div>
  );
}
