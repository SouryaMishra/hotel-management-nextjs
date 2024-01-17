import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => (
  <footer className="mt-16">
    <div className="px-10 mx-auto container">
      <Link href="/" className="text-tertiary-dark font-semibold">
        Hotels
      </Link>

      <h4 className="font-semibold text-[40px] py-6">Contact</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-4 ">
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <p>123 Road</p>
          <div className="flex items-center">
            <BsFillSendFill />
            <p className="ml-2">codewithme</p>
          </div>
          <div className="flex items-center">
            <BsTelephoneOutbound />
            <p className="ml-2 whitespace-nowrap">000-000-000</p>
          </div>
          <div className="flex items-center">
            <BiMessageDetail />
            <p className="ml-2">codewithme</p>
          </div>
        </div>
        <ul className="flex flex-col gap-4 text-center sm:text-left md:text-right">
          <li>Our Story</li>
          <li>Get in Touch</li>
          <li>Our Privacy Commitment</li>
          <li>Terms of service</li>
          <li>Customer Assistance</li>
        </ul>
        <ul className="flex flex-col gap-4 text-center sm:text-left md:text-right">
          <li>Dining Experience</li>
          <li>Wellness</li>
          <li>Fitness</li>
          <li>Sports</li>
          <li>Events</li>
        </ul>
      </div>
    </div>
    <div className="bg-tertiary-light h-10 md:h-20 mt-16" />
  </footer>
);

export default Footer;
