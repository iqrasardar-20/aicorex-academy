"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Globe,
  LineChart,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "ERP Systems",
    category: "SAP • Oracle • Odoo",
    description:
      "Build practical knowledge of enterprise resource planning with professional training in SAP, Oracle and Odoo.",
    icon: BriefcaseBusiness,
    href: "/programs/erp",
  },
  {
    title: "PSX",
    category: "Financial Markets",
    description:
      "Learn the fundamentals of Pakistan Stock Exchange, market concepts, trading basics and financial analysis.",
    icon: BarChart3,
    href: "/psx",
  },
  {
    title: "Forex",
    category: "Financial Markets",
    description:
      "Understand the foreign exchange market, trading concepts, market analysis and risk management fundamentals.",
    icon: LineChart,
    href: "/forex",
  },
  {
    title: "SEO",
    category: "Digital Skills",
    description:
      "Learn modern search engine optimization strategies to improve website visibility, rankings and online presence.",
    icon: Search,
    href: "/seo",
  },
  {
    title: "E-Commerce",
    category: "Shopify • Daraz • eBay",
    description:
      "Develop practical e-commerce skills through professional training in Shopify, Daraz and eBay.",
    icon: Globe,
    href: "/ecommerce",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            AicoreX<span className="text-blue-600">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/programs"
              className="text-sm font-medium text-blue-600"
            >
              Training Programs
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </nav>

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-950 px-6 pb-20 pt-36 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Training Programs
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build Skills That
                <span className="block text-blue-400">
                  Create Opportunities
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Explore our professional training programs and develop
                practical skills for your career, business and future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What We Offer
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Explore Our Programs
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Choose from our focused training categories and start
                developing skills that matter in today&apos;s economy.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => {
                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
                      {program.title}
                    </h3>

                    {/* Category */}
                    <p className="mt-2 text-sm font-semibold text-blue-600">
                      {program.category}
                    </p>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>

                    {/* Button */}
                    <Link
                      href={program.href}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                    >
                      View Program
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to Start Learning?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Choose a training program and take the next step toward
                building valuable professional skills.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Enroll Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight"
              >
                AicoreX<span className="text-blue-500">.</span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                Professional training designed to help learners build
                practical skills and create new career opportunities.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold">Quick Links</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  href="/programs"
                  className="transition hover:text-white"
                >
                  Training Programs
                </Link>

                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold">Our Programs</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <Link
                  href="/programs/erp"
                  className="transition hover:text-white"
                >
                  ERP — SAP • Oracle • Odoo
                </Link>

                <Link
                  href="/psx"
                  className="transition hover:text-white"
                >
                  PSX
                </Link>

                <Link
                  href="/forex"
                  className="transition hover:text-white"
                >
                  Forex
                </Link>

                <Link
                  href="/seo"
                  className="transition hover:text-white"
                >
                  SEO
                </Link>

                <Link
                  href="/ecommerce"
                  className="transition hover:text-white"
                >
                  E-Commerce — Shopify • Daraz • eBay
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} AicoreX Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}