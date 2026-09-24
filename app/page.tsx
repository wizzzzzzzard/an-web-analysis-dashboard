"use client";

import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import Chart from "@/components/Chart";

export default function DashboardPage() {
  const stats = [
    { title: "Visitors", value: "12,345" },
    { title: "Page Views", value: "45,678" },
    { title: "Bounce Rate", value: "34%" },
    { title: "Avg. Session", value: "3m 45s" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Header title="Web Analysis Dashboard" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {stats.map((item) => (
          <StatsCard key={item.title} title={item.title} value={item.value} />
        ))}
      </section>
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
        <Chart />
      </section>
    </main>
  );
}
