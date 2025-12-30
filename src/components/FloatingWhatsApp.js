"use client";

import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/6285163468816"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp text-3xl"></i>
        </a>
    );
}
