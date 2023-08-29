import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  disabled,
  hidden,
}) => {
  return (
    <button
      hidden={hidden}
      disabled={disabled}
      onClick={onClick}
      className={
        (cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:sace-110 transition"
        ),
        className)
      }
    >
      {icon}
    </button>
  );
};

export default IconButton;
