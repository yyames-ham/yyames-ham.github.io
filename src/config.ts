export const siteConfig = {
  name: "James Han",
  title: "Mechatronics Engineering Student",
  description: "Portfolio website of James Han",
  accentColor: "#3a8514",
  social: {
    email: "",
    linkedin: "https://linkedin.com/in/james-han-42aa1a384/",
    twitter: "",
    github: "https://github.com/yyames-ham",
  },
  aboutMe:
    "I am a first year engineering student at the University of Waterloo studying Honours Mechatronics Engineering (co-op) currently in my 1B term. I excel in design and hands-on work including machining and assembly. I work well in both team and individual settings, capable of productivity with minimal instruction. Some less professional things about me are that I enjoy skiing, building things, and watching movies and video essays and I am always happy to learn new things and improve my skillset",
  skills: ["C++", "Python", "SolidWorks", "AutoCAD", "Mechanical Design", "Drafting", "Machining", "Composite Layup", "Adobe Illustrator", "Microsoft Excel", "Microsoft Word"],
  projects: [
    {
      name: 'Drawing Robot - "Dron on Top"',
      description: "A remote-controlled drawing robot capable of drawing using joysticks for freehand controls or buttons to execute predetermined shapes (square, triangle, octagon, smiley face) with customizable sizes.",
      link: "https://yyames-ham.github.io/projects/drawing-robot",
      skills: ["C++", "VEX IQ", "Prototyping", "Software Design", "Mechanical Design", "Mechanical Assembly"],
    },
    {
      name: "Mancala Game",
      description: "The classic game of mancala coded in python and playable entirely in the console. All rules and abilities of the original game of mancala work including captue and extra turn.",
      link: "https://yyames-ham.github.io/projects/mancala-game",
      skills: ["Python"],
    },
  ],
  experience: [
    {
      company: "University of Waterloo Formula Electric Design Team",
      title: "Chassis Team - Member",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Prepared molds and carbon fiber for layup of pedal faces",
        "Prepared for and performed layup of Kevlar dash plate and box lid",
      ],
    },
    {
      company: "UBC Geering Up Engineering Outreach",
      title: "Junior Instructor",
      dateRange: "Jul 2024 - Aug 2024",
      bullets: [
        "Applied leadership and organizational skills to manage classrooms and engage students in problem-solving",
        "Lead weekly STEM-based lessons and activities for children ages 6-12, designed lessons and prepared materials",
        "Supported instructors in maintaining a safe and structured environment while encouraging students' curiosity in engineering",
      ],
    },
  ],
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Applied Science, Honours Mechatronics Engineering (Co-op)",
      dateRange: "2025 - Present",
      achievements: [
        "Expected Graduation: 2030",
        "GPA: 3.92",
        "Recieved President's Scholarship upon admission",
      ],
    },
    //add solidworks thing once started
  ],
};
