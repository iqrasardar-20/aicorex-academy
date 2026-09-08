"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const programs = [
  { name: "ERP Systems", href: "/programs/erp" },
  { name: "PSX", href: "/psx" },
  { name: "Forex", href: "/forex" },
  { name: "SEO", href: "/seo" },
  { name: "E-Commerce", href: "/ecommerce" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Training Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:py-20">

          {/* Academy */}
          <div>
            <a
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105">
                A
              </div>

              <div className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight">
                  AicoreX
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-blue-400">
                  Academy
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Professional training designed to help you build practical
              skills, develop confidence and prepare for real-world
              opportunities.
            </p>

            <a
              href="/programs"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-bold text-slate-200 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-600 hover:text-white"
            >
              Explore Programs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Our Programs
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {programs.map((program) => (
                <a
                  key={program.name}
                  href={program.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  {program.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+923147458939"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-white"
                  >
                    0314 7458939
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:info@academy.com"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-white"
                  >
                    info@academy.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} AicoreX Academy. All rights
              reserved.
            </p>

            <p className="text-slate-600">
              Practical Skills • Professional Growth • Career Focus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}