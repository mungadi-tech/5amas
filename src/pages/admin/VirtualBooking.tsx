import { useMemo } from "react";
import { useVirtualBooking } from "../../lib/hooks";
import { Card, Spinner } from "@radix-ui/themes";
import { DataTable } from "../../components/DataTable";
import { virtual_booking_column } from "../../components/columns/booking-column";

export default function VirtualBookings() {
  const { data, isPending } = useVirtualBooking();
  const booking_data: DB["virtual_booking"]["Row"][] =
    useMemo(() => data?.data, [data?.data]) ?? [];
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Virtual Bookings</h1>
      </div>
      <Card>
        {isPending ? (
          <Spinner />
        ) : (
          <DataTable
            columns={virtual_booking_column}
            data={booking_data}
            filterLabel="Search by name...."
            filterer="full_name"
          />
        )}
      </Card>
    </main>
  );
}
