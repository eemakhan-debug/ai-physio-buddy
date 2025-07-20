import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Activity } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface Exercise {
  name: string;
  description: string;
  repetitions: string;
  duration: string;
}

const exerciseDatabase: Record<string, Exercise[]> = {
  shoulder: [
    {
      name: "Shoulder Circles",
      description: "Gentle circular movements to improve shoulder mobility",
      repetitions: "10-15 circles each direction",
      duration: "2-3 minutes"
    },
    {
      name: "Wall Push-Ups",
      description: "Stand arm's length from wall, push against it",
      repetitions: "10-15 repetitions",
      duration: "3 sets"
    },
    {
      name: "Arm Raises",
      description: "Slowly raise arms to shoulder height",
      repetitions: "10-12 repetitions",
      duration: "2-3 sets"
    }
  ],
  back: [
    {
      name: "Cat-Cow Stretch",
      description: "On hands and knees, arch and round your back",
      repetitions: "10-15 repetitions",
      duration: "5 minutes"
    },
    {
      name: "Knee-to-Chest",
      description: "Lying down, pull knees toward chest",
      repetitions: "Hold for 30 seconds each",
      duration: "3 repetitions"
    },
    {
      name: "Pelvic Tilts",
      description: "Lying on back, gently tilt pelvis",
      repetitions: "10-15 repetitions",
      duration: "2-3 sets"
    }
  ],
  knee: [
    {
      name: "Quad Sets",
      description: "Tighten thigh muscle while sitting",
      repetitions: "Hold for 5 seconds, 10 repetitions",
      duration: "3 sets"
    },
    {
      name: "Straight Leg Raises",
      description: "Lying down, lift straight leg",
      repetitions: "10-15 repetitions",
      duration: "2-3 sets"
    },
    {
      name: "Heel Slides",
      description: "Slide heel toward buttocks while lying down",
      repetitions: "10-15 repetitions",
      duration: "2-3 sets"
    }
  ]
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hello! I'm your AI Physiotherapy Assistant. Please describe your symptoms or area of concern, and I'll suggest appropriate exercises for you.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const analyzeSymptoms = (input: string): Exercise[] => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("shoulder") || lowerInput.includes("arm")) {
      return exerciseDatabase.shoulder;
    } else if (lowerInput.includes("back") || lowerInput.includes("spine")) {
      return exerciseDatabase.back;
    } else if (lowerInput.includes("knee") || lowerInput.includes("leg")) {
      return exerciseDatabase.knee;
    } else {
      return [
        {
          name: "General Mobility",
          description: "Basic stretching and movement routine",
          repetitions: "As comfortable",
          duration: "5-10 minutes daily"
        }
      ];
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const exercises = analyzeSymptoms(input);
      const exerciseText = exercises.map(ex => 
        `**${ex.name}**: ${ex.description} (${ex.repetitions}, ${ex.duration})`
      ).join("\n\n");

      const botMessage: Message = {
        type: "bot",
        content: `Based on your symptoms, I recommend these physiotherapy exercises:\n\n${exerciseText}\n\n**Important**: Please consult with a qualified physiotherapist before starting any exercise program. These are general recommendations only.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          AI Physiotherapy Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {message.type === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  
                  <div
                    className={`rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe your symptoms (e.g., 'I have shoulder pain when lifting my arm')"
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;