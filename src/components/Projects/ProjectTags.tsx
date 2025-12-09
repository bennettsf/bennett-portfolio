import { useSelectedTags } from '@/context/SelectedTagsContext';

import { getTopTags } from '@/hooks/getTopTags';
import { Box, Stack, Tag } from '@chakra-ui/react';
import { useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';

function ProjectTags({}) {
  const { selectedTags, setSelectedTags } = useSelectedTags();

  useEffect(() => {
    const tags = getTopTags();
    setSelectedTags(['All', ...tags]);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        gap={2}
        overflowX="auto"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        {selectedTags.map((tag) => (
          <Tag.Root key={tag} size="lg" colorPalette="teal">
            <Tag.StartElement>
              <HiPlus />
            </Tag.StartElement>
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </Stack>
    </Box>
  );
}

export default ProjectTags;
