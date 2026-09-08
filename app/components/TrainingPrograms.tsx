"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Globe,
  LineChart,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "ERP Systems",
    category: "SAP • Oracle • Odoo",
    description:
      "Build practical knowledge of enterprise resource planning with training in SAP, Oracle and Odoo.",
    icon: BriefcaseBusiness,
    href: "/programs/erp",
    number: "01",
  },
  {
    title: "PSX",
    category: "Financial Markets",
    description:
      "Learn the fundamentals of Pakistan Stock Exchange, market concepts and basic analysis.",
    icon: BarChart3,
    href: "/psx",
    number: "02",
  },
  {
    title: "Forex",
    category: "Financial Markets",
    description:
      "Understand the fundamentals of foreign exchange markets, analysis and trading concepts.",
    icon: LineChart,
    href: "/forex",
    number: "03",
  },
  {
    title: "SEO",
    category: "Digital Skills",
    description:
      "Learn modern search engine optimization strategies to improve website visibility and online presence.",
    icon: Search,
    href: "/seo",
    number: "04",
  },
  {
    title: "E-Commerce",
    category: "Shopify • Daraz • eBay",
    description:
      "Develop practical e-commerce skills through training in Shopify, Daraz and eBay.",
    icon: Globe,
    href: "/ecommerce",
    number: "05",
  },
];

export default function TrainingPrograms() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
            <Sparkles size={14} />
            Our Training Programs
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Skills That Open
            <span className="text-blue-600"> New Opportunities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore practical, career-focused programs designed to help you
            build valuable skills and move confidently toward your goals.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
                  {/* Number */}
                  <div className="absolute right-6 top-6 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                    {program.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-blue-600">
                      {program.category}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Link */}
                  <a
                    href={program.href}
                    className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors duration-300 hover:text-blue-600"
                  >
                    Explore Program

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </span>
                  </a>

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white px-7 py-6 shadow-sm sm:flex-row"
        >
          <div>
            <p className="font-bold text-slate-950">
              Not sure which program is right for you?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Talk to us and find the right learning path for your goals.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Talk to Us

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}