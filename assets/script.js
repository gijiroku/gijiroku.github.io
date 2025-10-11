'use strict';

(function(){

const reportNav=`
<h2>議事録</h2>
<p>各資料内の個人名は<a href="/report/250331">2024年度の出席簿</a>のNo.に置き替えています（代表と役人さんは除く）。</p>
<p>2025年</p>
<ul>
<li><a href="/report/250604-3">2025年6月4日 議事録2</a></li>
<li><a href="/report/250604-2">2025年6月4日 議事録</a></li>
<li><a href="/report/250604">2025年6月4日 議題</a></li>
<li><a href="/report/250428-2">2025年4月28日 議事録</a></li>
<li><a href="/report/250428">2025年4月28日 議題</a></li>
<li><a href="/report/250413">2025年4月13日 議題</a></li>
<li><a href="/report/250301">2025年3月1日 議事録</a></li>
</ul>
<p>2024年</p>
<ul>
<li><a href="/report/240817">2024年8月17日 議事録</a></li>
<li><a href="/report/240725-2">2024年7月25日 議事録</a></li>
<li><a href="/report/240725">2024年7月25日 議題</a></li>
<li><a href="/report/240721">2024年7月21日 議事録</a></li>
<li><a href="/report/240201">2024年2月1日 議題</a></li>
<li><a href="/report/240112">2024年1月12日 議事録</a></li>
</ul>
<p>2023年以前</p>
<ul>
<li><a href="/report/231219">2023年12月19日 議事録</a></li>
<li><a href="/report/231030">2023年10月30日 議題</a></li>
<li><a href="/report/200901">2020年9月 国際交流ニュースからの引用</a></li>
</ul>
<h2>情報共有</h2>
<ul>
<li><a href="/report/250727">250727代表に対するNo.5の所感</a></li>
<li><a href="/report/250625">250625mail 役人</a></li>
<li><a href="/report/250609">250609mail 役人とNo.5</a></li>
<li><a href="/report/250523">250523mail 代表とNo.5</a></li>
<li><a href="/report/250425">250425 No.5の会議前の意見</a></li>
<li><a href="/report/250416">250416mail 代表とNo.5</a></li>
<li><a href="/report/250326">250326mail 代表とNo.5</a></li>
<li><a href="/report/241208">241208支援者に関するNo.5の所感</a></li>
<li><a href="/report/240609">240609名簿管理に関するNo.5の所感</a></li>
</ul>
<h2>資料</h2>
<ul>
<li><a href="/report/250331">2024年度の出席簿</a></li>
<li><a href="/report/240519">教室マニュアル</a></li>
<li><a href="/report/220830">教室蔵書一覧</a></li>
<li><a href="/report/links">日本語学習リンク集</a></li>
<li><a href="/report/volunteer">ボランティアの定義</a></li>
</ul>
<p><a href="/">Homeへ戻る</a></p>
<p>当サイトのQRコード</p>
<p><img src="/img/common/qrcode_gijiroku.github.io.nav.png" alt="gijiroku.github.ioのQRコード" width="300" height="300" loading="lazy" decoding="async"></p>
`;

const filNav=`
<ul>
<li><a href="/fil/20">20: Aking Araw わたしの いちにち My Day</a></li>
<li><a href="/fil/22">22: Pamimili かいもの Shopping</a></li>
<li><a href="/fil/24">24: Magandang Almusal すてきな あさごはん Good Breakfast</a></li>
<li><a href="/fil/26">26: Ang mahalagang lugar ko わたしの たいせつな ばしょ My important place</a></li>
<li><a href="/fil/28">28: Hapon na anime にほんの アニメ Japanese anime</a></li>
<li><a href="/fil/30">30: Aking Bayan わたしの まち My Town</a></li>
<li><a href="/fil/32">32: Amusement Park ゆうえんち</a></li>
<li><a href="/fil/34">34: Case ng phone at payong スマホケース と かさ Smartphone case and umbrella</a></li>
<li><a href="/fil/36">36: Shopping mall ショッピングモール</a></li>
<li><a href="/fil/38">38: Ang aking bayan, Da Nang わたしの まち ダナン My town, Da Nang</a></li>
</ul>
<p><img src="/img/common/qrcode_gijiroku.github.io.fil.nav.png" alt="gijiroku.github.ioのQRコード" width="300" height="300" loading="lazy" decoding="async"></p>
`;

const scriptList=[];
let domain=location.domain;
let local=false;
let path='';

function renderNav(){
  const nav=document.getElementById('nav');
  const url=location.href;
  if(url.indexOf('http')!==0){
    const arr=url.split('/');
    let localPath='';
    for(let i=0;i<7;i++){
      if(i!=0){
        localPath+='/';
      }
      localPath+=arr[i];
    }
    domain=localPath;
    local=true;
  }
  path=url.split(domain)[1];
  console.log(url);
  console.log(domain);
  console.log(path);
  let subDir=path.split('/')[1];
  let navContent=reportNav;
  if(subDir=='fil'){
    navContent=filNav;
  }
  nav.innerHTML=navContent;
}

function canonicalPath(){
  const canonical=document.getElementById('canonical');
  if(!canonical)return '';
  const url=canonical.getAttribute('href');
  const origin=location.origin;
  if(url.indexOf(origin)!==0)return '';
  return url.substring(origin.length);
}

function markCurrentPage(){
  const links=document.getElementById('nav').getElementsByTagName('a');
  const currentPath=canonicalPath();
  for(let i=0;i<links.length;i++){
    const linkPath=links[i].getAttribute('href');
    if(linkPath===currentPath){
      links[i].classList.add('current');
    }
  }
}

function removeUrlParams(){
  const hasParams=location.search.length>0;
  const isHistorySupported=typeof history.replaceState==='function';
  if(hasParams&&isHistorySupported){
    const urlWithoutParams=location.origin+location.pathname;
    history.replaceState(null,'',urlWithoutParams);
  }
}

function loadScriptsInOrder(urls,callback){
  let i=0;
  function loadNext(){
    if(i<urls.length){
      const s=document.createElement('script');
      s.src=urls[i];
      s.onload=function(){
        i++;
        loadNext();
      };
      document.body.appendChild(s);
    }else if(callback){
      callback();
    }
  }
  loadNext();
}

function localSetting(){
  if(local){
    let count=0;
    const ex=/\//g;
    const arr=path.match(ex);
    if(arr!==null){
      count=arr.length;
    }
    let dir='';
    if(count>1){
      dir='../';
    }
    scriptList.push(dir+'assets/local.js');
  }else{
    scriptList.push('https://a.xn--zck4aza3c9i.tk/b/s.js');
  }
}

renderNav();
markCurrentPage();
localSetting();
loadScriptsInOrder(scriptList);
window.addEventListener('load',function(){
  setTimeout(removeUrlParams,1000);
});

})();