import React from "react";
import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 md:p-6 lg:p-8  border-b-2 max-w-7xl mx-auto">
      <h1 className="text-6xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
