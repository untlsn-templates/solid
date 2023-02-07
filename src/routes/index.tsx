import Navigation from '~/components/Navigation';

export default function Home() {
  return (
    <main class="font-sans grid place-items-center min-h-screen bg-c-carbon">
      <article class="space-y-4">
        <img src="/favicon.svg" alt="logo" class="h-50" />
      </article>
      <Navigation />
    </main>
  );
}
