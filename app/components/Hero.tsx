"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      
      {/* Background Glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Professional Skills & Career Training
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Learn Skills That
            <span className="block text-blue-400">
              Build Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Develop practical, career-focused skills through professional
            training in ERP, financial markets, SEO, digital marketing and
            e-commerce.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Explore Programs
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Enroll Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-400" />
              Practical Training
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-400" />
              Career Focused
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-blue-400" />
              Industry Relevant
            </span>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg">
            
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
              
              <div className="rounded-2xl bg-slate-900 p-6">
                <p className="text-sm text-slate-400">
                  Explore Our Training
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Skills for the Modern Economy
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "ERP",
                    "PSX",
                    "Forex",
                    "SEO",
                    "Shopify",
                    "Daraz",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium transition hover:border-blue-400/50 hover:bg-blue-500/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">Training Focus</p>
              <p className="mt-1 font-semibold">Learn • Practice • Grow</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}