import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <h1 className="flex flex-col items-center justify-center text-center p-16 text-gray-600">
        404 Not Found !
      </h1>
    </div>
  );
}
