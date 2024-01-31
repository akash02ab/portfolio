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
  z-[2]
`;

const labelStyle = `
  text-sm
  text-green
`;

const titleStyle = `
  text-lg
  md:text-xl
  font-bold
  text-lightest-slate
  hover:text-green
  cursor-pointer
`;

const descriptionStyle = `
  text-xs
  md:text-sm
  text-light-slate
  bg-light-navy
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
  text-light-slate
  text-sm
  mr-5
  mb-1
`;

const techStyle_O = `
  text-light-slate
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
  text-lightest-slate
  hover:text-green
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
  border-light-navy
  rounded
  bg-green
  z-[1]
  opacity-10
  md:opacity-50
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
  border-light-navy
  rounded
  bg-green
  z-[1]
  opacity-10
  md:opacity-50
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

export {
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