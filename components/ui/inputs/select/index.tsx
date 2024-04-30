import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef, LegacyRef } from "react";

export type Items = {
   value: string;
   label: string;
};

type SelectOptionItems = {
   items: Items[];
};

const Select = forwardRef(
   (
      {
         className,
         items,
         invalid,
         ...rest
      }: ComponentProps<"select"> & SelectOptionItems & { invalid: boolean },
      ref: LegacyRef<HTMLSelectElement>
   ) => {
      return (
         <select
            ref={ref}
            {...rest}
            className={cn(
               "w-full text-right outline-none text-base border-[1px] border-black/30 rounded-md py-2.5 px-3 ",
               invalid ? "border-red-400" : "",
               className
            )}
         >
            {items?.map((item) => (
               <option key={item.value} className="text-base" value={item.value}>
                  {item.label}
               </option>
            ))}
         </select>
      );
   }
);
Select.displayName = "Select";

export default Select;
