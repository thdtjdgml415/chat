"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./formSchema";
import { useLogin } from "@/hooks/useLogin";
import { User } from "@/entities/auth/auth";

import Link from "next/link";

export default function LoginForm() {
  const mutation = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = form.handleSubmit(async (data: User) => {
    mutation.mutate({ id: data.id, password: data.password });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="Please enter id....!" {...field} />
                {/* <Input placeholder="Please enter Password....!" {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Please enter password....!"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ul className="flex justify-center">
          <li className="go-signup">
            <Link href={"/sign-up"}>아이디 찾기</Link>
          </li>
          <li className="go-signup">
            <Link href={"/sign-up"}>비밀번호 찾기</Link>
          </li>
          <li className="go-signup">
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </ul>

        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? "로그인 중..." : "로그인"}
        </Button>
      </form>
    </Form>
  );
}
