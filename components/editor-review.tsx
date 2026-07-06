import { ThumbsUp, AlertCircle, Lightbulb } from 'lucide-react'
import { ContactCta } from '@/components/contact-cta'

const pros = [
  {
    title: '入場門檻友善',
    body: '全盤定價務實，特別是開放式與一房戶，讓年輕買家和小家庭都有機會以較低預算入住海景社區。',
  },
  {
    title: '推門即渡假',
    body: '約九成單位望向青山灣，兩分鐘腳程直達沙灘，這種「返屋企等於放假」的生活體驗，在市區內確實難求。',
  },
  {
    title: '雙會所加分',
    body: '逾 45 項設施之中，向海健身室與臨海泳池尤其搶眼，不但提升居住質素，對長線保值亦有幫助。',
  },
]

const notes = [
  {
    title: '出行方式',
    body: '屋苑並非鄰近港鐵，日常主要靠青山公路一帶的巴士小巴接駁至荃灣或屯門市中心；習慣以鐵路通勤的買家宜先計算好車程。',
  },
  {
    title: '購物娛樂',
    body: '基座商場足以應付日常所需，但若想逛大型商場或尋找更多娛樂選擇，仍需乘車前往屯門市廣場或 V city。',
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
            小編話你知：黃金海灣值博率有幾高？
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            黃金海灣走的是「中高檔海景渡假社區」路線，雖非傳統半山豪宅，但勝在定價實惠、坐擁一線海景，加上大型會所加持，近期在新盤市場相當受注目。以下就由小編替你拆解入市要點：
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
                首置上車或收租為主：
              </span>
              可留意第 1 期「意嵐」（The Uppland）。以中小型單位為主，入場銀碼較低，近期成交暢旺，實用呎價大約介乎 $1.2 萬至 $1.4 萬餘，租務表現亦算穩健。
            </p>
            <p>
              <span className="font-medium text-foreground">
                換樓自住或追求質素：
              </span>
              則不妨聚焦第 2 期「珀岸」（The Reserve）。坐向更理想，備有大平層及特色戶，無遮擋的闊面海景更見豪宅氣派，適合預算相對充裕的買家。
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            想知道哪種戶型最配合你的預算？或想取得最新價單與折扣優惠？
          </p>
          <div className="mt-6">
            <ContactCta label="聯絡銷售部為你免費評估" />
          </div>
        </div>
      </div>
    </section>
  )
}
