import Intro from "@/components/Intro";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="md:flex">
      <Intro />
      <Cart />
    </main>
  );
}
