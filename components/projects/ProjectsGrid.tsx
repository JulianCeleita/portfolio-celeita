import { useState } from "react";
import { projectsData } from "../../data/projectsData";
import ProjectSingle from "./ProjectSingle";

function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState<string>();
  const [selectProject, setSelectProject] = useState<string>("");

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center mb-12">
        <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>
      <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => (
              <ProjectSingle key={index} {...project} />
            ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
