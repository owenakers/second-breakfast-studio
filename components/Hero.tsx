import Image from "next/image";
import heroTable from "@/public/images/hero-table.jpg";
import logo from "@/public/logo.png";

export default function Hero() {
  return (
    <header className="relative flex min-h-[88vh] w-full items-end overflow-hidden bg-ink sm:min-h-[92vh]">
      <Image
        src={heroTable}
        alt="A round live-edge maple slab coffee table with dark walnut legs and butterfly joints, handcrafted by Second Breakfast Studio"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10"
        aria-hidden="true"
      />

      <div className="animate-rise-in relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-6 pb-24 pt-32 text-center sm:pb-28">
        <Image
          src={logo}
          alt=""
          aria-hidden="true"
          className="h-14 w-auto invert sm:h-16"
          priority
        />
        <h1 className="font-display text-4xl text-paper sm:text-5xl md:text-6xl">
          Second Breakfast Studio
        </h1>
        <p className="font-sans w-full max-w-xl text-base text-paper/90 sm:text-lg">
          Established in 2024, Second Breakfast Studio has been designing and
          creating high quality handcrafted furniture in Charlotte, North
          Carolina.
        </p>
      </div>
    </header>
  );
}
