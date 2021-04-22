import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <Flex
        w="100%"
        p={["8", "24"]}
        direction="column"
      >
        <TravelTypes />
      </Flex>
    </Flex>
  )
}
