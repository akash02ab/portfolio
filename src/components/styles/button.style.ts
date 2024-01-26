const buttonStyle = `
  text-green
  text-sm
  bg-transparent
  font-normal
  border-solid
  border
  border-green
  rounded
  relative
  z-[1]

  after:content-['']
  after:absolute
  after:w-0
  after:h-full
  after:top-0
  after:left-1/2
  after:z-[-1]
  after:transition-[width]
  after:duration-150
  after:ease-in-out
  after:-translate-x-1/2
  after:bg-green

  hover:text-dark-navy
  hover:after:w-full
`;

export { buttonStyle };