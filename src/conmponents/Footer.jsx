import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import logo from "../../src/assets/toylogo.png";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white ">
      <div>
        <div className="bg-slate-400">
          <img className="w-16 h-16" src={logo} alt="" />
        </div>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <div className="flex space-x-4 md:justify-center">
          <FaFacebook className="md:text-3xl text-2xl font-bold"></FaFacebook>
          <FaInstagram className="md:text-3xl text-2xl font-bold"></FaInstagram>
          <FaTwitter className="md:text-3xl text-2xl font-bold"></FaTwitter>
          <FaTiktok className="md:text-3xl text-2xl font-bold"></FaTiktok>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
