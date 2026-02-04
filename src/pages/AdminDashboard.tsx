import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { RecentBookings } from "@/components/admin/RecentBookings";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { ServiceDistribution } from "@/components/admin/ServiceDistribution";
import { TopProviders } from "@/components/admin/TopProviders";
import { PendingApprovals } from "@/components/admin/PendingApprovals";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign,
  Bell,
  Search,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <main className="flex-1 overflow-auto">
          {/* Top Header */}
          <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border/50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10 w-64 bg-muted/50 border-0"
                  />
                </div>
                
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>
                
                <div className="flex items-center gap-2 pl-4 border-l border-border/50">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">A</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                title="Total Users"
                value="12,458"
                change="+12.5% from last month"
                changeType="positive"
                icon={Users}
              />
              <StatsCard
                title="Active Providers"
                value="847"
                change="+8.2% from last month"
                changeType="positive"
                icon={UserCheck}
                iconColor="bg-green-500"
              />
              <StatsCard
                title="Total Bookings"
                value="3,642"
                change="+23.1% from last month"
                changeType="positive"
                icon={Calendar}
                iconColor="bg-blue-500"
              />
              <StatsCard
                title="Revenue"
                value="৳8.2M"
                change="+18.7% from last month"
                changeType="positive"
                icon={DollarSign}
                iconColor="bg-secondary"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <ServiceDistribution />
            </div>

            {/* Recent Bookings */}
            <RecentBookings />

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TopProviders />
              <PendingApprovals />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
