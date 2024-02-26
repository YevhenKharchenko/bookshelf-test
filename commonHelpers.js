import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as l}from"./assets/vendor-db25513e.js";class ${constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await p.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await p.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;try{return(await p.get(o)).data}catch(r){console.log(r),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight"})}}async getBook(t){const o=this.BASE_URL+"/"+t;try{return(await p.get(o)).data}catch(r){console.log(r),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight"})}}}const u=new $,h=document.querySelector(".categories-list"),i=document.querySelector(".category"),d=document.querySelector(".shopping-list"),n=JSON.parse(localStorage.getItem("books"))||[];async function b(){try{const t=(await u.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");h.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function k(){try{(await u.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,r=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,c=t.books.map(a=>`
        <div class="book" id="${a._id}">
          <img src="${a.book_image}" alt="${a.title}">
          <h3>${a.title}</h3>
          <p class="author">Author: ${a.author}</p>
          <p class="publisher"=>Publisher: ${a.publisher}</p>
          <a class="amazon-link" href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=o+r+c;i.insertAdjacentHTML("beforeend",s)})}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function m(e){try{const t=await u.getCategory(e),o=`<h2>${e}</h2>`,r=t.map(s=>`
      <div class="book" id="${s._id}">
        <img src="${s.book_image}" alt="${s.title}">
        <h3>${s.title}</h3>
        <p class="author">Author: ${s.author}</p>
        <p class="publisher">Publisher: ${s.publisher}</p>
        <a class="amazon-link" href="${s.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),c=o+r;i.insertAdjacentHTML("beforeend",c)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async function _(e){try{const t=await u.getBook(e),o=`
  <li class="book" id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p class="author">Author: ${t.author}</p>
    <p class="publisher">Publisher: ${t.publisher}</p>
    <a class="amazon-link" href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;i.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function E(e){e.preventDefault(),i.innerHTML="";const t=e.target.textContent;m(t)}function L(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;i.innerHTML="",m(t)}function T(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;i.innerHTML="",_(t)}function w(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,o=t.id,r=n.indexOf(o);n.splice(r,1),localStorage.setItem("books",JSON.stringify(n)),t.remove()}async function O(e){const t=e.target.closest(".book");if(!t)return;const o=t.id,r=t.querySelector("h3").textContent,c=t.querySelector(".author").textContent,s=t.querySelector(".publisher").textContent,a=t.querySelector("img").src,y=t.querySelector(".amazon-link").href,f={_id:o,title:r,author:c,publisher:s,book_image:a,amazon_product_url:y};if(e.target.textContent==="Add to shopping list"){if(n.find(g=>g._id===o))return;e.target.textContent="Remove from shopping list",n.push(f),localStorage.setItem("books",JSON.stringify(n))}else if(e.target.textContent==="Remove from shopping list"){const g=n.findIndex(S=>S._id===o);g!==-1&&(n.splice(g,1),localStorage.setItem("books",JSON.stringify(n)),e.target.textContent="Add to shopping list")}}function A(){try{const e=JSON.parse(localStorage.getItem("books"))||[];if(!e)return;e.forEach(t=>B(t))}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}function B(e){const t=`
  <li id="${e._id}">
    <img src="${e.book_image}" alt="${e.title}">
    <h3>${e.title}</h3>
    <p>${e.author}</p>
    <p>${e.publisher}</p>
    <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;d.insertAdjacentHTML("beforeend",t)}h.addEventListener("click",E);i.addEventListener("click",L);i.addEventListener("click",T);i.addEventListener("click",O);d.addEventListener("click",w);b();k();A();
//# sourceMappingURL=commonHelpers.js.map
