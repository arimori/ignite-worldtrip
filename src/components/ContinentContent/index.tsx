import { ContinentBanner } from "./Banner";

import { ContinentProps } from '../../pages/continents/[id]';
import { HStack, Flex, Box } from "@chakra-ui/react";
import { CardContinent } from "./Card";
import { SummaryContinet } from "./Summary";
import { TopCities } from "./TopCities";

export function ContinentContent({ continent }: ContinentProps) {
  return (
    <>
      <ContinentBanner banner={continent.banner} name={continent.name} />

      <HStack
        my={["2", "20"]}
        mx={["2", "8", "16"]}
        spacing={12}
      >
        <Flex
          align="center"
          justify="center"
          direction={["column", "column", "row"]}
          mx="auto"
        >
          <CardContinent paragraph={continent.paragraph} />
          <SummaryContinet continent={continent} />
        </Flex>
      </HStack>

      <Flex
        maxWidth={1160}
        w="100%"
        mx="auto"
        mt="8"
      >
        <TopCities highlightCities={continent.highlightCities} />
      </Flex>
    </>
  )
}