import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

import { SwiperSlide } from 'swiper/react';


interface SwiperSlideCustomProps extends SwiperSlide {
  continent_id: number;
  continent: string;
  background: string;
  children: ReactNode;
}

export function SwiperSlideCustom({ continent_id, continent, background, children, ...rest }: SwiperSlideCustomProps) {
  return (
    <Link href={`/continents/${continent_id}`}>
      <Flex
        bgImage={`${background}`}
        bgRepeat="no-repeat"
        bgPosition="center"
        cursor="pointer"
        bgSize="cover"
        w="100%"
        h={["250px", "450px"]}
        align="center"
        justify="center"
        direction="column"
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
}