import Image from "next/image";
import Link from 'next/link';
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import Banner from "./components/Banner";

export default function Home() {
  return (
   <main className="w-full">
    <h1>Hello World</h1>
    <Banner purpose={'For Sale'}/>
    <Banner purpose={'For Rent'}/>
   </main>
  );
}
