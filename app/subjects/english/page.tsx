'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/ui/header";
import { Roboto, Poppins, Crimson_Text, Manrope } from "next/font/google";

import backgroundImg1 from "../../../public/images/gitlab-com-all-remote-v3-dark-1280x270.png";


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700'],
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
});

// Define the structure for a course item
interface Course {
  name: string;
}

// Course names for each grade
const coursesByGrade: { [key: number]: Course[] } = {
  9: [
    { name: "ENG1L1" },
    { name: "ENG1P1" },
    { name: "ENG1D1" },
    { name: "ENG1DZ" },
  ],
  10: [
    { name: "ENG2L1" },
    { name: "ENG2P1" },
    { name: "ENG2D1" },
    { name: "ENG2DZ" },
  ],
  11: [
    { name: "ENG3E1" },
    { name: "NBE3C1" },
    { name: "NBE3U1" },
    { name: "ENG3UZ" },
  ],
  12: [
    { name: "ENG4E1" },
    { name: "ENG4C1" },
    { name: "ENG4U1" },
    { name: "ENG4UZ" },
    { name: "ETS4UZ" },
    { name: "OLC4O1" },
  ],
};

const Page: React.FC = () => {
  const [circleStyles, setCircleStyles] = useState([
    { top: '20%', left: '20%', width: '200px', height: '200px', boxShadow: '0 0 50px rgba(200, 200, 255, 0.5)' },
    { top: '40%', left: '60%', width: '150px', height: '150px', boxShadow: '0 0 50px rgba(200, 200, 255, 0.5)' },
    { top: '10%', left: '50%', width: '250px', height: '250px', boxShadow: '0 0 50px rgba(200, 200, 255, 0.5)' },
    { top: '30%', left: '10%', width: '180px', height: '180px', boxShadow: '0 0 50px rgba(100, 150, 255, 0.5)' },
    { top: '60%', left: '70%', width: '220px', height: '220px', boxShadow: '0 0 50px rgba(100, 150, 255, 0.5)' },
    { top: '70%', left: '40%', width: '150px', height: '150px', boxShadow: '0 0 50px rgba(100, 150, 255, 0.5)' },
    { top: '80%', left: '20%', width: '160px', height: '160px', boxShadow: '0 0 50px rgba(150, 200, 255, 0.5)' },
    { top: '15%', left: '75%', width: '180px', height: '180px', boxShadow: '0 0 50px rgba(150, 200, 255, 0.5)' },
    { top: '50%', left: '30%', width: '210px', height: '210px', boxShadow: '0 0 50px rgba(100, 150, 255, 0.5)' },
    { top: '25%', left: '5%', width: '200px', height: '200px', boxShadow: '0 0 50px rgba(150, 200, 255, 0.5)' },
    { top: '55%', left: '80%', width: '190px', height: '190px', boxShadow: '0 0 50px rgba(150, 200, 255, 0.5)' },
  ]);

  useEffect(() => {
    const animateCircles = () => {
      const newCircleStyles = circleStyles.map((style) => {
        const newTop = Math.random() * 80 + 10 + '%'; // Random top position between 10% and 90%
        const newLeft = Math.random() * 80 + 10 + '%'; // Random left position between 10% and 90%
        return { ...style, top: newTop, left: newLeft };
      });
      setCircleStyles(newCircleStyles);
    };

    // Call animateCircles immediately on mount
    animateCircles();

    const intervalId = setInterval(animateCircles, 12000); // Animate every 12 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="transition-colors duration-500"
      style={{
        position: "relative",
        padding: "2rem 0",
        marginBottom: "0",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #b2ebf2 30%, #ffccbc 100%)", // Lighter initial gradient
        overflow: "hidden",
      }}
    >
      <Header />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {circleStyles.map((style, index) => (
          <div
            key={`circle-${index}`} // Use index or a more unique identifier if available
            style={{
              position: "absolute",
              ...style,
              borderRadius: "50%",
              transition: "top 12s, left 12s",
            }}
          />
        ))}
      </div>

    <div className="container mx-auto relative z-10">
    <div
      className="bg-white bg-opacity-70 shadow-md p-4 inline-block mx-auto mt-20 mb-6" // Adjusted bg-opacity
    >
      <h2 className={`text-3xl font-bold text-center ${poppins.className}`}>Courses</h2>
    </div>
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(coursesByGrade).map(([grade, courses], gradeIndex) => (
          <div className={`p-4 border shadow-md transition transform hover:scale-105 hover:shadow-lg relative ${gradeIndex % 2 === 0 ? 'bg-gray-100 bg-opacity-50' : 'bg-gray-800 bg-opacity-70 text-white'}`} // Adjusted bg-opacity for both colors
          key={grade} 
          >
            <h3 className={`text-2xl font-bold mb-3 ${poppins.className}`}>Grade {grade}</h3>
            <div className="flex flex-col gap-2">
              {courses.map((course, courseIndex) => (
                <div
                  key={`${grade}-${course.name}`}
                  className={`p-2 border ${courseIndex % 2 === 0 ? 'bg-opacity-20' : 'bg-opacity-20'} hover:bg-opacity-80 hover:bg-blue-100 transition duration-300 shadow-sm ${poppins.className}`}
                >
                  {course.name} - add link to google drive
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Page;
