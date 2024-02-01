import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredData } from "@/lib/data";
import Title from "../title";
import Github from "../../../public/github.svg";
import External from "../../../public/external.svg";
import {
  descriptionStyle,
  featureContainer,
  featureContent_E,
  featureContent_O,
  featuredWrapper,
  imageStyle,
  imageWrapper_E,
  imageWrapper_O,
  labelStyle,
  linkStyle,
  linkWrapper_E,
  linkWrapper_O,
  techStyle_E,
  techStyle_O,
  techWrapper_E,
  techWrapper_O,
  titleStyle
} from "../styles/featured.style";

export default function Featured() {
  const [featured, setFeatured] = useState(featuredData);
  
  const getFeaturedStyle = (index:number) => {
    const isEven = index % 2 === 0;
    return isEven ? [
      featureContent_E,
      imageWrapper_E,
      linkWrapper_E,
      techStyle_E,
      techWrapper_E
    ] : [
      featureContent_O,
      imageWrapper_O,
      linkWrapper_O,
      techStyle_O,
      techWrapper_O
    ];
  };
  return (
    <section id="projects" className="max-w-5xl">
      <Title index="03">Some Things I’ve Built</Title>

      <div className={featuredWrapper}>
        {
          featured.map((feature, index) => {
            
            const [
              featureContent,
              imageWrapper,
              linkWrapper,
              techStyle,
              techWrapper
            ] = getFeaturedStyle(index);

            return (
              <div key={index} className={featureContainer}>
                <div className={featureContent}>
                  <span>
                    <h6 className={labelStyle}>Featured Project</h6>
                    <a className={titleStyle} href={feature.url} target="_blank">{feature.title}</a>
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