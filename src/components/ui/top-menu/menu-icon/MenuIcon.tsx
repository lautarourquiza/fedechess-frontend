'use client'

interface MenuIconProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

export default function MenuIcon({ setIsOpen, isOpen }: MenuIconProps) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="cursor-pointer flex flex-col justify-center items-center w-10 h-10 min-[768px]:hidden"
      onClick={toggleMenu}
    >
      <div
        className={`w-8 h-1 rounded transform transition-transform duration-300 ${
          isOpen ? "bg-black translate-y-2 rotate-45" : "bg-white"
        }`}
      ></div>
      <div
        className={`w-8 h-1 rounded my-1 transform transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "bg-white opacity-100"
        }`}
      ></div>
      <div
        className={`w-8 h-1 rounded transform transition-transform duration-300 ${
          isOpen ? "bg-black -translate-y-2 -rotate-45" : "bg-white"
        }`}
      ></div>
    </div>
  );
}
