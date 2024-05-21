import React from "react";
import FaqItem from "./faq-item";
import faqData from "../../constants/faq-item";

export default function FaqItems() {
  return (
    <div className="mx-auto">
      {faqData.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
