const logoStyle = `
  fill-green
  cursor-pointer
  animate-drop
`;

const navStyle = `
  flex
  justify-between
  items-center
  h-16
  md:h-24
  transition-all
  ease-in
  duration-200
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
  bg-light-navy
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
  text-lightest-slate
  hover:text-green
  before:content-['0'counter(item)'.']
  before:mr-1
  before:text-green
  before:text-xs
  flex
  flex-col
  md:flex-row
  items-center
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