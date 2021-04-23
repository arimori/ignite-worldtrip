import { Flex, Divider, Text } from "@chakra-ui/react";

export function Description() {
  return (
    <Flex
      direction="column"
      width="100%"
      align="center"
    >
      <Divider
        colorScheme="gray.700"
        width="90px"
        border="2px solid #47585B"
        mb="12"
      />

      <Text
        fontWeight="500"
        fontSize={["2xl", "3xl"]}
      >
        Vamos nessa?
      </Text>

      <Text
        fontWeight="500"
        fontSize={["2xl", "3xl"]}
      >
        Então escolha seu continente
      </Text>
    </Flex>
  )
}