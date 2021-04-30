import { Flex, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import { Cities } from "../../../pages/continents/[id]";
import { City } from "./City";

interface TopCitiesProps {
  highlightCities: Cities[];
}

export function TopCities({ highlightCities }: TopCitiesProps) {

  return (

    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      mx={["2", "8", "16"]}
    >
      <Heading
        fontSize={["2xl", "4xl"]}
        fontWeight="medium"
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        as="ul"
        columns={[1, 2, 4]}
        minChildWidth="256px"
        spacing="45px"
        mt="10"
      >
        {highlightCities.map(city => (
          <City city={city} />
        ))}
      </SimpleGrid>

    </Flex>
  )
}