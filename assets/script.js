'use strict';
const App={
  config:{},
  data:{},
  dom:{
    byId:{},
    byTag:{},
    byClass:{},
  },
  fn:{
    matcher:{},//model
    view:{},
    parser:{},
    controller:{},
  },
}

App.data.nav=`
<nav id="nav" class="markdown-raw">
## 議事録

各資料内の個人名は<a href="/report/250331">2024年度の出席簿</a>のNo.に置き替えています（代表と役人さんは除く）。

2025年

- <a href="/report/250428-2">2025年4月28日 議事録</a>
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

当サイトのQRコード

<picture><source srcset="/img/common/qrcode_gijiroku.github.io.webp" type="image/webp"><img src="/img/common/qrcode_gijiroku.github.io.png" alt="gijiroku.github.ioのQRコード" width="270" height="270" loading="lazy" decoding="async"></picture>
`;

App.fn.view.buildNav=function(){
  document.getElementById('main').insertAdjacentHTML('afterend',App.data.nav);
}

App.dom.byTag.navLinks=function(){
  return document.getElementById('nav').getElementsByTagName('a');
};

App.dom.byId.canonicalPath=function(){
  const canonical=document.getElementById('canonical');
  if(!canonical)return '';
  const url=canonical.getAttribute('href');
  const origin=location.origin;
  if(url.indexOf(origin)!==0)return '';
  return url.substring(origin.length);
};

App.fn.view.markCurrentPage=function(){
  const links=App.dom.byTag.navLinks();
  const currentPath=App.dom.byId.canonicalPath();
  for(let i=0;i<links.length;i++){
    const linkPath=links[i].getAttribute('href');
    if(linkPath===currentPath){
      links[i].classList.add('current');
    }
  }
};

App.config.rawTags=['pre','script','style','textarea','xmp','noscript','iframe'];

App.dom.byClass.markdownRawElements=document.getElementsByClassName('markdown-raw');

App.fn.controller.convertMarkdown=function(text){
  return App.fn.matcher.convertMarkdown(text);
};

App.fn.matcher.state={
  listStack:[],
  indentStack:[],
  insideRawBlock:false
};

App.fn.matcher.isRawStart=function(line){
  return App.config.rawTags.some(tag=>
    new RegExp('^<'+tag+'\\b','i').test(line)
  );
};

App.fn.matcher.isRawEnd=function(line){
  return App.config.rawTags.some(tag=>
    new RegExp('^</'+tag+'>','i').test(line)
  );
};

App.fn.matcher.isHorizontalRule=function(line){
  return /^---+/.test(line);
};

App.fn.matcher.isHeading=function(line){
  return /^#{1,6} /.test(line);
};

App.fn.matcher.isBlockquote=function(line){
  const normalized=App.fn.matcher.normalizeEntities(line);
  return normalized.startsWith('>');
};

App.fn.matcher.isTableStart=function(lines,i){
  const line=lines[i];
  const next=lines[i+1];
  return line.includes('|')&&next&&/^[:\-| ]+$/.test(next.trim());
};

App.fn.matcher.isListItem=function(line){
  return /^[-*] |^\d+\. /.test(line);
};

App.fn.matcher.normalizeEntities=function(text){
  return text
    .replace(/&gt;|&#62;/g,'>')
    .replace(/&lt;|&#60;/g,'<')
    .replace(/&amp;|&#38;/g,'&')
    .replace(/&quot;|&#34;/g,'"')
    .replace(/&apos;|&#39;/g,"'")
    .replace(/&nbsp;|&#160;/g,' ');
};

App.fn.view.renderHeading=function(line){
  const count=line.match(/^#+/)[0].length;
  const content=line.replace(/^#+\s*/, '');
  return '<h'+count+'>'+content+'</h'+count+'>';
};

App.fn.view.renderBlockquote=function(line){
  return '<p class="has-quote-only"><q>'+line+'</q></p>';
};

App.fn.view.renderTable=function(tableLines){
  const[headerLine,alignLine,...bodyLines]=tableLines;
  const headers=headerLine.split('|').map(h=>h.trim());
  const aligns=alignLine.split('|').map(a=>{
    a=a.trim();
    if(/^:-+:$/.test(a))return 'center';
    if(/^:-+$/.test(a))return 'left';
    if(/^-+:$/.test(a))return 'right';
    return 'initial';
  });

  let html='<table>\n<thead><tr>';
  for(let i=0;i<headers.length;i++){
    html+='<th style="text-align:'+aligns[i]+';">'+headers[i]+'</th>';
  }
  html+='</tr></thead>\n<tbody>';
  for(const row of bodyLines){
    const cells=row.split('|').map(c=>c.trim());
    html+='<tr>';
    for(let j=0;j<cells.length;j++){
      html+='<td style="text-align:'+aligns[j]+';">'+cells[j]+'</td>';
    }
    html+='</tr>';
  }
  html+='</tbody></table>';
  return html;
};

App.fn.view.renderListItem=function(content){
  return '<li>'+content+'</li>';
};

App.fn.view.renderParagraph=function(line){
  return '<p>'+line+'</p>';
};

App.fn.view.renderRawLine=function(line){
  return line;
};

App.fn.controller.convertMarkdown=function(text){
  const lines=text.split(/\r?\n/);
  const htmlLines=[];
  const state={
    listStack:[],
    indentStack:[],
    insideRawBlock:false
  };

  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    const trimmed=line.trim();

    if(App.fn.matcher.isRawStart(trimmed))state.insideRawBlock=true;
    if(App.fn.matcher.isRawEnd(trimmed))state.insideRawBlock=false;

    if(App.fn.matcher.isHorizontalRule(trimmed)){
      htmlLines.push('<hr>');
      continue;
    }

    if(App.fn.matcher.isHeading(trimmed)){
      htmlLines.push(App.fn.view.renderHeading(trimmed));
      continue;
    }

    if(App.fn.matcher.isBlockquote(trimmed)){
      htmlLines.push(App.fn.view.renderBlockquote(line));
      continue;
    }

    if(App.fn.matcher.isTableStart(lines,i)){
      const tableResult=App.fn.controller.extractTable(lines,i);
      htmlLines.push(App.fn.view.renderTable(tableResult.lines));
      i=tableResult.nextIndex;
      continue;
    }

    if(App.fn.matcher.isListItem(trimmed)){
      App.fn.controller.handleListItem(line,trimmed,state,htmlLines);
      continue;
    }

    App.fn.controller.closeOpenLists(state,htmlLines);

    if(state.insideRawBlock){
      htmlLines.push(App.fn.view.renderRawLine(line));
    }else{
      htmlLines.push(App.fn.controller.wrapParagraphOrRaw(trimmed,line));
    }
  }

  App.fn.controller.closeOpenLists(state,htmlLines);
  return htmlLines.join('\n');
};

App.fn.controller.extractTable=function(lines,startIndex){
  const tableLines=[lines[startIndex],lines[startIndex+1]];
  let i=startIndex+2;
  while(i<lines.length&&lines[i].includes('|')){
    tableLines.push(lines[i]);
    i++;
  }
  return{lines:tableLines,nextIndex:i-1};
};

App.fn.controller.handleListItem=function(line,trimmed,state,htmlLines){
  const ulMatch=trimmed.match(/^[-*] (.+)/);
  const olMatch=trimmed.match(/^(\d+)\. (.+)/);
  const indent=line.match(/^\s*/)[0].length;
  const isOrdered=!!olMatch;
  const listType=isOrdered?'ol':'ul';
  const content=isOrdered?olMatch[2]:ulMatch[1];
  let startAttr='';
  if(isOrdered){
    const start=parseInt(olMatch[1],10);
    if(start!==1)startAttr=' start="'+start+'"';
  }
  while(state.indentStack.length>0&&indent<state.indentStack[state.indentStack.length-1]){
    htmlLines.push('</li></'+state.listStack.pop()+'>');
    state.indentStack.pop();
  }
  if(state.indentStack.length===0||indent>state.indentStack[state.indentStack.length-1]){
    htmlLines.push('<'+listType+startAttr+'><li>'+content);
    state.listStack.push(listType);
    state.indentStack.push(indent);
  }else{
    htmlLines.push('</li><li>'+content);
  }
};

App.fn.controller.closeOpenLists=function(state,htmlLines){
  while(state.listStack.length>0){
    htmlLines.push('</li></'+state.listStack.pop()+'>');
    state.indentStack.pop();
  }
};

App.fn.controller.wrapParagraphOrRaw=function(trimmed,line){
  const inlineTags=[
    'a','b','code','del','em','i','iframe','img','ins','mark','q','ruby','span','strong','svg','time'
  ];
  if(/^[^<]/.test(trimmed)){
    return App.fn.view.renderParagraph(line);
  }
  const tagMatch=trimmed.match(/^<(\w+)/);
  const tagName=tagMatch&&tagMatch[1];
  if(tagName&&inlineTags.includes(tagName)){
    return App.fn.view.renderParagraph(line);
  }
  return App.fn.view.renderRawLine(line);
};

App.fn.view.convertAllMarkdownRawElements=function(){
  const elements=Array.from(App.dom.byClass.markdownRawElements);
  elements.forEach(el=>{
    const rawHtml=el.innerHTML;
    const convertedHtml=App.fn.controller.convertMarkdown(rawHtml);
    el.innerHTML=convertedHtml;
    el.classList.remove('markdown-raw');
    el.classList.add('markdown-converted');
  });
};

App.init=function(){
  App.fn.view.buildNav();
  App.fn.view.markCurrentPage();
  App.fn.view.convertAllMarkdownRawElements();
};

App.init();

(function(){
  function removeUrlParams(){
    const hasParams=location.search.length>0;
    const isHistorySupported=typeof history.replaceState==='function';
    if(hasParams&&isHistorySupported){
      const urlWithoutParams=location.origin+location.pathname;
      history.replaceState(null,'',urlWithoutParams);
    }
  }

  window.addEventListener('load',function(){
    setTimeout(removeUrlParams,1000);
  });
})();
