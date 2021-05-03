import { Box, Text } from "@chakra-ui/react";

interface CardContinentProps {
  paragraph: string;
}

export function CardContinent({ paragraph }: CardContinentProps) {
  return (
    <Box
      maxW="600"
      m={["4", "1"]}
    >
      <Text
        fontSize={["sm", "lg", "2xl"]}
        fontWeight="normal"
        lineHeight={["7", "9"]}
        textAlign="justify"
      >
        {paragraph}
      </Text>
    </Box>
  )
}