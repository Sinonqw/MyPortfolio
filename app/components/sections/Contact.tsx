import React, { useState, useRef } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedButton from "../ui/AnimatedButton";
import FormField from "../ui/FormField";
import FormTextarea from "../ui/FormTextarea";
import StatusMessage from "../ui/StatusMessage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending message...");

    setTimeout(() => {
      console.log("Form data:", formData);
      setIsLoading(false);
      setStatus("Message sent successfully! I will get in touch with you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
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
      </div>
    </AnimatedSection>
  );
};

export default Contact;
