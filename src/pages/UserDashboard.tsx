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
  User,
  ShieldCheck,
  Bookmark,
  HelpCircle,
  TrendingUp,
  Award,
} from "lucide-react";

const UserDashboard = () => {
  const [activeNav, setActiveNav] = useState("dashboard");

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
      location: "Dhanmondi, Dhaka",
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
      location: "Gulshan, Dhaka",
    },
    {
      id: 3,
      service: "Electrical Wiring Fix",
      provider: "PowerTech Solutions",
      providerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "Feb 10",
      time: "11:00 AM - 12:30 PM",
      status: "confirmed",
      price: "৳1,800",
      location: "Banani, Dhaka",
    },
  ];

  const recentServices = [
    { id: 1, service: "Plumbing Repair", provider: "AquaFix", date: "Jan 28", rating: 5, price: "৳800" },
    { id: 2, service: "Electrical Wiring", provider: "BrightSpark", date: "Jan 20", rating: 4, price: "৳1,200" },
    { id: 3, service: "Appliance Repair", provider: "FixIt Pro", date: "Jan 15", rating: 5, price: "৳600" },
    { id: 4, service: "Painting Service", provider: "ColorCraft", date: "Jan 10", rating: 4, price: "৳3,500" },
  ];

  const quickServices = [
    { icon: Sparkles, label: "Cleaning", color: "bg-blue-500/10 text-blue-500", count: "120+ providers" },
    { icon: Zap, label: "Electrical", color: "bg-amber-500/10 text-amber-500", count: "85+ providers" },
    { icon: Wrench, label: "Plumbing", color: "bg-cyan-500/10 text-cyan-500", count: "95+ providers" },
    { icon: Home, label: "Renovation", color: "bg-emerald-500/10 text-emerald-500", count: "60+ providers" },
    { icon: ShieldCheck, label: "Security", color: "bg-red-500/10 text-red-500", count: "40+ providers" },
    { icon: CreditCard, label: "Appliance", color: "bg-purple-500/10 text-purple-500", count: "110+ providers" },
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", key: "dashboard" },
    { icon: Calendar, label: "My Bookings", key: "bookings" },
    { icon: MessageSquare, label: "Messages", key: "messages", badge: 3 },
    { icon: Heart, label: "Saved Services", key: "saved" },
    { icon: CreditCard, label: "Payments", key: "payments" },
    { icon: Gift, label: "Rewards", key: "rewards" },
    { icon: User, label: "My Profile", key: "profile" },
    { icon: Settings, label: "Settings", key: "settings" },
    { icon: HelpCircle, label: "Help & Support", key: "help" },
  ];

  const stats = [
    { label: "Total Bookings", value: "24", icon: Calendar, trend: "+3 this month" },
    { label: "Money Saved", value: "৳4,200", icon: TrendingUp, trend: "From discounts" },
    { label: "Loyalty Points", value: "2,450", icon: Award, trend: "Gold member" },
    { label: "Pending", value: "2", icon: Clock, trend: "Awaiting confirmation" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-card border-r border-border flex-col fixed h-full z-40">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-foreground">Arif Rahman</h2>
              <p className="text-xs text-muted-foreground">Gold Member</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                activeNav === item.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="h-5 w-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile avatar */}
              <Avatar className="h-9 w-9 ring-2 ring-primary/20 lg:hidden">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">Good afternoon 👋</p>
                <h1 className="text-lg lg:text-xl font-bold text-foreground">Welcome back, Arif!</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:block relative w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search services, providers..."
                  className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8 space-y-6 pb-24 lg:pb-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-4 lg:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  <p className="text-xs text-primary mt-0.5">{stat.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Grid - Loyalty + Quick Services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Loyalty Card */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    <span className="font-medium">Loyalty Points</span>
                  </div>
                  <Badge className="bg-white/20 text-primary-foreground border-0">Gold</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">2,450</span>
                    <span className="text-primary-foreground/70 text-sm mb-1">points</span>
                  </div>
                  <Progress value={65} className="h-2 bg-white/20" />
                  <p className="text-sm text-primary-foreground/70">550 more points to reach Platinum status</p>
                </div>
                <Button className="mt-4 bg-white/20 hover:bg-white/30 text-primary-foreground border-0 w-full">
                  Redeem Points
                </Button>
              </CardContent>
            </Card>

            {/* Quick Services */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Quick Services</h2>
                <Button variant="ghost" size="sm" className="text-primary text-xs">
                  View All <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {quickServices.map((service, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-left"
                  >
                    <div className={`p-3 rounded-xl ${service.color} shrink-0`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground block">{service.label}</span>
                      <span className="text-xs text-muted-foreground">{service.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bookings + Recent in 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Upcoming Bookings */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Upcoming Bookings</h2>
                <Button variant="ghost" size="sm" className="text-primary text-xs">
                  See All <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id} className="border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-4 lg:p-5">
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 rounded-xl shrink-0">
                          <AvatarImage src={booking.providerImage} />
                          <AvatarFallback>{booking.provider[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-medium text-foreground">{booking.service}</h3>
                              <p className="text-sm text-muted-foreground">{booking.provider}</p>
                            </div>
                            <Badge
                              variant={booking.status === "confirmed" ? "default" : "secondary"}
                              className="shrink-0"
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {booking.location}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-semibold text-primary">{booking.price}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                                <MessageSquare className="h-3.5 w-3.5 mr-1" /> Chat
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                                <Phone className="h-3.5 w-3.5 mr-1" /> Call
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
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Recent Services</h2>
                <Button variant="ghost" size="sm" className="text-primary text-xs">
                  History <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <Card className="border-border">
                <CardContent className="p-0 divide-y divide-border">
                  {recentServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{service.service}</h4>
                        <p className="text-xs text-muted-foreground">{service.provider} · {service.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-0.5">
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

              {/* Quick Actions */}
              <Card className="mt-4 border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-sm h-9">
                    <Plus className="h-4 w-4 mr-2" /> Book New Service
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm h-9">
                    <Bookmark className="h-4 w-4 mr-2" /> View Saved Services
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm h-9">
                    <HelpCircle className="h-4 w-4 mr-2" /> Get Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border lg:hidden z-40">
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
