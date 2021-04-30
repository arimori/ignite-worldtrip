import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Cities } from "../../../pages/continents/[id]";

interface CityProps {
  city: Cities;
}

export function City({ city }: CityProps) {
  return (
    <Flex
      a="li"
      direction="column"
      w="100%"
      h="279px"
      borderRadius="4"
      border="1px solid #FFE299"
    >
      <Image
        w="100%"
        h="173px"
        objectFit="cover"
        src={city.image}
        alt={city.city}
      />
      <Flex
        px="6"
        pt="5"
        justify="space-between"
        align="start"
      >
        <Box>
          <Heading
            fontSize="xl"
            lineHeight="base"
            color="gray.700"
          >
            {city.city}
          </Heading>

          <Text
            fontSize="md"
            lineHeight="7"
            color="gray.400"
          >
            {city.country}
          </Text>
        </Box>

        <Box>
          <Image
            objectFit="cover"
            border="1px solid #efefef"
            w="38px"
            h="38px"
            borderRadius="50%"
            src={city.flag}
          />
        </Box>
      </Flex>
    </Flex>
  )
}