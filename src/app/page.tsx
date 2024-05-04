import Hamburger from "./components/Hamburger/Hamburger";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="flex w-screen relative">
      <Hamburger />
      <Header />
    </main>
  );
}
