import React from "react";
import { CircleUserRound, Minus, Quote } from "lucide-react";
import StarRating from "../StarRating";

interface TestimonialContentProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialContent: React.FC<TestimonialContentProps> = ({
  quote,
  author,
  rating,
}) => {
  const maxQuoteLength = 150;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, maxLength);
    return truncated.substr(0, truncated.lastIndexOf(" ")) + "...";
  };

  const truncatedQuote = truncateText(quote, maxQuoteLength);

  return (
    <div className="relative p-4 bg-white border shadow-sm rounded-sm">
      <span className="absolute right-0 m-4 text-zinc-300 text-3xl">
        <Quote />
      </span>
      <div className="text-center mt-4">
        <CircleUserRound className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
        <StarRating rating={rating} />
        <div className="text-zinc-500 mt-4 text-justify text-xs m-4 font-bold">
          "{truncatedQuote}"
          <div className="mt-2 text-right">
            <span className="inline-flex align-middle">
              <Minus className="mr-1 inline-block" />
            </span>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
