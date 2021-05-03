import { Flex, HStack } from "@chakra-ui/react";
import { Info } from "./Info";

interface SummaryContinentProps {
  continent: {
    allCountries: number;
    allIdioms: number;
    top100CitiesCount: number;
  }
}

export function SummaryContinet({ continent }: SummaryContinentProps) {
  return (
    <HStack
      spacing={["4", "6", "10"]}
      px={["2", "16"]}
      w="100%"
    >
      <Info value={continent.allCountries} description="países" />
      <Info value={continent.allIdioms} description="línguas" />
      <Info value={continent.top100CitiesCount} description="cidades +100" showPopOver />
    </HStack>
  )
}