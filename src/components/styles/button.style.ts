const buttonStyle = `
  dark:text-green
  text-coral-red
  text-sm
  bg-transparent
  font-normal
  border-solid
  border
  dark:border-green
  border-coral-red
  rounded
  relative
  z-[1]
  px-4
  py-2

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
  dark:after:bg-green
  after:bg-coral-red

  dark:hover:text-dark-navy
  hover:text-vanilla-cream
  hover:after:w-full
`;

export { buttonStyle };