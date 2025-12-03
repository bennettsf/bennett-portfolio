interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  technologies: {
    languages: string[];
    frameworks: string[];
    libraries: string[];
    databases: string[];
    hosting: string[];
    tools: string[];
    architecture: string[];
  };
  tags: string[];
  links: {
    github: string;
    demo: string | null;
  };
}
export type { Project };
