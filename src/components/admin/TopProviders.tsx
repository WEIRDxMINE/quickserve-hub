import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

const providers = [
  {
    name: "CleanPro BD",
    service: "House Cleaning",
    bookings: 245,
    rating: 4.9,
    revenue: "৳125,000",
    trend: "+12%",
  },
  {
    name: "PowerTech Services",
    service: "Electrical",
    bookings: 198,
    rating: 4.8,
    revenue: "৳98,500",
    trend: "+8%",
  },
  {
    name: "Quick Fix Plumbing",
    service: "Plumbing",
    bookings: 176,
    rating: 4.7,
    revenue: "৳87,200",
    trend: "+15%",
  },
  {
    name: "CoolAir BD",
    service: "AC Repair",
    bookings: 154,
    rating: 4.9,
    revenue: "৳142,800",
    trend: "+22%",
  },
  {
    name: "HomeCare Plus",
    service: "Multi-Service",
    bookings: 142,
    rating: 4.6,
    revenue: "৳76,400",
    trend: "+5%",
  },
];

export function TopProviders() {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Top Providers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {providers.map((provider, index) => (
          <div 
            key={provider.name}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{provider.name}</p>
              <p className="text-sm text-muted-foreground">{provider.service}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{provider.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">{provider.bookings} bookings</p>
            </div>
            <div className="text-right min-w-[80px]">
              <p className="font-medium text-foreground">{provider.revenue}</p>
              <div className="flex items-center gap-1 justify-end text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">{provider.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
