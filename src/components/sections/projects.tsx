import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projectData } from "@/lib/data";
import Folder from "../../../public/folder.svg";
import Github from "../../../public/github.svg";
import External from "../../../public/external.svg";
import Button from "../button";
import {
  descriptionStyle,
  folderStyle,
  footerStyle,
  headerStyle,
  headingStyle,
  linkStyle,
  linkWrapper,
  projectContainer,
  projectsWrapper,
  sectionWrapper,
  techStyle,
  titleStyle
} from "../styles/projects.style";

export default function Projects() {
  const GRID_LIMIT = 6;
  const [sectionStyle, setSectionStyle] = useState(sectionWrapper);
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.01 });
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState(projectData);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;
  const buttonText = showMore ? 'Show Less' : 'Show More';
  const showHandler = () => setShowMore((prev) => !prev);
  const openProjectHandler = (e: MouseEvent, link: string) => {
    const element = e.target as HTMLElement
    const tagName = element.tagName.toLowerCase();
    if (tagName === 'svg' || tagName === 'path') return;
    window.open(link, "_blank");
  }

  useEffect(() => {
    if (isIntersecting && !sectionStyle.includes('animate-appear')) {
      const newSectionStyle = sectionStyle.replace('invisible', '').trim();
      setSectionStyle(newSectionStyle + ' animate-appear');
    }
  }, [isIntersecting, sectionStyle]);

  return (
    <section ref={ref} className={sectionStyle}>
      <h2 className={titleStyle}>Other Noteworthy Projects</h2>
      <div className={projectsWrapper}>
        {projectsToShow.map((project, index) => {
          return (
            <div
              key={index}
              onClick={(e) => openProjectHandler(e, project.url)}
              className={projectContainer}
            >
              <header className={headerStyle}>
                <Folder
                  width="36"
                  height="36"
                  className={folderStyle}
                />
                <span className={linkWrapper}>
                  <Link href={project.github} target="_blank">
                    <Github
                      width="20"
                      height="20"
                      className={linkStyle}
                    />
                  </Link>
                  <Link href={project.url} target="_blank">
                    <External
                      width="22"
                      height="22"
                      className={linkStyle}
                    />
                  </Link>
                </span>
              </header>
              <h3 className={headingStyle}>{project.title}</h3>
              <p className={descriptionStyle}>{project.description}</p>
              <footer className={footerStyle}>
                {
                  project.tech_stack.map((tech, index) => (
                    <span key={index} className={techStyle}>{tech}</span>)
                  )
                }
              </footer>
            </div>
          )
        })}
      </div>
      <Button onClick={showHandler}>{buttonText}</Button>
    </section>
  )
}