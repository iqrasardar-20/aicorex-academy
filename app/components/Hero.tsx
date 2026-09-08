"use client";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "ERP Systems", short: "SAP • Oracle • Odoo" },
  { name: "Financial Markets", short: "PSX • Forex" },
  { name: "Digital Skills", short: "SEO • Marketing" },
  { name: "E-Commerce", short: "Shopify • Daraz • eBay" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white lg:pt-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm"
            >
              <Sparkles size={15} />
              Build Skills. Build Your Future.
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn Your Skills Into a{" "}
              <span className="relative inline-block text-blue-400">
                Career.
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-blue-500/40" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn practical, industry-relevant skills designed to help you
              grow professionally, explore new opportunities, and build a
              stronger future.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Start Learning
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Practical Training",
                "Career Focused",
                "Industry Relevant",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 size={17} className="text-blue-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Training Programs
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-xs text-slate-400">
                  Practical Focus
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Career</p>
                <p className="mt-1 text-xs text-slate-400">
                  Focused Learning
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Main Card */}
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[25px] border border-white/10 bg-slate-900/90 p-6 sm:p-7">
                
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-blue-400">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      AicoreX Academy
                    </div>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      Learn Skills That Matter.
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Choose a path. Build expertise. Grow your career.
                    </p>
                  </div>

                  <div className="hidden rounded-xl bg-blue-500/10 p-3 text-blue-400 sm:block">
                    <Award size={23} />
                  </div>
                </div>

                {/* Program Cards */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + index * 0.1,
                      }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>

                        <ArrowRight
                          size={15}
                          className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400"
                        />
                      </div>

                      <p className="mt-2 text-xs text-slate-500">
                        {skill.short}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Progress */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Your learning journey
                    </span>

                    <span className="text-xs font-semibold text-blue-400">
                      Learn → Practice → Grow
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.7,
                      }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Keep Learning */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
                  <TrendingUp size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Growth Mindset
                  </p>

                  <p className="text-sm font-bold text-white">
                    Keep Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Career Ready */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -right-4 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
                  <Users size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Learning Focus
                  </p>

                  <p className="text-sm font-bold text-white">
                    Career Ready
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-10 -top-10 -z-10 hidden h-24 w-24 rounded-full border border-blue-400/20 sm:block"
            />

            {/* Decorative Icon */}
            <div className="absolute -bottom-10 left-12 -z-10 hidden rounded-2xl border border-white/10 bg-blue-500/10 p-4 text-blue-400 backdrop-blur-xl sm:block">
              <BarChart3 size={22} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}