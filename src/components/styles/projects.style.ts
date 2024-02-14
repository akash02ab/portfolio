const sectionWrapper = `
  flex
  flex-col
  gap-10
  items-center
  max-w-5xl
  invisible
`;

const titleStyle = `
  text-lightest-slate
  text-2xl
  md:text-3xl
  font-semibold
`;

const projectsWrapper = `
  grid
  grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]
  lg:gird-cols-[repeat(auto-fill,minmax(300px,_1fr))]
  gap-4
`;

const projectContainer = `
  h-full
  p-6
  md:p-8
  bg-light-navy
  shadow-2xl
  rounded
  flex
  flex-col
  justify-start
  cursor-pointer
  transition-all
  hover:-translate-y-2
  group
`;

const headerStyle = `
  w-full
  flex
  justify-between
  items-center
  pb-8
`;

const linkWrapper = `
  flex
  items-center
  space-x-2
`;

const folderStyle = `
  text-green
`;

const linkStyle = `
  text-lightest-slate
  hover:text-green
`;

const headingStyle = `
  text-lightest-slate
  text-lg
  md:text-xl
  font-bold
  pb-1
  group-hover:text-green
`;

const descriptionStyle = `
  text-light-slate
  text-xs
  md:text-sm
  pb-4
`;

const footerStyle = `
  mt-auto
  flex
  flex-wrap
  items-center
  justify-start
  space-x-4
`;

const techStyle = `
  text-slate
  text-xs
  font-normal
`;


export {
  sectionWrapper,
  titleStyle,
  projectsWrapper,
  projectContainer,
  headerStyle,
  linkWrapper,
  folderStyle,
  linkStyle,
  headingStyle,
  descriptionStyle,
  footerStyle,
  techStyle
}