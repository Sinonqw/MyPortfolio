import { motion } from "framer-motion";

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  delay?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  delay = 0.3,
}) => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <label
      htmlFor={name}
      className="block text-sm font-medium text-cyan-400 mb-1"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows={4}
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-950 text-white border border-cyan-500/50 rounded-xl 
                 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-inner"
    />
  </motion.div>
);

export default FormTextarea;
