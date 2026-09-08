"use client";

import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Academy */}
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Academy<span className="text-blue-500">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Professional training designed to help you build practical
              skills, grow your career and create new opportunities.
            </p>

            <a
              href="/programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Explore Programs
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="/" className="transition hover:text-white">
                Home
              </a>

              <a href="/about" className="transition hover:text-white">
                About Us
              </a>

              <a href="/programs" className="transition hover:text-white">
                Training Programs
              </a>

              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold">Our Programs</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <span>SAP • Oracle • Odoo</span>
              <span>PSX • Forex</span>
              <span>SEO & Digital Skills</span>
              <span>Shopify • Daraz • eBay</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Get In Touch</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span>
                  Your Academy Location
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-blue-400"
                />
                <a
                  href="tel:+923000000000"
                  className="transition hover:text-white"
                >
                  +92 300 0000000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-blue-400"
                />
                <a
                  href="mailto:info@academy.com"
                  className="transition hover:text-white"
                >
                  info@academy.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Academy. All rights reserved.
            </p>

            <p>
              Professional Skills & Career Training
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}