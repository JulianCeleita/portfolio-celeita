import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const RelatedProject = {
  title: "Related Projects",
  Projects: [
    {
      id: 1,
      title: "Mobile UI",
      img: "/superstore.png",
    },
    {
      id: 2,
      title: "Web Application",
      img: "/reports3.png",
    },
    {
      id: 3,
      title: "UI Design",
      img: "/supernews2.png",
    },
    {
      id: 4,
      title: "Kabul Mobile App UI",
      img: "/happycheck.png",
    },
  ],
};

function RelatedProjects() {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 ">
        {RelatedProject.Projects.map((project) => {
          return (
            <Image
              src={project.img}
              className="rounded-xl cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
              width="400"
              height="400"
              alt={project.title}
              key={project.id}
              onClick={() => window.location.href = `/projects/${project.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjects;
