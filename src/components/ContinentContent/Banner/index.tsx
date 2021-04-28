import { Flex, Heading, Box } from '@chakra-ui/react'

interface ContinentBannerProps {
  banner: string;
  name: string;
}

export function ContinentBanner({ banner, name }: ContinentBannerProps) {
  return (
    <Flex
      maxWidth={1440}
      h={["150px", "250px", "500px"]}
      mx="auto"
      w="100%"
      bgImage={`url(${banner})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      position="relative"
      align="flex-start"
      justify="flex-end"
      direction="column"
    >
      <Box pb="14" pl="36">
        <Heading
          fontSize={["2xl", "5xl"]}
          fontWeight="700"
          color="white"
        >
          {name}
        </Heading>
      </Box>
    </Flex>
  )
}