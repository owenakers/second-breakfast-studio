import Image from "next/image";
import aboutPhoto from "@/public/images/about.jpg";
import GrowthRing from "./GrowthRing";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-6 py-24 sm:py-28"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <GrowthRing className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 text-brass/40 sm:h-80 sm:w-80" />
          <div className="relative overflow-hidden rounded-lg border-2 border-ink/10 shadow-lg">
            <Image
              src={aboutPhoto}
              alt="Thomas Coleman, founder of Second Breakfast Studio, making a surprised face while crouched behind one of his handcrafted round walnut pedestal tables"
              placeholder="blur"
              sizes="(min-width: 768px) 24rem, 90vw"
              className="h-auto w-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 id="about-heading" className="font-display text-3xl text-ink sm:text-4xl">
            The maker
          </h2>
          <p className="font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
            My name is Thomas Coleman and I am an independent furniture maker
            currently in school at Appalachian State University. I fell in
            love with woodworking in 2023 which lead me to create Second
            Breakfast Studio not even a year later. I aim to work with you to
            create beautiful and functional pieces of furniture that will
            last a lifetime. Utilizing local hardwood materials, every piece
            is unique and brings its own character to your home, work, or
            wherever you like your furniture.
          </p>
          <p className="font-display text-base italic text-forest">
            Every board is sourced and milled from local hardwood &mdash; the
            grain you see is the tree it came from, not a finish.
          </p>
        </div>
      </div>
    </section>
  );
}
