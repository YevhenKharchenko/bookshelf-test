import{a as u}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();class h{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await u.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await u.get(t)).data}async getCategory(t){const r=this.BASE_URL+this.CATEGORY+t;return(await u.get(r)).data}async getBook(t){const r=this.BASE_URL+"/"+t;return(await u.get(r)).data}}const l=new h,p=document.querySelector(".categories-list"),a=document.querySelector(".category"),d=document.querySelector(".shopping-list"),c=JSON.parse(localStorage.getItem("books"))||[];async function f(){const t=(await l.getCategories()).map(({list_name:r})=>`<a class="category-link" href=""><li>${r}</li></a>`).join("");p.insertAdjacentHTML("beforeend",t)}async function m(){(await l.getTopBooks()).forEach(t=>{const r=`<h2>${t.list_name}</h2>`,i=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,n=t.books.map(s=>`
        <div class="book" id="${s._id}">
          <img src="${s.book_image}" alt="${s.title}">
          <h3>${s.title}</h3>
          <p>Author: ${s.author}</p>
          <p>Publisher: ${s.publisher}</p>
          <a href="${s.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),o=r+i+n;a.insertAdjacentHTML("beforeend",o)})}async function g(e){const t=await l.getCategory(e),r=`<h2>${e}</h2>`,i=t.map(o=>`
      <div class="book" id="${o._id}">
        <img src="${o.book_image}" alt="${o.title}">
        <h3>${o.title}</h3>
        <p>Author: ${o.author}</p>
        <p>Publisher: ${o.publisher}</p>
        <a href="${o.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),n=r+i;a.insertAdjacentHTML("beforeend",n)}async function y(e){const t=await l.getBook(e),r=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;a.insertAdjacentHTML("beforeend",r)}function b(e){e.preventDefault(),a.innerHTML="";const t=e.target.textContent;g(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;a.innerHTML="",g(t)}function k(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;a.innerHTML="",y(t)}function $(e){if(e.target.textContent!=="Add to shopping list")return;const t=e.target.parentNode.id;c.includes(t)||(c.push(t),localStorage.setItem("books",JSON.stringify(c)))}function _(){const e=JSON.parse(localStorage.getItem("books"));e&&e.forEach(t=>B(t))}async function B(e){const t=await l.getBook(e),r=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;d.insertAdjacentHTML("beforeend",r)}function A(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,r=t.id;c.splice(r,1),localStorage.setItem("books",JSON.stringify(c)),t.remove()}p.addEventListener("click",b);a.addEventListener("click",L);a.addEventListener("click",k);a.addEventListener("click",$);d.addEventListener("click",A);f();m();_();
//# sourceMappingURL=commonHelpers.js.map
