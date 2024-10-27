import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main class="text-center p-4">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1 class="text-[#335d92] uppercase text-16 font-100 leading-[1.1] my-16">Page Not Found</h1>
      <p class="my-8 leading-[1.35]">
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank" class="underline text-[#335d92]">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
