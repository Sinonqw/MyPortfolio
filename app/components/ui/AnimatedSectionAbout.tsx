import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Интерфейс для AnimatedSection
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  // Параметр для кастомизации задержки анимации
  delay?: number; 
}

/**
 * Переиспользуемая обертка для секций, обеспечивающая анимацию при скролле.
 * Использует framer-motion и хук useInView.
 * @param children - Содержимое секции.
 * @param id - HTML ID для навигации.
 * @param className - Дополнительные Tailwind классы.
 * @param delay - Задержка начала анимации.
 */
const AnimatedSectionAbout: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
  delay = 0,
}) => {
  const ref = useRef(null);
  // Анимация срабатывает один раз, когда элемент появляется в зоне видимости (30% элемента видно)
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut", 
        delay: delay 
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      // Анимируем, только если элемент виден
      animate={isInView ? "visible" : "hidden"} 
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSectionAbout;
