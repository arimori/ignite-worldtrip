import { Flex, Heading, Icon, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface InfoProps {
  value: number;
  description: string;
  showPopOver?: boolean;
}

export function InfoIcon() {
  return (
    <span>
      <Icon as={RiInformationLine} color="gray.700" ml="1" />
    </span>
  )
}

export function Info({ value, description, showPopOver }: InfoProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mx="auto"
    >
      <Heading
        as="h1"
        color="yellow.100"
        fontSize="4xl"
        fontWeight="semibold"
      >
        {value}
      </Heading>
      <Flex
        align="center"
      >
        <Text
          as="p"
          fontSize="xl"
          fontWeight="semibold"
        >
          {description}
        </Text>
        {(showPopOver && !isWideVersion) && (
          <Tooltip
            label="Ranking das 100 melhores cidades."
            color="gray.100"
            borderRadius="4"
            placement="bottom-end"
            fontWeight="300"
            fontSize="14px"
            hasArrow
          >
            <span>
              <Icon
                as={RiInformationLine}
                fontSize="16px"
                color="gray.400"
                ml="1"
              />
            </span>
          </Tooltip>
        )}
      </Flex>
    </Flex >
  )
}