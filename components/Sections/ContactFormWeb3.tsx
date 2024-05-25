import { PACKAGES_DATA } from "@/constants/packages-data";
import React from "react";
import LinkBtn from "../Elements/Buttons/LinkBtn";

const accessKey = process.env.WEB3_FORM_ACCESS_KEY;

export default function ContactFormWeb3() {
  // Styles
  const inputStyle =
    "w-full px-4 py-2 border rounded-sm bg-gray-100 focus:outline-none focus:border-blue-500 ";
  const labelStyle = "block text-gray-600 text-xs font-semibold mb-2";
  const buttonStyle =
    "uppercase text-sm font-bold tracking-wide bg-gray-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline  hover:bg-cyan-900 transition duration-150 ease-in";

  return (
    <>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="mx-auto p-6 bg-white rounded-lg shadow-sm"
      >
        <input
          type="hidden"
          name="access_key"
          value={accessKey}
          className="hidden"
        />

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className={labelStyle}>
              First Name <span className="text-red-500 font-light">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelStyle}>
              Last Name <span className="text-red-500 font-light">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className={inputStyle}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phoneNumber" className={labelStyle}>
              Phone Number <span className="text-red-500 font-light">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelStyle}>
              Email <span className="text-red-500 font-light">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={inputStyle}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="selectDate" className={labelStyle}>
            Select Event Date <span className="text-red-500 font-light">*</span>
          </label>
          <input
            type="date"
            name="selectDate"
            placeholder="Select Event Date"
            required
            className={inputStyle}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="typeOfEvent" className={labelStyle}>
            Which investment you are interested in?{" "}
            <span className="text-red-500 font-light">*</span>
          </label>
          <select
            name="typeOfEvent"
            required
            className={inputStyle}
            defaultValue=""
          >
            <option value="" disabled>
              —Please choose an option—
            </option>
            {PACKAGES_DATA.map((pkg, index) => (
              <option key={index} value={`${pkg.type}-${pkg.name}`}>
                {pkg.type} - {pkg.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className={labelStyle}>
            Message
          </label>
          <textarea
            name="message"
            className={inputStyle}
            placeholder="What would you like to tell / ask? "
            style={{ minHeight: "100px" }}
          ></textarea>
        </div>

        <button type="submit" className={buttonStyle}>
          Submit
        </button>


      </form>

      <script src="https://web3forms.com/client/script.js" async defer></script>
    </>
  );
}
