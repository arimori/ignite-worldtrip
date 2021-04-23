import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from '../../services/api';

interface TravelTypes {
  id: number;
  description: string;
  icon: string;
}

export function IconTravelType() {
  const [travelOptions, setTravelOptions] = useState<TravelTypes[]>([]);

  useEffect(() => {
    getTravelTypes();
  }, [])

  async function getTravelTypes() {
    const { data } = await api.get<TravelTypes[]>('/travelTypes');

    setTravelOptions(data);
  }

  return (
    <Flex
      w="100%"
      maxWidth={1160}
      h="100px"
      mx="auto"
      align="center"
    >
      {travelOptions &&
        travelOptions.map(travelItem => (
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
              fontSize={["xl", "2xl"]}
              fontWeight="600"
            >
              {travelItem.description}
            </Text>
          </Flex>
        ))
      }
    </Flex>
  )
}