import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919063821610?text=Hi%20Best%20Choice%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-glow hover:scale-110 transition">
        <MessageCircle className="w-7 h-7" />
      </span>
    </a>
  );
}
