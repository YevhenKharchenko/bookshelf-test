import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as u,i as d,b}from"./assets/vendor-99c659b4.js";class S{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await u.get(t)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await u.get(t)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getCategory(t){const e=this.BASE_URL+this.CATEGORY+t;try{return(await u.get(e)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getBook(t){const e=this.BASE_URL+"/"+t;try{return(await u.get(e)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}}const h=new S,$=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}],y=document.querySelector(".categories-list"),g=document.querySelector(".category");document.querySelector(".shopping-list");const E=document.querySelector(".funds-list"),l=JSON.parse(localStorage.getItem("books"))||[];function _(o){let t=0;const e=o.map(({title:s,url:a,img:n})=>(t++,`
  <div class="swiper-slide">
   ${t} <a href="${a}" target="_blank">${s}</a>
  </div>`)).join("");E.insertAdjacentHTML("beforeend",e)}async function L(){try{const t=(await h.getCategories()).map(({list_name:s})=>`<li class="category-link"><a href="">${s}</a></li>`).join("");y.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".category-link").forEach(s=>{s.addEventListener("click",a=>{const n=document.querySelector(".category-link .active");n&&n.classList.remove("active"),a.target.classList.add("active")})})}catch(o){console.log(o),d.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async function v(){try{(await h.getTopBooks()).forEach(t=>{const e=`<h2>${t.list_name}</h2>`,s=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,a=t.books.map(r=>`
        <div class="book" id="${r._id}">
          <img src="${r.book_image}" alt="${r.title}">
          <h3>${r.title}</h3>
          <p class="description">${r.description}</p>
          <p class="author">Author: ${r.author}</p>
          <p class="publisher"=>Publisher: ${r.publisher}</p>
          <a class="amazon-link" href="${r.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),n=e+s+a;g.insertAdjacentHTML("beforeend",n)})}catch(o){console.log(o),d.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async function f(o){try{const t=await h.getCategory(o),e=o.split(" "),s=e[e.length-1],n=`<h2 class="category-header">${e.slice(0,e.length-1).join(" ")} <span class="last-word-color">${s}</span></h2>`,r=t.map(i=>`
      <div class="book" id="${i._id}">
        <img src="${i.book_image}" alt="${i.title}">
        <h3>${i.title}</h3>
        <p class="description">${i.description}</p>
        <p class="author">Author: ${i.author}</p>
        <p class="publisher">Publisher: ${i.publisher}</p>
        <a class="amazon-link" href="${i.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),c=n+r;g.insertAdjacentHTML("beforeend",c)}catch(t){console.log(t),d.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function T(o){o.preventDefault(),g.innerHTML="";const t=o.target.textContent;f(t)}function A(o){if(!o.target.classList.contains("category-btn"))return;const t=o.target.dataset.category;g.innerHTML="",f(t)}async function C(o){const t=o.target.closest(".book");if(!t)return;const e=t.id,s=t.querySelector("h3").textContent,a=t.querySelector(".description").textContent,n=t.querySelector(".author").textContent,r=t.querySelector(".publisher").textContent,c=t.querySelector("img").src,i=t.querySelector(".amazon-link").href,m=t.querySelector(".modal-text"),k={_id:e,title:s,description:a,author:n,publisher:r,book_image:c,amazon_product_url:i};if(o.target.textContent==="Add to shopping list"){if(m.style.display="block",l.find(p=>p._id===e))return;o.target.textContent="Remove from shopping list",l.push(k),localStorage.setItem("books",JSON.stringify(l))}else if(o.target.textContent==="Remove from shopping list"){m.style.display="none";const p=l.findIndex(w=>w._id===e);p!==-1&&(l.splice(p,1),localStorage.setItem("books",JSON.stringify(l)),o.target.textContent="Add to shopping list")}}async function O(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;o.stopPropagation();const t=o.target.parentNode.id;try{const e=await h.getBook(t);let s="Add to shopping list";l.findIndex(c=>c._id===e._id)>-1&&(s="Remove from shopping list");const a=`
  <div class="book" id="${e._id}">
    <img src="${e.book_image}" alt="${e.title}">
    <h3>${e.title}</h3>
    <p class="description">${e.description}</p>
    <p class="author">Author: ${e.author}</p>
    <p class="publisher">Publisher: ${e.publisher}</p>
    <a class="amazon-link" href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button class="add-btn" type="button">${s}</button>
    <p class="modal-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
  </div>`,n=c=>{c.code==="Escape"&&r.close()},r=b.create(a,{className:"modal",onShow:()=>{const c=r.element().querySelector(".modal-text");l.find(i=>i._id===t)&&c.classList.add("visible"),document.addEventListener("keydown",n),document.addEventListener("click",C)},onClose:()=>{document.removeEventListener("keydown",n)}});r.show()}catch(e){console.log(e),d.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}y.addEventListener("click",T);g.addEventListener("click",A);g.addEventListener("click",O);_($);L();v();
//# sourceMappingURL=commonHelpers.js.map
