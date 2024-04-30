import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef, LegacyRef } from "react";

const TextInput = forwardRef(
   (
      {
         className,
         placeholder,
         type = "text",
         invalid,
         ...rest
      }: ComponentProps<"input"> & { invalid: boolean },
      ref: LegacyRef<HTMLInputElement>
   ) => {
      return (
         <input
            ref={ref}
            {...rest}
            type={type}
            placeholder={placeholder}
            className={cn(
               "appearance-none outline-none text-right placeholder:text-lg border-[1px] border-black/30 py-2.5 px-3 rounded-md focus:border-black/70 transition-all",
               invalid ? "border-red-400 focus:border-red-400" : "",
               className
            )}
         />
      );
   }
);
TextInput.displayName = "TextInput";

export default TextInput;
