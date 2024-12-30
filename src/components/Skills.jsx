import React from 'react';

function Skills() {
    // Array of skill objects with categories
    const skills = [
        { name: "HTML", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", category: "Languages" },
        { name: "CSS", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg", category: "Languages" },
        { name: "JavaScript", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg", category: "Languages" },
        { name: "Python", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Languages" },
        { name: "Java", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Languages" },
        { name: "C", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg", category: "Languages" },
        { name: "C++", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg", category: "Languages" },
        { name: "React", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Frameworks" },
        { name: "Tailwind", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Frameworks" },
        { name: "Git", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tools" },
        { name: "SQL", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Databases" },
        { name: "MongoDB", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", category: "Databases" },
    ];

    // Group skills by category
    const skillCategories = skills.reduce((acc, skill) => {
        (acc[skill.category] = acc[skill.category] || []).push(skill);
        return acc;
    }, {});

    return (
        <div className='lg:w-[60vw] w-full flex flex-col justify-center px-3 py-[4rem] lg:py-[6rem] lg:px-0'>
            <div className="text-[2rem] font-text2 text-primary1 lg:text-start text-center mb-4">Skills</div>
            <div className="flex flex-col gap-4 lg:gap-8 border-t border-text2 pt-3">
                {Object.keys(skillCategories).map((category) => (
                    <div className='py-4 lg:py-0' key={category}>
                        <h3 className="text-xl font-text2 lg:text-start text-center text-text2 ">{category}</h3>
                        <div className="flex flex-wrap lg:justify-start justify-center gap-2 lg:gap-4 mt-2">
                            {skillCategories[category].map((skill, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center text-text2 hover:bg-cardBackground font-text1 text-medium p-4 rounded-lg w-24 h-24"
                                >
                                    <img src={skill.imgSrc} alt={skill.name} className="w-12 h-12 mb-2" />
                                    <div className="text-center font-medium text-[0.75rem] lg:text-[1rem]">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
