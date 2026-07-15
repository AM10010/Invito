/* =============================
   Zeekraa clone — interactions
   ============================= */
(function(){
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));
  }
  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? '' : 'dark';
    if(next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    themeBtn.querySelector('i').className = next === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
  });
  /* -------- Templates -------- */
  const standard = [
    {name:'Mohamed & Farah', desc:'Fun, warm & full of personality. Perfect for young couples who want their invitation to feel alive, playful, and a little unforgettable.', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=70'},
    {name:'Adam & Farah', desc:'A modern, funky vibe with individual portraits and a totally different layout. Made for couples who dare to stand out.', img:'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&auto=format&fit=crop&q=70'},
    {name:'Ahmed & Laila', desc:'Refined, calm, and beautifully simple. For couples who prefer elegance with no excess — just pure, clean sophistication.', img:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=70'},
    {name:'Yonis & Assel', desc:'Our best-selling Arabic template. Elegant, calm, and cinematic with an Eastern soul that feels right at home with our traditions.', img:'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=70'},
    {name:'Michael & Natalia', desc:'Sleek, minimal, and seriously elegant. The stunning preloader sets it apart — ideal for couples who want beauty without noise.', img:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=70'},
    {name:'Omar & Laila', desc:'The simplest, most minimal template in the collection. No extra styling, no clutter — pure simplicity for those who love clean design.', img:'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=70'},
    {name:'Zain & Malak', desc:'A graceful Arabic template that beautifully presents every wedding detail in a calm, elegant, and Eastern-inspired style.', img:'https://images.unsplash.com/photo-1519657337289-077653f724ed?w=800&auto=format&fit=crop&q=70'},
    {name:'Layla & Omar', desc:'Designed for couples who love showcasing their photos together. Gorgeous, ultra-refined, and made to impress.', img:'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=70'},
    {name:'Selim & Menna', desc:'A very different style from everything else — built for couples who love change and want something truly unique.', img:'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=70'},
    {name:'Mohamed & Sara', desc:'A clean, crisp Arabic design with a single harmonious color palette. Perfect for couples who want an elegant bilingual Arabic website.', img:'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?w=800&auto=format&fit=crop&q=70'},
  ];
  const premium = [
    {name:'Mahmoud & Lujain', desc:'A stunning and deeply elegant template, tailored for those who appreciate fine details and a sophisticated look for their special day.', img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=70'},
    {name:'Adam & Rahma', desc:'One of our finest premium templates. Incredibly polished, deeply crafted, and loved by everyone who sees it — truly worth every detail.', img:'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&auto=format&fit=crop&q=70'},
    {name:'Omar & Yasmine', desc:'Calm, beautiful, and perfect for beach or coastal celebrations. A peaceful elegance that feels like a sunset by the sea.', img:'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&auto=format&fit=crop&q=70'},
    {name:'Malek & Fayrozz', desc:'Stunning, bold, and breathtaking — perfect for any couple celebrating in a beautiful outdoor venue. Our most requested premium template.', img:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=70'},
    {name:'Henna', desc:'The one and only henna-themed template in our entire collection. Playful, funky, and irresistibly charming — made for the bride who wants her invitation to feel as special as the night itself.', img:'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=70'},
  ];
  function templateCard(t){
    return `
      <div class="col-md-6 col-lg-4">
        <article class="tmpl-card reveal">
          <div class="tmpl-thumb">
            <div class="tmpl-inner" style="background-image:linear-gradient(180deg, rgba(15,42,34,.15), rgba(15,42,34,.55)), url('${t.img}')">${t.name}</div>
          </div>
          <div class="tmpl-body">
            <h3>${t.name}</h3>
            <p>${t.desc}</p>
            <a href="#" class="tmpl-demo">Try Demo →</a>
          </div>
        </article>
      </div>`;
  }
  document.getElementById('standardGrid').innerHTML = standard.map(templateCard).join('');
  document.getElementById('premiumGrid').innerHTML = premium.map(templateCard).join('');
  /* -------- Reviews -------- */
  const reviews = [
    {text:"I really couldn't imagine the invitation would be this beautiful. Thank you so much for your taste and effort!", name:"Layla & Ahmed", initial:"L"},
    {text:"The invitation is truly beautiful. Everyone loved it. Definitely not our last time working together!", name:"Mariam & Omar", initial:"M"},
    {text:"Thank you so much, the invitation was more than perfect. I am really grateful for this gorgeous design and for your efforts.", name:"Nour & Ziad", initial:"N"},
    {text:"Truly the best experience and the most beautiful invitation. Everyone loved it, may your hands be blessed.", name:"Hana & Seif", initial:"H"},
    {text:"Thank you for all your hard work with me. The invitation turned out beautiful, thank God.", name:"Sarah & Yassin", initial:"S"},
    {text:"The invitation is so beautiful and exactly how I wanted it. Thank you so much for all your hard work.", name:"Dina & Khaled", initial:"D"},
  ];
  function reviewCard(r){
    return `
      <div class="col-md-6 col-lg-4">
        <div class="review-card reveal">
          <span class="quote-mark">”</span>
          <p>"${r.text}"</p>
          <div class="review-author">
            <div class="review-avatar">${r.initial}</div>
            <div>
              <h4 class="review-name">${r.name}</h4>
              <p class="review-role">Verified Couple</p>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.getElementById('reviewRow1').innerHTML = reviews.slice(0,3).map(reviewCard).join('');
  document.getElementById('reviewRow2').innerHTML = reviews.slice(3).map(reviewCard).join('');
  /* -------- FAQ -------- */
  const faqs = [
    {q:'What is the process after booking?', a:'Once you select your plan and complete the payment, we will send you a form to collect your story, event details, and photos. Our designers then begin crafting your personalized invitation for your review and approval.'},
    {q:'Can we include our own photos?', a:'Yes! All our templates and customized plans allow you to seamlessly integrate your own beautiful photos and galleries into the design.'},
    {q:'Is it possible to modify details later?', a:"You don't need every detail immediately. We offer unlimited revisions for the Customized plan and limited revisions for others, so you can update dates, locations, or times if they change."},
    {q:'When will our digital invitation be ready?', a:'Standard and Premium templates usually take 2–4 business days after receiving your details. Customized designs can take 3–7 days depending on the complexity.'},
    {q:'Do we get to review the design before it goes live?', a:'Absolutely. We will share a live preview with you. You can review the design, animations, and text, and we will refine it until it meets your expectations.'},
    {q:'How do we receive guest confirmations (RSVPs)?', a:'If you opt for the Digital RSVP add-on, simply provide us with your email address. Our system will automatically forward all guest responses and messages directly to your inbox.'},
    {q:'For how long will the invitation link remain active?', a:'Your customized invitation link will remain active forever, serving as a beautiful, timeless digital memory of your special day.'},
    {q:'Are we able to choose our own background music?', a:'Yes, you can provide any song or audio track of your choice, and we will integrate it perfectly to play in the background as your guests view the invitation.'},
    {q:'How many guests can receive the invitation link?', a:"There's no limit at all. You get one unique link for your invitation, and you can share it with as many guests as you like — whether it's 10 people or 10,000. The same link works for everyone."},
  ];
  document.getElementById('faqAccordion').innerHTML = faqs.map((f,i)=>`
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button ${i===0?'':'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${i}">
          ${f.q}
        </button>
      </h2>
      <div id="faq-${i}" class="accordion-collapse collapse ${i===0?'show':''}" data-bs-parent="#faqAccordion">
        <div class="accordion-body">${f.a}</div>
      </div>
    </div>
  `).join('');
  /* -------- Device switcher -------- */
  const frame = document.getElementById('deviceFrame');
  document.querySelectorAll('.device-switch .btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.device-switch .btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      frame.classList.remove('mobile','tablet','desktop');
      frame.classList.add(btn.dataset.device);
    });
  });
  /* -------- Reveal on scroll -------- */
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal, .process-card, .why-card, .price-card, .section-title, .eyebrow').forEach(el=>{
    el.classList.add('reveal'); io.observe(el);
  });
})();
