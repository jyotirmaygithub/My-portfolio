import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center my-20 space-y-5">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Jyotirmay Gupta
      </p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
