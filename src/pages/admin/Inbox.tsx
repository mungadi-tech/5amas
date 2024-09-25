import { Card } from "@radix-ui/themes";
import { DataTable } from "../../components/DataTable";
import { Spinner } from "@nextui-org/react";
import { useInbox } from "../../lib/hooks";
import { useMemo } from "react";
import { inbox_column } from "../../components/columns/inbox-column";

export default function Inbox() {
  const { data, isPending } = useInbox();
  const inbox_data = useMemo(() => data?.data, [data?.data]) ?? [];
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>

      <Card>
        {isPending ? (
          <Spinner />
        ) : (
          <DataTable
            columns={inbox_column}
            data={inbox_data}
            filterLabel="Search by name...."
            filterer="full_name"
          />
        )}
      </Card>
    </main>
  );
}
