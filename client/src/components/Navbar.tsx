/*
 * 南铎书院 Navbar
 * 设计：宣纸底色 · 透明导航 · 墨色文字 · 金色点缀
 * 滚动后：半透明象牙白毛玻璃效果
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "书院缘起", href: "#about" },
  { label: "课程体系", href: "#courses" },
  { label: "年度会员", href: "#membership" },
  { label: "入学咨询", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.975_0.008_80/0.92)] backdrop-blur-md border-b border-[oklch(0.85_0.012_75)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.png"
            alt="南铎书院"
            className="h-12 w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ filter: "none" }}
          />
          <div className="hidden sm:block">
            <div
              className="text-sm font-semibold tracking-[0.2em]"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
            >
              南铎书院
            </div>
            <div
              className="text-[10px] tracking-[0.3em] mt-0.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75)" }}
            >
              NANDUO ACADEMY
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-widest transition-colors duration-300 hover:text-gold"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                color: "oklch(0.35 0.010 65)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2 text-xs tracking-[0.2em] border transition-all duration-300 hover:bg-[oklch(0.62_0.10_75)] hover:text-[oklch(0.975_0.008_80)] hover:border-[oklch(0.62_0.10_75)]"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              borderColor: "oklch(0.62 0.10 75 / 0.6)",
              color: "oklch(0.62 0.10 75)",
            }}
          >
            立即报名
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "oklch(0.35 0.010 65)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-md border-t px-6 py-6 flex flex-col gap-5"
          style={{
            background: "oklch(0.975 0.008 80 / 0.97)",
            borderColor: "oklch(0.85 0.012 75)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base tracking-widest transition-colors hover:text-gold"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.35 0.010 65)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-5 py-3 text-sm tracking-[0.2em] border text-center transition-all duration-300"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              borderColor: "oklch(0.62 0.10 75 / 0.6)",
              color: "oklch(0.62 0.10 75)",
            }}
          >
            立即报名
          </button>
        </div>
      )}
    </header>
  );
}
