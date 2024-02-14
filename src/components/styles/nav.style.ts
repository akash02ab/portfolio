const logoStyle = `
  dark:fill-green
  fill-coral-red
  cursor-pointer
  animate-drop
  hover:scale-110
`;

const navStyle = `
  flex
  justify-between
  items-center
  h-16
  md:h-24
`;

const navScrollStyle = `
  fixed  
  top-0
  left-0
  flex
  justify-between
  items-center
  w-full
  h-16
  md:h-24
  px-6
  shadow-xl
  backdrop-blur-sm
  z-[3]
`;

const navListWrapper = `
  flex
  items-center
`;

const navLinkWrapper = `
  fixed
  translate-x-[100vw]
  md:relative
  md:flex
  md:items-center
  md:translate-x-0
`;

const navLinkSideBar = `
  fixed
  top-0
  right-0
  flex
  flex-col
  justify-center
  items-center
  min-w-72
  max-w-96
  h-screen
  z-[9]
  gap-y-5
  dark:bg-light-navy
  bg-desert-sand
  ease-in-out
  transition-all
  duration-150
  translate-x-0
`;

const navLinkStyle = `
  flex
  flex-col
  md:flex-row
  justify-between
  list-none
`;

const listStyle = `
  relative
  counter-increment
  text-md
  md:text-sm
  py-2.5
  md:p-0
`;

const linkStyle = `
  p-2.5
  dark:text-lightest-slate
  dark:hover:text-green
  text-battleship-grey
  hover:text-coral-red
  before:content-['0'counter(item)'.']
  before:mr-1
  dark:before:text-green
  before:text-coral-red
  before:text-xs
  flex
  flex-col
  md:flex-row
  items-center
  hover:scale-110
  animate-drop
`;

const buttonWrapper = `
  md:ml-4
  animate-drop
`;

export {
  logoStyle,
  navStyle,
  navScrollStyle,
  navListWrapper,
  navLinkWrapper,
  navLinkSideBar,
  navLinkStyle,
  listStyle,
  linkStyle,
  buttonWrapper,
};