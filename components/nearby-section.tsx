import { ContactCta } from '@/components/contact-cta'

export function NearbySection() {
  return (
    <section id="nearby" className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-primary/70">
            LOCATION &amp; LIFESTYLE
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-primary md:text-4xl">
            海岸生活圈 · 教育與便利兼備
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/school.jpg"
              alt="哈羅香港國際學校"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                名校在側 · 育兒無憂
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                咫尺之遙即為國際知名的哈羅香港國際學校（Harrow International
                School），為子女的成長路鋪墊優質的國際化學習環境。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                黃金泳灘 · 海濱漫步
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                由屋苑起步，約 2
                分鐘便可踏足黃金泳灘與海岸長廊，把海風與陽光化作每天的生活節奏。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                交通便捷 · 基座商場貼身
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                屋苑設有基座商場，飲食購物近在咫尺；門外亦有多線巴士與小巴，輕鬆往返荃灣、旺角、機場以至大灣區各大口岸。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/lobby.jpg"
            alt="住宅大堂"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10 text-center">
          <ContactCta />
        </div>
      </div>
    </section>
  )
}
