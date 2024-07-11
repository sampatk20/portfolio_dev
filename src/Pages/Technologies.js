// import React from "react";
// import { techStackDetails } from "../Details";

// function Technologies() {
//   const {
//     cplus,
//     python,
//     html,
//     css,
//     js,
//     react,
//     nodejs,
//     mongodb,
//     flask,
//     tailwind,
//     bootstrap,
//     mysql,
//     swift,
//     vscode,
//     git,
//     github,
//     npm,
//     postman,
//     googlecloud,
//     figma,
//   } = techStackDetails;
//   return (
//     <main className="container mx-auto max-width pt-10 pb-20 ">
//       <section>
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tech Stack
//         </h1>
//         <p className="text-content py-2 lg:max-w-3xl">
//           Technologies I've been working with recently
//         </p>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={cplus} title="cplus" alt="" />
//         <img src={python} title="python" alt="" />
//         <img src={html} title="html" alt="" />
//         <img src={css} title="CSS" alt="" />
//         <img src={js} title="JavaScript" alt="" />
//         <img src={react} title="React" alt="" />
//         <img src={nodejs} title="Nodejs" alt="" />

//         {/* <img src={redux} title="Redux" alt="" /> */}
        
//         <img src={flask} title="Flask" alt="" />
//         <img src={mongodb} title="mongodb" alt="" />
//         <img src={mysql} title="mysql" alt="" />
//         <img src={swift} title="swift" alt="" />
//         <img src={googlecloud} title="googlecloud" alt="" />

//         {/* <img src={tailwind} title="Tailwind CSS" alt="" />
//         <img src={bootstrap} title="Bootstrap" alt="" /> */}
//         {/* <img src={sass} title="SASS" alt="" /> */}
//       </section>
//       <section>
//         <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tools
//         </h1>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={vscode} title="Visual Studio Code" alt="" />
//         <img src={git} title="Git" alt="Git" />
//         <img src={github} title="Github" alt="Github" />
//         <img src={figma} title="Figma" alt="Figma" />
//         <img src={npm} title="NPM" alt="NPM" />
//         <img src={postman} title="Postman" alt="Postman" />
//       </section>
//     </main>
//   );
// }

// export default Technologies;


import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    cplus,
    python,
    html,
    css,
    js,
    react,
    nodejs,
    mongodb,
    flask,
    tailwind,
    bootstrap,
    mysql,
    swift,
    vscode,
    git,
    github,
    npm,
    postman,
    googlecloud,
    figma,
    aws,
  } = techStackDetails;

  const techStack = [
    { src: cplus, title: "C++" },
    { src: python, title: "Python" },
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
    { src: nodejs, title: "Node.js" },
    { src: flask, title: "Flask" },
    { src: mongodb, title: "MongoDB" },
    { src: mysql, title: "MySQL" },
    { src: swift, title: "Swift" },
    { src: googlecloud, title: "Google Cloud" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code" },
    { src: git, title: "Git" },
    { src: github, title: "GitHub" },
    // { src: figma, title: "Figma" },
    { src: aws, title: "AWS" },
    { src: npm, title: "NPM" },
    { src: postman, title: "Postman" },
  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.src} alt={tech.title} className="w-16 h-16" />
            <p className="mt-2 text-center">{tech.title}</p>
          </div>
        ))}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tool.src} alt={tool.title} className="w-16 h-16" />
            <p className="mt-2 text-center">{tool.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
