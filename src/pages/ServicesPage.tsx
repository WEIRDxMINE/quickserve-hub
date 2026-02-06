import { useState } from "react";
import { Search, Filter, Star, Clock, MapPin, ChevronRight, Sparkles, Zap, Droplets, Wrench, Paintbrush, Truck, Shield, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", name: "All", icon: Sparkles },
  { id: "cleaning", name: "Cleaning", icon: Sparkles },
  { id: "electrical", name: "Electrical", icon: Zap },
  { id: "plumbing", name: "Plumbing", icon: Droplets },
  { id: "repairs", name: "Repairs", icon: Wrench },
  { id: "painting", name: "Painting", icon: Paintbrush },
  { id: "moving", name: "Moving", icon: Truck },
];

const services = [
  {
    id: 1,
    name: "Deep Home Cleaning",
    category: "cleaning",
    provider: "CleanPro Services",
    rating: 4.9,
    reviews: 234,
    price: 1499,
    priceUnit: "per session",
    duration: "3-4 hours",
    distance: "2.5 km",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    featured: true,
    discount: 20,
  },
  {
    id: 2,
    name: "AC Repair & Service",
    category: "electrical",
    provider: "CoolTech Solutions",
    rating: 4.8,
    reviews: 189,
    price: 599,
    priceUnit: "inspection",
    duration: "1-2 hours",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 3,
    name: "Plumbing Repairs",
    category: "plumbing",
    provider: "QuickFix Plumbers",
    rating: 4.7,
    reviews: 156,
    price: 399,
    priceUnit: "per visit",
    duration: "1-3 hours",
    distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    featured: true,
    discount: 15,
  },
  {
    id: 4,
    name: "Electrical Wiring",
    category: "electrical",
    provider: "SafeWire Electricals",
    rating: 4.9,
    reviews: 312,
    price: 799,
    priceUnit: "per point",
    duration: "2-4 hours",
    distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 5,
    name: "Interior Painting",
    category: "painting",
    provider: "ColorCraft Painters",
    rating: 4.6,
    reviews: 98,
    price: 25,
    priceUnit: "per sq.ft",
    duration: "1-2 days",
    distance: "5.0 km",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 6,
    name: "Furniture Assembly",
    category: "repairs",
    provider: "HandyMan Pro",
    rating: 4.8,
    reviews: 167,
    price: 499,
    priceUnit: "per item",
    duration: "1-2 hours",
    distance: "2.0 km",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    featured: true,
    discount: 10,
  },
];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="text-primary-foreground/80 text-sm">Find trusted professionals near you</p>
          </div>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search services or providers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background text-foreground border-0 h-12 rounded-xl"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4 border-b bg-card">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-full whitespace-nowrap ${
                  isActive ? "" : "bg-background"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="px-4 py-4">
        <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 overflow-hidden">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="text-primary-foreground">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Verified Professionals</span>
              </div>
              <p className="text-primary-foreground/90 text-xs">All providers are background verified</p>
            </div>
            <Button variant="secondary" size="sm" className="rounded-full">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sort & Filter Tabs */}
      <div className="px-4 pb-2">
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="w-full bg-muted/50">
            <TabsTrigger value="popular" className="flex-1 text-xs">Popular</TabsTrigger>
            <TabsTrigger value="rating" className="flex-1 text-xs">Top Rated</TabsTrigger>
            <TabsTrigger value="price" className="flex-1 text-xs">Price: Low</TabsTrigger>
            <TabsTrigger value="nearby" className="flex-1 text-xs">Nearby</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Services List */}
      <div className="px-4 py-2 space-y-4">
        {filteredServices.map((service) => (
          <Card key={service.id} className="overflow-hidden border-0 shadow-md">
            <div className="flex">
              {/* Service Image */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                {service.discount && (
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs">
                    {service.discount}% OFF
                  </Badge>
                )}
                {service.featured && !service.discount && (
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Service Details */}
              <CardContent className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground line-clamp-1">{service.name}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{service.provider}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-lg font-bold text-foreground">₹{service.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">{service.priceUnit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{service.distance}</span>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Book Now Strip */}
            <div className="px-3 pb-3">
              <Button className="w-full rounded-lg h-10" size="sm">
                Book Now
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Results Count */}
      <div className="px-4 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Showing {filteredServices.length} of {services.length} services
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-6 py-3">
        <div className="flex items-center justify-around">
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Sparkles className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Search className="h-5 w-5 text-primary" />
            <span className="text-xs text-primary font-medium">Services</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Bookings</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Heart className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Saved</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
