/* Run: node verify.cjs. No packages required. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const ctx = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'content.js'), 'utf8'), ctx);
const S = ctx.window.SITE;
const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, 'projects.json'), 'utf8'));
assert.equal(S.projects.length, 64);
assert.equal(catalog.projects.length, 64);
assert.equal(new Set(S.projects.map(p=>p.id)).size, 64);
assert.equal(S.projects.filter(p=>p.featured).length, 6);
assert.ok(!/claude|anthropic|кл[ао]уд/i.test(JSON.stringify(S)+html+JSON.stringify(catalog)));
assert.ok(!/file:\/\/|[CDG]:[\\/]|github\.com\/votsie\/(?:VOTSI-PROXY|MyCell)|gh[pousr]_[A-Za-z0-9]{25,}|sk-ant-[A-Za-z0-9_-]{25,}|BEGIN .*PRIVATE KEY/.test(JSON.stringify(catalog)));
const allowed = new Set(['b24notify','eifavpn-backend','eifavpn-frontend','FTP_SYNC','QR-Barcode-Server-Flask','ssh-mcp','votsie.github.io','wata-mcp','wata-sdk','Work-Time-Tracker']);
for (const p of S.projects) {
  assert.ok(p.ru.title && p.en.title && p.ru.text && p.en.text);
  for (const link of [p.url,p.url2].filter(Boolean)) assert.ok(allowed.has(new URL(link).pathname.split('/')[2]));
}
function el() {return {value:'',textContent:'',hidden:false,dataset:{},attrs:{},listeners:{},classList:{toggle(){},add(){},remove(){}},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,v){this.listeners[k]=v},append(){},getAttribute(){return ''}}}
const ids=Object.fromEntries(['projectSearch','resultCount','emptyResults'].map(id=>[id,el()]));
const cards=S.projects.map(p=>Object.assign(el(),{dataset:{cat:p.cat.join(' '),kind:p.kind,featured:String(!!p.featured),search:[p.ru.title,p.en.title,p.ru.text,p.en.text,...p.tags].join(' ').toLocaleLowerCase()}}));
for(const c of cards)c.classList.toggle=(k,v)=>{if(k==='is-hidden')c.hidden=v};
const chips=['featured','all','ai','ops','web','design','tools','games','oss'].map(f=>Object.assign(el(),{dataset:{filter:f}}));
const script=fs.readFileSync(path.join(__dirname,'script.js'),'utf8');
const start=script.indexOf('  function applyFilter()');
const end=script.indexOf('  /* ---------- live GitHub data ---------- */',start);
assert.ok(start>0 && end>start);
const state={S,lang:'ru',activeFilter:'featured',$:s=>ids[s.slice(1)],$$:s=>s==='.project'?cards:chips};
vm.runInNewContext(script.slice(start,end),state);
state.applyFilter();
assert.equal(cards.filter(c=>!c.hidden).length,6);
ids.projectSearch.value='SimpleRequester';ids.projectSearch.listeners.input();
assert.equal(cards.filter(c=>!c.hidden).length,1);
assert.equal(ids.emptyResults.hidden,true);
ids.projectSearch.value='no-such-project-000';ids.projectSearch.listeners.input();
assert.equal(cards.filter(c=>!c.hidden).length,0);
assert.equal(ids.emptyResults.hidden,false);
ids.projectSearch.value='';state.activeFilter='oss';state.applyFilter();
assert.equal(cards.filter(c=>!c.hidden).length,S.projects.filter(p=>p.kind==='oss').length);
state.lang='en';state.activeFilter='all';state.applyFilter();
assert.equal(ids.resultCount.textContent,'Showing 64 of 64');
assert.equal((html.match(/id="projectSearch"/g)||[]).length,1);
assert.ok(html.includes('href="projects.json"'));
console.log('OK: 64 projects, 6 featured, safe public links, RU/EN, search, filters and empty state');
