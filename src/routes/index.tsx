import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center p-4">
      <Title>Hello World</Title>
      <h1 class="text-[#335d92] uppercase text-16 font-100 leading-[1.1] my-16">Hello world!</h1>
      <Counter />
      <p class="my-8 leading-[1.35]">
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
