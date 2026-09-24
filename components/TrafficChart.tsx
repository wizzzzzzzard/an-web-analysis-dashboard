"use client";

import { useEffect, useRef } from "react";

export default function TrafficChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height * 0.8);
    const points = [0.8, 0.6, 0.7, 0.5, 0.4, 0.55, 0.3];
    points.forEach((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height * p;
      ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#6366F1";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={300}
      className="w-full h-auto rounded"
    />
  );
}
