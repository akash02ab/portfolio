const socialWrapper = `
  w-full
  mb-4
  relative
  bottom-0
  left-2
  z-[8]
  flex
  items-center
  justify-center
  gap-5
  md:w-10
  md:m-0
  md:fixed
  md:flex-col
  lg:left-6
  animate-jump
  after:hidden
  after:md:inline-block
  after:content-['']
  after:w-px
  after:h-40
  after:mx-0
  after:my-auto
  after:bg-light-slate
`;

const socialStyle = `
  text-lightest-slate
  hover:text-green
  hover:-translate-y-1
  transition-all
  ease-in
  duration-150
`;

export {
  socialWrapper,
  socialStyle
};