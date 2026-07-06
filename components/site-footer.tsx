import { PHONE_DISPLAY } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-xl font-semibold text-white">
            黃金海灣．意嵐．珀岸
          </h2>
          <p className="mt-3 text-sm">
            查詢熱線：
            <a href="tel:+85263544968" className="font-medium text-accent">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-4 text-[11px] leading-relaxed text-neutral-400 md:text-xs">
          <p className="font-semibold text-neutral-300">免責聲明：</p>
          <p>
            本宣傳旨在提供更多一手新盤資料及圖片檔案服務只供閱覽;不聲明或保證所提供訊息的準確性和完整性。在撰寫本廣告時,雖已作出合理和謹慎的考慮,對資料的完整和準確性恕不保證、明示或暗示絕對無誤。本網頁並不是發展項目之官方網站網頁。本廣告內的圖片與發展商的樓盤並無任何關係。準買家如欲了解發展項目詳情,請參閱售樓說明書。資料有可能出現售價、現金或其他條件上的改動,或撤回而不經提前通知,並可能受特別條款約束。因使用此資料而直接或間接引致的損失或損毀。本公司恕不負責。本網站内所有内容包括一手新盤資料,僅供參考和借鑒,物業資料,一切以發展商最新公布為準。本頁面所提到房屋面積如無特別標示,均指實用面積。客戶應自行確保資料或,内容的完整性和準確性。所載資料僅供參考,並不構成要約或合約一部份。如有需要,客戶應自行咨詢相關法律出及/或專業意見。
          </p>
          <p>
            本廣告/宣傳資料內載列的相片、圖像、繪圖或素描顯示純屬畫家對有關發展項目之想像。有關相片、圖像、繪圖或素描並非按照比例繪畫及/或可能經過電腦修飾處理。準買家如欲了解發展項目的詳情，請參閱售樓說明書。賣方亦建議準買家到有關發展地盤作實地考察，以對該發展地盤、其周邊地區環境及附近的公共設施有較佳了解。
          </p>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          © 2026 properties-hk.com All rights reserved.
        </div>
      </div>
    </footer>
  )
}
