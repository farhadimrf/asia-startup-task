import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

const MaxWidthWrapper = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: ComponentProps<"div">["className"];
}) => {
   return (
      <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
         {children}
      </div>
   );
};

export default MaxWidthWrapper;
