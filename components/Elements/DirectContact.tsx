"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";

function DirectContact() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setPhone("+1 (555) 555-5555");
    setEmail("justnaturalbyrod@gmail.com");
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 md:divide-x text-center p-8 text-sm text-gray-600 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-2">
          <Phone className="mr-2" size={16} />
          <a className="font-bold" href={`tel:${phone.replace(/ /g, "")}`}>
            {phone}
          </a>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-4 md:mt-0">
          <Mail className="mr-2" size={16} />
          <a className="font-bold" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </>
  );
}

export default DirectContact;
