import { ContactCta } from '@/components/contact-cta'

export function PriorityRegistration() {
  return (
    <section id="register" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center text-black md:px-6">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-accent-foreground/70">
          PRIORITY REGISTRATION
        </p>
        <h2 className="font-serif text-2xl font-semibold text-black md:text-4xl">
          優先登記參觀示範單位
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
          當示範單位開放參觀後，銷售部會優先安排已登記人士參觀示範單位。
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {['搶先體驗豪華示範單位', '優先登記參觀示範單位', '線上索取價單及平面圖'].map(
            (text) => (
              <div
                key={text}
                className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-5 text-sm font-medium text-black md:text-base"
              >
                {text}
              </div>
            ),
          )}
        </div>

        <div className="mt-9">
          <ContactCta label="立即登記 · 聯絡銷售部" />
        </div>
      </div>
    </section>
  )
}
