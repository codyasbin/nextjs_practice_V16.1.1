"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-red-600 font-bold text-4xl animate-bounce m-10">
        Asbins project is loading, please wait...
      </h1>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${width}%` }}
          />
      </div>
    </>
  );
}
