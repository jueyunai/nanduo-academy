/*
 * 南铎书院 Hero Section
 * 设计：宣纸底色 · 水墨铎悬云间 · 浓墨大字 · 金色点缀
 * 文字色：深墨黑（确保在淡色背景上清晰可读）
 */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "oklch(0.975 0.008 80)" }}
    >
      {/* Background Image - ink wash bell floating in mist */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663150279240/eZ4yP9zu3QHwvVDV7RS2W8/hero_light_v1-4HyXSfatwPvp8d7aJWwSPs.webp')`,
          opacity: 0.85,
        }}
      />
      {/* Very light overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, oklch(0.975 0.008 80 / 0.15) 0%, oklch(0.975 0.008 80 / 0.05) 40%, oklch(0.975 0.008 80 / 0.45) 100%)",
        }}
      />

      {/* Decorative vertical text (left) */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        style={{ writingMode: "vertical-rl", fontFamily: "'Noto Serif SC', serif" }}
      >
        <span className="text-xs tracking-[0.4em]" style={{ color: "oklch(0.52 0.08 72 / 0.7)" }}>高高山顶立</span>
        <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.62 0.10 75 / 0.4), transparent)" }} />
        <span className="text-xs tracking-[0.4em]" style={{ color: "oklch(0.52 0.08 72 / 0.7)" }}>深深海底行</span>
      </div>

      {/* Decorative vertical text (right) */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        style={{ writingMode: "vertical-rl", fontFamily: "'Noto Serif SC', serif" }}
      >
        <span className="text-xs tracking-[0.4em]" style={{ color: "oklch(0.52 0.08 72 / 0.7)" }}>铎起而千里应</span>
        <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.62 0.10 75 / 0.4), transparent)" }} />
        <span className="text-xs tracking-[0.4em]" style={{ color: "oklch(0.52 0.08 72 / 0.7)" }}>声教远播</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <div className="section-label mb-8">
          NANDUO ACADEMY · 南铎书院
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.12em] mb-6 leading-tight"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            color: "oklch(0.15 0.012 60)",
          }}
        >
          生命的
          <span style={{ color: "oklch(0.55 0.09 72)" }}> 减法 </span>
          之旅
        </h1>

        {/* Gold divider */}
        <div className="gold-line w-32 mx-auto mb-8" />

        {/* Subtitle */}
        <p
          className="text-base md:text-lg tracking-[0.08em] leading-loose max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            color: "oklch(0.38 0.010 65)",
          }}
        >
          秉承南公怀瑾先生文化教育理念<br />
          以中华经典文化研习与生命科学认知实践为核心<br />
          帮助现代人在 AI 时代实现真正的身安与心安
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-sm tracking-[0.25em] font-medium transition-all duration-300 pulse-gold"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              background: "oklch(0.62 0.10 75)",
              color: "oklch(0.975 0.008 80)",
            }}
          >
            探索课程体系
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-sm tracking-[0.25em] border transition-all duration-300"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              borderColor: "oklch(0.62 0.10 75 / 0.5)",
              color: "oklch(0.52 0.08 72)",
            }}
          >
            了解书院缘起
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-[10px] tracking-[0.3em]"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75 / 0.7)" }}
        >
          SCROLL
        </span>
        <ChevronDown size={16} style={{ color: "oklch(0.62 0.10 75 / 0.7)" }} />
      </div>
    </section>
  );
}
