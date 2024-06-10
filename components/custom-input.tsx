import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  name: string;
  form: any;
  label: string;
  placeholder: string;
  type?: string;
}

export default function CustomInput({
  name,
  form,
  label,
  placeholder,
  type,
}: CustomInputProps) {
  return (
    <FormField
      control={form.control}
      name={`${name}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
