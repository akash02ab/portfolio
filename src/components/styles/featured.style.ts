const featuredWrapper = `
  flex
  flex-col
  gap-y-12
  md:gap-y-24
  my-10
`;

const featureContainer = `
  grid
  grid-cols-12
  items-center
  gap-2.5
`;

const featureContent_E = `
  flex
  flex-col
  gap-y-4
  col-start-1
  col-end-[-1]
  md:col-end-10
  lg:col-end-8
  row-span-full
  p-6
  md:p-0
  z-[2]
`;

const featureContent_O = `
  flex
  flex-col
  gap-y-4
  col-start-1
  col-end-[-1]
  md:col-start-4
  lg:col-start-6
  md:text-right
  row-span-full
  p-6
  md:p-0
  z-[2]
`;

const labelStyle = `
  text-sm
  dark:text-green
  text-coral-red
`;

const titleStyle = `
  text-lg
  sm:text-xl
  md:text-2xl
  font-bold
  dark:text-lightest-slate
  dark:hover:text-green
  text-charcoal
  hover:text-coral-red
  cursor-pointer
`;

const descriptionStyle = `
  text-xs
  sm:text-sm
  md:text-base
  dark:text-light-slate
  dark:bg-light-navy
  text-battleship-grey
  bg-salmon-red
  p-6
  rounded-lg
  shadow-lg
`;

const techWrapper_E = `
  flex
  flex-wrap
`;

const techWrapper_O = `
  flex
  flex-wrap
  md:justify-end
`;

const techStyle_E = `
  dark:text-light-slate
  text-light-battleship-grey
  text-sm
  mr-5
  mb-1
`;

const techStyle_O = `
  dark:text-light-slate
  text-light-battleship-grey
  text-sm
  md:ml-5
  mb-1
`;

const linkWrapper_E = `
  flex
  items-center
  space-x-2
`;

const linkWrapper_O = `
  flex
  items-center
  md:justify-end
  space-x-2
`;

const linkStyle = `
  dark:text-lightest-slate
  dark:hover:text-green
  text-battleship-grey
  hover:text-coral-red
`;

const imageWrapper_E = `
  relative
  w-auto
  h-full
  col-start-1
  col-end-[-1]
  md:col-start-4
  lg:col-start-6
  row-span-full
  border-2
  dark:border-light-navy
  border-salmon-red
  rounded
  dark:bg-green
  bg-coral-red
  z-[1]
  opacity-10
  md:opacity-70
  md:hover:opacity-100
 `;

const imageWrapper_O = `
  relative
  w-auto
  h-auto
  col-start-1
  col-end-[-1]
  md:col-end-11
  lg:col-end-8
  row-span-full
  border-2
  dark:border-light-navy
  border-salmon-red
  rounded
  dark:bg-green
  bg-coral-red
  z-[1]
  opacity-10
  md:opacity-70
  md:hover:opacity-100
 `;

const imageStyle = `
  w-full
  h-full
  object-cover
  mix-blend-multiply
  grayscale
  hover:mix-blend-normal
  hover:grayscale-0
  transitoin-all
  ease-out
  duration-100
`;

const style = {
  featuredWrapper,
  featureContainer,
  featureContent_E,
  featureContent_O,
  labelStyle,
  titleStyle,
  descriptionStyle,
  techWrapper_E,
  techWrapper_O,
  techStyle_E,
  techStyle_O,
  linkWrapper_E,
  linkWrapper_O,
  linkStyle,
  imageWrapper_E,
  imageWrapper_O,
  imageStyle
};

export default style;