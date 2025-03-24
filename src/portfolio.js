/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashley Lawton",
  title: "Hi all, I'm Ashley",
  subTitle: emoji(
    "A passionate Frontend Web Developer 🚀 with experience building Web and Mobile applications with JavaScript / SvelteJS / Nodejs / Vanilla / Supabase / TurnKey Linux and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1JVnnvtOrV1S9K4gkZsy6fuow6WTIv_-TL_u5Ev5BOjg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hellothisisme123",
  linkedin: "https://www.linkedin.com/in/ashley-lawton-b66a23351/",
  gmail: "lhenry1066@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB DEVELOPER WHO WANTS TO KEEP CODING",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Write efficient and thoughtful code to maximize user experience"),
    emoji("⚡ Collaborate effectively to create an environment of learning and productivity"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Diman Regional Vocational Technical High School",
      logo: require("./assets/images/DimanLogoWhiteOrange.webp"),
      subHeader: "Programming and Web Development",
      duration: "September 2021 - May 2025",
      desc: "Took courses about Frontend Web Development, Backend Web Development, C#, Unity, Cybersecurity, ...",
      descBullets: [
        "This is a technical high school so 90 days of the school year were spent in shop working on technical projects.", 
        "The instructors had a more hands off approach, where we would get lots of time focused on independent work on projects graded from a rubric."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I CREATED",
  projects: [
    {
      image: require("./assets/images/Rock.png"),
      projectName: "Rock Paper Scissors",
      projectDesc: "Rules: Rock beats scissors, Scissors beats paper, Paper beat rock, Unlimited rounds",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rock-paper-scissors-rps.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Snake.png"),
      projectName: "",
      projectDesc: "Eat berries to grow, don't hit the walls, don't hit your tail, rebind controls, adjust game settings",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realsnakegame.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Magic-8-Ball.png"),
      projectName: "Magic 8 Ball",
      projectDesc: "Ask it a question, Hover to shake, Press enter or click to get an answer",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://magic-8-ball-puce.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SoundScape.png"),
      projectName: "SoundScape - Soundboard",
      projectDesc: "Use slider to delay sound, Press play to play sound, Use 3 lines for hamburger navbar, Add custom sounds with image and sound files, Remove and Reorder sounds with popup",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://soundboard-one.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/firenationemblem.png"),
      projectName: "Zuko Website",
      projectDesc: "Based off the character Zuko, from Avatar: The Last Airbender, Reduced animation toggle, Unfinished",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zuko-website-redesign.vercel.app/backstory.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/YinYangLogo.png"),
      projectName: "Tranquil Gardens - Mock Website",
      projectDesc: "Responsive, A gardening e-commerce website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tranquil-gardens.vercel.app/shop.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Color_picker_logo.png"),
      projectName: "Color Picker",
      projectDesc: "Refresh randomized colors, Multiple randomization options, Copy pasteable colors, Lockable color slots",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://color-picker-lemon.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aim-trainer.png"),
      projectName: "Rainbow Mouse Aim Trainer",
      projectDesc: "100-200-300 points per click, Toggleable autoclicker, Slider controls autoclick timings",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://aim-trainer-two.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/DireDireDiningLogo.png"),
      projectName: "Mock Restaurant Website",
      projectDesc: "Super Mario themed mock restaurant",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dire-dire-dining.vercel.app/Directions.html"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Computational Thinking Certificate",
      subtitle:
        "Completed Certiport Information Technology Specialist certification through school",
      image: require("./assets/images/_ITS-Badges-Computational-Think.png"),
      imageAlt: "Certiport Information Technology Specialist: Computational Thinking Certificate Logo",
      footerLink: [
        
      ]
    },

    {
      title: "HTML5 Application Development Certificate",
      subtitle: "Completed Certiport Information Technology Specialist certification through school",
      image: require("./assets/images/ITS-Badges_HTML-5-Application-Developer_1200px.png"),
      imageAlt: "Certiport Information Technology Specialist: HTML5 Application Development Certificate Logo",
      footerLink: [
        
      ]
    },
    {
      title: "HTML and CSS Certificate",
      subtitle: "Completed Certiport Information Technology Specialist certification through school",
      image: require("./assets/images/ITS-Badges_HTML-and-CSS_1200px.png"),
      imageAlt: "Certiport Information Technology Specialist: HTML and CSS Certificate Logo",
      footerLink: [
        
      ]
    },
    {
      title: "JavaScript Certificate",
      subtitle: "Completed Certiport Information Technology Specialist certification through school",
      image: require("./assets/images/ITS-Badges_JavaScript_1200px.png"),
      imageAlt: "Certiport Information Technology Specialist: JavaScript Certificate Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Certified Unity VR Developer",
      subtitle: "Completed certification through Certiport Unity Technologies school",
      image: require("./assets/images/Unity-Badge.png"),
      imageAlt: "Certiport Unity Technologies: VR Developer Certificate Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Certified Unity Programmer",
      subtitle: "Completed certification through Certiport Unity Technologies in school",
      image: require("./assets/images/Unity-Badge.png"),
      imageAlt: "Certiport Unity Technologies: Programmer Certificate Logo",
      footerLink: [
        
      ]
    },
    {
      title: "OSHA 10-hour General Industry Course",
      subtitle:
        "Completed certification through school",
      image: require("./assets/images/OSHA.jpg"),
      imageAlt: "OSHA Logo",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(774) 266 - 2043",
  email_address: "lhenry1066@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
