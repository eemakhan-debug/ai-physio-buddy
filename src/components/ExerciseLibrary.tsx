import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, RotateCcw, Target, AlertCircle } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  category: string;
  description: string;
  instructions: string[];
  repetitions: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bodyParts: string[];
}

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Shoulder Pendulum Swings",
    category: "Shoulder",
    description: "Gentle passive movement to reduce shoulder stiffness and improve circulation.",
    instructions: [
      "Stand and lean forward slightly, supporting yourself with your good arm",
      "Let the affected arm hang loose",
      "Gently swing the arm in small circles",
      "Start clockwise, then counterclockwise",
      "Keep movements small and gentle"
    ],
    repetitions: "10-15 circles each direction",
    duration: "2-3 minutes",
    difficulty: "Beginner",
    bodyParts: ["Shoulder", "Upper Arm"]
  },
  {
    id: "2",
    name: "Wall Angels",
    category: "Back",
    description: "Improves posture and strengthens upper back muscles.",
    instructions: [
      "Stand with your back against a wall",
      "Place arms against the wall in a 'W' position",
      "Slowly slide arms up to form a 'Y' shape",
      "Keep arms and back in contact with wall",
      "Return to starting position slowly"
    ],
    repetitions: "10-15 repetitions",
    duration: "3 sets",
    difficulty: "Intermediate",
    bodyParts: ["Upper Back", "Shoulders", "Neck"]
  },
  {
    id: "3",
    name: "Calf Raises",
    category: "Lower Leg",
    description: "Strengthens calf muscles and improves ankle stability.",
    instructions: [
      "Stand with feet hip-width apart",
      "Hold onto a wall or chair for support if needed",
      "Rise up onto your toes slowly",
      "Hold for 2-3 seconds at the top",
      "Lower down slowly with control"
    ],
    repetitions: "15-20 repetitions",
    duration: "2-3 sets",
    difficulty: "Beginner",
    bodyParts: ["Calves", "Ankles"]
  },
  {
    id: "4",
    name: "Bird Dog",
    category: "Core",
    description: "Improves core stability and coordination.",
    instructions: [
      "Start on hands and knees in tabletop position",
      "Keep your spine neutral and core engaged",
      "Extend opposite arm and leg simultaneously",
      "Hold for 5-10 seconds",
      "Return to start and switch sides"
    ],
    repetitions: "8-10 per side",
    duration: "2-3 sets",
    difficulty: "Intermediate",
    bodyParts: ["Core", "Lower Back", "Glutes"]
  },
  {
    id: "5",
    name: "Ankle Pumps",
    category: "Ankle",
    description: "Improves circulation and ankle mobility.",
    instructions: [
      "Sit or lie down comfortably",
      "Lift one foot slightly off the ground",
      "Point your toes away from you",
      "Flex your foot, pulling toes toward shin",
      "Repeat in a smooth pumping motion"
    ],
    repetitions: "20-30 pumps",
    duration: "Each foot, 2-3 times daily",
    difficulty: "Beginner",
    bodyParts: ["Ankles", "Calves"]
  },
  {
    id: "6",
    name: "Neck Rolls",
    category: "Neck",
    description: "Relieves neck tension and improves mobility.",
    instructions: [
      "Sit or stand with good posture",
      "Drop your chin toward your chest",
      "Slowly roll your head to the right",
      "Continue the circle backward and to the left",
      "Complete the circle by returning to center"
    ],
    repetitions: "5 circles each direction",
    duration: "2-3 minutes",
    difficulty: "Beginner",
    bodyParts: ["Neck", "Upper Shoulders"]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Advanced":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const ExerciseLibrary = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Exercise Library</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive collection of physiotherapy exercises designed to help you recover and maintain optimal health.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-amber-50 p-3 rounded-lg border border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <span>Always consult with a healthcare professional before beginning any exercise program</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className="h-full shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{exercise.name}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </div>
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {exercise.difficulty}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {exercise.bodyParts.map((part) => (
                  <Badge key={part} variant="outline" className="text-xs">
                    {part}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Instructions:</h4>
                <ol className="text-sm text-muted-foreground space-y-1">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded shrink-0">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Repetitions</div>
                    <div className="text-sm font-medium">{exercise.repetitions}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                    <div className="text-sm font-medium">{exercise.duration}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;