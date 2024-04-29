import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHeader from "@/components/SectionHeader";
import { BsFillPeopleFill } from "react-icons/bs";

import Image from "next/image";

export default function Home() {
   return (
      <MaxWidthWrapper className="h-full my-auto">
         <div className="flex flex-col items-end border rounded-md shadow p-6">
            <SectionHeader title="مشخصات مسافران" icon={<BsFillPeopleFill size={30} />} />
         </div>
      </MaxWidthWrapper>
   );
}
