import{a as u}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();class f{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await u.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await u.get(t)).data}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;return(await u.get(o)).data}async getBook(t){const o=this.BASE_URL+"/"+t;return(await u.get(o)).data}}const l=new f,d=document.querySelector(".categories-list"),c=document.querySelector(".category"),p=document.querySelector(".shopping-list"),a=JSON.parse(localStorage.getItem("books"))||[];async function h(){const t=(await l.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");d.insertAdjacentHTML("beforeend",t)}async function m(){(await l.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,i=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,r=t.books.map(s=>`
        <div class="book" id="${s._id}">
          <img src="${s.book_image}" alt="${s.title}">
          <h3>${s.title}</h3>
          <p>Author: ${s.author}</p>
          <p>Publisher: ${s.publisher}</p>
          <a href="${s.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),n=o+i+r;c.insertAdjacentHTML("beforeend",n)})}async function g(e){const t=await l.getCategory(e),o=`<h2>${e}</h2>`,i=t.map(n=>`
      <div class="book" id="${n._id}">
        <img src="${n.book_image}" alt="${n.title}">
        <h3>${n.title}</h3>
        <p>Author: ${n.author}</p>
        <p>Publisher: ${n.publisher}</p>
        <a href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),r=o+i;c.insertAdjacentHTML("beforeend",r)}async function y(e){const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;c.insertAdjacentHTML("beforeend",o)}function b(e){e.preventDefault(),c.innerHTML="";const t=e.target.textContent;g(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;c.innerHTML="",g(t)}function k(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;c.innerHTML="",y(t)}function $(e){if(e.target.textContent==="Add to shopping list"){const t=e.target.parentNode.id;if(a.includes(t))return;e.target.textContent="Remove from shopping list",a.push(t),localStorage.setItem("books",JSON.stringify(a));return}if(e.target.textContent==="Remove from shopping list"){const t=e.target.parentNode.id,o=a.indexOf(t);if(o!==-1){a.splice(o,1),localStorage.setItem("books",JSON.stringify(a)),e.target.textContent="Add to shopping list";return}}}function _(){const e=JSON.parse(localStorage.getItem("books"));e&&e.forEach(t=>A(t))}async function A(e){const t=await l.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;p.insertAdjacentHTML("beforeend",o)}function S(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,o=t.id,i=a.indexOf(o);a.splice(i,1),localStorage.setItem("books",JSON.stringify(a)),t.remove()}d.addEventListener("click",b);c.addEventListener("click",L);c.addEventListener("click",k);c.addEventListener("click",$);p.addEventListener("click",S);h();m();_();
//# sourceMappingURL=commonHelpers.js.map
