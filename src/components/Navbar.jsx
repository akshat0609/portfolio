// import React from "react";
// import { Link } from "react-scroll";


// const Navbar = () => {
//   return (
//     <nav className="fixed w-full top-0 bg-transparent text-white z-50 flex justify-center py-4 space-x-8 backdrop-blur-md">
//       {["Home", "About", "Portfolio", "Contact"].map((section) => (
//         <Link
//           key={section}
//           to={section.toLowerCase()}
//           smooth={true}
//           duration={700}
//           className="cursor-pointer hover:text-blue-400"
//         >
//           {section}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      {["Home", "About", "Portfolio", "Contact"].map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={700}
          offset={-60}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
