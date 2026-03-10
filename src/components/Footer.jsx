
import { ArrowUp, Instagram, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="h-[70px] bg-[#5f9920] text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">

        {/* Copyright */}
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Priyanshu Rajput. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:scale-110 transition">
            <Instagram size={20} />
          </a>

          <a href="#" className="hover:scale-110 transition">
            <Mail size={20} />
          </a>

          <a href="#" className="hover:scale-110 transition">
            <MapPin size={20} />
          </a>

          <a
            href="#hero"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <ArrowUp size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};


