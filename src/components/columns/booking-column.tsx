import { Card } from "@nextui-org/react";
import { Checkbox, DataList, Dialog, IconButton } from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import {
  DeletePhysicalBooking,
  DeleteVirtualBooking,
} from "../admin/DeleteBooking";

export const physical_booking_column: ColumnDef<
  DB["physical_booking"]["Row"]
>[] = [
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
    accessorKey: "company_name",
    header: "Company",
    cell: ({ row }) => <div>{row.getValue("company_name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },

  {
    accessorKey: "plan_type",
    header: "Plan",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("plan_type")}</div>
    ),
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
                  <DataList.Item align="center">
                    <DataList.Label minWidth="88px">
                      Request Date
                    </DataList.Label>
                    <DataList.Value className="text-red-500">
                      {new Date(row.getValue("created_at")).toUTCString()}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item align="center">
                    <DataList.Label minWidth="88px">Full Name</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.full_name}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Company</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.company_name}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Location</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.location}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Phone</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.phone}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Email</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.email}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Plan</DataList.Label>
                    <DataList.Value className="text-red-500">
                      {params.plan_type}
                    </DataList.Value>
                  </DataList.Item>
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
          <DeletePhysicalBooking id={params.id} />
        </div>
      );
    },
  },
];

export const virtual_booking_column: ColumnDef<DB["virtual_booking"]["Row"]>[] =
  [
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
      accessorKey: "company_name",
      header: "Company",
      cell: ({ row }) => <div>{row.getValue("company_name")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },

    {
      accessorKey: "vitual_plan_type",
      header: "Plan",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("vitual_plan_type")}</div>
      ),
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
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">
                        Request Date
                      </DataList.Label>
                      <DataList.Value className="text-red-500">
                        {new Date(row.getValue("created_at")).toUTCString()}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">Full Name</DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.full_name}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Company</DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.company_name}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Location</DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.location}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Phone</DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.phone}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Email</DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.email}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">
                        Virtual Plan Type
                      </DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.virtual_plan_type}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">
                        Virtual Type
                      </DataList.Label>
                      <DataList.Value className="text-red-500">
                        {params.virtual_type}
                      </DataList.Value>
                    </DataList.Item>
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
            <DeleteVirtualBooking id={params.id} />
          </div>
        );
      },
    },
  ];
