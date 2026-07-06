import { ContactCta } from '@/components/contact-cta'

const phases = [
  {
    tag: '第 1 期',
    name: '意嵐',
    en: 'The Uppland',
    image: '/images/terrace.jpg',
    blocks: '第 3 座及第 5 座',
    area: '182 – 767 方呎',
    type: '開放式至 3 房戶型',
    points: [
      '整體規劃靈活，入場費更為親民',
      '特別迎合年輕上車族與專業人士',
    ],
  },
  {
    tag: '第 2 期',
    name: '珀岸',
    en: 'The Reserve',
    image: '/images/garden.jpg',
    blocks: '第 1 座及第 2 座',
    area: '269 – 1,329 方呎',
    type: '開放式至 4 房及天台特色戶',
    points: [
      '定位更具豪宅規格，第一線無遮擋大平面海景戶',
      '主力吸引換樓家庭與追求奢華空間的實力買家',
    ],
  },
]

export function PhaseComparison() {
  return (
    <section id="phases" className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-primary/70">
            THE UPPLAND · THE RESERVE
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-primary md:text-4xl">
            一期與二期之核心差異
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
            整個發展項目共分為兩期現樓推售，滿足不同買家的置業需要。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {phases.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={p.image || '/placeholder.svg'}
                alt={`${p.name} ${p.en}`}
                className="h-56 w-full object-cover md:h-64"
              />
              <div className="p-6 md:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {p.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-primary">
                    {p.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{p.en}</span>
                </div>

                <dl className="mt-6 space-y-3 text-sm md:text-base">
                  <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                    <dt className="shrink-0 text-muted-foreground">座數</dt>
                    <dd className="text-right font-medium text-foreground">
                      {p.blocks}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                    <dt className="shrink-0 text-muted-foreground">實用面積</dt>
                    <dd className="text-right font-medium text-foreground">
                      {p.area}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                    <dt className="shrink-0 text-muted-foreground">戶型</dt>
                    <dd className="text-right font-medium text-foreground">
                      {p.type}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-foreground/80">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ContactCta />
        </div>
      </div>
    </section>
  )
}
