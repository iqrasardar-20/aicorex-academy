"use client";

import Link from "next/link";
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
    number: "01",
    title: "ERP Systems",
    category: "SAP • Oracle • Odoo",
    description:
      "Build practical knowledge of enterprise resource planning with professional training in SAP, Oracle and Odoo.",
    icon: BriefcaseBusiness,
    href: "/programs/erp",
  },
  {
    number: "02",
    title: "PSX",
    category: "Financial Markets",
    description:
      "Learn the fundamentals of Pakistan Stock Exchange, market concepts, trading basics and financial analysis.",
    icon: BarChart3,
    href: "/psx",
  },
  {
    number: "03",
    title: "Forex",
    category: "Financial Markets",
    description:
      "Understand the foreign exchange market, trading concepts, market analysis and risk management fundamentals.",
    icon: LineChart,
    href: "/forex",
  },
  {
    number: "04",
    title: "SEO",
    category: "Digital Skills",
    description:
      "Learn modern search engine optimization strategies to improve website visibility, rankings and online presence.",
    icon: Search,
    href: "/seo",
  },
  {
    number: "05",
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
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8 lg:pb-28">
        {/* Background glow */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                <Sparkles size={14} />
                Professional Training
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Build Skills That
                <span className="block text-blue-400">
                  Create Opportunities.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore focused training programs designed to help you develop
                practical skills for your career, business and future.
              </p>
            </motion.div>
          </div>

          {/* Hero mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-black text-white">5+</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Training Programs
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-black text-white">4+</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Skill Areas
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-5 text-center backdrop-blur-sm sm:col-span-1">
              <p className="text-2xl font-black text-white">Practical</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Learning Approach
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
                <Sparkles size={14} />
                What We Offer
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Explore Our
                <span className="text-blue-600"> Training Programs</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Choose a focused learning path and develop valuable skills
                that can help you move toward your professional goals.
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="text-right text-sm font-semibold text-slate-400">
                05
                <span className="mx-2 text-slate-300">/</span>
                PROGRAMS
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-8">
                    {/* Number */}
                    <div className="absolute right-7 top-7 text-xs font-black tracking-[0.2em] text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                      {program.number}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon size={26} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                        {program.title}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-blue-600">
                        {program.category}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {program.description}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href={program.href}
                      className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors duration-300 hover:text-blue-600"
                    >
                      View Program

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </span>
                    </Link>

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Your Learning Path
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Learn With a
                <span className="text-blue-600"> Clear Direction.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Every program is structured around understanding the
                fundamentals, developing practical knowledge and building
                confidence to apply what you learn.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Discuss Your Goals
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {[
                {
                  number: "01",
                  title: "Choose",
                  text: "Select a program that matches your goals.",
                },
                {
                  number: "02",
                  title: "Learn",
                  text: "Build knowledge through structured training.",
                },
                {
                  number: "03",
                  title: "Grow",
                  text: "Apply your skills toward new opportunities.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-xs font-black tracking-widest text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 font-extrabold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 text-center shadow-2xl sm:px-12 lg:py-16"
        >
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to Start Learning?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Choose a training program and take the next step toward
              developing valuable professional skills.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Enroll Now
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}