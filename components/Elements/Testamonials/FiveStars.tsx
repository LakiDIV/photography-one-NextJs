import React from "react";
import { Star } from "lucide-react";

function FiveStars() {
  const starClass = "text-4xl fill-orange-400 text-gray-300 ";

  return (
    <div className="flex flex-row items-center justify-center">
      <Star size={16} strokeWidth={1} className={starClass} />
      <Star size={16} strokeWidth={1} className={starClass} />
      <Star size={16} strokeWidth={1} className={starClass} />
      <Star size={16} strokeWidth={1} className={starClass} />
      <Star size={16} strokeWidth={1} className={starClass} />
    </div>
  );
}

export default FiveStars;
