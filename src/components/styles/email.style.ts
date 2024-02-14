const emailWrapper = `
  w-10
  fixed
  bottom-0
  right-2
  lg:right-6
  z-[8]
  hidden
  md:flex
  md:flex-col
  md:items-center
  md:gap-5
  animate-jump
  after:inline-block
  after:content-['']
  after:w-px
  after:h-40
  after:mx-0
  after:my-auto
  dark:after:bg-light-slate
  after:bg-battleship-grey
`;

const emailStyle = `
  mx-5
  my-auto
  p-2.5
  text-xs
  dark:text-light-slate
  dark:hover:text-green
  text-battleship-grey
  hover:text-coral-red
  hover:-translate-y-1
  tracking-[.275em]
  vertical-rl
  transition-all
  ease-in
  duration-150
`;

export {
  emailWrapper,
  emailStyle
};