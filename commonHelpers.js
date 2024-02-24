import{a as u}from"./assets/vendor-ecab3960.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();class h{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await u.get(t)).data}catch(o){console.log(o)}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await u.get(t)).data}catch(o){console.log(o)}}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;try{return(await u.get(o)).data}catch(s){console.log(s)}}async getBook(t){const o=this.BASE_URL+"/"+t;try{return(await u.get(o)).data}catch(s){console.log(s)}}}const l=new h,d=document.querySelector(".categories-list"),c=document.querySelector(".category"),p=document.querySelector(".shopping-list"),i=JSON.parse(localStorage.getItem("books"))||[];async function f(){try{const t=(await l.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");d.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}async function m(){try{(await l.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,s=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,n=t.books.map(a=>`
        <div class="book" id="${a._id}">
          <img src="${a.book_image}" alt="${a.title}">
          <h3>${a.title}</h3>
          <p>Author: ${a.author}</p>
          <p>Publisher: ${a.publisher}</p>
          <a href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),r=o+s+n;c.insertAdjacentHTML("beforeend",r)})}catch(e){console.log(e)}}async function g(e){try{const t=await l.getCategory(e),o=`<h2>${e}</h2>`,s=t.map(r=>`
      <div class="book" id="${r._id}">
        <img src="${r.book_image}" alt="${r.title}">
        <h3>${r.title}</h3>
        <p>Author: ${r.author}</p>
        <p>Publisher: ${r.publisher}</p>
        <a href="${r.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),n=o+s;c.insertAdjacentHTML("beforeend",n)}catch(t){console.log(t)}}async function y(e){const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;c.insertAdjacentHTML("beforeend",o)}function b(e){e.preventDefault(),c.innerHTML="";const t=e.target.textContent;g(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;c.innerHTML="",g(t)}function k(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;c.innerHTML="",y(t)}function $(e){if(e.target.textContent==="Add to shopping list"){const t=e.target.parentNode.id;if(i.includes(t))return;e.target.textContent="Remove from shopping list",i.push(t),localStorage.setItem("books",JSON.stringify(i));return}if(e.target.textContent==="Remove from shopping list"){const t=e.target.parentNode.id,o=i.indexOf(t);if(o!==-1){i.splice(o,1),localStorage.setItem("books",JSON.stringify(i)),e.target.textContent="Add to shopping list";return}}}function _(){const e=JSON.parse(localStorage.getItem("books"));e&&e.forEach(t=>A(t))}async function A(e){try{const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;p.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t)}}function S(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,o=t.id,s=i.indexOf(o);i.splice(s,1),localStorage.setItem("books",JSON.stringify(i)),t.remove()}d.addEventListener("click",b);c.addEventListener("click",L);c.addEventListener("click",k);c.addEventListener("click",$);p.addEventListener("click",S);f();m();_();
//# sourceMappingURL=commonHelpers.js.map
