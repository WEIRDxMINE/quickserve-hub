import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye } from "lucide-react";

const bookings = [
  {
    id: "BK-2024-001",
    customer: "Rahim Ahmed",
    service: "AC Repair",
    provider: "Karim Electronics",
    amount: "৳1,500",
    status: "completed",
    date: "Today, 2:30 PM",
  },
  {
    id: "BK-2024-002",
    customer: "Fatima Begum",
    service: "House Cleaning",
    provider: "CleanPro BD",
    amount: "৳800",
    status: "in-progress",
    date: "Today, 1:15 PM",
  },
  {
    id: "BK-2024-003",
    customer: "Arif Khan",
    service: "Plumbing",
    provider: "Quick Fix",
    amount: "৳600",
    status: "pending",
    date: "Today, 11:45 AM",
  },
  {
    id: "BK-2024-004",
    customer: "Nusrat Jahan",
    service: "Electrical Work",
    provider: "PowerTech",
    amount: "৳1,200",
    status: "completed",
    date: "Yesterday",
  },
  {
    id: "BK-2024-005",
    customer: "Hasan Ali",
    service: "Painting",
    provider: "ColorCraft",
    amount: "৳3,500",
    status: "cancelled",
    date: "Yesterday",
  },
];

const statusStyles = {
  completed: "bg-green-100 text-green-700 hover:bg-green-100",
  "in-progress": "bg-blue-100 text-blue-700 hover:bg-blue-100",
  pending: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  cancelled: "bg-red-100 text-red-700 hover:bg-red-100",
};

export function RecentBookings() {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">Recent Bookings</CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Booking ID</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Provider</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{booking.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{booking.customer}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{booking.service}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{booking.provider}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{booking.amount}</td>
                  <td className="py-4 px-6">
                    <Badge className={statusStyles[booking.status as keyof typeof statusStyles]}>
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
