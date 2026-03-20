import { Home, Shield, CreditCard, FileText, LayoutGrid, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Protection", url: "/protection", icon: Shield },
  { title: "Plans", url: "/plans", icon: LayoutGrid },
  { title: "Payouts", url: "/payout", icon: CreditCard },
  { title: "Updates", url: "/updates", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-foreground text-base leading-tight">RakshaPay</h2>
              <p className="text-[10px] text-muted-foreground">Income Protection</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-1">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-primary/5 rounded-xl transition-colors py-2.5"
                      activeClassName="bg-primary/10 text-primary font-semibold"
                    >
                      <item.icon className="mr-3 h-[18px] w-[18px]" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!collapsed && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
              R
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Ravi Kumar</p>
              <p className="text-[11px] text-muted-foreground">Standard Plan</p>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
