import { Grid, Heading } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';

import type { Project } from '@/models/Project';
import projectsData from '@/data/projects.json';
import ProjectTags from '../Projects/ProjectTags';
import ProjectCard from '../Projects/ProjectCard';

const ProjectsSection = () => {
  // order projects by featured status
  const projects = [...projectsData].sort((a, b) =>
    b.featured === a.featured ? 0 : b.featured ? 1 : -1
  ) as Project[];

  return (
    <FullScreenSection alignItems="center" justifyContent="flex-start">
      <Heading size={{ md: '5xl', sm: '3xl' }} id="projects-section">
        Featured Projects
      </Heading>
      <ProjectTags />
      {/* Render project cards here using the projects state */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
