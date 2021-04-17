import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
    </Flex>
  )
}
