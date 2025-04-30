'use strict';
const App={
  fx:{
    buildNav:function(){
      document.getElementById('main').insertAdjacentHTML('afterend',App.data.nav);
    },
  },
  data:{
    nav:`
<nav id="nav" class="markdown-raw">
## 議事録

各資料内の個人名は<a href="/report/250331">2024年度の出席簿</a>のNo.に置き替えています（代表と役人さんは除く）。

2025年

- <a href="/report/250428">2025年4月28日 議題</a>
- <a href="/report/250413">2025年4月13日 議題</a>
- <a href="/report/250301">2025年3月1日 議事録</a>

2024年

- <a href="/report/240817">2024年8月17日 議事録</a>
- <a href="/report/240725-2">2024年7月25日 議事録</a>
- <a href="/report/240725">2024年7月25日 議題</a>
- <a href="/report/240721">2024年7月21日 議事録</a>
- <a href="/report/240201">2024年2月1日 議題</a>
- <a href="/report/240112">2024年1月12日 議事録</a>

2023年以前

- <a href="/report/231219">2023年12月19日 議事録</a>
- <a href="/report/231030">2023年10月30日 議題</a>
- <a href="/report/200901">2020年9月 国際交流ニュースからの引用</a>

## 情報共有

- <a href="/report/250425">250425 No.5の会議前の意見</a>
- <a href="/report/250326">250326mail 代表とNo.5</a>
- <a href="/report/241208">241208支援者に関するNo.5の所感</a>
- <a href="/report/240609">240609名簿管理に関するNo.5の所感</a>

## 資料

- <a href="/report/250331">2024年度の出席簿</a>
- <a href="/report/240519">教室マニュアル</a>
- <a href="/report/220830">教室蔵書一覧</a>

<a href="/">Homeへ戻る</a>
`
  }
}
window.onload=App.fx.buildNav();
