import { Flex, Divider, Text } from "@chakra-ui/react";

export function Description() {
  return (
    <Flex
      direction="column"
      width="100%"
      align="center"
    >
      <Divider
        color="gray"
        width="90px"
        border="2px solid #47585B"
        mb={["6", "12"]}
        className="custom-divider"
      />

      <Text
        fontWeight="500"
        fontSize={["xl", "2xl", "3xl"]}
      >
        Vamos nessa?
      </Text>

      <Text
        fontWeight="500"
        fontSize={["xl", "2xl", "3xl"]}
      >
        Então escolha seu continente
      </Text>
    </Flex>
  )
}