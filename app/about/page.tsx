"use client";

import {
  Award,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide practical and career-focused training that helps learners develop relevant skills for today's professional world.",
  },
  {
    icon: GraduationCap,
    title: "Practical Learning",
    text: "Our training focuses on useful knowledge, practical understanding and skills that learners can apply in real-world situations.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    text: "We aim to create a supportive learning environment where students can learn with proper guidance and direction.",
  },
  {
    icon: Award,
    title: "Career Growth",
    text: "We help learners build valuable skills that can open doors to new academic and professional opportunities.",
  },
];

const highlights = [
  "Industry-relevant training",
  "Practical and structured learning",
  "Career-focused approach",
  "Multiple professional skill areas",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8 lg:pb-28">
        {/* Background effects */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                <Sparkles size={14} />
                About AicoreX Academy
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Building Skills For a
                <span className="block text-blue-400">
                  Changing World.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                AicoreX Academy is focused on helping learners develop
                practical, professional and career-relevant skills through
                structured training programs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Explore Programs
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 rounded-[40px] bg-blue-600/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
                      <BriefcaseBusiness size={27} />
                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                      Learn & Grow
                    </div>
                  </div>

                  <h2 className="mt-8 text-2xl font-extrabold tracking-tight">
                    Learn. Practice. Grow.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Develop knowledge, gain practical skills and move
                    confidently toward your academic and professional goals.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-500">Focus</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        Practical Skills
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-500">Approach</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        Career Focused
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/10 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                      <Zap size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Learning Philosophy
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-white">
                        Skills That Matter
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 shadow-2xl sm:block"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Our Goal
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-white">
                    Professional Growth
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-8 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-3">
            <div className="border-b border-slate-100 px-6 py-7 text-center sm:border-b-0 sm:border-r">
              <p className="text-3xl font-black text-blue-600">5+</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Training Programs
              </p>
            </div>

            <div className="border-b border-slate-100 px-6 py-7 text-center sm:border-b-0 sm:border-r">
              <p className="text-3xl font-black text-blue-600">4+</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Professional Skill Areas
              </p>
            </div>

            <div className="px-6 py-7 text-center">
              <p className="text-3xl font-black text-blue-600">100%</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Career Focused
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[30px] bg-slate-950 p-8 shadow-2xl lg:p-10">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                    Our Philosophy
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight text-white">
                    Knowledge becomes valuable when you can
                    <span className="text-blue-400"> apply it.</span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    We believe learning should go beyond theory. Our approach
                    focuses on developing understanding, confidence and
                    practical skills that learners can carry into real-world
                    situations.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Understand the fundamentals",
                      "Build practical knowledge",
                      "Develop professional confidence",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                          <span className="text-xs font-black">
                            0{index + 1}
                          </span>
                        </div>

                        <span className="text-sm font-semibold text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Who We Are
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Education With a
                <span className="text-blue-600"> Practical Purpose.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                AicoreX Academy provides professional training in areas that
                are relevant to today's business, financial and digital
                environment.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                From ERP systems and financial markets to SEO and e-commerce,
                our programs are designed to give learners a strong
                understanding of their chosen field while encouraging
                practical application.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
                    />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/programs"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-blue-600"
              >
                Explore Our Training Programs
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
              <Sparkles size={14} />
              What We Believe
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Our Approach To
              <span className="text-blue-600"> Learning</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Everything we do is focused on helping learners gain useful
              skills, build confidence and move closer to their goals.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  <div className="absolute right-5 top-5 text-xs font-black tracking-widest text-slate-100 transition-colors duration-300 group-hover:text-blue-100">
                    0{index + 1}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-lg font-extrabold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-slate-950 px-7 py-12 text-center shadow-2xl sm:px-12 lg:py-16"
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready To Build Skills That Matter?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Explore our training programs and find the learning path that
              fits your goals.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get Started
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}