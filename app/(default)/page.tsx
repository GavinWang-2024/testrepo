import type { NextPage } from 'next';
import { Roboto, Poppins } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const poppins = Poppins({
  subsets:['latin'],
  weight:['400','700']
})

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import CategoryGrid from "../../components/CategoryGrid";

const Home: NextPage = () => {
  return (
    <main className={poppins.className}>
      <Hero />
      <BusinessCategories />
      <CategoryGrid />
      <FeaturesPlanet />
    </main>
  );
};

export default Home;