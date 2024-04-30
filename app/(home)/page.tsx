"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHeader from "@/components/SectionHeader";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge, Button, Select, TextInput } from "@/components/ui";
import { Items } from "@/components/ui/inputs/select";
import { cn } from "@/utils/cn";

const schema = z.object({
   passengers: z
      .array(
         z.object({
            firstName: z.string().min(3).max(35),
            lastName: z.string().min(3).max(35),
            gender: z.union([z.enum(["male", "female"]), z.string().min(1)]),
            idNumber: z.string().min(11).max(11),
            birthYear: z.string().min(4).max(4),
            birthMonth: z.string().min(1).max(2),
            birthDay: z.string().min(1).max(2),
         })
      )
      .min(1),
});

type FormType = z.infer<typeof schema>;

const HomePage = () => {
   const { handleSubmit, control, reset, setValue } = useForm<FormType>({
      resolver: zodResolver(schema),
      mode: "onSubmit",
      defaultValues: {
         passengers: [
            {
               firstName: "",
               lastName: "",
               idNumber: "",
               gender: "",
               birthDay: "",
               birthMonth: "",
               birthYear: "",
            },
         ],
      },
   });

   const { fields, remove, append } = useFieldArray({
      control,
      name: "passengers",
   });

   const genderItems: Items[] = [
      { label: "جنسیت", value: "" },
      { label: "مرد", value: "male" },
      { label: "زن", value: "female" },
   ];
   const birthYearItems: Items[] = [
      { label: "سال", value: "" },
      { label: "۱۴۰۱", value: "1401" },
      { label: "۱۴۰۲", value: "1402" },
      { label: "۱۴۰۳", value: "1403" },
   ];
   const birthMonthItems: Items[] = [
      { label: "ماه", value: "" },
      { label: "فروردین", value: "1" },
      { label: "اردیبهشت", value: "2" },
      { label: "خرداد", value: "3" },
   ];
   const birthDayItems: Items[] = [
      { label: "روز", value: "" },
      { label: "۰۱", value: "1" },
      { label: "۰۲", value: "2" },
      { label: "۰۳", value: "3" },
      { label: "۰۴", value: "4" },
      { label: "۰۵", value: "5" },
      { label: "۰۶", value: "6" },
   ];
   const onSubmit: SubmitHandler<FormType> = (data) => {
      // Send data to back-end
      console.log("data", data);
      reset();
   };

   return (
      <MaxWidthWrapper className="h-full my-auto">
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-end border rounded-md shadow p-6 pb-0"
         >
            <SectionHeader title="مشخصات مسافران" icon={<BsFillPeopleFill size={30} />} />

            {fields.map((passenger, index) => (
               <div key={index} className="mt-10 w-full border-b pb-6">
                  <div className="flex w-full items-center justify-between">
                     <div className="flex items-center">
                        {index !== 0 && (
                           <>
                              <Button
                                 label="حذف"
                                 className="text-red-400 hover:outline-0 hover:bg-red-100"
                                 onClick={() => remove(index)}
                                 icon={<AiOutlineDelete size={20} />}
                              />
                              <div className="border-l-2 border-black/50 mx-1 h-9" />
                           </>
                        )}
                        <Button
                           label="انتخاب مسافران سابق"
                           icon={<FiUser size={20} />}
                           onClick={() =>
                              setValue(`passengers.${index}`, {
                                 firstName: "محمدرضا",
                                 lastName: "فرهادی",
                                 idNumber: "12345678913",
                                 gender: "male",
                                 birthYear: "1401",
                                 birthMonth: "1",
                                 birthDay: "1",
                              })
                           }
                        />
                     </div>
                     <Badge title="بزرگسال" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 mt-8 gap-6" dir="rtl">
                     <Controller
                        control={control}
                        name={`passengers.${index}.firstName`}
                        render={({ field, fieldState }) => (
                           <TextInput
                              {...field}
                              className="w-full"
                              placeholder="نام فارسی"
                              invalid={fieldState.invalid}
                           />
                        )}
                     />
                     <Controller
                        control={control}
                        name={`passengers.${index}.lastName`}
                        render={({ field, fieldState }) => (
                           <TextInput
                              {...field}
                              className="w-full"
                              placeholder="نام خانوادگی فارسی"
                              invalid={fieldState.invalid}
                           />
                        )}
                     />
                     <Controller
                        control={control}
                        name={`passengers.${index}.gender`}
                        render={({ field, fieldState }) => (
                           <Select {...field} items={genderItems} invalid={fieldState.invalid} />
                        )}
                     />
                     <Controller
                        control={control}
                        name={`passengers.${index}.idNumber`}
                        render={({ field, fieldState }) => (
                           <TextInput
                              {...field}
                              className="w-full"
                              type="number"
                              placeholder="کد ملی"
                              invalid={fieldState.invalid}
                           />
                        )}
                     />

                     <div className="w-full flex rounded-md lg:col-span-2" dir="ltr">
                        <Controller
                           control={control}
                           name={`passengers.${index}.birthYear`}
                           render={({ field, fieldState }) => (
                              <Select
                                 dir="rtl"
                                 {...field}
                                 items={birthYearItems}
                                 className={cn(
                                    "rounded-none border-r-0 rounded-l-md",
                                    fieldState.invalid && "border-red-400"
                                 )}
                                 invalid={fieldState.invalid}
                              />
                           )}
                        />
                        <Controller
                           control={control}
                           name={`passengers.${index}.birthMonth`}
                           render={({ field, fieldState }) => (
                              <Select
                                 dir="rtl"
                                 {...field}
                                 items={birthMonthItems}
                                 className={cn(
                                    "rounded-none",
                                    fieldState.invalid && "border-red-400"
                                 )}
                                 invalid={fieldState.invalid}
                              />
                           )}
                        />

                        <Controller
                           control={control}
                           name={`passengers.${index}.birthDay`}
                           render={({ field, fieldState }) => (
                              <Select
                                 dir="rtl"
                                 {...field}
                                 items={birthDayItems}
                                 className={cn(
                                    "rounded-none border-l-0 rounded-r-md",
                                    fieldState.invalid && "border-red-400"
                                 )}
                                 invalid={fieldState.invalid}
                              />
                           )}
                        />
                     </div>
                  </div>
               </div>
            ))}
            <Button
               label="اضافه کردن مسافر جدید"
               className=" outline outline-1 my-6 py-2"
               icon={<GoPlus size={20} />}
               onClick={() =>
                  append({
                     firstName: "",
                     lastName: "",
                     idNumber: "",
                     gender: "",
                     birthYear: "",
                     birthMonth: "",
                     birthDay: "",
                  })
               }
            />
            <div className="w-full flex justify-center border-t">
               <Button
                  type="submit"
                  label="ثبت اطلاعات"
                  className="my-4 border-2 px-3 py-2 border-green-300 text-green-600 hover:outline-0 hover:bg-green-100"
               />
            </div>
         </form>
      </MaxWidthWrapper>
   );
};

export default HomePage;
