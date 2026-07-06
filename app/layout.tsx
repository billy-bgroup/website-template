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
  title: '黃金海灣．意嵐．珀岸 | 屯門掃管笏臨海旗艦住宅',
  description:
    '黃金海灣．意嵐．珀岸 Gold Coast Bay 位於屯門掃管笏青山公路青山灣段18號，全新一手臨海旗艦住宅。近九成單位坐擁青山灣無敵海景，步行約2分鐘直達黃金泳灘，毗鄰哈羅香港國際學校。優先登記參觀示範單位，線上索取價單及平面圖。',
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
