import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

import { SwiperSlide } from 'swiper/react';


interface SwiperSlideCustomProps extends SwiperSlide {
  continent: string;
  background: string;
  children: ReactNode;
}

export function SwiperSlideCustom({ continent, background, children, ...rest }: SwiperSlideCustomProps) {
  return (
    <Link href={`/continent/${continent}`}>
      <Flex
        bgImage={`url(${background})`}
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