import { ContactCta } from '@/components/contact-cta'

const facilities = [
  { image: '/images/clubhouse.jpg', title: '會所大堂', desc: '以星幕天花為題的優雅聚腳點' },
  { image: '/images/pool.jpg', title: '露天泳池', desc: '一邊暢泳一邊飽覽海岸線' },
  { image: '/images/gym.jpg', title: '海景健身室', desc: '配備專業器械的向海空間' },
  { image: '/images/garden.jpg', title: '兒童玩水區', desc: '為小朋友而設的戲水天地' },
  { image: '/images/basketball.jpg', title: '室內籃球場', desc: '不受天氣影響的運動場地' },
  { image: '/images/kids.jpg', title: '兒童遊戲室', desc: '融入 STEM 元素的室內樂園' },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-secondary py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-primary/70">
            CLUB RESERVE
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-primary md:text-4xl">
            大型雙會所 · 度假式享受
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
            全新登場的雙會所「Club Reserve」，網羅逾 45 項渡假級悠閒配套 —— 由室內外泳池、向海健身室、主題派對房，到小朋友專屬遊樂區及私人宴會空間，一應俱全。
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <figure
              key={f.title}
              className="overflow-hidden rounded-xl bg-card shadow-sm"
            >
              <img
                src={f.image || '/placeholder.svg'}
                alt={f.title}
                className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="px-5 py-4">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ContactCta />
        </div>
      </div>
    </section>
  )
}
