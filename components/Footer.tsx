import GrowthRing from "./GrowthRing";

const CONTACT = {
  email: "Secondbreakfaststudio15@gmail.com",
  instagram: "https://www.instagram.com/_secondbreakfaststudio/",
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-14 text-paper">
      <GrowthRing className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 text-brass/20 sm:h-80 sm:w-80" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-display text-2xl">Second Breakfast Studio</p>
        <p className="font-sans text-sm text-paper/70">
          Charlotte, North Carolina &middot; Est. 2024
        </p>
        <div className="font-sans flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-paper/85 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/85 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass"
          >
            @_secondbreakfaststudio
          </a>
        </div>
      </div>
    </footer>
  );
}
