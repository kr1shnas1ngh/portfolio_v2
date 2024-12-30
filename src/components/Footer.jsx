import React from "react";
import gmailIcon from "../assets/mail.svg";
import linkedinIcon from "../assets/linkedin.svg";

const tailwindIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
const reactIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";

function Footer() {
  return (
    <footer className="bg-background border-t lg:max-w-[60vw] border-text2 text-text2 w-full py-6 flex flex-col items-center space-y-4">
      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-8">
        <div className="flex space-x-4">
          <a href="mailto:krishnasingh2782005@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a
            href="https://linkedin.com/in/krishnasinghdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
        </div>
        <div className="flex space-x-6 text-sm">
          <a className="hover:text-primary1 transition-colors" href="#home">Home</a>
          <a className="hover:text-primary1 transition-colors" href="#skills">Skills</a>
          <a className="hover:text-primary1 transition-colors" href="#projects">Projects</a>
        </div>
      </div>

      {/* Credits */}
      <div className="flex space-x-2 text-xs items-center">
        <span>Made using</span>
        <img src={reactIcon} alt="React" className="w-4 h-4" />
        <span>and</span>
        <img src={tailwindIcon} alt="Tailwind" className="w-4 h-4" />
        <span>by Krishna Singh</span>
      </div>
    </footer>
  );
}

export default Footer;
