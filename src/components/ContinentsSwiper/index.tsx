import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperSlideCustom } from './SwiperSlideCustom';

import { api } from '../../services/api';

SwiperCore.use([Navigation, Pagination]);

interface ContinentsSummary {
  id: number;
  name: string;
  image: string;
  description: string;
}

export function ContinentsSwiper() {
  const [continents, setContinents] = useState<ContinentsSummary[]>([]);
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  useEffect(() => {
    getContinentsSummary();
  }, []);

  async function getContinentsSummary() {
    const { data } = await api.get<ContinentsSummary[]>('/continentsSummary');

    setContinents(data);
  }

  return (
    <Flex
      w="100%"
      maxW={1240}
      mx="auto"
      my={["4", "8", "12"]}
      align="center"
      justify="center"
      px={["2", "4", "8"]}
      mb={["2", "4", "8"]}
    >
      <Swiper
        style={{ height: '100%', width: '100%', marginTop: 52 }}
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={1}
      >
        {continents &&
          continents.map(continent => (
            <SwiperSlide key={`slide-${continent.id}`} tag="li" style={{ listStyle: 'none' }}>
              <SwiperSlideCustom
                continent_id={continent.id}
                continent={continent.name}
                background={`url(${continent.image})`}
              >
                <Heading
                  fontSize={["2xl", "5xl"]}
                  fontWeight="700"
                  color="white"
                >
                  {continent.name}
                </Heading>

                <Text
                  mt="8"
                  fontSize={["lg", "2xl"]}
                  fontWeight="600"
                  color="white"
                >
                  {continent.description}
                </Text>
              </SwiperSlideCustom>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Flex>
  );
}