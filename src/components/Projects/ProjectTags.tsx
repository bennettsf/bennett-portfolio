import projectsData from '@/data/projects.json';
import { Box, Tag } from '@chakra-ui/react';

function ProjectTags({}) {
  const uniqueTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)));
  console.log('Unique Tags:', uniqueTags);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  return (
    <Box>
      <Tag.Root>
        <Tag.Label>All Tags</Tag.Label>
      </Tag.Root>
    </Box>
  );
}

export default ProjectTags;
