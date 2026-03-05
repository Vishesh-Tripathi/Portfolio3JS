import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant, fadeIn } from "../utils/motion";

const InputField = ({ label, icon, children }) => (
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2 text-[13px] font-semibold text-[#aaa6c3] uppercase tracking-widest">
      {icon}
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vishesh Tripathi",
          from_email: form.email,
          to_email: "tripathiishu467@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email sending failed:", error);
        setStatus("error");
      });
  };

  const inputClass = (field) =>
    `w-full bg-[#13102a] text-white placeholder:text-[#aaa6c3]/50 py-3.5 px-5 rounded-xl font-medium text-[15px] outline-none transition-all duration-300 border ${
      focused === field
        ? "border-[#915EFF] shadow-[0_0_0_3px_rgba(145,94,255,0.15)]"
        : "border-[#915EFF]/20 hover:border-[#915EFF]/40"
    }`;

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* Left — Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] relative"
      >
        {/* Card */}
        <div className="relative bg-gradient-to-br from-[#1d1836] to-[#13102a] rounded-2xl p-8 border border-[#915EFF]/20 shadow-xl shadow-black/30">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#915EFF] to-[#00cea8]" />

          {/* Header */}
          <motion.div variants={textVariant()} className="mb-8">
            <p className={`${styles.sectionSubText}`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
              Contact.
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mt-3 rounded-full" />
          </motion.div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name + Email side by side on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                label="Your Name"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#915EFF]">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                }
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="John Doe"
                  className={inputClass("name")}
                />
              </InputField>

              <InputField
                label="Email Address"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#915EFF]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              >
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="john@example.com"
                  className={inputClass("email")}
                />
              </InputField>
            </div>

            <InputField
              label="Message"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#915EFF]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              }
            >
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Hi Vishesh, I'd love to collaborate on..."
                className={`${inputClass("message")} resize-none`}
              />
            </InputField>

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[#00cea8] text-[14px] bg-[#00cea8]/10 border border-[#00cea8]/30 rounded-xl px-4 py-3"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[#ff6b9d] text-[14px] bg-[#ff6b9d]/10 border border-[#ff6b9d]/30 rounded-xl px-4 py-3"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Please fill all fields correctly and try again.
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl font-bold text-[15px] text-white overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #915EFF, #00cea8)",
                boxShadow: "0 4px 20px rgba(145,94,255,0.35)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Right — Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
