"use client";

import { useEffect, useRef } from "react";

export default function Chart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Simple placeholder chart using Canvas API
    ctx.fillStyle = "#e5e7eb";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.moveTo(0, canvasRef.current.height);
    ctx.lineTo(50, 80);
    ctx.lineTo(100, 120);
    ctx.lineTo(150, 60);
    ctx.lineTo(200, 100);
    ctx.lineTo(250, 40);
    ctx.lineTo(300, 80);
    ctx.lineTo(350, 30);
    ctx.lineTo(400, 70);
    ctx.lineTo(450, 20);
    ctx.lineTo(500, 60);
    ctx.lineTo(canvasRef.current.width, 0);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
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
