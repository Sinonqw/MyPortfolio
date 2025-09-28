import { motion } from "framer-motion";

// Используем тип ComponentProps<typeof motion.button> для корректной типизации пропсов
import type { ComponentProps } from "react";

interface AnimatedButtonProps extends ComponentProps<typeof motion.button> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({
  children,
  className,
  ...props
}: AnimatedButtonProps) => (
  <motion.button
    // Эффект неонового свечения (Fuchsia Glow) и масштабирование при наведении
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 15px rgba(217, 70, 239, 0.7)", // Плавное фиолетовое свечение
    }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-8 py-3 rounded-xl 
      font-extrabold tracking-wider text-lg 
      transition-all duration-300 shadow-lg 
      
      /* Неоновые акценты */
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

export default AnimatedButton;
