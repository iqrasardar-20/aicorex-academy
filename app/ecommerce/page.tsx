"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "Introduction to E-Commerce",
  "Shopify Store Setup",
  "Daraz Seller Basics",
  "eBay Selling Fundamentals",
  "Product Research & Listing Optimization",
  "E-Commerce Marketing & Customer Management",
];

const features = [
  {
    icon: ShoppingCart,
    title: "Online Selling",
    description:
      "Understand the fundamentals of selling products through modern e-commerce platforms.",
  },
  {
    icon: Globe,
    title: "Multiple Platforms",
    description:
      "Explore practical concepts across Shopify, Daraz and eBay.",
  },
  {
    icon: BarChart3,
    title: "Business Growth",
    description:
      "Learn the basics of product optimization, marketing and performance tracking.",
  },
];

export default function EcommercePage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white lg:px-8 lg:pb-28">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              <Sparkles size={14} />
              E-Commerce Training
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Build Your
              <span className="block text-blue-400">
                Online Business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn practical e-commerce skills through training in Shopify,
              Daraz and eBay, from store setup and product listings to
              digital selling strategies.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Enroll Now

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#topics"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-white/10"
              >
                Explore Topics
              </a>

            </div>

          </motion.div>

          {/* E-Commerce Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >

            <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">

              <div className="rounded-[24px] border border-white/10 bg-slate-900 p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      E-Commerce Training
                    </p>

                    <h3 className="mt-1 text-2xl font-black">
                      Online Business Skills
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <ShoppingCart size={25} />
                  </div>

                </div>

                {/* Platform Card */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Store size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          E-Commerce Platforms
                        </p>

                        <p className="text-xs text-slate-500">
                          Shopify • Daraz • eBay
                        </p>
                      </div>

                    </div>

                    <TrendingUp
                      size={19}
                      className="text-blue-400"
                    />

                  </div>

                  <div className="mt-7 flex h-32 items-end gap-2">

                    {[30, 45, 40, 58, 55, 70, 78, 92, 82, 96].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.7,
                            delay: 0.4 + index * 0.05,
                          }}
                          className="flex-1 rounded-t-md bg-blue-500/70"
                        />
                      )
                    )}

                  </div>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500">
                      Focus
                    </p>

                    <p className="mt-1 font-bold">
                      Selling
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500">
                      Approach
                    </p>

                    <p className="mt-1 font-bold">
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
      <section className="relative bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <Sparkles size={14} />
                About E-Commerce Training
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Learn How
                <span className="text-blue-600">
                  {" "}Online Businesses Work.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Our e-commerce training is designed to help learners
                understand the fundamentals of selling products online
                and building a strong digital storefront.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Learners explore Shopify, Daraz and eBay along with
                product research, listing optimization, marketing and
                customer management.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 sm:p-9">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Users size={27} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  Build Skills. Create Opportunities.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Understand the core skills behind online selling,
                  product management, digital storefronts and customer
                  engagement.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  {[
                    "Store Setup",
                    "Products",
                    "Marketing",
                    "Customers",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* Topics */}
      <section
        id="topics"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
      >

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
              <Sparkles size={14} />
              What You&apos;ll Learn
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              E-Commerce Training
              <span className="text-blue-600">
                {" "}Topics.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Build practical skills for launching, managing and growing
              an online business.
            </p>

          </motion.div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">

            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 size={20} />
                </div>

                <span className="font-bold text-slate-800">
                  {topic}
                </span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                />

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Why This Training?
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Build Practical
              <span className="text-blue-600">
                {" "}E-Commerce Skills.
              </span>
            </h2>

          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 text-center shadow-2xl sm:px-12 lg:py-16"
        >

          <div className="mx-auto max-w-2xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to Learn E-Commerce?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Start developing practical online business skills through
              structured e-commerce training.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Enroll in E-Commerce Training

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}