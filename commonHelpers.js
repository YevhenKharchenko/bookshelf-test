import{a as u}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class p{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await u.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await u.get(t)).data}async getCategory(t){const r=this.BASE_URL+this.CATEGORY+t;return(await u.get(r)).data}async getBook(t){const r=this.BASE_URL+"/"+t;return(await u.get(r)).data}}const l=new p,g=document.querySelector(".categories-list"),i=document.querySelector(".category");document.querySelector(".book-item");async function f(){const t=(await l.getCategories()).map(({list_name:e})=>`<a class="category-link" href=""><li>${e}</li></a>`).join("");g.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".category-link").forEach(e=>e.addEventListener("click",o=>{o.preventDefault(),i.innerHTML="",d(e.textContent)}))}async function h(){(await l.getTopBooks()).forEach(t=>{const r=`<h2>${t.list_name}</h2>`,e=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,o=t.books.map(a=>`
        <div class="book" id="${a._id}">
            <img src="${a.book_image}" alt="${a.title}">
            <h3>${a.title}</h3>
            <p>Author: ${a.author}</p>
            <p>Publisher: ${a.publisher}</p>
            <a href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=r+e+o;i.insertAdjacentHTML("beforeend",s),i.querySelectorAll(".category-btn").forEach(a=>a.addEventListener("click",m))})}async function d(n){const r=(await l.getCategory(n)).map(e=>`<div class="book" id="${e._id}">
            <img src="${e.book_image}" alt="${e.title}">
            <h3>${e.title}</h3>
            <p>Author: ${e.author}</p>
            <p>Publisher: ${e.publisher}</p>
            <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join("");i.insertAdjacentHTML("beforeend",r)}async function y(n){const t=await l.getBook(n),r=`<img src="${t.book_image}" alt="${t.title}">
                  <h3>${t.title}</h3>
                  <p>Author: ${t.author}</p>
                  <p>Publisher: ${t.publisher}</p>
                  <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>`;i.insertAdjacentHTML("beforeend",r)}function m(n){const t=n.target.dataset.category;i.innerHTML="",d(t)}function L(n){if(n.target.nodeName!="IMG")return;n.preventDefault();const t=n.target.parentNode.id;i.innerHTML="",y(t)}i.addEventListener("click",L);f();h();
//# sourceMappingURL=commonHelpers.js.map
