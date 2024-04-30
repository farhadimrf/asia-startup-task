import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

const Button = ({
   label,
   icon,
   className,
   type = "button",
   ...rest
}: ComponentProps<"button"> & { label: string; icon?: React.ReactNode }) => {
   return (
      <button
         type={type}
         className={cn(
            "flex items-center gap-1 hover:outline px-2 py-1 rounded-md hover:bg-[#F2F9FF] hover:outline-[#C9E3F8] transition text-[#0077DB]",
            className
         )}
         {...rest}
      >
         <p>{label}</p>
         <span>{icon}</span>
      </button>
   );
};

export default Button;
