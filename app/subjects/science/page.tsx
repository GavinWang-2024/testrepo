import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/ui/header";
// Define the structure for a category item
interface Category {
  name: string;
  imageSrc: string;
  link: string;
}

// Placeholder images and URLs for the links
const categories: Category[] = [
  { name: "Business", imageSrc: "/images/20151030-wall-street.jpg", link: "/subjects/business/" },
  { name: "Computer Science", imageSrc: "/images/computer-science.png", link: "/subjects/computer-science/" },
  { name: "English", imageSrc: "/images/B137.jpg", link: "/subjects/english/" },
  { name: "French", imageSrc: "/images/c9e4db1241aeb2bc-da431.jpg", link: "/subjects/french/" },
  { name: "Health", imageSrc: "/images/lifestyle-medicine-1200x630.jpg", link: "/subjects/health/" },
  { name: "Math", imageSrc: "/images/Article-Page-42.png", link: "/subjects/math/" },
  { name: "Science", imageSrc: "/images/Health-care-researchers-working-in-life-science-laboratory-1120-scaled.jpg", link: "/subjects/science/" },
  { name: "History", imageSrc: "/images/premium_photo-1661963952208-2db3512ef3de.png", link: "/subjects/history/" },
  { name: "Social Studies", imageSrc: "/images/The-Link-between-literacy-and-Social-Studies.png", link: "/subjects/social-studies/" },
];

const page: React.FC = () => {
  return (
    <section className="py-8 mb-20">
      <Header />
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mt-20 mb-6">Topics</h2>
        <div className="grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="relative block rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-colors duration-300 ease-in-out hover:bg-opacity-70">
                <h2 className="text-white text-xl font-bold transition-colors duration-300 ease-in-out hover:text-blue-500">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
