import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../assets/foodie.png";

export const Footer = () => {
  return (
    <div className="footer-wrapper my-24 mx-2 px-14 flex flex-col md:flex-row justify-between mt-32">
      <div className="footer-section-one mb-8 md:mb-0 md:mr-7">
        <div className="footer-logo-container max-w-xs">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>
        <div className="footer-icons flex mt-4 md:mt-10 text-[#585858]">
          <BsTwitter className="text-2xl mr-4" />
          <SiLinkedin className="text-2xl mr-4" />
          <BsYoutube className="text-2xl mr-4" />
          <FaFacebookF className="text-2xl" />
        </div>
      </div>
      <div className="footer-section-two flex flex-col md:flex-row">
        <div className="footer-section-columns mb-2 md:mb-0 md:mr-12 flex flex-col">
          <span className="text-lg font-semibold">Home</span>
          <span className="text-lg font-semibold">Nosotros</span>
          <span className="text-lg font-semibold">Cómo Funciona</span>
          <span className="text-lg font-semibold">Testimonios</span>
          <span className="text-lg font-semibold">Contacto</span>
        </div>
        <div className="footer-section-columns mb-2 md:mb-0 md:mr-12 flex flex-col">
          <span className="text-lg">+54 9 1146-5892</span>

          <span className="text-lg">contact@foodie.com</span>
        </div>
        <div className="footer-section-columns flex flex-col">
          <span className="text-lg">Terms & Conditions</span>
          <span className="text-lg">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
