import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kendi Christine — Chemical Engineer & Web Developer" },
      {
        name: "description",
        content:
          "Personal landing page of Kendi Christine, Chemical Engineering graduate and web developer building clean, modern web experiences.",
      },
      {
        property: "og:title",
        content: "Kendi Christine — Chemical Engineer & Web Developer",
      },
      {
        property: "og:description",
        content:
          "Chemical Engineering graduate and web developer building clean, modern web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="hero-surface flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex max-w-2xl flex-col items-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Kendi Christine
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-xl">
          Chemical Engineering Graduate &amp; Web Developer
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90 sm:mt-10 sm:text-base"
        >
          View My Projects
        </a>
      </div>
    </main>
  );
}
