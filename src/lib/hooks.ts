import { useQuery } from "@tanstack/react-query";
import supabase from "../supabase/supabase";

export const useUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ["loggedUser"],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getSession();
      const user = data.session?.user;
      return { user, error };
    },
  });
  return { data, isPending };
};

export const usePhysicalBooking = () => {
  const { data, isPending } = useQuery({
    queryKey: ["physicalBooking"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("physical_booking")
        .select("*");
      return { data, error };
    },
  });
  return { data, isPending };
};

export const useVirtualBooking = () => {
  const { data, isPending } = useQuery({
    queryKey: ["virtualBooking"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("virtual_booking")
        .select("*");
      return { data, error };
    },
  });
  return { data, isPending };
};
export const useInbox = () => {
  const { data, isPending } = useQuery({
    queryKey: ["inbox"],
    queryFn: async () => {
      const { data, error } = await supabase.from("inbox").select("*");
      return { data, error };
    },
  });
  return { data, isPending };
};
