import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Description } from '../components/Description';
import { ContinentsSwiper } from '../components/ContinentsSwiper';

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | WorldTrip</title>
      </Head>

      <Flex direction="column" h="100vh" pb="4">
        <Header />
        <Banner />

        <Flex
          w="100%"
          p={["8", "12", "24"]}
          direction="column"
        >
          <TravelTypes />
        </Flex>

        <Description />
        <ContinentsSwiper />
      </Flex>
    </>
  )
}
