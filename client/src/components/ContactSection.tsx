/*
 * 南铎书院 Contact Section + Footer
 * 设计：宣纸底色 · 浓墨文字 · 金色点缀 · 清雅表单
 */
import { toast } from "sonner";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("感謝您的咨询！书院招生顾问將在24小时內与您联系。", {
      style: {
        background: "oklch(0.965 0.010 78)",
        border: "1px solid oklch(0.62 0.10 75 / 30%)",
        color: "oklch(0.18 0.012 60)",
      },
    });
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ background: "oklch(0.965 0.010 78)" }}
      >
        {/* Subtle warm glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: "radial-gradient(ellipse, oklch(0.88 0.04 80 / 0.5), transparent 70%)" }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">ENROLL NOW · 入学咨询</div>
            <div className="gold-line w-24 mx-auto mb-10" />

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight tracking-wide"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.15 0.012 60)" }}
            >
              开启你的
              <span style={{ color: "oklch(0.55 0.09 72)" }}>生命减法</span>之旅
            </h2>
            <p
              className="text-sm leading-loose tracking-wide mb-12"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.45 0.010 65)" }}
            >
              无论您处于哪个人生阶段，南铎书院都有适合您的课程。<br />
              留下您的联系方式，书院招生顾问將為您量身推荐最适合的修习路徑。
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs tracking-[0.2em] mb-2"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.50 0.010 65)" }}
                  >
                    您的姓名
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      background: "oklch(0.975 0.008 80)",
                      border: "1px solid oklch(0.85 0.012 75)",
                      color: "oklch(0.18 0.012 60)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "oklch(0.62 0.10 75 / 0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "oklch(0.85 0.012 75)"; }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-[0.2em] mb-2"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.50 0.010 65)" }}
                  >
                    联系方式
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="手机号码或微信号"
                    className="w-full px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      background: "oklch(0.975 0.008 80)",
                      border: "1px solid oklch(0.85 0.012 75)",
                      color: "oklch(0.18 0.012 60)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "oklch(0.62 0.10 75 / 0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "oklch(0.85 0.012 75)"; }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs tracking-[0.2em] mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.50 0.010 65)" }}
                >
                  感兴趣的课程
                </label>
                <select
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    background: "oklch(0.975 0.008 80)",
                    border: "1px solid oklch(0.85 0.012 75)",
                    color: "oklch(0.18 0.012 60)",
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>请选择课程</option>
                  <option value="half-day">半日禅（¥99）</option>
                  <option value="7day">7天生命减速线上体验课（¥99）</option>
                  <option value="membership">南铎书院年度会员（¥1,980/年）</option>
                  <option value="tianwen">天问——3天生命本元尋回营（¥4,800）</option>
                  <option value="xiaoyao">逍遥——5天生命邏輯通透营（¥16,800）</option>
                  <option value="taihe">太和——生命智慧传承班（¥98,000/年）</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs tracking-[0.2em] mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.50 0.010 65)" }}
                >
                  您的修习背景（选填）
                </label>
                <textarea
                  rows={3}
                  placeholder="简单描述您目前的修习状况或希望解决的问题..."
                  className="w-full px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    background: "oklch(0.975 0.008 80)",
                    border: "1px solid oklch(0.85 0.012 75)",
                    color: "oklch(0.18 0.012 60)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "oklch(0.62 0.10 75 / 0.5)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "oklch(0.85 0.012 75)"; }}
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-[0.3em] font-medium transition-all duration-300 pulse-gold"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    background: "oklch(0.62 0.10 75)",
                    color: "oklch(0.975 0.008 80)",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "oklch(0.55 0.09 72)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "oklch(0.62 0.10 75)"; }}
                >
                  提交咨询申请
                </button>
              </div>
            </form>

            {/* Alternative contact */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs"
              style={{ color: "oklch(0.55 0.008 68)" }}
            >
              <span style={{ fontFamily: "'Noto Serif SC', serif" }}>
                或直接联系书院招生顾问
              </span>
              <div className="gold-line w-8 hidden sm:block" />
              <span style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.09 72)" }}>
                微信：ndsy270
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-12"
        style={{
          background: "oklch(0.955 0.012 76)",
          borderTop: "1px solid oklch(0.85 0.012 75)",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/manus-storage/logo_ink_transparent_7642ca89.png"
                alt="南铎书院"
                className="h-12 w-12 object-contain opacity-80"
                style={{ filter: "none" }}
              />
              <div>
                <div
                  className="text-xs tracking-[0.2em]"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.38 0.010 65)" }}
                >
                  南铎书院
                </div>
                <div
                  className="text-[10px] tracking-[0.25em]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75)" }}
                >
                  NANDUO ACADEMY
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div
              className="text-xs tracking-[0.3em] text-center"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.008 68)" }}
            >
              铎起而千里应 · 生命的减法之旅
            </div>

            {/* Copyright */}
            <div
              className="text-[11px] tracking-wider"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.62 0.10 75 / 0.7)" }}
            >
              © 2025 南铎书院 · All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
