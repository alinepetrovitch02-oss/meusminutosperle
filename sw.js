const C='meus-minutos-v26-vercel';
const FILES=['./','./index.html','./manifest.json','./icons/inicio.png','./icons/historico.png','./icons/configuracoes.png','./icons/consulta-registros.png'];

self.addEventListener('install',e=>
  e.waitUntil(
    caches.open(C).then(c=>
      Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))
    )
  )
);

self.addEventListener('activate',e=>
  e.waitUntil(
    caches.keys().then(a=>
      Promise.all(
        a.filter(x=>x!==C).map(x=>caches.delete(x))
      )
    )
  )
);

self.addEventListener('fetch',e=>
  e.respondWith(
    caches.match(e.request).then(r=>
      r||fetch(e.request).catch(()=>
        caches.match('./index.html')
      )
    )
  )
);
