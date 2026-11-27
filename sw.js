// MEUS MINUTOS - service worker
// Estratégia: com internet, sempre busca a versão mais recente (rede primeiro);
// sem internet, usa a cópia guardada. Não precisa trocar o número a cada publicação,
// mas trocar força a limpeza do cache antigo.
const C='meus-minutos-v29-vercel';
const FILES=['./','./index.html','./manifest.json','./icons/inicio.png','./icons/historico.png','./icons/configuracoes.png','./icons/consulta-registros.png'];
const TIMEOUT=4000;

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(f=>c.add(new Request(f,{cache:'reload'})).catch(()=>{})))));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});

function networkFirst(req){
  return new Promise(resolve=>{
    let done=false;
    const fromCache=()=>caches.match(req).then(r=>r||caches.match('./index.html'));
    const timer=setTimeout(()=>{if(!done)fromCache().then(r=>{if(r&&!done){done=true;resolve(r)}})},TIMEOUT);
    fetch(req,{cache:'no-store'}).then(res=>{
      clearTimeout(timer);
      if(res&&res.ok){const copy=res.clone();caches.open(C).then(c=>c.put(req,copy)).catch(()=>{})}
      if(!done){done=true;resolve(res)}
    }).catch(()=>{
      clearTimeout(timer);
      if(!done)fromCache().then(r=>{done=true;resolve(r||Response.error())});
    });
  });
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return; // ex.: consulta oficial (iframe) vai direto à rede
  e.respondWith(
    /\.(png|jpg|svg|ico|webp)$/i.test(url.pathname)
      ? caches.match(req).then(r=>r||fetch(req).then(res=>{const copy=res.clone();caches.open(C).then(c=>c.put(req,copy));return res}))
      : networkFirst(req)
  );
});
