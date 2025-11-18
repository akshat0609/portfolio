// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/background.jpg')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50" />

//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative text-5xl md:text-6xl font-semibold z-10"
//       >
//         Alexandrie Grenier
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="relative mt-4 text-lg md:text-2xl text-gray-200 z-10"
//       >
//         Web Designer & Content Creator
//       </motion.p>

//       <Link
//         to="about"
//         smooth={true}
//         duration={700}
//         className="absolute bottom-10 text-3xl cursor-pointer animate-bounce z-10"
//       >
//         ↓
//       </Link>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1>Alexandrie Grenier</h1>
      <p>Web Designer & Content Creator</p>

      <Link to="about" smooth={true} duration={700}>
        <div className="scroll-down">↓</div>
      </Link>
    </section>
  );
};

export default Hero;

