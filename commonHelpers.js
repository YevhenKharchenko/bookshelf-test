import{a as l}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();class g{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await l.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await l.get(t)).data}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;return(await l.get(o)).data}async getBook(t){const o=this.BASE_URL+"/"+t;return(await l.get(o)).data}}const c=new g,p=document.querySelector(".categories-list"),i=document.querySelector(".category"),h=document.querySelector(".shopping-list"),u=[];async function f(){const t=(await c.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");p.insertAdjacentHTML("beforeend",t)}async function m(){(await c.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,n=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,r=t.books.map(a=>`
        <div class="book" id="${a._id}">
          <img src="${a.book_image}" alt="${a.title}">
          <h3>${a.title}</h3>
          <p>Author: ${a.author}</p>
          <p>Publisher: ${a.publisher}</p>
          <a href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=o+n+r;i.insertAdjacentHTML("beforeend",s)})}async function d(e){const o=(await c.getCategory(e)).map(n=>`
      <div class="book" id="${n._id}">
        <img src="${n.book_image}" alt="${n.title}">
        <h3>${n.title}</h3>
        <p>Author: ${n.author}</p>
        <p>Publisher: ${n.publisher}</p>
        <a href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join("");i.insertAdjacentHTML("beforeend",o)}async function y(e){const t=await c.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;i.insertAdjacentHTML("beforeend",o)}function b(e){e.preventDefault(),i.innerHTML="";const t=e.target.textContent;d(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;i.innerHTML="",d(t)}function k(e){if(e.target.nodeName!="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;i.innerHTML="",y(t)}function _(e){if(e.target.textContent!="Add to shopping list")return;const t=e.target.parentNode.id;u.includes(t)||(u.push(t),localStorage.setItem("books",JSON.stringify(u)))}function $(){JSON.parse(localStorage.getItem("books")).forEach(t=>A(t))}async function A(e){const t=await c.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;h.insertAdjacentHTML("beforeend",o)}p.addEventListener("click",b);i.addEventListener("click",L);i.addEventListener("click",k);i.addEventListener("click",_);f();m();$();
//# sourceMappingURL=commonHelpers.js.map
