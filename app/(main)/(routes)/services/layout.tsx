import "../../../globals.css";
import { cn } from "@/lib/utils";
import { cormorantGaramond } from "@/lib/direct-font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-primary-2 p-4">
        <h1 className={cn("text-5xl font-bold text-neutral-100 text-center", cormorantGaramond.className)}>
          Our Services
        </h1>
      </header>
      <main className="md:px-24 px-16 md:py-6 py-2">{children}</main>
    </>
  );
}
