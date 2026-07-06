import { ContactCta } from '@/components/contact-cta'

export function PriorityRegistration() {
  return (
    <section id="register" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center text-black md:px-6">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-accent-foreground/70">
          PRIORITY REGISTRATION
        </p>
        <h2 className="font-serif text-2xl font-semibold text-black md:text-4xl">
          率先預約 · 親臨示範單位
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
          示範單位正式開放後，我們會按登記次序，優先為已預留名額的客戶安排參觀時段。
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {['率先賞遊豪裝示範單位', '預留優先參觀名額', '網上獲取價單與平面圖'].map(
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
          <ContactCta label="即時預留名額 · 聯絡銷售部" />
        </div>
      </div>
    </section>
  )
}
