const sectionWrapper = `
  flex
  flex-col
  gap-10
  items-center
  max-w-5xl
  invisible
`;

const titleStyle = `
  dark:text-lightest-slate
  text-charcoal
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
  dark:bg-light-navy
  bg-desert-sand
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
  dark:text-green
  text-coral-red
`;

const linkStyle = `
  dark:text-lightest-slate
  dark:hover:text-green
  text-battleship-grey
  hover:text-coral-red
`;

const headingStyle = `
  dark:text-lightest-slate
  text-battleship-grey
  text-lg
  md:text-xl
  font-bold
  pb-1
  dark:group-hover:text-green
  group-hover:text-coral-red
`;

const descriptionStyle = `
  dark:text-light-slate
  text-battleship-grey
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
  dark:text-slate
  text-light-battleship-grey
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