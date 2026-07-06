import { ContactCta } from '@/components/contact-cta'

const facilities = [
  { image: '/images/clubhouse.jpg', title: '會所休憩區', desc: '星空天幕主題休閒空間' },
  { image: '/images/pool.jpg', title: '室外游泳池', desc: '臨海景觀泳池' },
  { image: '/images/gym.jpg', title: '天際健身室', desc: '面海專業級健身設備' },
  { image: '/images/garden.jpg', title: '兒童戲水樂園', desc: '兒童專屬遊樂王國' },
  { image: '/images/basketball.jpg', title: '室內籃球場', desc: '全天候運動空間' },
  { image: '/images/kids.jpg', title: '兒童遊戲室', desc: 'STEM 主題室內遊樂室' },
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
            頂級大型豪華雙會所
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
            住戶可享用全新打造的頂級大型豪華雙會所「Club Reserve」，內設超過 45 項高端 resort
            級渡假休閒設施，包括室內外游泳池、天際健身室、主題派對室、兒童專屬遊樂王國及私人宴會廳等。
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
