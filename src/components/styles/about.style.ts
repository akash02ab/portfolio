const aboutWrapper = `
  my-10
  flex
  flex-col
  justify-center
  md:grid
  md:grid-cols-7
  md:justify-between
  gap-12
`;

const articleStyle = `
  col-span-4
  space-y-4
`;

const figureStyle = `
  w-fit
  col-span-3
  md:self-start
  border-2
  dark:border-light-navy
  border-salmon-red
  rounded
  dark:bg-green
  bg-coral-red-tint
  relative
  z-[1]
  ease-in
  duration-200
  transition-all
  hover:-translate-x-1
  hover:-translate-y-1

  before:absolute
  before:content-['']
  before:w-full
  before:h-full
  before:border-solid
  dark:before:border-green
  before:border-coral-red
  before:border-2
  before:translate-x-3
  before:translate-y-3
  before:rounded
  before:z-[-1]
  before:transition-all
  before:ease-in
  before:duration-200
  hover:before:translate-x-5
  hover:before:translate-y-5
`;

const imageStyle = `
  mix-blend-multiply
  grayscale
  hover:mix-blend-normal
  hover:grayscale-0
  transitoin-all
  ease-in
  duration-200
`;

const textStyle = `
  dark:text-slate
  text-charcoal
  text-sm
  md:text-base
  lg:text-lg
`;

const listWrapper = `
  grid
  grid-cols-[repeat(2,minmax(140px,_200px))]
  gap-2
`;

const listStyle = `
  dark:text-slate
  text-charcoal
  text-xs
  sm:text-sm
  pl-4
  relative

  before:absolute
  before:content-['▹']
  before:left-0
  dark:before:text-green
  before:text-coral-red
`;

const highlightedStyle = `
  text-bold
  dark:text-pink
  text-blue
`;


export {
  aboutWrapper,
  articleStyle,
  figureStyle,
  imageStyle,
  textStyle,
  listStyle,
  listWrapper,
  highlightedStyle
};