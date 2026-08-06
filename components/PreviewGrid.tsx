import Image from "next/image";
import Link from "next/link";
import desk from "@/public/images/desk.jpg";
import bench from "@/public/images/bench.jpg";
import jewelryBox from "@/public/images/jewelry-box.jpg";
import shelf from "@/public/images/shelf.jpg";

const pieces = [
  {
    src: desk,
    alt: "A handcrafted live-edge hardwood desk with an angled base and a built-in drawer",
  },
  {
    src: bench,
    alt: "A wooden bench with a criss-cross X-frame leg design",
  },
  {
    src: jewelryBox,
    alt: "A walnut and maple jewelry box with a drawer and dovetail joinery",
  },
  {
    src: shelf,
    alt: "A wall-mounted oak shelf with scalloped trim, styled with books and a small plant",
  },
];

export default function PreviewGrid() {
  return (
    <section
      aria-labelledby="work-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <h2 id="work-heading" className="font-display text-3xl text-ink sm:text-4xl">
          Recent work
        </h2>
        <p className="font-sans text-ink-soft">
          A few pieces from the shop &mdash; see the full gallery for more.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {pieces.map((piece) => (
          <li key={piece.alt} className="relative aspect-square overflow-hidden rounded-lg border-2 border-ink/10">
            <Image
              src={piece.src}
              alt={piece.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <Link
          href="/gallery"
          className="font-sans inline-flex items-center gap-2 rounded-md border-2 border-brass px-5 py-2.5 text-ink transition-colors hover:bg-brass hover:text-paper"
        >
          View full gallery
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
