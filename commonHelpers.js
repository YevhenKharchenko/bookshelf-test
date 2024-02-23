import{a as c}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class p{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await c.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await c.get(t)).data}async getCategory(t){const r=this.BASE_URL+this.CATEGORY+t;return(await c.get(r)).data}async getBook(t){const r=this.BASE_URL+"/"+t;return(await c.get(r)).data}}const u=new p,l=document.querySelector(".categories-list"),i=document.querySelector(".category");async function g(){const t=(await u.getCategories()).map(({list_name:r})=>`<a class="category-link" href=""><li>${r}</li></a>`).join("");l.insertAdjacentHTML("beforeend",t)}async function f(){(await u.getTopBooks()).forEach(t=>{const r=`<h2>${t.list_name}</h2>`,n=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,o=t.books.map(a=>`
        <div class="book" id="${a._id}">
            <img src="${a.book_image}" alt="${a.title}">
            <h3>${a.title}</h3>
            <p>Author: ${a.author}</p>
            <p>Publisher: ${a.publisher}</p>
            <a href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=r+n+o;i.insertAdjacentHTML("beforeend",s)})}async function d(e){const r=(await u.getCategory(e)).map(n=>`<div class="book" id="${n._id}">
            <img src="${n.book_image}" alt="${n.title}">
            <h3>${n.title}</h3>
            <p>Author: ${n.author}</p>
            <p>Publisher: ${n.publisher}</p>
            <a href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join("");i.insertAdjacentHTML("beforeend",r)}async function h(e){const t=await u.getBook(e),r=`<img src="${t.book_image}" alt="${t.title}">
                  <h3>${t.title}</h3>
                  <p>Author: ${t.author}</p>
                  <p>Publisher: ${t.publisher}</p>
                  <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>`;i.insertAdjacentHTML("beforeend",r)}function y(e){e.preventDefault(),i.innerHTML="";const t=e.target.textContent;d(t)}function m(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;i.innerHTML="",d(t)}function L(e){if(e.target.nodeName!="IMG")return;e.preventDefault();const t=e.target.parentNode.id;i.innerHTML="",h(t)}l.addEventListener("click",y);i.addEventListener("click",m);i.addEventListener("click",L);g();f();
//# sourceMappingURL=commonHelpers.js.map
