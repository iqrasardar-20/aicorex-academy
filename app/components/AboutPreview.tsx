"use client";

import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
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
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT — Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-3 shadow-2xl shadow-slate-900/15">
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-7 sm:p-9">

                {/* Glows */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                        AicoreX Academy
                      </p>

                      <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                        Learn.
                        <br />
                        Practice.
                        <br />
                        <span className="text-blue-400">Grow.</span>
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <GraduationCap size={28} />
                    </div>
                  </div>

                  <p className="mt-7 max-w-sm text-sm leading-6 text-slate-400">
                    Building practical skills for a changing digital and
                    professional world.
                  </p>

                  {/* Learning Points */}
                  <div className="mt-8 space-y-3">
                    {[
                      "Practical skills",
                      "Industry-relevant training",
                      "Career-focused learning",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-400"
                        />

                        <span className="text-sm font-medium text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <p className="text-lg font-black text-white">5+</p>
                      <p className="mt-1 text-[9px] text-slate-500">
                        Programs
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <p className="text-lg font-black text-white">100%</p>
                      <p className="mt-1 text-[9px] text-slate-500">
                        Practical
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                      <p className="text-lg font-black text-white">Career</p>
                      <p className="mt-1 text-[9px] text-slate-500">
                        Focused
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-medium text-slate-500">
                    Learning Approach
                  </p>

                  <p className="text-sm font-bold text-slate-950">
                    Learn by Doing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — About Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <Award size={14} />
              About Our Academy
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Empowering People Through
              <span className="text-blue-600"> Practical Skills.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We provide professional training programs designed to help
              learners develop relevant skills for today&apos;s rapidly
              changing digital and business environment.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              From ERP systems and financial markets to SEO and e-commerce,
              our programs focus on practical knowledge that learners can
              apply in real-world situations.
            </p>

            {/* Features */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          {feature.title}
                        </h3>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-600/20"
              >
                Learn More About Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle2 size={17} className="text-blue-600" />
                Built around practical learning
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}