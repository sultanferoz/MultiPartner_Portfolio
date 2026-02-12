"use client";

import {
  SiDatabricks,
  SiApacheairflow,
  SiTensorflow,
  SiTableau,
  SiApachekafka,
  SiSnowflake,
} from "react-icons/si";

import {
  FaDatabase,
  FaProjectDiagram,
  FaChartLine,
  FaCogs,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function ExpertiseSection() {
  const Checkmarks = [
    "Transport Policy Shift: Influenced TfL's launch of Off-Peak Fridays through my “Friday Effect” analysis, helping reshape commuter patterns and drive post-pandemic recovery in Central London.",
    "AI Integration at Scale: Deployed GPT-4 automation to streamline data workflows, eliminating 96% of manual review time and setting the groundwork for AI-driven operations in planning.",
    "Civic Data Engagement: Delivered the technical backbone for a mayoral exhibition on planning services, translating complex datasets into accessible visuals viewed by over 1k+ Londoners (est.).",
  ];

  const columns = [
    [
      {
        title: "Data Engineering",
        icon: <SiDatabricks />,
        desc: "Designing scalable and reliable data systems.",
      },
      {
        title: "Pipeline Architecture",
        icon: <SiApacheairflow />,
        desc: "Building automated and efficient data pipelines.",
      },
      {
        title: "AI & Machine Learning Enablement",
        icon: <SiTensorflow />,
        desc: "Empowering intelligent solutions with ML models.",
      },
      {
        title: "Master Data Management",
        icon: <FaDatabase />,
        desc: "Ensuring centralized and consistent core data assets.",
      },
      {
        title: "Business Intelligence",
        icon: <FaChartLine />,
        desc: "Transforming data into actionable insights.",
      },
      {
        title: "Executive Reporting",
        icon: <SiApacheairflow/>,
        desc: "Delivering strategic dashboards for leadership.",
      },
      {
        title: "Data Quality",
        icon: <FaRegCheckCircle />,
        desc: "Maintaining data accuracy and reliability.",
      },
      {
        title: "End-to-End Digital Transformation Delivery",
        icon: <FaProjectDiagram />,
        desc: "Driving full-cycle digital innovation initiatives.",
      },
    ],

    [
      {
        title: "Real-Time Data Streaming",
        icon: <SiApachekafka />,
        desc: "Enabling real-time event-driven architectures.",
      },
      {
        title: "Cloud Data Warehousing",
        icon: <SiSnowflake />,
        desc: "Modern scalable cloud-based data platforms.",
      },
      {
        title: "Advanced Analytics",
        icon: <FaChartLine />,
        desc: "Deep insights with predictive modeling.",
      },
      {
        title: "Process Automation",
        icon: <FaCogs />,
        desc: "Optimizing workflows through automation.",
      },
      {
        title: "Data Visualization",
        icon: <SiTableau />,
        desc: "Interactive dashboards and visual storytelling.",
      },
      {
        title: "Governance & Compliance",
        icon: <FaRegCheckCircle />,
        desc: "Ensuring secure and compliant data operations.",
      },
      {
        title: "Scalable Infrastructure",
        icon: <SiDatabricks />,
        desc: "Robust infrastructure for growing businesses.",
      },
      {
        title: "Enterprise Strategy",
        icon: <FaProjectDiagram />,
        desc: "Aligning data initiatives with business goals.",
      },
    ],
  ];

  return (
    <section className="pt-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
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
                        if (i % 2 === 0) bgClass = "bg-blue text-white";
                      } else {
                        if (i % 2 !== 0) bgClass = "bg-blue text-white";
                      }

                      return (
                        <div
                          key={i}
                          className={`${bgClass} rounded-lg shadow-md px-4 py-6 flex flex-col items-center text-center w-45 md:w-40 lg:w-65`}
                        >
                          <div className={`text-3xl mb-4 text-primary`}>
                            {item.icon}
                          </div>
                          <h3
                            className={`font-semibold text-sm mb-2 ${bgClass}`}
                          >
                            {item.title}
                          </h3>
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
