import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredData } from "@/lib/data";
import Title from "../title";
import Github from "../../../public/github.svg";
import External from "../../../public/external.svg";
import { descriptionStyle, featureContainer, featureContent, featuredWrapper, imageStyle, imageWrapper, labelStyle, linkStyle, linkWrapper, techStyle, techWrapper, titleStyle } from "../styles/featured.style";

export default function Featured() {
  const [featured, setFeatured] = useState(featuredData);
  return (
    <section id="projects" className="max-w-5xl">
      <Title index="03">Some Things I’ve Built</Title>

      <div className={featuredWrapper}>
        {
          featured.map((feature, index) => {
            return (
              <div key={index} className={featureContainer}>
                <div className={featureContent}>
                  <span>
                    <h6 className={labelStyle}>Featured Project</h6>
                    <h2 className={titleStyle}>{feature.title}</h2>
                  </span>
                  <p className={descriptionStyle}>{feature.description}</p>
                  <ul className={techWrapper}>
                    {
                      feature.tech_stack.map((tech, index) => (
                        <li key={index} className={techStyle}>{tech}</li>
                      ))
                    }
                  </ul>
                  <span className={linkWrapper}>
                    <Link href={feature.github} target="_blank">
                      <Github
                        width="20"
                        height="20"
                        className={linkStyle}
                      />
                    </Link>
                    <Link href={feature.url} target="_blank">
                      <External
                        width="22"
                        height="22"
                        className={linkStyle}
                      />
                    </Link>
                  </span>
                </div>
                <div className={imageWrapper}>
                  <Image
                    src={feature.img}
                    width={500}
                    height={500}
                    alt={feature.title}
                    className={imageStyle}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}