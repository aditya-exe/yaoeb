export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
  };
  
  const projects: Project[] = [
    {
      title: "Ninjask",
      techs: ["ReactJS (NextJS)", "tRPC", "Supabase"],
      link: "https://github.com/aditya-exe/ninjask",
    },
    {
      title: "Dict",
      techs: ["ReactJS (NextJS)", "tRPC", "Zustand", "axios"],
      link: "https://github.com/aditya-exe/dict/",
    },
    {
      title: "Utils",
      techs: ["Typescript"],
      link: "https://github.com/aditya-exe/utils",
    },
    {
      title: "Ray Tracer in Rust",
      techs: ["Rust"],
      link: "https://github.com/aditya-exe/ray-tracing-rs",
    },
  ];
  
  export default projects;
  