import { CircleUser, Home, Menu, Package2, ShoppingCart } from "lucide-react";

import { Button, DropdownMenu, IconButton } from "@radix-ui/themes";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { useUser } from "../../lib/hooks";
import { cn } from "../../lib/utils";
import supabase from "../../supabase/supabase";
import { toast } from "sonner";

const links = [
  {
    route: "/admin",
    icon: Home,
    label: "Inbox",
  },
  {
    route: "/admin/physical_bookings/",
    icon: ShoppingCart,
    label: "Physical Bookings",
  },
  {
    route: "/admin/virtual_bookings/",
    icon: ShoppingCart,
    label: "Virtual Bookings",
  },
];

export function Dashboard() {
  const loc = useLocation();
  const navigate = useNavigate();

  const { data, isPending } = useUser();

  useEffect(() => {
    if (!data?.user && !isPending) {
      navigate("/login");
    }
  }, [navigate, isPending, data]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">5Amas Group</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {links.map((l) => (
                <Link
                  to={l.route}
                  className={cn(
                    "flex items-center  gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    loc.pathname === l.route && "bg-muted"
                  )}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex md:justify-end justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Button variant="outline" size="2" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col md:hidden">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {links.map((l) => (
                  <Link
                    to={l.route}
                    className={cn(
                      "flex items-center  gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      loc.pathname === l.route && "bg-muted"
                    )}
                  >
                    <l.icon className="h-4 w-4" />
                    {l.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton size="3" radius="full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Item>{data?.user?.email}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                color="red"
                onClick={async () => {
                  const { error } = await supabase.auth.signOut();
                  if (error?.message) {
                    toast.error(error.message);
                  } else {
                    navigate("/");
                  }
                }}
              >
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
