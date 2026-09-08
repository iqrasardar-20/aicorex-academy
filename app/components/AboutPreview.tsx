"use client";

import { Award, Briefcase, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Practical Learning",
    text: "Learn through practical, industry-relevant training designed around real-world skills.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    text: "Get structured learning and guidance from experienced professionals and trainers.",
  },
  {
    icon: Briefcase,
    title: "Career Focused",
    text: "Develop skills that can help you pursue better academic and professional opportunities.",
  },
  {
    icon: Award,
    title: "Professional Training",
    text: "Access focused training across ERP, financial markets, digital skills and e-commerce.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About Our Academy
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Empowering People Through Practical Skills
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We provide professional training programs designed to help
              learners develop relevant skills for today&apos;s rapidly
              changing digital and business environment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From ERP systems and financial markets to SEO and e-commerce,
              our programs focus on practical knowledge that learners can
              apply in real-world situations.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}