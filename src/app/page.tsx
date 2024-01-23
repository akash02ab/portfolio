import Nav from "../components/nav";

export default function Home() {
  const containerStyle = `
    dark:bg-navy
    2xl:px-12
    lg:px-10
    xxs:px-6
    h-dvh
  `;
  
  return (
    <main className={containerStyle}>
      <Nav />
    </main>
  );
}
