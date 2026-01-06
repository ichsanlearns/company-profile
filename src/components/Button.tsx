import { Link } from "react-router";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "amber" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const variantClasses = {
  primary:
    "bg-white text-amber-800 hover:bg-amber-50 border-transparent shadow-lg",
  secondary:
    "bg-transparent border-2 border-white text-white hover:bg-white/10",
  amber: "bg-amber-600 text-white hover:bg-amber-700 border-transparent",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-50 border-transparent",
  danger: "bg-red-600 text-white hover:bg-red-700 border-transparent",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "amber",
  size = "md",
  fullWidth = false,
  to,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "rounded-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500";
  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${fullWidth ? "w-full" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
