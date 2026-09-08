"use client";

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
      "Build practical knowledge of enterprise resource planning with training in SAP, Oracle and Odoo.",
    icon: BriefcaseBusiness,
    href: "programs/erp",
  },
  {
    title: "PSX",
    category: "Financial Markets",
    description:
      "Learn the fundamentals of Pakistan Stock Exchange, market concepts and basic analysis.",
    icon: BarChart3,
    href: "/psx",
  },
  {
    title: "Forex",
    category: "Financial Markets",
    description:
      "Understand the fundamentals of foreign exchange markets, analysis and trading concepts.",
    icon: LineChart,
    href: "/forex",
  },
  {
    title: "SEO",
    category: "Digital Skills",
    description:
      "Learn modern search engine optimization strategies to improve website visibility and online presence.",
    icon: Search,
    href: "/seo",
  },
  {
    title: "E-Commerce",
    category: "Shopify • Daraz • eBay",
    description:
      "Develop practical e-commerce skills through training in Shopify, Daraz and eBay.",
    icon: Globe,
    href: "/ecommerce",
  },
];

export default function TrainingPrograms() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Training Programs
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skills That Open New Opportunities
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our professional training categories and develop
            practical skills for your career and business goals.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {program.title}
                </h3>

                {/* Category */}
                <span className="mt-2 inline-block text-sm font-medium text-blue-600">
                  {program.category}
                </span>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>

                {/* Button */}
                <a
                  href={program.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View Program
                  <ArrowRight size={16} />
                </a>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}