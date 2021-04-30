import { Flex, Heading, Text } from "@chakra-ui/react";

interface InfoProps {
  value: number;
  description: string;
}

export function Info({ value, description }: InfoProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
    >
      <Heading
        as="h1"
        color="yellow.100"
        fontSize="4xl"
        fontWeight="semibold"
      >
        {value}
      </Heading>
      <Text
        as="p"
        fontSize="xl"
        fontWeight="semibold"
      >
        {description}
      </Text>

    </Flex>
  )
}