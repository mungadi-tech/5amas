import { Text } from "@radix-ui/themes";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, User } from "lucide-react";
import { z } from "zod";
import { FieldError } from "./FieldError";

const locations = ["Abuja", "Lagos"];
const plan_type = ["Abuja", "Lagos"];

export function VirtualBooking() {
  const form = useForm({
    defaultValues: {
      location: "",
      name: "",
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
      console.log(value);
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
        name="name"
        validators={{ onBlur: z.string({ message: "required" }) }}
      >
        {(field) => (
          <div>
            <Text
              size={"1"}
              htmlFor="date"
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
                htmlFor="date"
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field
          name="number_of_attendants"
          validators={{ onBlur: z.string({ message: "required" }) }}
        >
          {(field) => (
            <div>
              <Text
                size={"1"}
                htmlFor="date"
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
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
                htmlFor="date"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </Text>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
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
                htmlFor="date"
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
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
                htmlFor="location"
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
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
                htmlFor="location"
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
              {field.state.meta.isTouched && field.state.meta.errors.length && (
                <p className="mt-1 text-sm text-red-400">
                  {field.state.meta.errors}
                </p>
              )}
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
              htmlFor="date"
              className="mb-2 block text-sm font-medium"
            >
              Company
            </Text>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
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
            {field.state.meta.isTouched && field.state.meta.errors.length && (
              <p className="mt-1 text-sm text-red-400">
                {field.state.meta.errors}
              </p>
            )}
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
              htmlFor="date"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </Text>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-300" />
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
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <motion.button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-red-500 to-purple-500 py-2 px-4 font-semibold text-white transition-all hover:from-red-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-purple-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting || !canSubmit}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="mr-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Booking...
              </span>
            ) : (
              "Book Now"
            )}
          </motion.button>
        )}
      </form.Subscribe>
    </form>
  );
}
