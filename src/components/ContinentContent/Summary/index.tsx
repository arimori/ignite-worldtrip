import { HStack } from "@chakra-ui/react";
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
      spacing="6"
      pl="8"
    >
      <Info value={continent.allCountries} description="países" />
      <Info value={continent.allIdioms} description="línguas" />
      <Info value={continent.top100CitiesCount} description="cidades +100" />
    </HStack>
  )
}