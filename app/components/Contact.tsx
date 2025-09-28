import React, { useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// --- Mockup Components (Required for standalone component) ---

// Мок-компонент AnimatedSection (для демонстрации анимации при прокрутке)
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

// Мок-компонент AnimatedButton (Стили как в предыдущем файле)
interface AnimatedButtonProps
  extends React.ComponentPropsWithoutRef<typeof motion.button> {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const AnimatedButton = ({
  children,
  className,
  type = "button",
  disabled = false,
  ...props
}: AnimatedButtonProps) => (
  <motion.button
    type={type}
    disabled={disabled}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 15px rgba(217, 70, 239, 0.7)",
    }}
    whileTap={{ scale: 0.95 }}
    className={`
        px-8 py-3 rounded-xl 
        font-extrabold tracking-wider text-lg 
        transition-all duration-300 shadow-lg 
        bg-fuchsia-600 text-white border-2 border-fuchsia-500
        hover:bg-fuchsia-700 hover:shadow-fuchsia-500/50 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    {...props}
  >
    {children}
  </motion.button>
);

// --- Основной компонент Contact ---

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending message...");
    // Здесь должна быть логика отправки данных на сервер (API)

    // Имитация задержки отправки
    setTimeout(() => {
      console.log("Form data:", formData);
      setIsLoading(false);
      setStatus(
        "Message sent successfully! I will get in touch with you shortly."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <AnimatedSection id="contact" className="bg-gray-900 font-sans">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок: Neon Accent (Fuchsia) */}
        <h2
          className="text-5xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide 
                     border-b-4 border-fuchsia-400"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
          {/* Name Field */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-cyan-400 drop-shadow-[0_0_1px_rgba(47,219,255,0.5)] mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-950 text-white border border-cyan-500/50 rounded-xl 
                         focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-inner shadow-gray-900/50"
              placeholder="Your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-cyan-400 drop-shadow-[0_0_1px_rgba(47,219,255,0.5)] mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-950 text-white border border-cyan-500/50 rounded-xl 
                         focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-inner shadow-gray-900/50"
              placeholder="email@example.com"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-cyan-400 drop-shadow-[0_0_1px_rgba(47,219,255,0.5)] mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-950 text-white border border-cyan-500/50 rounded-xl 
                         focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-inner shadow-gray-900/50"
              placeholder="Enter your message..."
            ></textarea>
          </motion.div>

          <div className="pt-4">
            {/* Используем AnimatedButton без переопределения стилей, чтобы получить неоновый вид */}
            <AnimatedButton
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </AnimatedButton>
          </div>

          {status && (
            <motion.p
              className={`text-center py-3 px-4 rounded-xl font-medium tracking-wide border border-current 
                ${
                  status.includes("successfully")
                    ? "text-green-400 border-green-700 bg-green-900/50"
                    : "text-yellow-400 border-yellow-700 bg-yellow-900/50"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </AnimatedSection>
  );
};
export default Contact;
