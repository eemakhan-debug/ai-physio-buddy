import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, Heart, TrendingUp, Database, Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  folderName: string;
  icon: React.ReactNode;
  technologies: string[];
  skills: string[];
  achievements: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Hello AI World",
    description: "A comprehensive introduction to AI/ML fundamentals using NumPy, Pandas, and Matplotlib. This project demonstrates basic data manipulation, visualization techniques, and sets the foundation for machine learning concepts.",
    folderName: "hello-ai-world",
    icon: <Brain className="h-5 w-5" />,
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    skills: ["Data Analysis", "Data Visualization", "Python Programming", "Statistical Computing"],
    achievements: [
      "Implemented data preprocessing pipelines",
      "Created interactive visualizations",
      "Demonstrated proficiency in Python ecosystem",
      "Built foundation for advanced ML concepts"
    ]
  },
  {
    id: "2",
    title: "Linear Regression on Diabetes Dataset",
    description: "Advanced machine learning project using scikit-learn to predict disease progression in diabetes patients. Implements comprehensive data preprocessing, feature engineering, and model evaluation techniques.",
    folderName: "diabetes-regression",
    icon: <TrendingUp className="h-5 w-5" />,
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    skills: ["Machine Learning", "Regression Analysis", "Feature Engineering", "Model Validation"],
    achievements: [
      "Achieved 85% prediction accuracy",
      "Implemented cross-validation techniques",
      "Performed comprehensive feature analysis",
      "Created detailed model evaluation metrics"
    ]
  },
  {
    id: "3",
    title: "Heart Disease Prediction",
    description: "Sophisticated classification model for predicting heart disease risk using clinical parameters. Features advanced data preprocessing, multiple ML algorithms comparison, and comprehensive accuracy evaluation.",
    folderName: "heart-disease-prediction",
    icon: <Heart className="h-5 w-5" />,
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    skills: ["Classification", "Data Preprocessing", "Model Training", "Accuracy Evaluation", "Healthcare Analytics"],
    achievements: [
      "Developed 92% accurate prediction model",
      "Compared multiple ML algorithms (Random Forest, SVM, Neural Networks)",
      "Implemented robust data validation pipeline",
      "Created clinical decision support visualization"
    ]
  }
];

const coreSkills = [
  "Data Preprocessing",
  "Model Training",
  "Accuracy Evaluation",
  "Python Programming",
  "Machine Learning",
  "Healthcare Analytics",
  "Statistical Analysis",
  "Data Visualization"
];

const technologies = [
  "Python",
  "Pandas",
  "Matplotlib",
  "NumPy",
  "Scikit-learn",
  "Google Colab",
  "TensorFlow",
  "Jupyter Notebook"
];

const PortfolioSection = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">AI/ML Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Showcasing expertise in artificial intelligence and machine learning applied to healthcare and medical data analysis.
        </p>
      </div>

      {/* Skills & Technologies Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Core Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-medical-light text-medical-blue">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-secondary" />
              Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="border-secondary text-secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Featured Projects</h3>
        
        {projects.map((project, index) => (
          <Card key={project.id} className="shadow-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {project.icon}
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Database className="h-4 w-4" />
                    <span>Folder: <code className="bg-muted px-1 py-0.5 rounded text-xs">{project.folderName}</code></span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-2">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-medical-light text-medical-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
            
            {index < projects.length - 1 && <Separator className="my-6" />}
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-trust-gradient text-white border-0 shadow-card">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
          <p className="mb-4 opacity-90">
            Combining medical expertise with cutting-edge AI technology to create innovative healthcare solutions.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioSection;