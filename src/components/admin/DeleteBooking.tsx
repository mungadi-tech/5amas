import { IconButton } from "@radix-ui/themes";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import supabase from "../../supabase/supabase";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export function DeletePhysicalBooking({ id }: { id: number }) {
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  return (
    <IconButton
      loading={isLoading}
      color="red"
      variant="ghost"
      radius="full"
      onClick={async () => {
        setLoading(true);
        const { error } = await supabase
          .from("physical_booking")
          .delete()
          .eq("id", id);

        if (error?.message) {
          toast.error(error.message);
        } else {
          toast.success("booking deleted successfully");
        }
        setLoading(false);
        queryClient.invalidateQueries({ queryKey: ["physicalBooking"] });
      }}
    >
      <Trash2 />
    </IconButton>
  );
}

export function DeleteVirtualBooking({ id }: { id: number }) {
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  return (
    <IconButton
      loading={isLoading}
      color="red"
      variant="ghost"
      radius="full"
      onClick={async () => {
        setLoading(true);
        const { error } = await supabase
          .from("virtual_booking")
          .delete()
          .eq("id", id);

        if (error?.message) {
          toast.error(error.message);
        } else {
          toast.success("booking deleted successfully");
        }
        setLoading(false);
        queryClient.invalidateQueries({ queryKey: ["virtualBooking"] });
      }}
    >
      <Trash2 />
    </IconButton>
  );
}
