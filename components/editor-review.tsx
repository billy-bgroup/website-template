import { ThumbsUp, AlertCircle, Lightbulb } from 'lucide-react'
import { ContactCta } from '@/components/contact-cta'

const pros = [
  {
    title: '極高性價比',
    body: '項目整體定價親民，尤其是開放式及一房單位，為年輕上車族及小家庭提供了低門檻進駐海景屋苑的絕佳機會。',
  },
  {
    title: '臨海渡假生活',
    body: '近 9 成單位享有青山灣海景，步行 2 分鐘直達沙灘，這種「回家即渡假」的生活質素在香港市區非常罕見。',
  },
  {
    title: '星級雙會所',
    body: '45 項以上的休閒設施（特別是天際健身室及臨海泳池）大大提升了居住體驗及物業的保值能力。',
  },
]

const notes = [
  {
    title: '交通出行模式',
    body: '項目不近港鐵站，出入主要依賴青山公路的巴士及小巴網絡接駁至荃灣或屯門市中心。如需依賴鐵路通勤，需將交通時間納入考量。',
  },
  {
    title: '生活配套',
    body: '雖然自帶基座商場能滿足日常所需，但若需要大型商場逛街或豐富娛樂，仍需乘車前往屯門市廣場或 V city。',
  },
]

export function EditorReview() {
  return (
    <section id="editor-review" className="bg-secondary py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-accent">
            EDITOR&apos;S REVIEW
          </p>
          <h2 className="mt-3 text-balance font-serif text-2xl font-semibold text-foreground md:text-4xl">
            小編建議：黃金海灣買唔買得過？
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            黃金海灣主打「中高端海景渡假社區」，雖然並非傳統半山豪宅，但憑藉極高性價比、無敵海景資源及頂級會所，在近期新盤市場中備受關注。以下是小編為你整理的入市重點分析：
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <ThumbsUp className="size-5" />
              <h3 className="font-serif text-lg font-semibold">亮點與優勢</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {pros.map((item) => (
                <li key={item.title} className="leading-relaxed">
                  <span className="font-medium text-foreground">
                    {item.title}：
                  </span>
                  <span className="text-muted-foreground">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="size-5" />
              <h3 className="font-serif text-lg font-semibold">買家注意事項</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {notes.map((item) => (
                <li key={item.title} className="leading-relaxed">
                  <span className="font-medium text-foreground">
                    {item.title}：
                  </span>
                  <span className="text-muted-foreground">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2 text-accent-foreground">
            <Lightbulb className="size-5 text-accent" />
            <h3 className="font-serif text-lg font-semibold text-foreground">
              小編選樓策略：第 1 期還是第 2 期？
            </h3>
          </div>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">
                如果你是首置上車族或投資收租：
              </span>
              強烈建議關注第 1 期「意嵐」（The Uppland）。這期主打中小型單位，入場費較低，近期市場交投活躍，實用呎價約在 $1.2 萬至 $1.4 萬多之間，租務回報相對穩定。
            </p>
            <p>
              <span className="font-medium text-foreground">
                如果你是換樓客或追求極致生活：
              </span>
              第 2 期「珀岸」（The Reserve）會是更好的選擇。其座向更佳，提供大平層及特色戶，無遮擋的臨海景觀更具豪宅氣派，適合預算充足的實力買家。
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            想了解哪一款戶型最適合你的預算？想索取最新的價單及折實優惠？
          </p>
          <div className="mt-6">
            <ContactCta label="聯絡銷售部為你免費評估" />
          </div>
        </div>
      </div>
    </section>
  )
}
