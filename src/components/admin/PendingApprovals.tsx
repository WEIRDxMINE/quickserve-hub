import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye, Clock } from "lucide-react";

const pendingProviders = [
  {
    id: 1,
    name: "Mohammad Rafiq",
    service: "Electrician",
    location: "Mirpur, Dhaka",
    experience: "5 years",
    submittedAt: "2 hours ago",
    documents: ["NID", "Certificate"],
  },
  {
    id: 2,
    name: "Salma Akhter",
    service: "House Cleaning",
    location: "Gulshan, Dhaka",
    experience: "3 years",
    submittedAt: "5 hours ago",
    documents: ["NID"],
  },
  {
    id: 3,
    name: "Jahangir Alam",
    service: "Plumber",
    location: "Uttara, Dhaka",
    experience: "8 years",
    submittedAt: "1 day ago",
    documents: ["NID", "Certificate", "Reference"],
  },
];

export function PendingApprovals() {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-semibold">Pending Approvals</CardTitle>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
            {pendingProviders.length} new
          </Badge>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingProviders.map((provider) => (
          <div 
            key={provider.id}
            className="p-4 rounded-xl border border-border/50 bg-card hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {provider.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{provider.name}</p>
                  <p className="text-sm text-muted-foreground">{provider.service}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs">{provider.submittedAt}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div>
                <span className="text-muted-foreground">Location:</span>
                <span className="ml-1 text-foreground">{provider.location}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Experience:</span>
                <span className="ml-1 text-foreground">{provider.experience}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {provider.documents.map((doc) => (
                  <Badge key={doc} variant="outline" className="text-xs">
                    {doc}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Eye className="h-3.5 w-3.5 mr-1" />
                  Review
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50">
                  <X className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-8 w-8 bg-green-600 hover:bg-green-700">
                  <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
