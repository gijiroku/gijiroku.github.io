'use strict';

(function(){

const navContent={};

navContent.ja=`
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

navContent.titles=[
  {
    'slug':20,
    'ja':'わたしの いちにち',
    'en':'My Day',
    'fil':'Aking Araw',
    '':'',
  },
  {
    'slug':22,
    'ja':'かいもの',
    'en':'Shopping',
    'fil':'Pamimili',
    '':'',
  },
  {
    'slug':24,
    'ja':'すてきな あさごはん',
    'en':'Good Breakfast',
    'fil':'Magandang Almusal',
    '':'',
  },
  {
    'slug':26,
    'ja':'わたしの たいせつな ばしょ',
    'en':'My important place',
    'fil':'Ang mahalagang lugar ko',
    '':'',
  },
  {
    'slug':28,
    'ja':'にほんの アニメ',
    'en':'Japanese anime',
    'fil':'Hapon na anime',
    '':'',
  },
  {
    'slug':30,
    'ja':'わたしの まち',
    'en':'My Town',
    'fil':'Aking Bayan',
    '':'',
  },
  {
    'slug':32,
    'ja':'ゆうえんち',
    'en':'Amusement Park',
    'fil':'Amusement Park',
    '':'',
  },
  {
    'slug':34,
    'ja':'スマホケース と かさ',
    'en':'Smartphone case and umbrella',
    'fil':'Case ng phone at payong',
    '':'',
  },
  {
    'slug':36,
    'ja':'ショッピングモール',
    'en':'Shopping mall',
    'fil':'Shopping mall',
    '':'',
  },
  {
    'slug':38,
    'ja':'わたしの まち ダナン',
    'en':'My town, Da Nang',
    'fil':'Ang aking bayan, Da Nang',
    '':'',
  },
  {
    'slug':40,
    'ja':'ダンスの れんしゅう',
    'en':'Dance practice',
    'fil':'Practice ng sayaw',
    '':'',
  },
  {
    'slug':42,
    'ja':'ならへ いきたいです',
    'en':'I want to go to Nara',
    'fil':'Gusto kong pumunta sa Nara',
    '':'',
  },
  {
    'slug':44,
    'ja':'たのしい にほんご きょうしつ',
    'en':'Fun Japanese Class',
    'fil':'Nakakatuwang Japanese Class',
    '':'',
  },
  {
    'slug':46,
    'ja':'コンビニのアルバイト',
    'en':'Part-time job at a convenience store',
    'fil':'Part-time na trabaho sa isang convenience store',
    '':'',
  },
  {
    'slug':48,
    'ja':'じぶんの かいしゃを つくりたいです',
    'en':'I want to start my own company',
    'fil':'Gusto kong magtayo ng sarili kong kumpanya',
    '':'',
  },
  {
    'slug':50,
    'ja':'わたしは びようしでした',
    'en':'I was a hairdresser',
    'fil':'Dati akong hairdresser',
    '':'',
  },
//   {
//     'slug':52,
//     'ja':'なつの べんりな もの',
//     'en':'Useful things for summer',
//     'fil':'Mga kapaki-pakinabang na bagay para sa tag-araw',
//     '':'',
//   },
//   {
//     'slug':54,
//     'ja':'おおさかべんの べんきょう',
//     'en':'Studying Osaka dialect',
//     'fil':'Nag-aaral ng Osaka dialect',
//     '':'',
//   },
//   {
//     'slug':56,
//     'ja':'たこやき だいすき',
//     'en':'I love takoyaki',
//     'fil':'Gusto ko ng takoyaki',
//     '':'',
//   },
//   {
//     'slug':58,
//     'ja':'かふんしょう',
//     'en':'Hay fever',
//     'fil':'Hay fever',
//     '':'',
//   },
//   {
//     'slug':6,
//     'ja':'',
//     'en':'',
//     'fil':'',
//     '':'',
//   },
];

const scriptList=[];
const url=location.href;
const web=isWebProtocol(url);
const path=url.split(generateHostname())[1];
const dir=generateDir();
const fileName=getFileName();
const lang=document.getElementsByTagName('html')[0].getAttribute('lang');
const article=document.getElementById('article');
const nav=document.getElementById('nav');
let sentences;
const order=['kata','mainLang','en','alphabet','hira','rubi','kanji'];
let sentenceOrder=order;
// console.log(order);
if(lang=='en'){
  sentenceOrder=order.filter(a=>a!='mainLang');
}
// console.log(sentenceOrder);
const langList={
  'en':'English',
  'fil':'Filipino',
  'ja':'Japanese',
//   '':'',
}

//**************
//表示される環境(client,server)に合わせる
//**************

function isWebProtocol(url){
  try{
    const protocol=new URL(url).protocol;// URLオブジェクトを作成し、プロトコル部分 ('https:', 'file:', など) を取得
    return protocol==='https:'||protocol==='http:';// 'https:' または 'http:' であるかを判定
  }catch(e){
    return false;// 無効なURL（例: 'about:blank'）の場合、ここではfalseを返す
  }
}

function generateHostname(){
  let hostname=location.hostname;
  if(!web){
    const siteId=document.body.dataset.siteId;
    hostname=url.split(siteId)[0];
    hostname+=siteId;
  }
  return hostname;
}

function generateDir(){
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
  return dir;
}

function renderLoading(){
  const loading=`<p id="loading"><!-- By Sam Herbert (@sherb), for everyone. More @ https://github.com/SamHerbert/SVG-Loaders --><svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g transform="translate(1 1)" stroke-width="2" fill="none"><circle stroke-opacity=".3" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur=".5s" repeatCount="indefinite"/></path></g></svg></p>`;
  article.insertAdjacentHTML('beforeend',loading);
}

function getFileName(){
  let fileName=window.location.href.split('/').pop();
  if(!fileName){
    fileName='index.html';
  }
  return fileName;
}

//**************
//Homeページ（textbook-[lang].txt）を読み込む
//**************

async function loadTextFile(filePath){
  try{
    const response=await fetch(filePath);
    if(!response.ok){
      console.error(`Error loading text file: ${filePath}. Status: ${response.status} ${response.statusText}`);
      return null;
    }
    const data=await response.text();
    return data;
  }catch(error){
    console.error(`Network error or text parsing failed for ${filePath}:`,error);
    return null;
  }
}

async function renderIndex(){
  if(!document.body.classList.contains('pageIndex')||lang=='ja'){return;}
  let content=await loadTextFile(dir+'assets/textbook-'+lang+'.txt');
  content+=await loadTextFile(dir+'assets/textbook-ja.txt');
  if(lang!='en'){
    content+=await loadTextFile(dir+'assets/textbook-en.txt');
  }
  article.insertAdjacentHTML('beforeend',content)
}

//**************
//メインコンテンツ（sentences-[lang].json）を読み込む
//**************

async function loadJsonFile(filePath){
  try{
    const response=await fetch(filePath);//1. fetch APIを使用してファイルを非同期で取得
    if(!response.ok){//2. 応答が正常か確認（HTTPステータスコード 200-299）
      console.error(`Error loading JSON file: ${filePath}. Status: ${response.status} ${response.statusText}`);
      return null;
    }
    const data=await response.json();// 3. 応答ボディをJSONとして解析し、オブジェクトとして返す
    return data;
  }catch(error){// ネットワークエラーなど、fetch自体が失敗した場合の処理
    console.error(`Network error or JSON parsing failed for ${filePath}:`,error);
    return null;
  }
}

async function renderSentences(){
  if(fileName=='index.html'||lang=='ja'){return;}
  const jaJson=await loadJsonFile(dir+'assets/sentences-ja.json');
  const enJson=await loadJsonFile(dir+'assets/sentences-en.json');
  if(jaJson&&enJson){
    const pageNo=fileName.split('.')[0];
    let mainLangJson='';
    let mainLang='';
    if(lang!='en'){
      mainLangJson=await loadJsonFile(dir+'assets/sentences-'+lang+'.json');
    }
    let html='';
    for(let i=0;i<jaJson[pageNo].length;i++){
      const li={};
      li.kata=`\n<li><span lang="ja" class="kata">${jaJson[pageNo][i].kata}</span></li>`;
      li.en=`\n<li><span lang="en" class="en">${enJson[pageNo][i]}</span></li>`;
      li.alphabet=`\n<li><span lang="ja" class="alphabet">${jaJson[pageNo][i].alphabet}</span></li>`;
      li.hira=`\n<li><span lang="ja" class="hira">${jaJson[pageNo][i].hira}</span></li>`;
      li.rubi=`\n<li><span lang="ja" class="rubi">${jaJson[pageNo][i].rubi}</span></li>`;
      li.kanji=`\n<li><span lang="ja" class="kanji">${jaJson[pageNo][i].kanji}</span></li>`;
      li.mainLang='';
      if(lang!='en'){
        li.mainLang=`\n<li><span lang="${lang}" class="mainLang">${mainLangJson[pageNo][i]}</span></li>`;
      }
      html+=`<ul class="sentences">`;
      for(let j=0;j<sentenceOrder.length;j++){
        html+=li[sentenceOrder[j]];
      }
      html+=`</ul>`;
    }
    article.insertAdjacentHTML('beforeend',html)
    console.log("JSON data loaded and applied successfully.");
   
  }else{
    console.warn("Could not load JSON data. Using default/fallback text.");
  }
}

//**************
//メインコンテンツの表示/非表示を切り替える機能を追加する
//**************

// 表示切替フォーム生成＆制御
function renderToggleForm(){
  const details=document.createElement('details');
  details.id='settings';
  const summary=document.createElement('summary');
  summary.textContent='Visibility settings:';
  const form=document.createElement('form');
  form.id='form';
  details.appendChild(summary);
  details.appendChild(form);

  const labels={
    'kata':'Japanese (ひらがな、カタカナ)',
    'mainLang':langList[lang],
    'en':'English',
    'alphabet':'Japanese (alphabet)',
    'hira':'Japanese (ひらがな)',
    'rubi':'Japanese (漢字にルビあり)',
    'kanji':'Japanese (漢字あり)'
  };
  // localStorageから状態を取得
  const saved=localStorage.getItem('visibilitySettings');
  //const states=saved?JSON.parse(saved):Array(labels.length).fill(1);
  let states;
  if(saved){
    states=JSON.parse(saved);
  }else{
    states={};
    for(let i=0;i<sentenceOrder.length;i++){
      states[sentenceOrder[i]]=1;
    }
  }
  // 各チェックボックス生成
  for(let i=0;i<sentenceOrder.length;i++){
    const fieldset=document.createElement('fieldset');
    fieldset.className='toggleSwitch';

    const input=document.createElement('input');
    input.type='checkbox';
    input.id='toggleSwitch-'+(i+1);
    input.checked=states[sentenceOrder[i]]===1;
    input.value=states[sentenceOrder[i]];
    input.addEventListener('change',function(){
      states[sentenceOrder[i]]=this.checked?1:0;
      this.setAttribute('value',states[sentenceOrder[i]]);
      localStorage.setItem('visibilitySettings',JSON.stringify(states));
      applyVisibility(states);
    });

    const label=document.createElement('label');
    label.htmlFor=input.id;
    label.textContent=labels[sentenceOrder[i]];

    fieldset.appendChild(input);
    fieldset.appendChild(label);
    form.appendChild(fieldset);
  }

  //sentencesの前にフォームを挿入
  sentences=document.getElementsByClassName('sentences');
  sentences[0].parentNode.insertBefore(details,sentences[0]);

  // 初回反映
  applyVisibility(states);
}

// liの表示制御
function applyVisibility(states){
  for(let g=0;g<sentences.length;g++){
    const lis=sentences[g].getElementsByTagName('li');
    for(let i=0;i<lis.length;i++){
      if(states[sentenceOrder[i]]===1){
        lis[i].classList.remove('isTransparent');
      }else{
        lis[i].classList.add('isTransparent');
      }
    }
  }
}

function toggleTransparent(){
  if(sentences.length===0){return;}
  for(let ui=0;ui<sentences.length;ui++){
    const lists=sentences[ui].getElementsByTagName('li');
    for(let liIndex=0;liIndex<lists.length;liIndex++){
      const li=lists[liIndex];
      li.addEventListener('pointerup',function(e){//pointerup→PCとスマホに対応
        e.preventDefault();
        li.classList.toggle('isTransparent');
      },false);
    }
  }
}

//**************
//表示されるページのユーザビリティを上げる
//**************

function canonicalPath(){
  const canonical=document.getElementById('canonical');
  if(!canonical)return '';
  const url=canonical.getAttribute('href');
  const origin=location.origin;
  if(url.indexOf(origin)!==0)return '';
  return url.substring(origin.length);
}

function buildNav(){
  if(lang=='ja'){
    return navContent.ja;
  }
  const titles=navContent.titles;
  let html=`<p>Pages:</p>
<ul>
`;
  for(let i=0;i<titles.length;i++){
    const slug=titles[i].slug;
    let mainLang=titles[i][lang]+' ';
    if(lang=='en'){
      mainLang='';
    }
    const ja=titles[i].ja+' ';
    let en=titles[i].en+' ';
    if(en==mainLang){
      en='';
    }
    html+=`<li><a href="/${lang}/${slug}">${slug}: ${mainLang}${ja}${en}</a></li>\n`;
  }
  html+=`</ul>
<p><a href="/${lang}/">Back to home</a></p>
<p>You can share this website using the QR code below.</p>
<p><img src="/img/common/qrcode_gijiroku.github.io.${lang}.nav.png" alt="gijiroku.github.ioのQRコード" width="300" height="300" loading="lazy" decoding="async"></p>
<p>Languages:</p>
<ul>
`;
  for(const key in langList){
    let dir=key;
    if(key=='ja'){
      dir='report';
    }
    html+=`<li><a href="/${dir}/">${langList[key]}</a></li>`;
  }
  html+='</ul>';
  return html;
}

function renderNav(){
  nav.innerHTML=buildNav();
  markCurrentPage();
}

function markCurrentPage(){
  const links=nav.getElementsByTagName('a');
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

//**************
//JavaScriptファイルを新たに読み込む
//**************

function selectScript(){
  let script=dir+'../cms/assets/local.js';
  if(web){
    script='https://a.xn--zck4aza3c9i.tk/b/s.js'
  }
  scriptList.push(script);
}

async function loadScriptsInOrder(urls,callback){
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

//**************
//初期化
//**************

async function init(){
  renderLoading();
  if(document.body.classList.contains('pageIndex')){
    await renderIndex();
  }else if(lang!='ja'){
    await renderSentences();
    renderToggleForm();
    toggleTransparent();
  }
  selectScript();
  await loadScriptsInOrder(scriptList);
  renderNav();
  document.getElementById('loading').remove();
  window.addEventListener('load',function(){
    setTimeout(removeUrlParams,1000);
  });
}

init();

})();