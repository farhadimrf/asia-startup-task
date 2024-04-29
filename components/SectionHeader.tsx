import { cn } from "@/utils/cn";

type SectionHeaderProps = {
   title: string;
   icon?: React.ReactNode;
};

const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
   return (
      <div
         className={cn(
            "relative flex items-center justify-end gap-3 text-xl lg:text-2xl text-black/70",
            "after:absolute after:content-[''] after:h-12 after:border-[2.5px] after:rounded-l-[4px] after:-right-6 after:border-black/70"
         )}
      >
         <h3>{title}</h3>
         <span>{icon}</span>
      </div>
   );
};

export default SectionHeader;
