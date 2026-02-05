import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Video, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Image, 
  Mic, 
  Check, 
  CheckCheck,
  ArrowLeft,
  MapPin,
  Clock,
  Shield
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "provider";
  timestamp: string;
  status: "sent" | "delivered" | "read";
  type: "text" | "image" | "location";
  imageUrl?: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm on my way to your location. Should arrive in about 15 minutes.",
    sender: "provider",
    timestamp: "10:30 AM",
    status: "read",
    type: "text"
  },
  {
    id: "2",
    content: "Great! I'll be waiting. The gate code is 4521.",
    sender: "user",
    timestamp: "10:32 AM",
    status: "read",
    type: "text"
  },
  {
    id: "3",
    content: "Thank you! I've noted that down. Is there parking available nearby?",
    sender: "provider",
    timestamp: "10:33 AM",
    status: "read",
    type: "text"
  },
  {
    id: "4",
    content: "Yes, you can park in the visitor's area on the left side of the building.",
    sender: "user",
    timestamp: "10:35 AM",
    status: "read",
    type: "text"
  },
  {
    id: "5",
    content: "Perfect! I'm almost there now.",
    sender: "provider",
    timestamp: "10:45 AM",
    status: "read",
    type: "text"
  },
  {
    id: "6",
    content: "I've arrived at the location. Coming up now!",
    sender: "provider",
    timestamp: "10:52 AM",
    status: "delivered",
    type: "text"
  }
];

const providerInfo = {
  name: "Mohammad Rahman",
  role: "AC Repair Specialist",
  avatar: "/placeholder.svg",
  rating: 4.9,
  isOnline: true,
  isVerified: true
};

const bookingInfo = {
  service: "AC Repair & Servicing",
  date: "Today",
  time: "11:00 AM - 12:00 PM",
  status: "In Progress"
};

export function ChatConversation() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent",
      type: "text"
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
  };

  const MessageStatus = ({ status }: { status: string }) => {
    if (status === "read") return <CheckCheck className="h-3.5 w-3.5 text-primary" />;
    if (status === "delivered") return <CheckCheck className="h-3.5 w-3.5 text-muted-foreground" />;
    return <Check className="h-3.5 w-3.5 text-muted-foreground" />;
  };

  return (
    <div className="flex flex-col h-[700px] max-w-md mx-auto bg-background border border-border rounded-2xl overflow-hidden shadow-xl">
      {/* Chat Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Avatar className="h-11 w-11 border-2 border-primary/20">
                <AvatarImage src={providerInfo.avatar} alt={providerInfo.name} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {providerInfo.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            {providerInfo.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border-2 border-card" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{providerInfo.name}</h3>
                {providerInfo.isVerified && (
                  <Shield className="h-4 w-4 text-primary fill-primary/20" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{providerInfo.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Booking Info Banner */}
        <div className="mt-3 p-3 bg-primary/5 rounded-xl border border-primary/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{bookingInfo.service}</p>
                <p className="text-xs text-muted-foreground">{bookingInfo.date} • {bookingInfo.time}</p>
              </div>
            </div>
            <Badge className="bg-accent/20 text-accent-foreground border-0">
              {bookingInfo.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 bg-muted/30">
        <div className="space-y-4">
          {/* Date Separator */}
          <div className="flex items-center justify-center">
            <span className="px-3 py-1 text-xs text-muted-foreground bg-muted rounded-full">
              Today
            </span>
          </div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
                    : "bg-card text-card-foreground rounded-2xl rounded-bl-md border border-border"
                } px-4 py-2.5 shadow-sm`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <div className={`flex items-center justify-end gap-1 mt-1 ${
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  <span className="text-[10px]">{message.timestamp}</span>
                  {message.sender === "user" && <MessageStatus status={message.status} />}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          <div className="flex justify-start">
            <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 bg-card border-t border-border">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground shrink-0">
            <Image className="h-5 w-5" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="pr-10 rounded-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            size="icon" 
            className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 shrink-0"
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-3">
          <Button variant="outline" size="sm" className="rounded-full text-xs h-7">
            <MapPin className="h-3 w-3 mr-1" />
            Share Location
          </Button>
          <Button variant="outline" size="sm" className="rounded-full text-xs h-7">
            I'm on my way
          </Button>
          <Button variant="outline" size="sm" className="rounded-full text-xs h-7">
            Running late
          </Button>
        </div>
      </div>
    </div>
  );
}
