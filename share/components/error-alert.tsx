import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AxiosError } from "axios";

interface ErrorAlertProps {
  error: Error | AxiosError;
}

export default function ErrorAlert({ error }: any) {
  console.log(error);
  return (
    <div className="max-w-80 mt-16">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    </div>
  );
}
