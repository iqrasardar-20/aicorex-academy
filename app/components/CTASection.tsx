"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center shadow-2xl sm:px-12"
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Sparkles size={24} />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Start Your Learning Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Build Skills for Your Future?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Join our professional training programs and develop practical
              skills that can help you grow academically and professionally.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Enroll Now
                <ArrowRight size={18} />
              </a>

              <a
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}