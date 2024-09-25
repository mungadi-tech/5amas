import { Card } from "@nextui-org/react";
import { Checkbox, DataList, Dialog, IconButton } from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { DeleteInbox } from "../admin/DeleteInbox";

export const inbox_column: ColumnDef<DB["inbox"]["Row"]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created_at",
    header: "Date Created",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("created_at")).toUTCString()}
      </div>
    ),
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("full_name")}</div>
    ),
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => <div>{row.getValue("subject")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const params = row.original;

      return (
        <div className="flex gap-4">
          <Dialog.Root>
            <Dialog.Trigger>
              <IconButton variant="ghost" radius="full">
                <Eye />
              </IconButton>
            </Dialog.Trigger>
            <Dialog.Content>
              <Card>
                <DataList.Root>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Message</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.message}
                    </DataList.Value>
                  </DataList.Item>
                </DataList.Root>
              </Card>
            </Dialog.Content>
          </Dialog.Root>
          <DeleteInbox id={params.id} />
        </div>
      );
    },
  },
];
