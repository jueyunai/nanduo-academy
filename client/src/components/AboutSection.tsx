/*
 * 南铎书院 About Section
 * 设计：宣纸底色 · 非对称布局 · 水墨高士图 · 浓墨文字
 */

const values = [
  {
    label: "使命",
    en: "MISSION",
    text: "探索与传承生命的身安心安之道",
  },
  {
    label: "愿景",
    en: "VISION",
    text: "追求生命实相，传播传承生命中真正重要的存在；传递减法智慧，引领一种身安心安的现代生活方式",
  },
  {
    label: "价值观",
    en: "VALUES",
    text: "高高山顶立，深深海底行",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "oklch(0.965 0.010 78)" }}
    >
      {/* Subtle xuan paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663150279240/eZ4yP9zu3QHwvVDV7RS2W8/courses_light_v1-6W9BpnhBxXU93JTqqGff6T.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="section-label mb-4">CHAPTER ONE · 书院缘起</div>
        <div className="gold-line-left w-24 mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-tight tracking-wide"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                color: "oklch(0.15 0.012 60)",
              }}
            >
              南铎书院
              <br />
              <span style={{ color: "oklch(0.55 0.09 72)" }}>生命科学</span>的传承
            </h2>

            <p
              className="leading-loose tracking-wide text-sm md:text-base mb-12"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                color: "oklch(0.40 0.010 65)",
              }}
            >
              南铎书院秉承南公怀瑾先生的文化教育理念，以中华经典文化研习与生命科学认知实践为核心，开启现代人的生命减法之旅，帮助人们在 AI 时代实现真正的身安与心安，从而促进人们的幸福、安定与祥和。
            </p>

            {/* Mission / Vision / Values */}
            <div className="space-y-8">
              {values.map((v) => (
                <div key={v.label} className="flex gap-6">
                  <div className="flex-shrink-0 pt-1">
                    <div
                      className="w-px min-h-[3rem]"
                      style={{ background: "linear-gradient(to bottom, oklch(0.62 0.10 75 / 0.7), transparent)" }}
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="text-base font-semibold tracking-widest"
                        style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}
                      >
                        {v.label}
                      </span>
                      <span
                        className="text-[10px] tracking-[0.3em]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75)" }}
                      >
                        {v.en}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed tracking-wide"
                      style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.42 0.010 65)" }}
                    >
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ink Painting Visual + Quote */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663150279240/eZ4yP9zu3QHwvVDV7RS2W8/about_light_v1-QjGAb4HE5Vj2oEcKQ8Pva5.webp"
                alt="书院意境 · 松下静思"
                className="w-full h-80 md:h-[480px] object-cover"
                style={{ borderRadius: "0" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, oklch(0.965 0.010 78 / 0.8) 100%)",
                }}
              />
            </div>

            {/* Founder Quote */}
            <div
              className="mt-8 p-6 border-l-2"
              style={{
                borderColor: "oklch(0.62 0.10 75 / 0.5)",
                background: "oklch(0.975 0.008 80 / 0.7)",
              }}
            >
              <div
                className="text-4xl mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75 / 0.5)" }}
              >
                "
              </div>
              <blockquote
                className="text-sm leading-loose tracking-wide"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.38 0.010 65)" }}
              >
                铎起而千里应，声教远播。南铎书院以教化为使命，传承中华生命智慧，引领现代人回归身安心安之道。
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="gold-line w-8" />
                <span
                  className="text-sm tracking-widest"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}
                >
                  唐明谦
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
