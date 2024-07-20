"use client";

const Footer = () => {
  return (
    <div className="relative inset-x-0 bottom-0 mt-4 flex h-14 items-center justify-center text-xl font-extrabold  text-gray-900 dark:text-white">
      <h1 className="underline decoration-wavy decoration-orange-500">
        ©Shivaji{"    "}
      </h1>
      <div> - {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
