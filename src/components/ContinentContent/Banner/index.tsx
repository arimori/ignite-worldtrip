import { Flex, Heading, Box } from '@chakra-ui/react'

interface ContinentBannerProps {
  banner: string;
  name: string;
}

export function ContinentBanner({ banner, name }: ContinentBannerProps) {
  return (
    <Flex
      maxWidth={1440}
      h={["180px", "250px", "500px"]}
      w="100%"
      mx="auto"
      bgImage={`url(${banner})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      position="relative"
      direction="column"
      align={["center", "center", "flex-start"]}
      justify={["center", "center", "flex-end"]}
    >
      <Box
        pb={["0", "0", "14"]}
        pl={["0", "0", "36"]}
      >
        <Heading
          fontSize={["3xl", "5xl"]}
          lineHeight="72px"
          fontWeight="semibold"
          color="white"
        >
          {name}
        </Heading>
      </Box>
    </Flex>
  )
}