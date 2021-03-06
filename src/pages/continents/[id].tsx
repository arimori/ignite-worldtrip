import Head from "next/head";
import { GetServerSideProps } from "next";
import { Flex } from "@chakra-ui/react";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentContent/Banner";
import { ContinentContent } from "../../components/ContinentContent";

export interface Cities {
  id: number;
  image: string;
  city: string;
  country: string;
  flag: string;
}

export interface ContinentProps {
  continent: {
    id: number;
    name: string;
    image: string;
    banner: string;
    description: string;
    paragraph: string;
    allCountries: number;
    allIdioms: number;
    top100CitiesCount: number;
    highlightCities: Cities[];
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title> {continent.name} | WorldTrip</title>
      </Head>

      <Flex direction="column" pb="4">
        <Header showGoHomeButton />

        <ContinentContent continent={continent} />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id } = params;

  const { data } = await api.get(`/continentsSummary/${id}`);

  const continent = data;

  return {
    props: {
      continent
    }
  }
}