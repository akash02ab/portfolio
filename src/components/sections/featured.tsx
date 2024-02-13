import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredData } from "@/lib/data";
import Title from "../title";
import Github from "../../../public/github.svg";
import External from "../../../public/external.svg";
import style from "../styles/featured.style";

export default function Featured() {
  const [featured, setFeatured] = useState(featuredData);
  
  const getFeaturedStyle = (index:number) => {
    const isEven = index % 2 === 0;
    return isEven ? [
      style.featureContent_E,
      style.imageWrapper_E,
      style.linkWrapper_E,
      style.techStyle_E,
      style.techWrapper_E
    ] : [
      style.featureContent_O,
      style.imageWrapper_O,
      style.linkWrapper_O,
      style.techStyle_O,
      style.techWrapper_O
    ];
  };
  return (
    <section id="projects" className="max-w-5xl">
      <Title index="03">Some Things I’ve Built</Title>

      <div className={style.featuredWrapper}>
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
              <div key={index} className={style.featureContainer}>
                <div className={featureContent}>
                  <span>
                    <h6 className={style.labelStyle}>Featured Project</h6>
                    <a className={style.titleStyle} href={feature.url} target="_blank">{feature.title}</a>
                  </span>
                  <p className={style.descriptionStyle}>{feature.description}</p>
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
                        className={style.linkStyle}
                      />
                    </Link>
                    <Link href={feature.url} target="_blank">
                      <External
                        width="22"
                        height="22"
                        className={style.linkStyle}
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
                    className={style.imageStyle}
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