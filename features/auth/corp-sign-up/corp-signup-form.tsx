"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/share/ui/button";
import { Calendar } from "@/share/ui/calendar";
import { Form, FormField, FormItem, FormLabel } from "@/share/ui/form";

import { Popover, PopoverContent, PopoverTrigger } from "@/share/ui/popover";

import { formSchema } from "@/features/auth/corp-sign-up/formSchema";
import { cn, formatDate } from "@/share/lib/utils";

import { CorpUserInfo } from "@/features/auth/model/auth";
import { useSignUp } from "@/features/auth/hooks/useSignup";
import { CalendarIcon } from "lucide-react";

import AlertSignUp from "@/components/alert-signup";
import CustomGroupRadio from "@/share/atom-components/custom-group-Radio";
import CustomInput from "@/share/atom-components/custom-input";
import useAlert from "@/hooks/useAlert";

export default function CorpSignUpForm() {
  const mutation = useSignUp();
  const isOpen = useAlert((state) => state.isOpen);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loginId: "",
      password: "",
      name: "",
      gender: "MAN",
      email: "",
      ceoName: "",
      companyName: "",
      businessId: "",
      companyCertificateNumber: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = form.handleSubmit(async (data: CorpUserInfo) => {
    console.log(data);
    let formattedBirthDate = formatDate(data.birthDate);
    const { birthDate, ...restData } = data;
    const formattedData = {
      ...restData,
      birthDate: formattedBirthDate,
    };
    console.log("corperate sign up data :", formattedData);
    mutation.mutate(formattedData);
  });

  return (
    <Form {...form}>
      {isOpen && <AlertSignUp content="회원가입" />}
      <form onSubmit={onSubmit} className="space-y-2">
        <CustomInput
          name="loginId"
          form={form}
          label="ID"
          placeholder={"Please enter id....!"}
        />
        <CustomInput
          name="password"
          form={form}
          label="Password"
          placeholder={"Please enter password....!"}
          type={"password"}
        />
        <CustomInput
          name="name"
          form={form}
          label="대표자 성함"
          placeholder={"성함을 입력해주세요!"}
        />

        <div className="flex justify-between">
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
                        "w-[200px] justify-start text-left font-normal",
                        !field && "text-muted-foreground"
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
              </FormItem>
            )}
          />
        </div>
        <CustomInput
          name="ceoName"
          form={form}
          label="사업자대표 성함"
          placeholder={"Please enter name....!"}
        />
        <CustomInput
          name="companyName"
          form={form}
          label="회사이름"
          placeholder={"Please enter name....!"}
        />
        <CustomInput
          name="businessId"
          form={form}
          label="사업자 번호"
          placeholder={"Please enter number....!"}
        />
        <CustomInput
          name="companyCertificateNumber"
          form={form}
          label="기업 인증"
          placeholder={"0000-000-0000-000"}
        />

        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
    </Form>
  );
}
