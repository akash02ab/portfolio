const navStyle = `
  flex
  justify-between
  items-center
  h-24
`;

const navListWrapper = `
  flex
  items-center
`;

const navLinkStyle = `
  flex
  justify-between
  list-none
`;

const listStyle = `
  relative
  counter-increment
  text-sm
`;

const linkStyle = `
  p-2.5
  text-lightest-slate
  hover:text-green
  before:content-['0'counter(item)'.']
  before:mr-1
  before:text-green
  before:text-xs
`;

export {
  navStyle,
  navListWrapper,
  navLinkStyle,
  listStyle,
  linkStyle,
};