"use client";
import MainNav from "./mainNav";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
