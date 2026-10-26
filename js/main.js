const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);b.setAttribute('aria-label',o?'Open menu':'Close menu');m.classList.toggle('open',!o)});
m.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open')}));
const f=document.querySelector('.form');
f.addEventListener('submit',e=>{if(!f.checkValidity()){e.preventDefault();f.reportValidity();return}
 // Preview build: the live form must be reconnected to the shop's Contact Form 7 / email endpoint on handover.
 if(location.hostname.endsWith('github.io')||location.protocol==='file:'){e.preventDefault();f.querySelector('.form-note').textContent='Thanks! This is a preview, so please call 905-545-6240 to book.';}});
