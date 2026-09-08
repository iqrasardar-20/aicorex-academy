"use client";

import {
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Target,
  Users,
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

export default function AboutPage() {
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
              About Our Academy
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Empowering Learners With
              <span className="block text-blue-400">
                Skills That Matter
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We provide professional training programs designed to help
              learners build practical skills and prepare for new
              opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Building Skills For A Changing World
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our academy is focused on providing practical and
                professional training in areas that are relevant to today's
                business and digital environment.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                From ERP systems and financial markets to SEO and
                e-commerce, our programs are designed to give learners a
                strong understanding of their chosen field.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Industry-relevant training
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Practical and structured learning
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Career-focused approach
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl bg-slate-950 p-8 shadow-2xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

                  <Briefcase
                    size={42}
                    className="text-blue-400"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Learn. Practice. Grow.
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    Develop knowledge, gain practical skills and move
                    confidently toward your professional goals.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Focus
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Practical Skills
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Approach
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Career Focused
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Believe
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Approach To Learning
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything we do is focused on helping learners gain useful
              skills and move closer to their goals.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}