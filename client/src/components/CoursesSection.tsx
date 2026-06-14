/*
 * 南铎书院 Courses Section
 * 设计：宣纸底色 · 水墨卡片 · 浓墨文字 · 金色标記
 */
import { useState } from "react";

const courses = [
  {
    level: "L1",
    levelLabel: "减速",
    name: "半日禅",
    subtitle: "Half-Day Zen",
    format: "线下沙龍",
    price: "¥99",
    priceNote: "公益性質",
    period: "每週日下午",
    description: "让有静心需求的都市人体验生命减速的好处，简单普及生命科学背后的身心理论支撑，广结善缘。",
    accentColor: "oklch(0.50 0.06 200)",
    cardBg: "oklch(0.970 0.006 200)",
    tag: "入门体验",
  },
  {
    level: "L2",
    levelLabel: "减負",
    name: "7天生命减速线上体验课",
    subtitle: "7-Day Online Experience",
    format: "线上企微社群 + 錄播课程 + 直播答疑",
    price: "¥99",
    priceNote: "线上课程",
    period: "每週一循環",
    description: "帮助用户开启静心功课的习惯，建立对身安心安的初阶体验，营造静心打卡的轻陪伴共修氛围。",
    accentColor: "oklch(0.48 0.08 155)",
    cardBg: "oklch(0.968 0.006 155)",
    tag: "线上入门",
  },
  {
    level: "L3",
    levelLabel: "减执",
    name: "南铎书院年度会员",
    subtitle: "Annual Membership",
    format: "海豚会员系统 + 南铎会员社群 + 日课打卡",
    price: "¥1,980",
    priceNote: "/ 年",
    period: "一年（共三年）",
    description: "生命科学必修经典帶学，未有生命实相体验的用户日常体系进修陪伴指導，已有生命实相体验的用户日常保任指點。",
    accentColor: "oklch(0.55 0.09 72)",
    cardBg: "oklch(0.972 0.012 78)",
    tag: "核心推荐",
    featured: true,
  },
  {
    level: "L4",
    levelLabel: "减惑",
    name: "天问——3天生命本元尋回营",
    subtitle: "3-Day Intensive Retreat",
    format: "线下闭门营",
    price: "¥4,800",
    priceNote: "/ 期",
    period: "3天",
    description: "破除身份迷失，体认生命本元；去掉标签执着，回归不动本心。",
    accentColor: "oklch(0.50 0.10 35)",
    cardBg: "oklch(0.970 0.008 40)",
    tag: "线下深修",
  },
  {
    level: "L4+",
    levelLabel: "减惑进阶",
    name: "逍遥——5天生命邏輯通透营",
    subtitle: "5-Day Deep Retreat",
    format: "线下闭门营",
    price: "¥16,800",
    priceNote: "/ 期",
    period: "5天",
    description: "解構生命原理及身心密码，從身体到心理通达逍遥，开启任運自如之生命力。",
    accentColor: "oklch(0.48 0.08 280)",
    cardBg: "oklch(0.968 0.006 280)",
    tag: "深度突破",
  },
  {
    level: "L5",
    levelLabel: "不增不减",
    name: "太和——生命智慧传承班",
    subtitle: "Wisdom Inheritance Program",
    format: "南铎驿站授權 + 线下季度私董会",
    price: "¥98,000",
    priceNote: "/ 年",
    period: "1年",
    description: "深度传习核心心法，共建生命智慧传承共同体。通過考核可獲南铎书院正式品牌年度授權——南铎驿站。",
    accentColor: "oklch(0.55 0.09 72)",
    cardBg: "oklch(0.972 0.012 78)",
    tag: "頂层传承",
  },
];

export default function CoursesSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="courses"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Xuan paper texture background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663150279240/eZ4yP9zu3QHwvVDV7RS2W8/courses_light_v1-6W9BpnhBxXU93JTqqGff6T.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Very light overlay */}
      <div className="absolute inset-0" style={{ background: "oklch(0.975 0.008 80 / 0.55)" }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label mb-4">CHAPTER TWO · 减法之旅</div>
          <div className="gold-line-left w-24 mb-8" />
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.15 0.012 60)" }}
            >
              五层课程体系
              <br />
              <span style={{ color: "oklch(0.55 0.09 72)" }}>打开生命减法之旅</span>
            </h2>
            <p
              className="text-sm leading-loose tracking-wide max-w-md"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.45 0.010 65)" }}
            >
              從减速到不增不减，每一层都是生命的一次蛻變。<br />
              循序漸进，因人施教，找到屬於你的那條路。
            </p>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, idx) => (
            <div
              key={course.level}
              className="relative cursor-pointer card-hover"
              style={{
                background: course.cardBg,
                border: course.featured
                  ? `1.5px solid oklch(0.62 0.10 75 / 0.5)`
                  : `1px solid oklch(0.85 0.012 75)`,
                padding: "1.5rem",
              }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              {/* Featured badge */}
              {course.featured && (
                <div className="absolute -top-3 left-5">
                  <span
                    className="px-3 py-1 text-[10px] tracking-[0.2em] font-medium"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      background: "oklch(0.62 0.10 75)",
                      color: "oklch(0.975 0.008 80)",
                    }}
                  >
                    核心推荐
                  </span>
                </div>
              )}

              {/* Level badge */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="text-[10px] tracking-[0.3em] mb-1"
                    style={{ color: course.accentColor, fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {course.level}
                  </div>
                  <div
                    className="text-xs tracking-[0.2em] font-medium"
                    style={{ color: course.accentColor, fontFamily: "'Noto Serif SC', serif" }}
                  >
                    {course.levelLabel}
                  </div>
                </div>
                <span
                  className="text-[10px] px-2 py-0.5 border tracking-widest"
                  style={{
                    borderColor: `${course.accentColor}60`,
                    color: course.accentColor,
                    fontFamily: "'Noto Serif SC', serif",
                  }}
                >
                  {course.tag}
                </span>
              </div>

              {/* Course Name */}
              <h3
                className="text-base md:text-lg font-semibold mb-1 leading-snug tracking-wide"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.18 0.012 60)" }}
              >
                {course.name}
              </h3>
              <div
                className="text-[11px] tracking-[0.2em] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.55 0.008 68)" }}
              >
                {course.subtitle}
              </div>

              {/* Accent divider */}
              <div
                className="h-px mb-4"
                style={{ background: `linear-gradient(90deg, ${course.accentColor}50, transparent)` }}
              />

              {/* Format & Period */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <span
                    className="text-[10px] tracking-widest pt-0.5 flex-shrink-0"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.008 68)" }}
                  >
                    形式
                  </span>
                  <span
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.38 0.010 65)" }}
                  >
                    {course.format}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] tracking-widest flex-shrink-0"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.008 68)" }}
                  >
                    周期
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.38 0.010 65)" }}
                  >
                    {course.period}
                  </span>
                </div>
              </div>

              {/* Description (expandable) */}
              <p
                className={`text-xs leading-relaxed tracking-wide transition-all duration-300 ${
                  activeIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
                style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.42 0.010 65)" }}
              >
                {course.description}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-xl font-semibold"
                  style={{ color: course.accentColor, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {course.price}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.008 68)" }}
                >
                  {course.priceNote}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p
            className="text-xs tracking-[0.2em]"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.55 0.008 68)" }}
          >
            点击课程卡片查看详细介紹 · 如需咨询请联系书院招生顾问
          </p>
        </div>
      </div>
    </section>
  );
}
