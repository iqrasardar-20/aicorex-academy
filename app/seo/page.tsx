"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "Introduction to Search Engine Optimization",
  "Keyword Research & Search Intent",
  "On-Page SEO",
  "Technical SEO Basics",
  "Off-Page SEO & Link Building",
  "SEO Analytics & Performance",
];

export default function SEOPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            AicoreX<span className="text-blue-600">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="/programs"
              className="text-sm font-medium text-blue-600"
            >
              Training Programs
            </a>

            <a
              href="/contact"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Contact
            </a>

            <a
              href="/contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                SEO Training
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Grow Your
                <span className="block text-blue-400">
                  Online Visibility
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Learn practical search engine optimization strategies,
                keyword research, on-page SEO, technical SEO and
                performance analysis.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#topics"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  Explore Topics
                </a>
              </div>
            </motion.div>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl bg-slate-900 p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        SEO Training
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">
                        Digital Growth
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Search size={25} />
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3">
                      <TrendingUp size={22} className="text-blue-400" />

                      <div>
                        <p className="text-sm font-medium">
                          Search Performance
                        </p>

                        <p className="text-xs text-slate-500">
                          Learn SEO fundamentals
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex h-28 items-end gap-2">
                      {[28, 38, 45, 52, 63, 70, 78, 92].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-blue-500/70"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">
                        Focus
                      </p>

                      <p className="mt-1 font-semibold">
                        Visibility
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-500">
                        Approach
                      </p>

                      <p className="mt-1 font-semibold">
                        Practical
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About SEO Training
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Learn How Search Engines Work
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our SEO training is designed to help learners understand
              how search engines discover, evaluate and rank online
              content.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              From keyword research to technical optimization and
              performance tracking, learners develop practical skills
              for improving online visibility.
            </p>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What You&apos;ll Learn
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                SEO Training Topics
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Build practical digital marketing skills through
                structured SEO training.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <span className="font-medium text-slate-800">
                    {topic}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-7">
                <Search size={28} className="text-blue-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Keyword Research
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Learn how to identify relevant keywords and understand
                  search intent.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-7">
                <Target size={28} className="text-blue-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  On-Page SEO
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Understand content optimization, page structure,
                  titles and other important SEO elements.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-7">
                <BarChart3 size={28} className="text-blue-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  SEO Analytics
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Learn how to monitor SEO performance and understand
                  important website metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Learn SEO?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Start developing practical SEO skills and learn how to
              improve online visibility through structured training.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Enroll in SEO Training
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} AicoreX Academy. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="/"
                className="transition hover:text-white"
              >
                Home
              </a>

              <a
                href="/programs"
                className="transition hover:text-white"
              >
                Programs
              </a>

              <a
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}