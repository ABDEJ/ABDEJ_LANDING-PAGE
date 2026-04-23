// import { Instagram, Facebook, Dribbble } from "react-icons";
import Link from "next/link";

const shopLinks = [
  "Building Materials",
  "Tools & Hardware",
  "Electrical",
  "Pipes & Fittings",
  "Safety Equipment",
];

const companyLinks = [
  "Company",
  "Careers",
  "Press",
  "Partnerships",
  "CSR",
];

const supportLinks = [
  "Help Center",
  "Contact Us",
  "Track Order",
  "Returns",
  "FAQ",
];

const accountLinks = [
  "My Account",
  "Order History",
  "Wishlist",
  "Wishlist",
  "Saved Items",
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_3fr]">
          {/* Left brand block */}
          <div className="max-w-sm">
            <h2 className="text-[46px] font-bold leading-none tracking-[-0.03em] text-white">
              Abdej
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/70">
              Your trusted partner for quality power solutions.
            </p>
          </div>

          {/* Right columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Support" links={supportLinks} />
            <div className="flex flex-col justify-between">
              <FooterColumn title="Account" links={accountLinks} />

              <div className="mt-6 flex items-center gap-3 lg:justify-end">
                {/* <SocialIcon href="#" icon={<Instagram size={15} />} />
                <SocialIcon href="#" icon={<Facebook size={15} />} />
                <SocialIcon href="#" icon={<Dribbble size={15} />} /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>©2025 Abdej. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-[22px] font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${link}-${index}`}>
            <Link
              href="#"
              className="text-[15px] text-white/70 transition hover:text-[#F4C430]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-[#F4C430] hover:text-[#F4C430]"
    >
      {icon}
    </Link>
  );
}