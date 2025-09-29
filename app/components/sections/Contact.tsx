import React, { useState, useRef } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedButton from "../ui/AnimatedButton";
import FormField from "../ui/FormField";
import FormTextarea from "../ui/FormTextarea";
import StatusMessage from "../ui/StatusMessage";
// Импорт иконки Telegram
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const telegramLink = "https://t.me/Sinonan";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(
          "Message sent successfully! I will get in touch with you shortly."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-gray-900 font-sans">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide 
                     border-b-4 border-fuchsia-400"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
          <FormField
            label="Name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            delay={0.1}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            delay={0.2}
          />
          <FormTextarea
            label="Message"
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            delay={0.3}
          />
          <AnimatedButton type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </AnimatedButton>
          {status && <StatusMessage status={status} />}
        </form>

        <div className="mt-12 pt-6 border-t border-gray-700 flex justify-center">
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-400 transition-colors duration-300 flex items-center space-x-3 group"
          >
            <FaTelegramPlane className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-lg md:text-xl font-semibold opacity-80 group-hover:opacity-100">
              Contact on Telegram
            </span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
