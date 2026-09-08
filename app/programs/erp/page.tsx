"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Database,
  Layers3,
  Settings,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

const erpPrograms = [
  {
    number: "01",
    title: "SAP",
    category: "Enterprise Resource Planning",
    description:
      "Learn the fundamentals of SAP and understand how enterprise resource planning supports finance, operations, data and modern business processes.",
    icon: Database,
    topics: [
      "SAP Fundamentals",
      "ERP Business Processes",
      "SAP Modules",
      "Data & Reporting",
    ],
  },
  {
    number: "02",
    title: "Oracle",
    category: "Enterprise Solutions",
    description:
      "Develop practical knowledge of Oracle enterprise solutions and understand how organizations manage business operations and information.",
    icon: Building2,
    topics: [
      "Oracle Fundamentals",
      "Enterprise Solutions",
      "Business Operations",
      "Data Management",
    ],
  },
  {
    number: "03",
    title: "Odoo",
    category: "Integrated Business Management",
    description:
      "Explore Odoo as an integrated business management platform and learn how its modules support everyday business processes.",
    icon: Settings,
    topics: [
      "Odoo Fundamentals",
      "Business Modules",
      "Process Management",
      "Practical Applications",
    ],
  },
];

const learningPoints = [
  {
    icon: Workflow,
    title: "Business Processes",
    description:
      "Understand how different departments and business functions connect through ERP systems.",
  },
  {
    icon: Layers3,
    title: "ERP Modules",
    description:
      "Explore the purpose of different modules and how they support organizational workflows.",
  },
  {
    icon: Database,
    title: "Data & Reporting",
    description:
      "Build an understanding of business data, information management and reporting concepts.",
  },
];

export default function ERPPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8 lg:pb-28">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              <Sparkles size={14} />
              ERP Systems Training
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Master Modern
              <span className="block text-blue-400">
                ERP Systems.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Build practical knowledge of enterprise resource planning
              through focused training in SAP, Oracle and Odoo.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start Learning

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-white/10"
              >
                Explore Programs
              </a>

            </div>

          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3"
          >

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-black">3</p>

              <p className="mt-1 text-xs text-slate-400">
                ERP Platforms
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-black">12+</p>

              <p className="mt-1 text-xs text-slate-400">
                Core Topics
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-black">
                Practical
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Learning Focus
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Introduction */}
      <section className="relative bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <Sparkles size={14} />
                Why ERP Skills?
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Understand How
                <span className="text-blue-600">
                  {" "}Businesses Work.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                ERP systems connect different business functions and help
                organizations manage their operations efficiently. Learning
                ERP concepts gives you a better understanding of how
                technology and business processes work together.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Understand core ERP concepts",
                  "Explore leading enterprise platforms",
                  "Connect technology with business processes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-blue-600"
                    />

                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 sm:p-9">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Layers3 size={27} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  One Skill. Multiple Business Functions.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Discover how ERP platforms bring finance, operations,
                  information and business processes together inside a
                  connected system.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  {[
                    "Finance",
                    "Operations",
                    "Data",
                    "Reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ERP Programs */}
      <section
        id="programs"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
      >

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
              <Sparkles size={14} />
              Our ERP Programs
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Choose Your
              <span className="text-blue-600">
                {" "}ERP Specialization.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Explore focused training paths in some of the most recognized
              enterprise platforms.
            </p>

          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {erpPrograms.map((program, index) => {
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

                  <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-8">

                    {/* Number */}
                    <div className="absolute right-7 top-7 text-xs font-black tracking-[0.2em] text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                      {program.number}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-7 text-2xl font-black text-slate-950">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {program.category}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>

                    {/* Topics */}
                    <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">

                      {program.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-blue-600"
                          />

                          {topic}
                        </div>
                      ))}

                    </div>

                    {/* Enroll */}
                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-blue-600"
                    >
                      Enroll in {program.title}

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />

                      </span>
                    </Link>

                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              What You&apos;ll Learn
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Build a Strong
              <span className="text-blue-600">
                {" "}ERP Foundation.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our learning approach focuses on understanding the concepts
              behind ERP systems and how they are applied in business.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {learningPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {point.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Final CTA */}
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
              Ready to Start Your ERP Journey?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Choose your preferred ERP specialization and take the next step
              toward developing practical enterprise skills.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get Started

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