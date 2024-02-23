import{a as l}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();class g{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await l.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await l.get(t)).data}async getCategory(t){const s=this.BASE_URL+this.CATEGORY+t;return(await l.get(s)).data}async getBook(t){const s=this.BASE_URL+"/"+t;return(await l.get(s)).data}}const u=new g,p=document.querySelector(".categories-list"),i=document.querySelector(".category");document.querySelector(".book-item");async function y(){const t=(await u.getCategories()).map(({list_name:e})=>`<a class="category-link" href=""><li>${e}</li></a>`).join("");p.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".category-link").forEach(e=>e.addEventListener("click",o=>{o.preventDefault(),i.innerHTML="",d(e.textContent)}))}async function f(){(await u.getTopBooks()).forEach(t=>{const s=`<h2>${t.list_name}</h2>`,e=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,o=t.books.map(n=>`
        <div class="book" id="${n._id}">
            <img src="${n.book_image}" alt="${n.title}">
            <h3>${n.title}</h3>
            <p>Author: ${n.author}</p>
            <p>Publisher: ${n.publisher}</p>
            <a href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),r=s+e+o;i.insertAdjacentHTML("beforeend",r),i.querySelectorAll(".category-btn").forEach(n=>n.addEventListener("click",h))})}async function d(a){const s=(await u.getCategory(a)).map(e=>`<div class="book" id="${e._id}">
            <img src="${e.book_image}" alt="${e.title}">
            <h3>${e.title}</h3>
            <p>Author: ${e.author}</p>
            <p>Publisher: ${e.publisher}</p>
            <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join("");i.insertAdjacentHTML("beforeend",s)}function h(a){const t=a.target.dataset.category;console.log(t),i.innerHTML="",d(t)}y();f();
//# sourceMappingURL=commonHelpers.js.map
