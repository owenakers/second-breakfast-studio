import Link from "next/link";

const CONTACT = {
  email: "Secondbreakfaststudio15@gmail.com",
  instagram: "https://www.instagram.com/_secondbreakfaststudio/",
};

const cardBase =
  "group flex flex-1 flex-col items-center gap-3 rounded-lg border-2 border-ink/15 bg-card px-6 py-8 text-center transition-colors hover:border-brass hover:bg-card/70 focus-visible:border-brass";

function GalleryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.75" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 17l5-5 3.5 3.5L16 12l4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ActionCards() {
  return (
    <nav aria-label="Primary actions" className="mx-auto -mt-12 w-full max-w-4xl px-4 sm:px-6 relative z-10">
      <ul className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <li className="flex flex-1">
          <Link href="/gallery" className={cardBase}>
            <GalleryIcon />
            <span className="font-display text-lg text-ink">View Gallery</span>
            <span className="font-sans text-sm text-ink-soft">Browse finished pieces</span>
          </Link>
        </li>
        <li className="flex flex-1">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cardBase}
          >
            <InstagramIcon />
            <span className="font-display text-lg text-ink">Instagram</span>
            <span className="font-sans text-sm text-ink-soft">@_secondbreakfaststudio</span>
          </a>
        </li>
        <li className="flex flex-1">
          <a href={`mailto:${CONTACT.email}`} className={cardBase}>
            <EmailIcon />
            <span className="font-display text-lg text-ink">Email</span>
            <span className="font-sans text-sm text-ink-soft break-all">{CONTACT.email}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
