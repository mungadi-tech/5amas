import {
  Box,
  Button,
  Callout,
  Card,
  Dialog,
  Flex,
  Spinner,
  TextField,
} from "@radix-ui/themes";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import logo from "../../assets/logo_main.png";
import { SignIn } from "../../components/admin/SignIn";
import { FieldError } from "../../forms/FieldError";
import { useUser } from "../../lib/hooks";
import supabase from "../../supabase/supabase";

export default function Login() {
  const { data, isPending } = useUser();
  const [open, onOpenChange] = useState(false);
  const form = useForm({
    validatorAdapter: zodValidator(),
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      const { error, data } = await supabase.auth.resetPasswordForEmail(
        value.email,
        {
          redirectTo: `${window.location.href}reset_password`,
        }
      );
      if (error && !data) {
        toast.error(error.message);
      } else {
        toast.success(
          "A confirmation has been sent to your email, open your mail to continue"
        );
        form.reset();
        onOpenChange(false);
      }
    },
  });

  return (
    <section className="flex flex-col justify-between h-dvh w-full">
      <div className="flex flex-col mt-48">
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/3 md:mx-auto px-10">
          <Card className="shadow-md">
            <img src={logo} className="size-24 mx-auto" />

            {isPending ? (
              <Spinner />
            ) : data?.user ? (
              <Flex
                justify={"center"}
                align={"center"}
                pb={"9"}
                direction={"column"}
                gap={"4"}
              >
                <Callout.Root>
                  <Callout.Text>
                    You are already logged in, click the button bellow
                  </Callout.Text>
                </Callout.Root>
                <Link to="/admin">
                  <Button loading={isPending} size={"4"}>
                    Go to dashboard
                  </Button>
                </Link>
              </Flex>
            ) : (
              <div className="p-10">
                <SignIn />
                <Flex justify={"end"} my={"4"}>
                  <Dialog.Root onOpenChange={onOpenChange} open={open}>
                    <Dialog.Trigger>
                      <Button variant="soft" disabled>
                        Forgot Password
                      </Button>
                    </Dialog.Trigger>

                    <Dialog.Content>
                      <Dialog.Title>Send Confirmation Mail</Dialog.Title>
                      <Dialog.Description size="2" mb="4">
                        Fill the form with your email and wait for a
                        confirmation in your mailbox
                      </Dialog.Description>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          form.handleSubmit();
                        }}
                      >
                        <form.Field
                          name="email"
                          validators={{
                            onChange: z.string().email(),
                          }}
                        >
                          {(field) => (
                            <Box>
                              <TextField.Root
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                                size="3"
                                placeholder="email"
                              >
                                <TextField.Slot>
                                  <Mail />
                                </TextField.Slot>
                                <TextField.Slot>
                                  <Mail height="14" width="14" />
                                </TextField.Slot>
                              </TextField.Root>
                              <FieldError field={field} />
                            </Box>
                          )}
                        </form.Field>
                        <Flex justify={"end"} mt={"4"}>
                          <form.Subscribe
                            selector={(state) => [
                              state.canSubmit,
                              state.isSubmitting,
                            ]}
                            children={([canSubmit, isSubmitting]) => (
                              <Button
                                size={"4"}
                                type="submit"
                                disabled={!canSubmit}
                                loading={isSubmitting}
                              >
                                Send Confirmation Mail
                              </Button>
                            )}
                          />
                        </Flex>
                      </form>
                    </Dialog.Content>
                  </Dialog.Root>
                </Flex>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
