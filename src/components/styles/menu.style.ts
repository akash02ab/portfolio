const menuWrapper = `
  w-10
  h-4
  z-10
  relative
  cursor-pointer
  md:hidden
  animate-drop
`;

const menuStyle = `
  h-0.5
  bg-green
  absolute
  inline-block
  transition-all
  duration-150
  ease-in
`;

const topCloseStyle = `
  w-full
  top-0
  right-0
`;

const topOpenStyle = `
  w-4/5
  top-0
  right-0
  origin-left
  rotate-45
  translate-x-0.5
`;

const middleCloseStyle = `
  w-4/5
  top-1/2
  right-0
`;

const middleOpenStyle = `
  w-0
  top-1/2
  right-0
`;

const bottomCloseStyle = `
  w-3/5
  top-full
  right-0
`;

const bottomOpenStyle = `
  w-4/5
  origin-right
  -rotate-45
`;

export { 
  menuWrapper,
  menuStyle,
  topOpenStyle,
  topCloseStyle,
  middleOpenStyle,
  middleCloseStyle,
  bottomOpenStyle,
  bottomCloseStyle,
};