import { SimpleGrid } from "@chakra-ui/react";
import { IconTravelType } from "./IconTravelType";

export function TravelTypes() {
  return (
    <SimpleGrid
      spacing={8}
      minChildWidth="100px"
      maxW={1160}
      mx={["", "", "auto"]}
    >
      <IconTravelType />
    </SimpleGrid>
  );
}