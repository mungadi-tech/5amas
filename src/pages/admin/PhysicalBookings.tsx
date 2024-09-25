import { Card, Spinner } from "@radix-ui/themes";
import { DataTable } from "../../components/DataTable";
import { useMemo } from "react";
import { physical_booking_column } from "../../components/columns/booking-column";
import { usePhysicalBooking } from "../../lib/hooks";

export default function PhysicalBookings() {
  const { data, isPending } = usePhysicalBooking();
  const booking_data: DB["physical_booking"]["Row"][] =
    useMemo(() => data?.data, [data?.data]) ?? [];
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Physical Bookings</h1>
      </div>
      <Card>
        {isPending ? (
          <Spinner />
        ) : (
          <DataTable
            columns={physical_booking_column}
            data={booking_data}
            filterLabel="Search by name...."
            filterer="full_name"
          />
        )}
      </Card>
    </main>
  );
}
