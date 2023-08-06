import Link from "next/link";
import { GiLoveHowl } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center font-semibold text-lg my-12">
      <p className="flex items-center">
        Projects were made with a lot of effort and
        <GiLoveHowl className="mx-1.5" /> by
      </p>
      <Link
        href="https://danielreyesdev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-300 hover:text-amber-400 transition duration-75 ease-in-out ml-1.5"
      >
        Daniel Reyes
      </Link>
    </footer>
  );
};
export default Footer;
