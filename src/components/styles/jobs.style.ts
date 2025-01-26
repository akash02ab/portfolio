const jobSectionWrapper = `
  flex
  flex-col
  md:flex-row
  gap-8
  lg:gap-10
  xl:gap-16
  my-10
`;

const tabWrapper = `
  flex
  items-start
  w-[90vw]
  overflow-x-auto
  md:w-fit
  md:flex-col
  md:min-w-max
`;

const tabStyle = `
  w-full
  min-w-fit
  px-4
  py-3
  dark:text-slate
  text-charcoal
  text-xs
  max-md:border-b
  md:border-l
  dark:border-lightest-navy
  border-salmon-red
  cursor-pointer
  dark:hover:bg-light-navy
  hover:bg-desert-sand
`;

const activeTabStyle = `
  w-full
  min-w-[211px]
  px-4
  py-3
  font-bold
  dark:text-green
  text-battleship-grey
  text-xs
  sm:text-sm
  dark:bg-light-navy
  bg-salmon-red
  max-md:border-b-2
  md:border-l-2
  dark:border-green
  border-coral-red
  cursor-pointer
  dark:hover:bg-light-navy
  hover:coral-red
`;

const titleStyle = `
  font-bold
  text-xl
  mb-0.5
`;

const rangeStyle = `
  dark:text-light-slate
  text-light-battleship-grey
  text-xs
  mb-4
`;

const controlWrapper = `
  flex
  flex-col
  space-y-1
  ml-2
`;

const controlListStyle = `
  dark:text-slate
  text-charcoal
  text-sm
  sm:text-base
  pl-4
  relative

  before:absolute
  before:content-['▹']
  before:left-0
  dark:before:text-green
  before:text-coral-red
`;

export {
  jobSectionWrapper,
  tabWrapper,
  tabStyle,
  activeTabStyle,
  titleStyle,
  rangeStyle,
  controlWrapper,
  controlListStyle
};