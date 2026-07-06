import { ContactCta } from '@/components/contact-cta'

const stats = [
  { value: '1,323', label: '兩期合共伙數' },
  { value: '約 90%', label: '單位坐望青山灣' },
  { value: '約 2 分鐘', label: '漫步抵達黃金泳灘' },
  { value: '45 項', label: '雙會所悠閒配套' },
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
            座落屯門掃管笏青山公路青山灣段 18
            號，屬全新一手臨海大型住宅社區。屋苑貼近黃金泳灘而建，讓住戶足不出區便能投入寫意的海濱渡假日常。
          </p>
          <p>
            發展分為兩期、由多幢大廈相連而成，兩期合共供應 1,323
            伙。整體樓宇坐向經悉心規劃，當中約九成單位均能將青山灣的開揚海景盡收眼底。
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
