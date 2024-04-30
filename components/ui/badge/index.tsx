import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

const Badge = ({
   title,
   className,
}: {
   title: string;
   className?: ComponentProps<"span">["className"];
}) => {
   return (
      <span className={cn("rounded-2xl border border-black/20 text-black/70 px-3 py-1", className)}>
         {title}
      </span>
   );
};

export default Badge;
