import { useState } from "react";
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
  const [jobs, setJobs] = useState(rawJobData);
  const [activeTab, setActiveTab] = useState(0);
  const activePanel = jobs[activeTab];

  return (
    <section id="jobs" className="max-w-5xl">
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
            <span className="text-white">{activePanel.title}</span>
            <span className="text-green">&nbsp;@&nbsp;</span>
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