(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const d=[{name:"YourName",avatar:"/images/yourname-engineer.png",imgClass:"yourname-img",title:"Frontend Software Engineer",bio:"Hi there! I'm YourName, a Frontend Software Engineer who turns complex interfaces into smooth, seamless user experiences. I bring creative problem-solving and pixel-perfect precision to every project. Let’s build something users will love.",emoji:"👩🏽‍💻",hasBeenSwiped:!1,hasBeenLiked:!1},{name:"YourName v2.0",avatar:"/images/yourname-ai.png",title:"AI Engineer",imgClass:"ai-img",bio:"Greetings! I'm YourName, an AI Engineer passionate about building intelligent systems that learn, adapt, and improve experiences. From machine learning models to natural language processing, I thrive on solving real-world problems with smart tech.",emoji:"🤖",hasBeenSwiped:!1,hasBeenLiked:!1},{name:"YourNamezilla (Dev Edition)",avatar:"/images/yourname-dev.png",title:"Full-Stack Developer",imgClass:"dev-img",bio:"I'm YourName! I'm a Full-Stack Developer who loves bringing entire applications to life — from the server logic to the sleek frontend. I enjoy turning big ideas into functional, fast, and beautiful products.",emoji:"🦖",hasBeenSwiped:!1,hasBeenLiked:!1},{name:"Q.A. Queen YourName",avatar:"/images/yourname-qa.png",title:"Quality Assurance Engineer ",imgClass:"qa-img",bio:"Hello! I'm YourName, a Quality Assurance Engineer with a sharp eye for catching bugs before they catch your users. I specialize in building reliable testing workflows and ensuring every feature works as flawlessly as intended. Let’s ship with confidence!",emoji:"👑",hasBeenSwiped:!1,hasBeenLiked:!1}];class m{constructor(t){Object.assign(this,t)}setMatchStatus(t){this.hasBeenLiked=t,this.hasBeenSwiped=!0}getYourNameHtml(){const{name:t,avatar:s,title:n,bio:e}=this;return`
        <div class="card">
        <img class="yourname-img ${this.imgClass}" src="${s}" alt="${t}'s avatar">
        <img class="badge hidden" id="badge-img" src="" alt="badge">
            <div class="yourname-info">
                <h4> ${t}</h4>
                <h5> ${n} </h5>
                <div class="yourname-bio">
                    <p> ${e} </p>
                </div>
            </div>
        </div>
      `}}let c=0,r=new m(d[c]),l=[];const h=document.getElementById("profile-container"),p=new Audio("/sounds/ding.mp3"),f=new Audio("/sounds/buzz.mp3");function u(){h.innerHTML=r.getYourNameHtml()}function g(a){r.setMatchStatus(a);const t=document.getElementById("badge-img");if(t.src=a?"images/badge-like.png":"images/badge-nope.png",t.classList.remove("hidden"),a){p.play(),l.push({name:r.name,emoji:r.emoji});const s=document.getElementById("like-btn");for(let n=0;n<3;n++){const e=document.createElement("img");e.src="images/icon-heart.png",e.classList.add("floating-heart"),e.style.left=`${10+n*20}px`,s.appendChild(e),setTimeout(()=>e.remove(),1e3)}}else f.play();setTimeout(()=>{document.querySelector(".card").classList.add(a?"swipe-right":"swipe-left"),setTimeout(()=>{if(c++,c<d.length)r=new m(d[c]),u();else{const n=document.querySelector(".iphone-frame"),e=l.length>0?`<ul class="emoji-list">${l.map(o=>`<li>${o.emoji} ${o.name}</li>`).join("")}</ul>`:"",i=l.length===0?"<h4>No matches found — maybe take another look?</h4>":"";n.innerHTML=`
                <header class="app-header">
                    <div class="header-left">
                        <img src="images/icon-profile.png" class="icon" alt="Profile">
                    </div>
                    <div class="header-center">
                        <img src="images/logo.png" class="logo" alt="Logo">
                    </div>
                    <div class="header-right">
                        <img src="images/icon-chat.png" class="icon" alt="Chat">
                    </div>
                </header>
        
                <div class="final-card">
                <div class="my-emoji">
                <img src="images/yourname-emoji.png" alt="YourName emoji">
            </div>
                    <h2>Here are the profiles you liked:</h2>
                    ${e}
                    <h3>Connect with your Candidate Match on LinkedIn</h3>
    
                    <a href="https://www.linkedin.com/" target="_blank" class="connect-btn">Connect on LinkedIn</a> 
                    ${i}
                    <button class="review-btn" id="review-btn">🔁 Review Candidate Profiles Again</button>
                </div>
            `}},1e3)},800)}document.getElementById("like-btn").addEventListener("click",()=>g(!0));document.getElementById("reject-btn").addEventListener("click",()=>g(!1));document.addEventListener("click",a=>{a.target.id==="review-btn"&&window.location.reload()});u();
