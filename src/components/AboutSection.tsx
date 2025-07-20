import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Brain, Stethoscope, Award, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "Doctor of Physiotherapy (DPT)",
      institution: "University of South Asia",
      status: "In Progress",
      icon: <Stethoscope className="h-5 w-5" />,
      description: "Comprehensive study of human anatomy, physiology, biomechanics, and therapeutic interventions."
    },
    {
      degree: "Artificial Intelligence & Blockchain",
      institution: "Arfa Karim Technology Incubator",
      status: "In Progress",
      icon: <Brain className="h-5 w-5" />,
      description: "Advanced coursework in machine learning, neural networks, and blockchain technology applications."
    }
  ];

  const skills = [
    {
      category: "Medical Expertise",
      items: ["Human Anatomy", "Physiotherapy Techniques", "Patient Assessment", "Rehabilitation Planning", "Clinical Decision Making"]
    },
    {
      category: "Technical Skills",
      items: ["Python Programming", "Machine Learning", "Data Analysis", "Natural Language Processing", "Healthcare Analytics"]
    },
    {
      category: "AI/ML Tools",
      items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Google Colab"]
    }
  ];

  const achievements = [
    "Developing AI-powered physiotherapy assessment tools",
    "Combining medical knowledge with machine learning algorithms",
    "Creating innovative healthcare technology solutions",
    "Pursuing dual expertise in healthcare and technology"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-medical-light">
      <div className="container space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between traditional healthcare and cutting-edge technology to create innovative solutions for patient care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile & Vision */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Professional Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As a Doctor of Physiotherapy student at the University of South Asia, I am passionate about combining 
                  traditional medical expertise with modern artificial intelligence to revolutionize patient care and 
                  rehabilitation processes.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing advanced studies in AI and blockchain technology at Arfa Karim Technology Incubator, 
                  I am developing innovative solutions that merge healthcare knowledge with cutting-edge technology.
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Pakistan</span>
                  <Calendar className="h-4 w-4 ml-4" />
                  <span>Available for Internships</span>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Education & Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border bg-card">
                    <div className="w-10 h-10 rounded-lg bg-trust-gradient flex items-center justify-center text-white">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <Badge variant="secondary" className="text-xs">{edu.status}</Badge>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills & Achievements */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-3 text-primary">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="border-medical-blue text-medical-blue hover:bg-medical-light"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full shrink-0 mt-2"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-healing-gradient text-white border-0 shadow-card">
              <CardContent className="text-center py-6">
                <h3 className="text-xl font-bold mb-2">Ready to Innovate Healthcare</h3>
                <p className="opacity-90 mb-4">
                  Seeking opportunities to apply AI and medical expertise in real-world healthcare solutions.
                </p>
                <Badge className="bg-white/20 text-white border-white/30">
                  Open for Internship Opportunities
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;