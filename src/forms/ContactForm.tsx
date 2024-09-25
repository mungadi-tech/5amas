import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { ArrowRight } from "lucide-react";
import supabase from "../supabase/supabase";
import { toast } from "sonner";
import { z } from "zod";
import { FieldError } from "./FieldError";
import { useQueryClient } from "@tanstack/react-query";

export function ContactForm() {
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      full_name: "",
      subject: "",
      message: "",
      email: "",
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      const { error } = await supabase.from("inbox").insert(value);
      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.success("Message sent successfull");
        queryClient.invalidateQueries({ queryKey: ["inbox"] });
      }
      form.reset();
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="full_name"
        validators={{
          onBlur: z.string().min(3, {
            message: "required, must be atleast more than 3 characters",
          }),
        }}
      >
        {(field) => (
          <div className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm font-medium"
            >
              Full Name*
            </label>
            <TextField.Root
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              size={"3"}
              id={field.name}
              name={field.name}
              required
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onBlur: z.string().email({
            message: "Invalid email",
          }),
        }}
      >
        {(field) => (
          <div className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm font-medium"
            >
              Email*
            </label>
            <TextField.Root
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              size={"3"}
              id={field.name}
              name={field.name}
              required
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>
      <form.Field
        name="subject"
        validators={{
          onBlur: z.string().min(3, {
            message: "required, must be atleast more than 3 characters",
          }),
        }}
      >
        {(field) => (
          <div className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm font-medium"
            >
              Subject*
            </label>
            <TextField.Root
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              size={"3"}
              id={field.name}
              name={field.name}
              required
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      <form.Field
        name="message"
        validators={{
          onBlur: z.string().min(3, {
            message: "required, must be atleast more than 3 characters",
          }),
        }}
      >
        {(field) => (
          <div className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm font-medium"
            >
              Message*
            </label>
            <TextArea
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              size={"3"}
              id={field.name}
              name={field.name}
              required
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            size={"4"}
            type="submit"
            disabled={!canSubmit}
            loading={isSubmitting}
          >
            Send Message
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
