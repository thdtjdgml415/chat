"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/share/ui/button";
import { Calendar } from "@/share/ui/calendar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/share/ui/form";

import { Popover, PopoverContent, PopoverTrigger } from "@/share/ui/popover";

import { cn, formatDate } from "@/share/lib/utils";

import { CalendarIcon } from "lucide-react";

import CustomGroupRadio from "@/share/atom-components/custom-group-Radio";
import CustomInput from "@/share/atom-components/custom-input";

import useToggle from "@/hooks/useToggle";
import { formSchema } from "./formSchema";

export default function UserInfoForm() {
  const [isModify, setToggle] = useToggle();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "남",
      email: "",
    },
  });

  //   useEffect(() => {
  //     // 데이터를 가져와 폼의 기본값 설정
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("/api/user"); // 데이터를 가져올 API 엔드포인트
  //         const data = response.data;

  //         // 데이터로 폼의 기본값 설정
  //         form.reset({
  //           name: data.name,
  //           email: data.email,
  //         });
  //       } catch (error) {
  //         console.error("Failed to fetch data", error);
  //       }
  //     };

  //     fetchData();
  //   }, [form]);

  // const onSubmit = form.handleSubmit(async (data: SettingInfo) => {});

  return (
    <Form {...form}>
      {isModify === true ? (
        <form className="space-y-4">
          <CustomInput
            name="name"
            form={form}
            label="이름"
            placeholder={"이름"}
          />
          <CustomGroupRadio name="gender" label="성별" form={form} />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>생일</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field && "text-muted-foreground text-black"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        formatDate(field.value)
                      ) : (
                        <span>yyyy-mm-dd</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <CustomInput
            name="email"
            form={form}
            label="이메일"
            placeholder={"Please enter email....!"}
          />
          <div className="flex">
            <div className="w-20 h-10 mr-5">
              <Button
                onClick={setToggle}
                className={cn(buttonVariants({ variant: "destructive" }))}
              >
                취소
              </Button>
            </div>

            <div className="w-20 h-10">
              <Button type="submit" className="">
                수정완료
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <form className="space-y-4">
          <p>성별 : 남 </p>
          <p>생일 : 0000-00-00</p>
          <p>이메일 : thdtjdgml415@gamil.com</p>
          <div className="w-20 h-10">
            <Button onClick={setToggle}>수정</Button>
          </div>
        </form>
      )}
    </Form>
  );
}
