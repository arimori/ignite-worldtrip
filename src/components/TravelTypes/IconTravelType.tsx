import { Box, Flex, HStack, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from '../../services/api';

interface TravelTypes {
  id: number;
  description: string;
  icon: string;
}

export function IconTravelType() {
  const [travelOptions, setTravelOptions] = useState<TravelTypes[]>([]);
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  useEffect(() => {
    getTravelTypes();
  }, [])

  async function getTravelTypes() {
    const { data } = await api.get<TravelTypes[]>('/travelTypes');

    setTravelOptions(data);
  }

  return (
    <>
      {travelOptions &&
        travelOptions.map(travelItem => (
          <Box
            key={travelItem.id}
          >
            {isWideVersion ? (
              <SimpleGrid
                as="ul"
                minChildWidth="100px"
              >
                <HStack
                  as="li"
                  spacing={2}
                  mx="auto"
                >
                  <Box
                    h="8px"
                    w="8px"
                    borderRadius="50%"
                    bgColor="yellow.100"
                  />
                  <Text
                    fontSize={["lg", "xl", "2xl"]}
                    fontWeight="600"
                  >
                    {travelItem.description}
                  </Text>
                </HStack>
              </SimpleGrid>
            ) : (
              <Flex
                w="100%"
                maxWidth={1160}
                h={["120px", "120px", "100px"]}
                mx="auto"
                align="center"
              >
                <Flex
                  w="100%"
                  mx="auto"
                  align="center"
                  direction="column"
                  key={travelItem.id}
                >
                  <Image
                    src={travelItem.icon}
                    mb={6}
                  />
                  <Text
                    fontSize={["md", "lg", "2xl"]}
                    fontWeight="600"
                  >
                    {travelItem.description}
                  </Text>

                </Flex>
              </Flex>
            )}
          </Box>
        ))
      }
    </>
  )
}