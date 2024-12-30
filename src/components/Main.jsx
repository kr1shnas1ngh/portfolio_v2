import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import leetcodeIcon from '../assets/leetcode.svg';
import mailIcon from '../assets/mail.svg';
import instagramIcon from '../assets/instagram.svg';
import resumeIcon from '../assets/resume.svg';
import homepageGif from '../assets/homepage.gif';
import resume from '../assets/Krishna_Singh_Resume.pdf';

function Main() {
    return (
        <div className="bg-background text-text1 grid grid-cols-1 lg:grid-cols-2 px-3 pt-4 lg:px-0 min-h-[50vh] lg:min-h-[70vh] lg:max-w-[60vw] w-full font-text1 items-center">
            
            {/* Text Column */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:px-0">
                <div className="text-[1.5rem] lg:text-[3rem] font-text2">Hi, I'm <span className="text-primary1">Krishna</span></div>
                <div className="lg:text-[1.5rem] text-[1rem]">Web Developer</div>
                <div className="text-text2 lg:py-8 py-5">
                    I build clean, responsive websites and enjoy learning new technologies. I’m passionate about using code to solve problems and create impactful digital experiences.
                </div>
                <div className="text-text2">
                    <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-4 font-text2">
                        <li>
                            <a href="https://github.com/kr1shnas1ngh" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                                <img className="h-4" src={githubIcon} alt="GitHub" />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/krishnasinghdev/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                                <img className="h-4" src={linkedinIcon} alt="LinkedIn" />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/u/kr1shna_s1ngh/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                                <img className="h-4" src={leetcodeIcon} alt="Leetcode" />
                                <span>Leetcode</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:krishnasingh2782005@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                                <img className="h-4" src={mailIcon} alt="Email" />
                                <span>Email</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/krishnasinghh/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                                <img className="h-4" src={instagramIcon} alt="Instagram" />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                        <a href={resume} download="Krishna_Singh_Resume.pdf" className="flex items-center space-x-2 border-b-2 border-current hover:border-primary1">
                            <img className="h-4" src={resumeIcon} alt="Resume" />
                            <span>Resume</span>
                        </a>

                        </li>
                    </ul>
                </div>
            </div>

            {/* Image Column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end px-4">
                <img 
                    src={homepageGif} 
                    alt="Krishna" 
                    className="rounded-3xl h-[50vw] lg:h-[40vh] border-primary1 border-[3px]" 
                />
            </div>
        </div>
    );
}

export default Main;
