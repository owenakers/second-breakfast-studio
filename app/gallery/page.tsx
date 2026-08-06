import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroTable from "@/public/images/hero-table.jpg";
import desk from "@/public/images/desk.jpg";
import bench from "@/public/images/bench.jpg";
import jewelryBox from "@/public/images/jewelry-box.jpg";
import shelf from "@/public/images/shelf.jpg";

import guitarStand from "@/public/images/gallery/guitar-stand.jpg";
import jewelryBoxOpen from "@/public/images/gallery/jewelry-box-open.jpg";
import cedarBox from "@/public/images/gallery/cedar-box.jpg";
import sideTableArched from "@/public/images/gallery/side-table-arched.jpg";
import slabTopRings from "@/public/images/gallery/slab-top-rings.jpg";
import deskDrawerDetail from "@/public/images/gallery/desk-drawer-detail.jpg";
import pedestalTable from "@/public/images/gallery/pedestal-table.jpg";
import consoleTable from "@/public/images/gallery/console-table.jpg";
import archedShelfUnit from "@/public/images/gallery/arched-shelf-unit.jpg";
import splitCubeTable from "@/public/images/gallery/split-cube-table.jpg";
import roundTrestleTable from "@/public/images/gallery/round-trestle-table.jpg";
import ringDish from "@/public/images/gallery/ring-dish.jpg";
import waterfallSideTable from "@/public/images/gallery/waterfall-side-table.jpg";
import nameplateSign from "@/public/images/gallery/nameplate-sign.jpg";

export const metadata: Metadata = {
  title: "Gallery | Second Breakfast Studio",
  description:
    "A gallery of handcrafted furniture by Second Breakfast Studio, built from local hardwood in Charlotte, North Carolina.",
};

const pieces = [
  { src: heroTable, alt: "A round live-edge maple slab coffee table with dark walnut legs and butterfly joints" },
  { src: desk, alt: "A handcrafted live-edge hardwood desk with an angled base and a built-in drawer" },
  { src: deskDrawerDetail, alt: "Detail of the live-edge desk's hidden drawer being pulled open by hand" },
  { src: bench, alt: "A wooden bench with a criss-cross X-frame leg design" },
  { src: jewelryBox, alt: "A closed walnut and maple jewelry box with dovetail joinery and a drawer" },
  { src: jewelryBoxOpen, alt: "The same jewelry box open, showing its sectioned maple-lined compartments and drawer" },
  { src: shelf, alt: "A wall-mounted oak shelf with scalloped trim, styled with books and a small plant" },
  { src: sideTableArched, alt: "A small side table with an arched leg design in mixed light and dark hardwood" },
  { src: pedestalTable, alt: "A round walnut pedestal side table with a turned, tapered base" },
  { src: consoleTable, alt: "A tall, narrow wooden console table" },
  { src: archedShelfUnit, alt: "An arched, cathedral-window-shaped wooden shelving unit with multiple compartments" },
  { src: splitCubeTable, alt: "A modern split-cube coffee table made of two angled open-front oak boxes" },
  { src: roundTrestleTable, alt: "A round oak coffee table with an arched trestle base" },
  { src: waterfallSideTable, alt: "A minimalist walnut side table with a continuous waterfall form" },
  { src: ringDish, alt: "A cloud-shaped walnut jewelry dish with two shallow bowls for rings" },
  { src: guitarStand, alt: "A handcrafted wooden guitar display stand holding an electric guitar" },
  { src: cedarBox, alt: "A cedar box with dovetail joints and a carved monogram on the lid" },
  { src: slabTopRings, alt: "A top-down view of a live-edge maple slab tabletop showing its natural growth rings" },
  { src: nameplateSign, alt: "A carved wooden nameplate sign with an engraved inscription" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-brass">
            Second Breakfast Studio
          </p>
          <h1 className="font-display text-4xl text-ink sm:text-5xl">Gallery</h1>
          <p className="font-sans max-w-lg text-ink-soft">
            A look at pieces built so far. This gallery is still growing &mdash;
            check back for more, or reach out directly.
          </p>
        </div>

        <ul className="list-none columns-1 gap-8 sm:columns-2 md:columns-3">
          {pieces.map((piece, index) => (
            <li
              key={piece.alt}
              className="mb-8 break-inside-avoid overflow-hidden rounded-lg border-2 border-ink/10"
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                placeholder="blur"
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={index < 2}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 rounded-md border-2 border-brass px-5 py-2.5 text-ink transition-colors hover:bg-brass hover:text-paper"
          >
            <span aria-hidden="true">&larr;</span>
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
