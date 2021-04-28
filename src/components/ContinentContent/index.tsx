import { ContinentBanner } from "./Banner";

import { ContinentProps } from '../../pages/continents/[id]';
import { HStack, Flex } from "@chakra-ui/react";
import { CardContinent } from "./Card";
import { SummaryContinet } from "./Summary";

export function ContinentContent({ continent }: ContinentProps) {
  return (
    <>
      <ContinentBanner banner={continent.banner} name={continent.name} />

      <Flex
        align="center"
        justify="center"
        direction={["column", "row"]}
        mx="auto"
      >
        <HStack
          my={["2", "20"]}
          mx={["2", "16"]}
          spacing={12}
        >
          <CardContinent paragraph={continent.paragraph} />
          <SummaryContinet continent={continent} />
        </HStack>
      </Flex>

    </>
  )
}