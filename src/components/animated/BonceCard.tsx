import { ReactNode } from "react";
import { motion } from "framer-motion";

export const BounceCard = ({
  className,
  children,
}: {
  className: string;

  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};
