/*
 * 南铎书院 Membership Section
 * 设计：宣纸底色 · 书斋意境圖 · 浓墨文字 · 金色点缀
 */

const years = [
  {
    year: "第一年",
    title: "学士阶段",
    subtitle: "Foundation Year",
    desc: "建立生命科学基础认知，开启静心功课，培养日常修习习惯",
    modules: [
      "儒家经典導读（论语、大学、中庸）",
      "道家基础（道德经、庄子选读）",
      "佛家入门（心经、金刚经）",
      "静心功课日课打卡",
      "生命科学基础理论",
    ],
  },
  {
    year: "第二年",
    title: "达士阶段",
    subtitle: "Advancement Year",
    desc: "深化三家融通，建立自己的生命观与修习体系",
    modules: [
      "三家融通进阶研习",
      "易经生命哲学",
      "身心密码解析",
      "个人修习体系建立",
      "社群共修深化",
    ],
  },
  {
    year: "第三年",
    title: "开士阶段",
    subtitle: "Mastery Year",
    desc: "通达生命邏輯，具備指導他人的能力，开启传承之路",
    modules: [
      "生命智慧传承研习",
      "指導能力培养",
      "南铎驿站申请资格",
      "传承共同体建设",
      "个人生命使命确立",
    ],
  },
];

const benefits = [
  { icon: "📚", title: "海豚会员系统", desc: "系统化课程內容，隨时隨地学习" },
  { icon: "🔔", title: "南铎会员社群", desc: "与同修者共修，獲得持續陪伴" },
  { icon: "☀️", title: "日课打卡", desc: "每日静心功课，养成修习习惯" },
  { icon: "🎯", title: "因人施教", desc: "針对不同阶段提供个性化指導" },
];

export default function MembershipSection() {
  return (
    <section
      id="membership"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "oklch(0.975 0.008 80)" }}
    >
      {/* Subtle warm radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
        style={{
          background: "radial-gradient(circle at top right, oklch(0.88 0.04 80), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label mb-4">CHAPTER THREE · 年度会员</div>
          <div className="gold-line-left w-24 mb-8" />
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.15 0.012 60)" }}
            >
              南铎书院
              <br />
              <span style={{ color: "oklch(0.55 0.09 72)" }}>年度会员計劃</span>
            </h2>
            <div className="flex items-baseline gap-2">
              <span
                className="text-5xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.55 0.09 72)" }}
              >
                ¥1,980
              </span>
              <span
                className="text-sm tracking-widest"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.50 0.010 65)" }}
              >
                / 年 · 共三年
              </span>
            </div>
          </div>
        </div>

        {/* Main Content: Visual + Benefits */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Left: Membership Visual */}
          <div className="lg:col-span-2">
            <div
              className="relative overflow-hidden"
              style={{ border: "1px solid oklch(0.85 0.012 75)" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663150279240/eZ4yP9zu3QHwvVDV7RS2W8/membership_light_v1-HobnDJcCw5or8PNRd4sgyX.webp"
                alt="书斋意境 · 铎与书"
                className="w-full h-[400px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.975 0.008 80 / 0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="text-xs tracking-[0.3em] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.55 0.09 72)" }}
                >
                  ANNUAL MEMBERSHIP
                </div>
                <div
                  className="text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
                >
                  铎起而千里应
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="lg:col-span-3">
            <h3
              className="text-xl font-semibold mb-8 tracking-wide"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
            >
              三重交付，全程陪伴
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-5 card-hover"
                  style={{
                    background: "oklch(0.965 0.010 78)",
                    border: "1px solid oklch(0.85 0.012 75)",
                  }}
                >
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <div
                    className="text-sm font-semibold mb-2 tracking-wide"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}
                  >
                    {b.title}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.45 0.010 65)" }}
                  >
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Positioning */}
            <div
              className="p-5"
              style={{
                background: "oklch(0.972 0.012 78)",
                borderLeft: "2px solid oklch(0.62 0.10 75 / 0.5)",
              }}
            >
              <div
                className="text-xs tracking-[0.2em] mb-4"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}
              >
                核心定位
              </div>
              <div className="space-y-3">
                {[
                  "生命科学必修经典帶学",
                  "未有生命实相体验者 · 日常体系进修陪伴指導",
                  "已有生命实相体验者 · 日常保任指點",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "oklch(0.62 0.10 75)" }}
                    />
                    <span
                      className="text-sm leading-relaxed tracking-wide"
                      style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.38 0.010 65)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Year Progression */}
        <div>
          <div className="gold-line mb-12" />
          <h3
            className="text-2xl font-semibold mb-10 tracking-wide text-center"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
          >
            三年进阶体系
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {years.map((y, idx) => (
              <div
                key={y.year}
                className="relative p-6 card-hover"
                style={{
                  background: "oklch(0.965 0.010 78)",
                  border: "1px solid oklch(0.85 0.012 75)",
                }}
              >
                {/* Year number watermark */}
                <div
                  className="absolute top-4 right-4 text-5xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.85 0.012 75)" }}
                >
                  {idx + 1}
                </div>

                <div
                  className="text-[10px] tracking-[0.3em] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75)" }}
                >
                  {y.subtitle}
                </div>
                <div
                  className="text-xs tracking-[0.2em] mb-1"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}
                >
                  {y.year}
                </div>
                <h4
                  className="text-lg font-semibold mb-3 tracking-wide"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
                >
                  {y.title}
                </h4>
                <p
                  className="text-xs leading-relaxed mb-5"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.45 0.010 65)" }}
                >
                  {y.desc}
                </p>
                <div
                  className="h-px mb-5"
                  style={{ background: "linear-gradient(to right, oklch(0.62 0.10 75 / 0.4), transparent)" }}
                />
                <ul className="space-y-2">
                  {y.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <div
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: "oklch(0.62 0.10 75 / 0.7)" }}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.42 0.010 65)" }}
                      >
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
