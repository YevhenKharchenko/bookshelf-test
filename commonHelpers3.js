import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                             */import"https://cdn.skypack.dev/axios";import{P as l}from"./assets/vendor-e8675f53.js";const c=document.getElementById("tui-pagination-container"),p=new l(c);p.getCurrentPage();const g=document.querySelector(".shopping-list"),e=JSON.parse(localStorage.getItem("booksArray"))||[];function d(){try{if(!e)return;e.forEach(t=>m(t))}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function m(t){const o=`<li class="shopping-list-item" data-id="${t._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <div class="delete-btn-icon"> </div> </div> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${t.book_image}" alt="${t.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${t.title}</h2>
        
        <p class="shopping-list-item-category">${t.list_name}</p> 
        <div class="description-wrapper"><p class="shopping-list-item-description">${t.description}</p></div>
        
        <div class="link-container"> 
        <p class="shopping-list-item-author">${t.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${t.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="./png/amazon-1x.png" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${t.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="./png/amazon-book-1x.png" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;g.insertAdjacentHTML("beforeend",o)}d();const h=document.querySelectorAll(".delete-btn");h.forEach(t=>{t.addEventListener("click",u)});function u(t){const s=t.currentTarget.closest(".shopping-list-item"),n=s.dataset.id,r=e.filter(i=>i._id!==n);localStorage.setItem("booksArray",JSON.stringify(r)),s.remove();const a=e.findIndex(i=>i._id===n);e.splice(a,1),r.length===0&&localStorage.removeItem("booksArray"),toggleVisibility()}
//# sourceMappingURL=commonHelpers3.js.map
