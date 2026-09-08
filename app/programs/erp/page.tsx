"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Database,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const erpPrograms = [
  {
    title: "SAP",
    description:
      "Learn the fundamentals of SAP and understand how enterprise resource planning systems support modern business operations.",
    icon: Database,
    topics: [
      "SAP Fundamentals",
      "ERP Business Processes",
      "SAP Modules",
      "Data & Reporting",
    ],
  },
  {
    title: "Oracle",
    description:
      "Develop practical knowledge of Oracle enterprise solutions and understand their role in managing business operations.",
    icon: Building2,
    topics: [
      "Oracle Fundamentals",
      "Enterprise Solutions",
      "Business Operations",
      "Data Management",
    ],
  },
  {
    title: "Odoo",
    description:
      "Explore Odoo as an integrated business management platform and learn how different modules support business processes.",
    icon: Settings,
    topics: [
      "Odoo Fundamentals",
      "Business Modules",
      "Process Management",
      "Practical Applications",
    ],
  },
];

export default function ERPPage() {
  return (
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
              ERP Training
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Master Modern
              <span className="block text-blue-400">
                ERP Systems
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Build practical knowledge of enterprise resource planning
              through focused training in SAP, Oracle and Odoo.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why ERP Skills?
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Understand How Businesses Work
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            ERP systems connect different business functions and help
            organizations manage their operations efficiently. Our training
            introduces learners to practical ERP concepts and widely used
            platforms.
          </p>

        </div>
      </section>

      {/* ERP Programs */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our ERP Programs
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Choose Your ERP Specialization
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our focused training programs and develop skills in
              leading enterprise platforms.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {erpPrograms.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {program.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-600"
                        />
                        {topic}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Enroll Now
                    <ArrowRight size={16} />
                  </a>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to Start Your ERP Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Choose a program and take the next step toward developing
            practical ERP skills.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}