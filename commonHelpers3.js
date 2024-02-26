import"./assets/modulepreload-polyfill-3cfb730f.js";import i from"https://cdn.skypack.dev/axios";async function r(o){const e=[];try{await Promise.all(o.map(async s=>{const t=`https://books-backend.p.goit.global/books/${s}`,a=await i.get(t);e.push(a.data)})),localStorage.setItem("booksArray",JSON.stringify(e))}catch(s){console.error("Error fetching books:",s)}}const n=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];r(n);const l=document.querySelector(".shopping-list");function c(o){const e=localStorage.getItem(o);try{const s=JSON.parse(e);console.log(s),s.forEach(t=>{const a=`<li class="shopping-list-item" data-id="${t._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <svg class="delete-btn-icon" width="16" height="16"> <use href="/svg-sprite.svg#icon-trash"></use> </svg> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${t.book_image}" alt="${t.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${t.title}</h2>
        
        <p class="shopping-list-item-category">${t.list_name}</p> 
        <div class="description-wrapper"><p class="shopping-list-item-description">${t.description}</p></div>
        
        <div class="link-container"> 
        <p class="shopping-list-item-author">${t.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${t.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow">am</a>
            <a class="apple-icon" href="${t.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow">ap</a>
        </div>
        </div>
        </div>
        </li>`;l.insertAdjacentHTML("beforeend",a)})}catch{return e}}c("booksArray");
//# sourceMappingURL=commonHelpers3.js.map
