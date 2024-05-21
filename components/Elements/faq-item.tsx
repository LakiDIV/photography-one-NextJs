import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="m-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqItem;
