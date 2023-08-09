type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "wxwymg@proton.me",
  title: "Hi, I’m Aditya 👋",
  description: "Web engineer with a sweet tooth for Gamedev and CP",
  socials: [
    {
      label: "Github",
      link: "https://github.com/aditya-exe",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/aditya-joshi21"
    },
    {
      label: "X",
      link:"https://x.com/ad1tyaj1"
    }
  ],
};

export default presentation;
