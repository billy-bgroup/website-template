import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})
const notoSerif = Noto_Serif_TC({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '黃金海灣 Gold Coast Bay｜屯門掃管笏海濱新盤．意嵐 The Uppland、珀岸 The Reserve',
  description:
    '黃金海灣，英文名是Gold Coast Bay，落戶屯門掃管笏青山公路青山灣段 18 號，分意嵐、珀岸兩期共 1,323 伙，約九成單位望向青山灣海景，約 2 分鐘步程直達黃金泳灘，鄰近哈羅香港國際學校，並設逾 45 項雙會所設施。',
  generator: 'v0.app',
  icons: {
    icon: 'https://img.icons8.com/?size=100&id=0T3OMyArQLw9&format=png&color=000000',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f4d47',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-HK"
      className={`${notoSans.variable} ${notoSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
