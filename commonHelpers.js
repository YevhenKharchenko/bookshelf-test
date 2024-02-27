import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as g,i as l}from"./assets/vendor-e8675f53.js";class b{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await g.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await g.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;try{return(await g.get(o)).data}catch(r){console.log(r),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight"})}}async getBook(t){const o=this.BASE_URL+"/"+t;try{return(await g.get(o)).data}catch(r){console.log(r),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight"})}}}const u=new b,d=document.querySelector(".categories-list"),c=document.querySelector(".category"),h=document.querySelector(".shopping-list"),i=JSON.parse(localStorage.getItem("books"))||[];async function _(){try{const t=(await u.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");d.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function k(){try{(await u.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,r=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,a=t.books.map(n=>`
        <div class="book" id="${n._id}">
          <img src="${n.book_image}" alt="${n.title}">
          <h3>${n.title}</h3>
          <p class="description">${n.description}</p>
          <p class="author">Author: ${n.author}</p>
          <p class="publisher"=>Publisher: ${n.publisher}</p>
          <a class="amazon-link" href="${n.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),s=o+r+a;c.insertAdjacentHTML("beforeend",s)})}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function m(e){try{const t=await u.getCategory(e),o=`<h2>${e}</h2>`,r=t.map(s=>`
      <div class="book" id="${s._id}">
        <img src="${s.book_image}" alt="${s.title}">
        <h3>${s.title}</h3>
        <p class="description">${s.description}</p>
        <p class="author">Author: ${s.author}</p>
        <p class="publisher">Publisher: ${s.publisher}</p>
        <a class="amazon-link" href="${s.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),a=o+r;c.insertAdjacentHTML("beforeend",a)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async function E(e){try{const t=await u.getBook(e);let o="Add to shopping list";i.findIndex(a=>a._id===t._id)>-1&&(o="Remove from shopping list");const r=`
  <li class="book" id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p class="description">${t.description}</p>
    <p class="author">Author: ${t.author}</p>
    <p class="publisher">Publisher: ${t.publisher}</p>
    <a class="amazon-link" href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button class="add-btn" type="button">${o}</button>
  </li>`;c.insertAdjacentHTML("beforeend",r)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function L(e){e.preventDefault(),c.innerHTML="";const t=e.target.textContent;m(t)}function T(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;c.innerHTML="",m(t)}function w(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;c.innerHTML="",E(t)}function A(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,o=t.id,r=i.findIndex(a=>a._id===o);r!==-1&&(i.splice(r,1),localStorage.setItem("books",JSON.stringify(i))),t.remove()}async function O(e){const t=e.target.closest(".book");if(!t)return;const o=t.id,r=t.querySelector("h3").textContent,a=t.querySelector(".description").textContent,s=t.querySelector(".author").textContent,n=t.querySelector(".publisher").textContent,y=t.querySelector("img").src,f=t.querySelector(".amazon-link").href,S={_id:o,title:r,description:a,author:s,publisher:n,book_image:y,amazon_product_url:f};if(e.target.textContent==="Add to shopping list"){if(i.find(p=>p._id===o))return;e.target.textContent="Remove from shopping list",i.push(S),localStorage.setItem("books",JSON.stringify(i))}else if(e.target.textContent==="Remove from shopping list"){const p=i.findIndex($=>$._id===o);p!==-1&&(i.splice(p,1),localStorage.setItem("books",JSON.stringify(i)),e.target.textContent="Add to shopping list")}}function B(){try{const e=JSON.parse(localStorage.getItem("books"))||[];if(!e)return;e.forEach(t=>R(t))}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}function R(e){const t=`
  <li id="${e._id}">
    <img src="${e.book_image}" alt="${e.title}">
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    <p>${e.author}</p>
    <p>${e.publisher}</p>
    <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;h.insertAdjacentHTML("beforeend",t)}d.addEventListener("click",L);c.addEventListener("click",T);c.addEventListener("click",w);c.addEventListener("click",O);h.addEventListener("click",A);_();k();B();
//# sourceMappingURL=commonHelpers.js.map
