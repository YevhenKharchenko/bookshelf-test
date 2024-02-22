import{a as i}from"./assets/vendor-0cb09735.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const r=this.BASE_URL+this.CATEGORY_LIST;return(await i.get(r)).data}async getTopBooks(){const r=this.BASE_URL+this.TOP_BOOKS;return(await i.get(r)).data}async getCategory(r){const s=this.BASE_URL+this.CATEGORY+r;return(await i.get(s)).data}async getBook(r){const s=this.BASE_URL+"/"+r;return(await i.get(s)).data}}const c=new u,d=document.querySelector(".categories-list"),l=document.querySelector(".category");document.querySelector(".book-item");async function p(){const r=(await c.getCategories()).map(({list_name:e})=>`<a class="category-link" href=""><li>${e}</li></a>`).join("");d.insertAdjacentHTML("beforeend",r),document.querySelectorAll(".category-link").forEach(e=>e.addEventListener("click",t=>{t.preventDefault(),l.innerHTML="",f(e.textContent)}))}async function g(){(await c.getTopBooks()).forEach(r=>{const s=`<h2>${r.list_name}</h2>`,e=r.books.map(o=>`
        <div class="book" id="${o._id}">
            <img src="${o.book_image}" alt="${o.title}">
            <h3>${o.title}</h3>
            <p>Author: ${o.author}</p>
            <p>Publisher: ${o.publisher}</p>
            <a href="${o.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),t=s+e;l.insertAdjacentHTML("beforeend",t)})}async function f(n){const s=(await c.getCategory(n)).map(e=>`<div class="book" id="${e._id}">
            <img src="${e.book_image}" alt="${e.title}">
            <h3>${e.title}</h3>
            <p>Author: ${e.author}</p>
            <p>Publisher: ${e.publisher}</p>
            <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join("");l.insertAdjacentHTML("beforeend",s)}p();g();
//# sourceMappingURL=commonHelpers.js.map
