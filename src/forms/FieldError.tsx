import { FieldApi } from "@tanstack/react-form";

export function FieldError({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <div className="text-xs text-red-500">
          {field.state.meta.errors.join(", ")}
        </div>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
