"use client";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Practical, career-focused programs",
  "Industry-relevant skills",
  "Structured learning approach",
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-7 py-14 shadow-2xl shadow-blue-950/30 sm:px-10 lg:px-16 lg:py-16"
        >
          {/* Decorative Glows */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-950/20 blur-3xl" />

          {/* Decorative Circles */}
          <div className="absolute right-10 top-10 hidden h-20 w-20 rounded-full border border-white/10 lg:block" />
          <div className="absolute bottom-10 right-32 hidden h-10 w-10 rounded-full border border-white/10 lg:block" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                <Sparkles size={14} />
                Start Your Learning Journey
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Build Skills That
                <span className="text-blue-100"> Move You Forward?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Take the next step toward your goals with practical training
                programs designed to help you learn, grow and prepare for
                real-world opportunities.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm font-medium text-white/90"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-blue-200"
                    />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50"
                >
                  Enroll Now
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Explore Programs
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="relative rounded-[28px] border border-white/15 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[22px] border border-white/10 bg-slate-950/30 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Target size={23} />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-100">
                      Your Next Step
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    Learn with purpose.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-100/70">
                    Choose a program and start building skills that can make a
                    real difference in your future.
                  </p>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-100/60">
                        Learning Journey
                      </span>
                      <span className="font-bold text-white">Ready</span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="h-full rounded-full bg-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 text-blue-200">
                      <Zap size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-blue-100/60">
                        Start today
                      </p>
                      <p className="text-sm font-bold text-white">
                        Build your future
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <CheckCircle2 size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Focused Learning
                    </p>
                    <p className="text-xs font-bold text-white">
                      Career Ready
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}