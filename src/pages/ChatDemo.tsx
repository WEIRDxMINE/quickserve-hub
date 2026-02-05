import { ChatConversation } from "@/components/chat/ChatConversation";

const ChatDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 px-4">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">Message Conversation</h1>
        <p className="text-muted-foreground text-sm">User & Provider Chat Interface</p>
      </div>
      <ChatConversation />
    </div>
  );
};

export default ChatDemo;
