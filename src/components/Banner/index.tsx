import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      maxWidth={1440}
      w="100%"
      mx="auto"
      bgImage="url(/assets/images/banner-wide.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      justify="space-between"
    >
      <Box
        h={["164px", "180px", "335px"]}
      >
        <Heading
          fontWeight="medium"
          fontSize={["lg", "2xl", "3xl"]}
          mt={["8", "12", "20"]}
          ml={["8", "12", "16", "36"]}
          maxW={["100%", "426px"]}
          textColor="gray.50"
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Heading>
        <Text
          fontSize={["xs", "sm", "md"]}
          textColor="gray.50"
          mt={["2", "4", "5"]}
          ml={["8", "12", "16", "36"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isWideVersion && (
        <Image
          src="/assets/images/airplane.svg"
          h={["", "180px", "280px"]}
          w={["", "360px", "418px"]}
          mt="9"
          mr={["4", "4", "8"]}
          transform={{
            rotate: '3deg'
          }}
        />
      )}

    </Flex>
  );
}