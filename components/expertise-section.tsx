// "use client";

// import {
//   SiPython,
//   SiApachespark,
//   SiDatabricks,
//   SiGithub,
//   SiJupyter,
//   SiPostgresql,
// } from "react-icons/si";
// import { FaProjectDiagram, FaRobot, FaDatabase, FaCogs } from "react-icons/fa";

// export default function ExpertiseSection() {
//   const columns = [
//     [
//       { name: "Python / Pandas", icon: <SiPython /> },
//       { name: "PySpark", icon: <SiApachespark /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//       { name: "Data Pipelines", icon: <FaProjectDiagram /> },
//       { name: "ETL Automation", icon: <FaCogs /> },
//       { name: "Feature Eng.", icon: <FaDatabase /> },
//       { name: "ML Models", icon: <FaRobot /> },
//       { name: "Forecasting", icon: <FaProjectDiagram /> },
//       { name: "NLP", icon: <FaRobot /> },
//       { name: "Databricks", icon: <SiDatabricks /> },
//       { name: "GitHub", icon: <SiGithub /> },
//       { name: "Jupyter", icon: <SiJupyter /> },
//       { name: "Data Modeling", icon: <FaDatabase /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//       { name: "Python / Pandas", icon: <SiPython /> },
//     ],
//     [
//       { name: "Feature Eng.", icon: <FaDatabase /> },
//       { name: "ML Models", icon: <FaRobot /> },
//       { name: "Forecasting", icon: <FaProjectDiagram /> },
//       { name: "NLP", icon: <FaRobot /> },
//       { name: "Databricks", icon: <SiDatabricks /> },
//       { name: "Python / Pandas", icon: <SiPython /> },
//       { name: "PySpark", icon: <SiApachespark /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//       { name: "Data Pipelines", icon: <FaProjectDiagram /> },
//       { name: "ETL Automation", icon: <FaCogs /> },
//       { name: "GitHub", icon: <SiGithub /> },
//       { name: "Jupyter", icon: <SiJupyter /> },
//       { name: "Data Modeling", icon: <FaDatabase /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//       { name: "Python / Pandas", icon: <SiPython /> },
//     ],
//     [
//       { name: "GitHub", icon: <SiGithub /> },
//       { name: "Jupyter", icon: <SiJupyter /> },
//       { name: "Data Modeling", icon: <FaDatabase /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//       { name: "Python / Pandas", icon: <SiPython /> },
//       { name: "Feature Eng.", icon: <FaDatabase /> },
//       { name: "ML Models", icon: <FaRobot /> },
//       { name: "Forecasting", icon: <FaProjectDiagram /> },
//       { name: "NLP", icon: <FaRobot /> },
//       { name: "Databricks", icon: <SiDatabricks /> },
//       { name: "Python / Pandas", icon: <SiPython /> },
//       { name: "PySpark", icon: <SiApachespark /> },
//       { name: "SQL", icon: <SiPostgresql /> },
//     ],
//   ];

//   const Checkmarks = [
//     "Transport Policy Shift: Influenced TfL's launch of Off-Peak Fridays through my “Friday Effect” analysis, helping reshape commuter patterns and drive post-pandemic recovery in Central London.",
//     "AI Integration at Scale: Deployed GPT-4 automation to streamline data workflows, eliminating 96% of manual review time and setting the groundwork for AI-driven operations in planning.",
//     "Civic Data Engagement: Delivered the technical backbone for a mayoral exhibition on planning services, translating complex datasets into accessible visuals viewed by over 1k+ Londoners (est.).",
//   ];

//   return (
//     <section className="pt-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-14 items-center">
//           {/* Left Content */}
//           <div>
//             <h2 className="text-[32px] lg:text-[48px] font-bold text-[#1a2332] mb-8">
//               <span className="text-[#4a9ba5]">Achievements &</span>
//               <br />
//               Dedicated Expertise
//             </h2>

//             <div className="space-y-4 mb-8">
//               {Checkmarks.map((item, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-[#c4e962] text-[#1a2332] flex items-center justify-center mt-1 flex-shrink-0">
//                     ✓
//                   </div>
//                   <p className="text-gray-700">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content: Seamless Infinite Vertical Carousel */}
//           <div className="Carousel flex gap-2 h-85 overflow-hidden">
//             {columns.map((col, colIndex) => {
//               const direction = colIndex % 2 === 0 ? "up" : "down";
//               return (
//                 <div key={colIndex} className="flex-1 overflow-hidden relative">
//                   <div
//                     className={`flex flex-col gap-2 animate-verticalScroll-${direction}`}
//                   >
//                     {[...col, ...col].map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex flex-col items-center gap-1"
//                       >
//                         <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shadow-xl text-secondary text-2xl">
//                           {item.icon}
//                         </div>
//                         <span className="text-xs text-secondary font-semibold text-center">
//                           {item.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }

"use client";

import {
  SiPython,
  SiApachespark,
  SiDatabricks,
  SiGithub,
  SiJupyter,
  SiPostgresql,
} from "react-icons/si";
import { FaProjectDiagram, FaRobot, FaDatabase, FaCogs } from "react-icons/fa";

export default function ExpertiseSection() {

  const Checkmarks = [
    "Transport Policy Shift: Influenced TfL's launch of Off-Peak Fridays through my “Friday Effect” analysis, helping reshape commuter patterns and drive post-pandemic recovery in Central London.",
    "AI Integration at Scale: Deployed GPT-4 automation to streamline data workflows, eliminating 96% of manual review time and setting the groundwork for AI-driven operations in planning.",
    "Civic Data Engagement: Delivered the technical backbone for a mayoral exhibition on planning services, translating complex datasets into accessible visuals viewed by over 1k+ Londoners (est.).",
  ];

  const columns = [
    [
      {
        title: "Databricks",
        icon: <SiDatabricks />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "GitHub",
        icon: <SiGithub />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Jupyter",
        icon: <SiJupyter />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Data Modeling",
        icon: <FaDatabase />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "IT Consultancy",
        icon: <SiPython />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Cloud Computing",
        icon: <SiApachespark />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Cyber Security",
        icon: <SiPostgresql />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Backup & Recovery",
        icon: <FaProjectDiagram />,
        desc: "Astonished set expression solicitude way admiration",
      },
    ],
    [
      {
        title: "ML Models",
        icon: <FaRobot />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Feature Eng.",
        icon: <FaDatabase />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Forecasting",
        icon: <FaProjectDiagram />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "NLP",
        icon: <FaRobot />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Databricks",
        icon: <SiDatabricks />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "GitHub",
        icon: <SiGithub />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Jupyter",
        icon: <SiJupyter />,
        desc: "Astonished set expression solicitude way admiration",
      },
      {
        title: "Data Modeling",
        icon: <FaDatabase />,
        desc: "Astonished set expression solicitude way admiration",
      },
    ],
  ];

  return (
    <section className="pt-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[42px] lg:text-[48px] font-bold text-[#1a2332] mb-8">
              <span className="text-[#4a9ba5]">Achievements &</span>
              <br />
              Dedicated Expertise
            </h2>

            <div className="space-y-4 mb-8">
              {Checkmarks.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c4e962] text-[#1a2332] flex items-center justify-center mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-70 text-[12px] lg:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 h-97 overflow-hidden  ">
            {columns.map((col, colIndex) => {
              const direction = colIndex % 2 === 0 ? "up" : "down";

              return (
                <div key={colIndex} className="flex-1 overflow-hidden relative">
                  <div
                    className={`flex flex-col items-end gap-6 animate-verticalScroll-${direction}`}
                  >
                    {[...col, ...col].map((item, i) => {
                      let bgClass = "bg-white";
                      if (colIndex % 2 === 0) {
                        if (i % 2 === 0) bgClass = "bg-muted";
                      } else {
                        if (i % 2 !== 0) bgClass = "bg-muted";
                      }

                      return (
                        <div
                          key={i}
                          className={`${bgClass} rounded-lg shadow-md px-4 py-6 flex flex-col items-center text-center w-45 md:w-40 lg:w-65`}
                        >
                          <div className="text-3xl mb-4 text-primary">
                            {item.icon}
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-secondary">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
