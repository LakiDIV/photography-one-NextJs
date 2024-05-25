import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // A number from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const starClassFilled = "text-4xl fill-orange-400";
  const starClassEmpty = "text-4xl text-gray-300";

  return (
    <div className="flex flex-row items-center justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          strokeWidth={1}
          className={star <= rating ? starClassFilled : starClassEmpty}
        />
      ))}
    </div>
  );
};

export default StarRating;
