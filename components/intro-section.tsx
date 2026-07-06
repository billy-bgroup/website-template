import { ContactCta } from '@/components/contact-cta'

const stats = [
  { value: '1,323', label: '住宅單位' },
  { value: '近 9 成', label: '單位飽覽青山灣海景' },
  { value: '約 2 分鐘', label: '步行直達黃金泳灘' },
  { value: '45+', label: '會所豪華休閒設施' },
]

export function IntroSection() {
  return (
    <section id="intro" className="bg-secondary py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-primary/70">
            PROJECT OVERVIEW
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-primary md:text-4xl">
            項目簡介
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/beach.jpg"
            alt="黃金泳灘沙灘及黃金海岸海濱長廊"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-foreground/85 md:text-lg">
          <p>
            <span className="font-semibold text-primary">黃金海灣（Gold Coast Bay）</span>
            是位於香港屯門掃管笏青山公路青山灣段18號的全新一手臨海旗艦住宅屋苑。項目主打極速親臨黃金泳灘，為住戶開啟優雅的臨海渡假生活模式。
          </p>
          <p>
            全盤由多幢住宅大廈相連組成（劃分為兩期發展，共提供 1,323 個住宅單位）。項目坐向優越，高達近九成單位可飽覽青山灣遼闊無敵海景。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card px-4 py-6 text-center"
            >
              <div className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ContactCta />
        </div>
      </div>
    </section>
  )
}
