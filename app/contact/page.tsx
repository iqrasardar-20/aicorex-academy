"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `Hello AicoreX Academy!

Name: ${name}
Email: ${email}
Program: ${program}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/923147458939?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

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
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Start Your
              <span className="block text-blue-400">
                Learning Journey
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a question or want to enroll in a program? Get in touch
              with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                We&apos;re Here To Help
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-slate-600">
                Contact us to learn more about our training programs,
                enrollment process and available learning opportunities.
              </p>

              <div className="mt-10 space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Phone size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Phone
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      0314 7458939
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Mail size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      info@academy.com
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923147458939"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us A Message
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and our team will get back to you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Select Program
                  </label>

                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Choose a program
                    </option>

                    <option>SAP</option>
                    <option>Oracle</option>
                    <option>Odoo</option>
                    <option>PSX</option>
                    <option>Forex</option>
                    <option>SEO</option>
                    <option>Shopify</option>
                    <option>Daraz</option>
                    <option>eBay</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}