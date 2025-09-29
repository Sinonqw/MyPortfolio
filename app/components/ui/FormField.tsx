import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  delay = 0.1,
}) => (
  <motion.div
    initial={{ x: type === "email" ? 50 : -50, opacity: 0 }}
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
    <input
      type={type}
      name={name}
      id={name}
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-950 text-white border border-cyan-500/50 rounded-xl 
                 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-inner"
    />
  </motion.div>
);

export default FormField;
