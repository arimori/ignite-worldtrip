import { Box, Text } from "@chakra-ui/react";

interface CardContinentProps {
  paragraph: string;
}

export function CardContinent({ paragraph }: CardContinentProps) {
  return (
    <Box
      maxW="600"
    >
      <Text
        fontSize={["sm", "xl", "2xl"]}
        fontWeight="normal"
        textAlign="justify"
      >
        {paragraph}
      </Text>
    </Box>
  )
}