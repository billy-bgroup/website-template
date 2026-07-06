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
            國際化優質生活與教育圈
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
                名校環抱 · 教育首選
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                周邊毗鄰著名學府哈羅香港國際學校（Harrow International
                School），建構國際化的優質生活與教育圈。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                黃金泳灘 · 海濱長廊
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                步行約 2 分鐘即直達著名的黃金泳灘沙灘及黃金海岸海濱長廊，盡享臨海渡假式生活。
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">
                交通四通八達 · 生活基座商場
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                項目自設生活基座商場，日常餐飲購物一步到位；門前即設有多條巴士及小巴路線，快速連接荃灣、旺角、機場及大灣區各主要口岸。
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
