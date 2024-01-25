"use client";

import { Button } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";

export default function WaitingBox() {
  const canvasRef = useRef(null);
  const [isBlank, setIsBlank] = useState(true);
  let drawing = false;
  let context = null;

  const checkIfCanvasBlank = () => {
    if (!canvasRef.current) {
      return;
    }

    const context = canvasRef.current.getContext("2d");

    const pixelBuffer = new Uint32Array(
      context.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      ).data.buffer
    );

    setIsBlank(!pixelBuffer.some((color) => color !== 0));
  };

  const startDrawing = (event) => {
    drawing = true;
    draw(event);
  };

  const finishDrawing = () => {
    drawing = false;
    context.beginPath();
  };

  const draw = (event) => {
    if (!drawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.pageX - (rect.left + window.scrollX);
    const y = event.pageY - (rect.top + window.scrollY);
    context.lineWidth = 1;
    context.lineCap = "round";
    context.strokeStyle = "black";

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", () => {
      finishDrawing();
      checkIfCanvasBlank();
    });
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", finishDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div className="w-1/2 flex flex-col text-3xl h-full gap-3 font-semibold justify-center items-center">
      <div className="w-[300px] text-center relative">Waiting.. </div>
      <canvas
        ref={canvasRef}
        className="p-0 m-0 relative size-[300px] rounded-sm border border-cyan-600 bg-cyan-100"
      ></canvas>
    </div>
  );
}
