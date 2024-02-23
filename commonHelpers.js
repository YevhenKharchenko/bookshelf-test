import{a as u}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();class h{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await u.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await u.get(t)).data}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;return(await u.get(o)).data}async getBook(t){const o=this.BASE_URL+"/"+t;return(await u.get(o)).data}}const l=new h,p=document.querySelector(".categories-list"),a=document.querySelector(".category"),d=document.querySelector(".shopping-list"),c=JSON.parse(localStorage.getItem("books"))||[];async function f(){const t=(await l.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");p.insertAdjacentHTML("beforeend",t)}async function m(){(await l.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,n=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,r=t.books.map(i=>`
        <div class="book" id="${i._id}">
          <img src="${i.book_image}" alt="${i.title}">
          <h3>${i.title}</h3>
          <p>Author: ${i.author}</p>
          <p>Publisher: ${i.publisher}</p>
          <a href="${i.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=o+n+r;a.insertAdjacentHTML("beforeend",s)})}async function g(e){const o=(await l.getCategory(e)).map(n=>`
      <div class="book" id="${n._id}">
        <img src="${n.book_image}" alt="${n.title}">
        <h3>${n.title}</h3>
        <p>Author: ${n.author}</p>
        <p>Publisher: ${n.publisher}</p>
        <a href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join("");a.insertAdjacentHTML("beforeend",o)}async function y(e){const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;a.insertAdjacentHTML("beforeend",o)}function b(e){e.preventDefault(),a.innerHTML="";const t=e.target.textContent;g(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;a.innerHTML="",g(t)}function k(e){if(e.target.nodeName!="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;a.innerHTML="",y(t)}function _(e){if(e.target.textContent!="Add to shopping list")return;const t=e.target.parentNode.id;c.includes(t)||(c.push(t),localStorage.setItem("books",JSON.stringify(c)))}function $(){const e=JSON.parse(localStorage.getItem("books"));e&&e.forEach(t=>A(t))}async function A(e){const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;d.insertAdjacentHTML("beforeend",o)}function B(e){const t=e.target.parentNode,o=t.id;c.splice(o,1),console.log(c),localStorage.setItem("books",JSON.stringify(c)),t.remove()}p.addEventListener("click",b);a.addEventListener("click",L);a.addEventListener("click",k);a.addEventListener("click",_);d.addEventListener("click",B);f();m();$();
//# sourceMappingURL=commonHelpers.js.map
