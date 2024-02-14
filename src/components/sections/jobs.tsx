import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { rawJobData } from "@/lib/data";
import HyperLink from "../hyperlink";
import Title from "../title";
import {
  activeTabStyle,
  controlListStyle,
  controlWrapper,
  jobSectionWrapper,
  rangeStyle,
  tabStyle,
  tabWrapper,
  titleStyle
} from "../styles/jobs.style";

interface DataT {
  title: string
  company: string
  range: string
  url: string
  control: Array<string>
}

export default function Jobs() {
  const [sectionStyle, setSectionStyle] = useState('max-w-5xl invisible');
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.01 });
  const [jobs, setJobs] = useState(rawJobData);
  const [activeTab, setActiveTab] = useState(0);
  const activePanel = jobs[activeTab];

  useEffect(() => {
    if (isIntersecting && !sectionStyle.includes('animate-appear')) {
      setSectionStyle('max-w-5xl animate-appear');
    }
  }, [isIntersecting, sectionStyle]);

  return (
    <section id="jobs" ref={ref} className={sectionStyle}>
      <Title index="02">Where I&apos;ve Worked</Title>
      <article className={jobSectionWrapper}>
        <div className={tabWrapper}>
          {
            jobs.map(({ company }: DataT, index: number) => {
              const style = index === activeTab ? activeTabStyle : tabStyle;
              return (
                <button
                  key={index}
                  className={style}
                  onClick={() => setActiveTab(index)}
                >
                  {company}
                </button>
              )
            })
          }
        </div>
        <div>
          <h3 className={titleStyle}>
            <span className="dark:text-lightest-slate text-charcoal">{activePanel.title}</span>
            <span className="dark:text-green text-coral-red">&nbsp;@&nbsp;</span>
            <HyperLink
              href={activePanel.url}
              target="_blank"
              rel="noreferrer"
            >
              {activePanel.company}
            </HyperLink>
          </h3>
          <p className={rangeStyle}>{activePanel.range}</p>
          <ul className={controlWrapper}>
            {
              activePanel.control.map((ctrl: string, index: number) => (
                <li key={index} className={controlListStyle}>{ctrl}</li>)
              )
            }
          </ul>
        </div>
      </article>
    </section>
  )
}