import { FieldApi } from "@tanstack/react-form";

export function FieldError({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="mt-1 text-sm text-red-400">{field.state.meta.errors}</p>
      ) : null}
    </>
  );
}
