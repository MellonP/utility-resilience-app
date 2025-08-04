import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, MapPin, Clock } from "lucide-react";

interface CommunityPost {
  id: string;
  author: string;
  authorInitials: string;
  time: string;
  location: string;
  content: string;
  type: "update" | "question" | "resolved";
  likes: number;
  comments: number;
}

const CommunityFeed = () => {
  const posts: CommunityPost[] = [
    {
      id: "1",
      author: "Sipho M.",
      authorInitials: "SM",
      time: "5 min ago",
      location: "Themba Street",
      content: "Water is back on! Thank you to everyone who reported this issue. The municipality fixed it faster than expected.",
      type: "resolved",
      likes: 12,
      comments: 3
    },
    {
      id: "2",
      author: "Maria K.",
      authorInitials: "MK",
      time: "23 min ago",
      location: "Ward 5",
      content: "Anyone else experiencing low water pressure this morning? It started around 6 AM.",
      type: "question",
      likes: 5,
      comments: 8
    },
    {
      id: "3",
      author: "Community Admin",
      authorInitials: "CA",
      time: "1 hour ago",
      location: "Piet Retief",
      content: "📢 Official Update: Load shedding schedule has been updated. Stage 2 from 18:00-22:00 today. Please prepare accordingly.",
      type: "update",
      likes: 28,
      comments: 15
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "resolved":
        return "bg-operational text-operational-foreground";
      case "question":
        return "bg-electricity text-electricity-foreground";
      case "update":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "resolved":
        return "Resolved";
      case "question":
        return "Question";
      case "update":
        return "Official";
      default:
        return "Post";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-secondary" />
          Community Updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {post.authorInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{post.author}</span>
                    <Badge className={getTypeColor(post.type)} variant="secondary">
                      {getTypeLabel(post.type)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {post.location}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{post.content}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-2 border-t">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  {post.comments}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Community Posts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityFeed;