"use client";

import { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactComp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "contact@example.com",
    message: "Your message here...",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="
         min-h-screen rounded-xl border-border-light dark:border dark:border-white/10
    bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200
    dark:bg-black/40 dark:bg-none backdrop-blur-md
    p-8 flex items-center justify-center
      "
    >
      <div
        className="
  bg-gradient-primary wave-grid flex flex-col 
  2xl:flex-row lg:items-center 
  p-4 sm:p-8 lg:p-12 gap-8 lg:gap-12 
  justify-between w-full max-w-5xl
"
      >
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12 flex-1">
          <h1 className="font-bold text-3xl 2xl:text-5xl text-primary dark:text-neutral-900">
            Bringing your ideas to life.
            <br />
            Let's turn your vision into reality
          </h1>
          <p className="text-lg 2xl:text-xl text-gray-600 dark:text-neutral-0 mt-2">
            Have a project in mind or just want to chat? Let's connect!
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="
    w-full max-w-lg sm:max-w-md 
    bg-neutral-0 dark:bg-bg-dark  
    p-4 sm:p-6 
    dark:border-border border-border-light border rounded-lg shadow-xl z-50 backdrop-blur-xl flex-1
  "
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                className="inline-flex hover:bg-light-accent dark:hover:bg-dark-accent hover:text-light-accent-foreground dark:hover:text-dark-accent-forgrand items-center cursor-pointer text-dark-from dark:text-neutral-0 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-light dark:border-border hover:bg-accent hover:text-accent-foreground h-10 w-20 m bg-gradient-gray"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
