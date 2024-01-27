const jobSectionWrapper = `
  flex
  flex-col
  md:flex-row
  justify-between
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
  text-slate
  text-xs
  max-md:border-b
  md:border-l
  border-lightest-navy
  cursor-pointer
  hover:bg-light-navy
`;

const activeTabStyle = `
  w-full
  min-w-fit
  px-4
  py-3
  font-bold
  text-green
  text-xs
  bg-light-navy
  max-md:border-b-2
  md:border-l-2
  border-green
  cursor-pointer
  hover:bg-light-navy
`;

const titleStyle = `
  font-bold
  text-xl
  mb-0.5
`;

const rangeStyle = `
  text-light-slate
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
  text-slate
  text-sm
  sm:text-base
  pl-4
  relative

  before:absolute
  before:content-['▹']
  before:left-0
  before:text-green
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