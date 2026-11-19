import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { institute } from "../data/siteData";

// Country code + number, without + or spaces. Example: "919876543210"
// The WhatsApp button stays hidden until you add the number.
const whatsappNumber = "";
const whatsappMessage = `Hello ${institute.name}, I want to know about admission.`;

const buttonStyle =
  "flex h-12 w-12 items-center justify-center rounded-full shadow-lg";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // show the back-to-top button only after the user scrolls down a bit
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo(0, 0)}
          className={`${buttonStyle} bg-navy text-yellow-300`}
        >
          <FiArrowUp size={22} />
        </button>
      )}

      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className={`${buttonStyle} bg-[#25D366] text-white`}
        >
          <FaWhatsapp size={28} />
        </a>
      )}
    </div>
  );
}
