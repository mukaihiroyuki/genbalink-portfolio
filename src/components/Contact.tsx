"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0a0a0a] px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
                Contact
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-lg mb-8 text-center max-w-md"
            >
                業務効率化のご相談、お仕事のご依頼は
                <br />
                お気軽にお問い合わせください。
            </motion.p>

            <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                href="mailto:mnakano.michinoku@gmail.com"
                className="px-8 py-4 bg-[#00D4FF] text-black font-semibold rounded-full hover:bg-[#00B8E0] transition-colors duration-300"
            >
                お問い合わせ
            </motion.a>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-24 text-gray-600 text-sm"
            >
                © 2025 Genbalink. All rights reserved.
            </motion.footer>
        </section>
    );
}
