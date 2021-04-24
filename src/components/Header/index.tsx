import { Flex, IconButton, Image, Icon } from "@chakra-ui/react";
import Link from 'next/link';
import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
  showGoHomeButton?: boolean;
}

export function Header({ showGoHomeButton = false }: HeaderProps) {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1440}
      h="100px"
      mx="auto"
      px="6"
      align="center"
    >
      {showGoHomeButton && (
        <Link href="/" passHref>
          <IconButton
            aria-label="Go home"
            icon={<Icon as={RiArrowLeftSLine} color="gray.700" />}
            fontSize="32"
            variant="unstyled"
            mr={4}
          >
          </IconButton>
        </Link>
      )}
      <Flex align="center" mx="auto" my="4">
        <Link href="/" passHref>
          <Image src="/assets/images/logo.svg" />
        </Link>
      </Flex>
    </Flex>
  )
}