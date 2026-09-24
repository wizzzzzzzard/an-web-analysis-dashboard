"use client";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </header>
  );
}
