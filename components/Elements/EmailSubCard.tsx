import React from "react";
import { InputWithButton } from "./email-sub-input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MailSubscriptionsForm() {
  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-5xl mx-auto ">
      <Card>
        <CardHeader>
          <CardTitle>Stay Connected</CardTitle>
          <CardDescription>
            No spam, just occasional updates on exclusive promotions and
            upcoming waitlists.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InputWithButton />
        </CardContent>
      </Card>
    </div>
  );
}
