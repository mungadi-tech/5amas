import { Button, Flex, Text } from "@radix-ui/themes";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import {
  Building,
  Calendar,
  Mail,
  MailCheck,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import supabase from "../supabase/supabase";
import { FieldError } from "./FieldError";

const locations = ["Abuja", "Lagos"];
const plan_type = ["Abuja", "Lagos"];

export function PhysicalBooking({
  onOpenChange,
}: {
  onOpenChange: () => void;
}) {
  const form = useForm({
    defaultValues: {
      location: "",
      full_name: "",
      plan_type: "",
      message: "",
      date: "",
      number_of_attendants: 1,
      phone: "",
      email: "",
      company_name: "",
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      const { error } = await supabase.from("physical_booking").insert(value);
      if (error?.message) {
        toast.error(error.message);
      } else {
        onOpenChange();
        toast.success(
          "Booking successfull, our agent will get back to you as soon as possible"
        );
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-2"
    >
      <form.Field
        name="full_name"
        validators={{ onBlur: z.string({ message: "required" }) }}
      >
        {(field) => (
          <div>
            <Text
              size={"1"}
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium"
            >
              Full Name
            </Text>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <FieldError field={field} />
          </div>
        )}
      </form.Field>
      <div className="grid grid-cols-2 gap-2">
        <form.Field
          name="date"
          validators={{ onBlur: z.string({ message: "required" }) }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Date
              </Text>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <input
                  type="datetime-local"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
        <form.Field
          name="number_of_attendants"
          validators={{ onBlur: z.number() }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                No. of attendees
              </Text>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <input
                  type="number"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <form.Field
          name="email"
          validators={{
            onBlur: z.string().email({ message: "invalid email" }),
          }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Email
              </Text>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <input
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
        <form.Field
          name="phone"
          validators={{
            onBlur: z
              .string()
              .min(11, { message: "must be 11 chars" })
              .max(11, { message: "must be 11 chars" }),
          }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Phone
              </Text>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <form.Field
          name="location"
          validators={{ onBlur: z.string().min(3, { message: "required" }) }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Location
              </Text>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name="plan_type"
          validators={{ onBlur: z.string().min(3, { message: "required" }) }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Plan Type
              </Text>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Select a plan</option>
                  {plan_type.map((plan, index) => (
                    <option key={index} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>
      <form.Field
        name="company_name"
        validators={{
          onBlur: z.string().min(3, { message: "required" }),
        }}
      >
        {(field) => (
          <div>
            <Text
              size={"1"}
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium"
            >
              Company
            </Text>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <FieldError field={field} />
          </div>
        )}
      </form.Field>
      <form.Field
        name="message"
        validators={{ onBlur: z.string({ message: "required" }) }}
      >
        {(field) => (
          <div>
            <Text
              size={"1"}
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium"
            >
              Message
            </Text>
            <div className="relative">
              <MailCheck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
              <textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full rounded-md border border-purple-600 bg-purple-900 bg-opacity-50 py-2 pl-10 pr-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <FieldError field={field} />
          </div>
        )}
      </form.Field>
      <Flex justify={"end"} mt={"4"}>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              size={"4"}
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting || !canSubmit}
            >
              Book Now
            </Button>
          )}
        </form.Subscribe>
      </Flex>
    </form>
  );
}
