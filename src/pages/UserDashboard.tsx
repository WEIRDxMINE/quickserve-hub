import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Bell,
  Search,
  Plus,
  ChevronRight,
  Home,
  Zap,
  Wrench,
  Sparkles,
  MessageSquare,
  Phone,
  Heart,
  Settings,
  LogOut,
  CreditCard,
  Gift,
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingBookings = [
    {
      id: 1,
      service: "AC Repair & Servicing",
      provider: "Rahman Electronics",
      providerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      date: "Today",
      time: "2:00 PM - 4:00 PM",
      status: "confirmed",
      price: "৳1,500",
    },
    {
      id: 2,
      service: "Deep House Cleaning",
      provider: "CleanPro Services",
      providerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      date: "Tomorrow",
      time: "10:00 AM - 1:00 PM",
      status: "pending",
      price: "৳2,500",
    },
  ];

  const recentServices = [
    { id: 1, service: "Plumbing Repair", date: "Jan 28", rating: 5, price: "৳800" },
    { id: 2, service: "Electrical Wiring", date: "Jan 20", rating: 4, price: "৳1,200" },
    { id: 3, service: "Appliance Repair", date: "Jan 15", rating: 5, price: "৳600" },
  ];

  const quickServices = [
    { icon: Sparkles, label: "Cleaning", color: "bg-blue-500/10 text-blue-500" },
    { icon: Zap, label: "Electrical", color: "bg-amber-500/10 text-amber-500" },
    { icon: Wrench, label: "Plumbing", color: "bg-cyan-500/10 text-cyan-500" },
    { icon: Home, label: "Repair", color: "bg-emerald-500/10 text-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">Good afternoon</p>
              <h1 className="font-semibold text-foreground">Arif Rahman</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6 pb-24">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Loyalty Card */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                <span className="font-medium">Loyalty Points</span>
              </div>
              <Badge className="bg-white/20 text-primary-foreground border-0">Gold</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold">2,450</span>
                <span className="text-primary-foreground/70 text-sm mb-1">points</span>
              </div>
              <Progress value={65} className="h-2 bg-white/20" />
              <p className="text-xs text-primary-foreground/70">550 more points to Platinum</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Services */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Quick Services</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              View All <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {quickServices.map((service, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className={`p-3 rounded-xl ${service.color}`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-foreground">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Upcoming Bookings</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              See All <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Avatar className="h-12 w-12 rounded-xl">
                      <AvatarImage src={booking.providerImage} />
                      <AvatarFallback>{booking.provider[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-medium text-foreground truncate">{booking.service}</h3>
                          <p className="text-sm text-muted-foreground">{booking.provider}</p>
                        </div>
                        <Badge
                          variant={booking.status === "confirmed" ? "default" : "secondary"}
                          className="shrink-0"
                        >
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {booking.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {booking.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-semibold text-primary">{booking.price}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="h-8 px-3">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 px-3">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Services */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Recent Services</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              History <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <Card className="border-border">
            <CardContent className="p-0 divide-y divide-border">
              {recentServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between p-4">
                  <div>
                    <h4 className="font-medium text-foreground">{service.service}</h4>
                    <p className="text-xs text-muted-foreground">{service.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {[...Array(service.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{service.price}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border">
        <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Bookings</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground relative">
            <div className="absolute -top-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
              <Plus className="h-5 w-5" />
            </div>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <Heart className="h-5 w-5" />
            <span className="text-xs">Saved</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserDashboard;
