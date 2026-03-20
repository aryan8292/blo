export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#06080e">
<title>CineVerse — India OTT</title>
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600&display=swap">
<style>
:root{
  --bg:#06080e;--bg2:#0a0d17;--bg3:#0f1220;
  --card:#13172a;--card2:#1a1f35;
  --b:rgba(255,255,255,.07);--b2:rgba(255,255,255,.13);
  --red:#e8001c;--red2:#ff2d42;--rbg:rgba(232,0,28,.14);
  --gold:#f5c230;--gbg:rgba(245,194,48,.13);
  --teal:#00c9a7;--tbg:rgba(0,201,167,.11);
  --txt:#f0ede8;--txt2:#8c8fa5;--txt3:#363a50;
  --nav:58px;--bnav:60px;--pad:16px;--D:50px;--r:10px;--r2:16px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--txt);font-family:'Inter',sans-serif;font-size:14px;min-height:100vh;overflow-x:hidden}
button,input{font-family:inherit;cursor:pointer}
img{display:block}
::-webkit-scrollbar{width:2px;height:2px}
::-webkit-scrollbar-thumb{background:var(--card2);border-radius:4px}

#loader{position:fixed;inset:0;z-index:9999;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;transition:opacity .6s}
#loader.done{opacity:0;pointer-events:none}
.ld-logo{font-family:'Syne',sans-serif;font-size:30px;font-weight:800;color:var(--txt)}
.ld-logo b{color:var(--red)}
.ld-track{width:160px;height:3px;background:var(--card2);border-radius:3px;overflow:hidden}
.ld-bar{height:100%;background:linear-gradient(90deg,var(--red),var(--gold));width:0%;border-radius:3px;transition:width .4s ease}
.ld-msg{font-size:12px;color:var(--txt3);letter-spacing:.5px}

.nav{position:fixed;top:0;left:0;right:0;z-index:300;height:var(--nav);display:flex;align-items:center;justify-content:space-between;padding:0 var(--pad);background:rgba(6,8,14,.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--b)}
@media(min-width:768px){.nav{padding:0 var(--D)}}
.logo{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--txt);cursor:pointer}
.logo b{color:var(--red)}
.logo small{display:block;font-size:9px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;color:var(--txt3);margin-top:-4px}
.navlinks{display:none;gap:2px;align-items:center}
@media(min-width:900px){.navlinks{display:flex}}
.nl{background:none;border:none;padding:6px 13px;border-radius:50px;font-size:13px;font-weight:500;color:var(--txt2);transition:all .2s}
.nl:hover{color:var(--txt);background:var(--card)}
.nl.on{color:var(--txt);background:var(--card2)}
.nav-r{display:flex;align-items:center;gap:8px}
.dsw{display:none;align-items:center;gap:7px;background:var(--card);border:1px solid var(--b);border-radius:50px;padding:7px 14px;transition:border-color .2s}
@media(min-width:768px){.dsw{display:flex}}
.dsw:focus-within{border-color:rgba(232,0,28,.4)}
.dsw input{background:none;border:none;outline:none;font-size:13px;color:var(--txt);width:155px}
.dsw input::placeholder{color:var(--txt3)}
.ibtn{width:36px;height:36px;border-radius:50%;background:var(--card);border:1px solid var(--b);display:flex;align-items:center;justify-content:center;color:var(--txt2);transition:all .2s}
.ibtn:hover{border-color:var(--red);color:var(--red)}
@media(min-width:768px){.ibtn{display:none}}

.sov{position:fixed;inset:0;z-index:700;background:rgba(6,8,14,.98);backdrop-filter:blur(20px);display:flex;flex-direction:column;transform:translateY(-100%);transition:transform .3s ease}
.sov.open{transform:translateY(0)}
.sov-bar{display:flex;align-items:center;gap:10px;padding:12px var(--pad);border-bottom:1px solid var(--b);flex-shrink:0}
.sov-back{background:none;border:none;color:var(--txt2);padding:4px;display:flex;align-items:center}
.sov-back:hover{color:var(--red)}
.sov-bar input{flex:1;background:none;border:none;outline:none;font-size:17px;font-weight:500;color:var(--txt)}
.sov-bar input::placeholder{color:var(--txt3)}
.sov-body{flex:1;overflow-y:auto;padding:14px var(--pad) 80px}
.sov-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px}
.sov-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:220px;gap:10px;color:var(--txt3)}
.sov-empty svg{opacity:.25}
.sov-empty p{font-size:13px}

main{padding-top:var(--nav);padding-bottom:calc(var(--bnav) + env(safe-area-inset-bottom,0px))}
@media(min-width:768px){main{padding-bottom:40px}}

.hero{position:relative;height:88vh;min-height:480px;max-height:680px;overflow:hidden;background:var(--bg2)}
.h-bg{position:absolute;inset:0;background-size:cover;background-position:center 20%;transition:opacity .5s ease}
.h-scrim{position:absolute;inset:0;background:linear-gradient(to right,rgba(6,8,14,.97) 0%,rgba(6,8,14,.6) 52%,rgba(6,8,14,.1) 100%),linear-gradient(to top,rgba(6,8,14,1) 0%,rgba(6,8,14,.55) 32%,transparent 60%)}
.h-fade{position:absolute;inset:0;background:var(--bg);opacity:0;transition:opacity .38s;pointer-events:none;z-index:2}
.h-body{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:0 var(--pad) 28px}
@media(min-width:768px){.h-body{padding:0 var(--D) 48px;max-width:600px}}
.h-eye{display:inline-flex;align-items:center;gap:6px;background:var(--rbg);border:1px solid rgba(232,0,28,.35);border-radius:50px;padding:3px 11px;margin-bottom:10px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red2)}
.bdot{width:5px;height:5px;border-radius:50%;background:var(--red);animation:bl 2s infinite}
@keyframes bl{0%,100%{opacity:1}50%{opacity:.1}}
.h-title{font-family:'Syne',sans-serif;font-size:clamp(24px,5.5vw,60px);font-weight:800;line-height:1.05;color:var(--txt);margin-bottom:10px;text-shadow:0 2px 22px rgba(0,0,0,.55)}
.h-meta{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:10px}
.pill{font-size:11px;font-weight:600;border-radius:5px;padding:3px 8px;background:rgba(255,255,255,.08);color:var(--txt2)}
.pill.g{background:var(--gbg);color:var(--gold)}
.pill.t{background:var(--tbg);color:var(--teal)}
.h-plot{font-size:13px;line-height:1.7;color:var(--txt2);max-width:440px;margin-bottom:18px;font-weight:300;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.h-btns{display:flex;gap:8px;flex-wrap:wrap}
.btn-r{display:flex;align-items:center;gap:8px;background:var(--red);color:#fff;border:none;border-radius:9px;padding:11px 20px;font-family:'Syne',sans-serif;font-size:13px;font-weight:800;transition:all .22s}
.btn-r:hover{background:var(--red2);transform:translateY(-2px);box-shadow:0 8px 20px var(--rbg)}
.btn-g{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.1);color:var(--txt);border:1px solid var(--b2);border-radius:9px;padding:11px 16px;font-size:13px;font-weight:500;transition:all .2s;backdrop-filter:blur(6px)}
.btn-g:hover{background:rgba(255,255,255,.16)}
.h-dots{position:absolute;bottom:28px;right:var(--pad);display:flex;gap:6px;z-index:3}
@media(min-width:768px){.h-dots{right:var(--D)}}
.hdot{width:5px;height:5px;border-radius:50%;background:var(--txt3);cursor:pointer;transition:all .3s}
.hdot.on{background:var(--red);width:18px;border-radius:3px}
.h-prog{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(255,255,255,.04);z-index:3}
.h-prog-f{height:100%;background:linear-gradient(90deg,var(--red),var(--gold));width:0%;transition:width .12s linear}

.strip{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:16px var(--pad) 0}
@media(min-width:768px){.strip{padding:20px var(--D) 0}}
.strip::-webkit-scrollbar{display:none}
.chip{flex:0 0 auto;background:var(--card);border:1px solid var(--b);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:500;color:var(--txt2);transition:all .2s;white-space:nowrap}
.chip:hover{border-color:var(--red);color:var(--red)}
.chip.on{background:var(--rbg);border-color:var(--red);color:var(--red);font-weight:600}

.sec{padding:26px var(--pad) 0}
@media(min-width:768px){.sec{padding:30px var(--D) 0}}
.sec-hd{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}
.sec-tag{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);margin-bottom:2px;display:block}
.sec-title{font-family:'Syne',sans-serif;font-size:17px;font-weight:700;color:var(--txt)}
.sec-more{background:none;border:none;font-size:12px;font-weight:500;color:var(--txt2);transition:color .2s}
.sec-more:hover{color:var(--red)}
.hrow{display:flex;gap:10px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.hrow::-webkit-scrollbar{display:none}

.mc{flex:0 0 130px;border-radius:var(--r);overflow:hidden;cursor:pointer;position:relative;background:var(--card);transition:transform .22s ease,box-shadow .22s ease;flex-shrink:0}
@media(min-width:480px){.mc{flex:0 0 142px}}
@media(min-width:768px){.mc{flex:0 0 152px}}
.mc:hover{transform:translateY(-5px) scale(1.03);box-shadow:0 14px 36px rgba(0,0,0,.65);z-index:10}
.mc:hover .mc-ov{opacity:1}
.mc img{width:100%;aspect-ratio:2/3;object-fit:cover;background:var(--card2)}
.mc-ph{width:100%;aspect-ratio:2/3;background:var(--card2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:var(--txt3)}
.mc-ph span{font-size:9px;text-align:center;padding:0 6px;line-height:1.35;color:var(--txt3)}
.mc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(6,8,14,.97) 0%,rgba(6,8,14,.3) 55%,transparent 100%);opacity:0;transition:opacity .22s;display:flex;flex-direction:column;justify-content:flex-end;padding:8px}
.mc-play{width:32px;height:32px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 4px 14px var(--rbg)}
.mc-name{font-size:11px;font-weight:700;color:var(--txt);line-height:1.25;margin-top:auto}
.mc-yr{font-size:9px;color:var(--txt2);margin-top:2px}
.mc-r{position:absolute;top:6px;right:6px;background:rgba(6,8,14,.92);border:1px solid rgba(245,194,48,.25);border-radius:4px;padding:1px 6px;font-size:9px;font-weight:700;color:var(--gold)}
.mc-lang{position:absolute;top:6px;left:6px;background:var(--tbg);border:1px solid rgba(0,201,167,.25);border-radius:4px;padding:1px 6px;font-size:8px;font-weight:700;color:var(--teal);text-transform:uppercase}

footer{margin-top:36px;padding:24px var(--D);border-top:1px solid var(--b);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
@media(max-width:767px){footer{padding:20px var(--pad)}}
.ft-logo{font-family:'Syne',sans-serif;font-size:16px;font-weight:800}
.ft-logo b{color:var(--red)}
.ft-txt{font-size:11px;color:var(--txt3)}
</style>
</head>
<body>

<nav class="nav">
  <div class="logo"><b>Cine</b>Verse<small>India 🇮🇳</small></div>
  <div class="navlinks">
    <button class="nl on">Home</button>
    <button class="nl">In Theatres</button>
    <button class="nl">Coming Soon</button>
    <button class="nl">Bollywood</button>
    <button class="nl">Tamil</button>
    <button class="nl">Telugu</button>
    <button class="nl">Malayalam</button>
    <button class="nl">Top Rated</button>
  </div>
  <div class="nav-r">
    <div class="dsw">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" placeholder="Search movies...">
    </div>
  </div>
</nav>

<main>
  <div class="hero">
    <div class="h-bg" style="background-image:url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop');"></div>
    <div class="h-scrim"></div>
    <div class="h-body">
      <div class="h-eye">
        <div class="bdot"></div>
        Now Showing
      </div>
      <h1 class="h-title">The Greatest Story</h1>
      <div class="h-meta">
        <span class="pill">2024</span>
        <span class="pill g">⭐ 8.5</span>
        <span class="pill t">Hindi</span>
      </div>
      <p class="h-plot">Experience a cinematic masterpiece that will leave you breathless. A tale of love, courage, and redemption set against the backdrop of India's most iconic landscapes.</p>
      <div class="h-btns">
        <button class="btn-r">▶ Watch Now</button>
        <button class="btn-g">+ Add to List</button>
      </div>
    </div>
    <div class="h-dots">
      <div class="hdot on"></div>
      <div class="hdot"></div>
      <div class="hdot"></div>
    </div>
    <div class="h-prog"><div class="h-prog-f"></div></div>
  </div>

  <div class="strip">
    <button class="chip on">All</button>
    <button class="chip">Hindi</button>
    <button class="chip">Tamil</button>
    <button class="chip">Telugu</button>
    <button class="chip">Malayalam</button>
  </div>

  <div class="sec">
    <div class="sec-hd">
      <div>
        <span class="sec-tag">Trending Now</span>
        <h2 class="sec-title">Featured Movies</h2>
      </div>
    </div>
    <div class="hrow">
      <div class="mc">
        <img src="https://images.unsplash.com/photo-1495403888306-4a77c8042b47?w=200&h=300&fit=crop" alt="Cosmic Journey">
        <div class="mc-ov">
          <div class="mc-play">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div class="mc-name">Cosmic Journey</div>
        </div>
        <div class="mc-r">8.2</div>
      </div>
      <div class="mc">
        <img src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&h=300&fit=crop" alt="Dark Nights">
        <div class="mc-ov">
          <div class="mc-play">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div class="mc-name">Dark Nights</div>
        </div>
        <div class="mc-r">7.9</div>
      </div>
      <div class="mc">
        <img src="https://images.unsplash.com/photo-1533613220915-609f21a91335?w=200&h=300&fit=crop" alt="Love Story">
        <div class="mc-ov">
          <div class="mc-play">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div class="mc-name">Love Story</div>
        </div>
        <div class="mc-r">8.4</div>
      </div>
      <div class="mc">
        <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop" alt="Action Heroes">
        <div class="mc-ov">
          <div class="mc-play">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div class="mc-name">Action Heroes</div>
        </div>
        <div class="mc-r">8.1</div>
      </div>
    </div>
  </div>

  <footer>
    <div>
      <div class="ft-logo"><b>Cine</b>Verse</div>
      <div class="ft-txt">India's Premier Movie Streaming</div>
    </div>
    <div class="ft-txt">© 2024 CineVerse. All rights reserved.</div>
  </footer>
</main>

</body>
</html>`,
      }}
    />
  )
}
