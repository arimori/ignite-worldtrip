import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { IconTravelType } from "./IconTravelType";

export function TravelTypes() {
  return (
    <SimpleGrid
      spacing={8}
      minChildWidth="100px"
    >
      <IconTravelType />
    </SimpleGrid>
  );
}