import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Bell,
  TrendingUp,
  Wallet,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Navigation,
  MessageSquare,
  Phone,
  Home,
  Briefcase,
  BarChart3,
  User,
  ChevronRight,
  DollarSign,
  Target,
  Award,
  Zap,
} from "lucide-react";

const ProviderDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const todayStats = {
    earnings: "৳4,500",
    jobs: 3,
    rating: 4.9,
    completion: 98,
  };

  const weeklyGoal = {
    current: 18500,
    target: 25000,
    percentage: 74,
  };

  const pendingJobs = [
    {
      id: 1,
      service: "AC Installation",
      customer: "Fatima Begum",
      customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      location: "Dhanmondi, Dhaka",
      distance: "2.3 km",
      time: "30 min",
      price: "৳2,500",
      urgency: "normal",
    },
    {
      id: 2,
      service: "Emergency Repair",
      customer: "Karim Ahmed",
      customerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      location: "Gulshan, Dhaka",
      distance: "4.1 km",
      time: "45 min",
      price: "৳1,800",
      urgency: "urgent",
    },
  ];

  const todaySchedule = [
    { id: 1, time: "10:00 AM", service: "AC Servicing", customer: "Rahim Khan", status: "completed" },
    { id: 2, time: "1:00 PM", service: "Refrigerator Repair", customer: "Nusrat Jahan", status: "completed" },
    { id: 3, time: "4:00 PM", service: "AC Installation", customer: "Kabir Hossain", status: "in-progress" },
    { id: 4, time: "6:30 PM", service: "Fan Repair", customer: "Salma Akter", status: "upcoming" },
  ];

  const recentReviews = [
    { id: 1, customer: "Rahim Khan", rating: 5, comment: "Excellent service! Very professional.", date: "2 hours ago" },
    { id: 2, customer: "Nusrat Jahan", rating: 5, comment: "Quick and efficient. Highly recommend!", date: "5 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-11 w-11 ring-2 ring-emerald-500/50">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-emerald-500 border-2 border-background rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-semibold text-foreground">Md. Rahman</h1>
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-0 text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Pro
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Electronics Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </Button>
            </div>
          </div>

          {/* Online Toggle */}
          <div className="flex items-center justify-between mt-4 p-3 bg-muted/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isOnline ? "bg-emerald-500/10" : "bg-muted"}`}>
                <Zap className={`h-5 w-5 ${isOnline ? "text-emerald-500" : "text-muted-foreground"}`} />
              </div>
              <div>
                <p className="font-medium text-foreground">{isOnline ? "You're Online" : "You're Offline"}</p>
                <p className="text-xs text-muted-foreground">
                  {isOnline ? "Accepting new jobs" : "Not receiving jobs"}
                </p>
              </div>
            </div>
            <Switch checked={isOnline} onCheckedChange={setIsOnline} />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6 pb-24">
        {/* Today's Stats */}
        <div className="grid grid-cols-4 gap-3">
          <Card className="border-border">
            <CardContent className="p-3 text-center">
              <DollarSign className="h-5 w-5 mx-auto text-emerald-500 mb-1" />
              <p className="text-lg font-bold text-foreground">{todayStats.earnings}</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 text-center">
              <Briefcase className="h-5 w-5 mx-auto text-blue-500 mb-1" />
              <p className="text-lg font-bold text-foreground">{todayStats.jobs}</p>
              <p className="text-xs text-muted-foreground">Jobs</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 text-center">
              <Star className="h-5 w-5 mx-auto text-amber-500 mb-1" />
              <p className="text-lg font-bold text-foreground">{todayStats.rating}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 text-center">
              <Target className="h-5 w-5 mx-auto text-purple-500 mb-1" />
              <p className="text-lg font-bold text-foreground">{todayStats.completion}%</p>
              <p className="text-xs text-muted-foreground">Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Goal */}
        <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Weekly Goal</span>
              </div>
              <span className="text-sm text-primary font-semibold">{weeklyGoal.percentage}%</span>
            </div>
            <Progress value={weeklyGoal.percentage} className="h-3 mb-2" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">৳{weeklyGoal.current.toLocaleString()}</span>
              <span className="text-foreground font-medium">৳{weeklyGoal.target.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* New Job Requests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">New Job Requests</h2>
            <Badge variant="secondary">{pendingJobs.length} pending</Badge>
          </div>
          <div className="space-y-3">
            {pendingJobs.map((job) => (
              <Card
                key={job.id}
                className={`border-border ${job.urgency === "urgent" ? "border-l-4 border-l-destructive" : ""}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={job.customerImage} />
                        <AvatarFallback>{job.customer[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-foreground">{job.service}</h3>
                        <p className="text-sm text-muted-foreground">{job.customer}</p>
                      </div>
                    </div>
                    {job.urgency === "urgent" && (
                      <Badge variant="destructive" className="text-xs">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Navigation className="h-3 w-3" />
                      {job.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{job.price}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-destructive border-destructive/30">
                        <XCircle className="h-4 w-4 mr-1" />
                        Decline
                      </Button>
                      <Button size="sm">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Today's Schedule</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              Full Calendar <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <Card className="border-border">
            <CardContent className="p-0 divide-y divide-border">
              {todaySchedule.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <div className="text-center min-w-[60px]">
                    <p className="text-sm font-medium text-foreground">{item.time}</p>
                  </div>
                  <div
                    className={`w-1 h-12 rounded-full ${
                      item.status === "completed"
                        ? "bg-emerald-500"
                        : item.status === "in-progress"
                        ? "bg-amber-500"
                        : "bg-muted"
                    }`}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{item.service}</h4>
                    <p className="text-sm text-muted-foreground">{item.customer}</p>
                  </div>
                  <Badge
                    variant={
                      item.status === "completed"
                        ? "default"
                        : item.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                    className={
                      item.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-600 border-0"
                        : item.status === "in-progress"
                        ? "bg-amber-500/10 text-amber-600 border-0"
                        : ""
                    }
                  >
                    {item.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {item.status.replace("-", " ")}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Reviews */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Recent Reviews</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs">
              All Reviews <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentReviews.map((review) => (
              <Card key={review.id} className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{review.customer}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <Briefcase className="h-5 w-5" />
            <span className="text-xs">Jobs</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <Wallet className="h-5 w-5" />
            <span className="text-xs">Earnings</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ProviderDashboard;
