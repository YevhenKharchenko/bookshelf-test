import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                             */import{P as s}from"./assets/vendor-e8675f53.js";const c=document.getElementById("tui-pagination-container"),p=new s(c);p.getCurrentPage();const n=document.querySelector(".shopping-list"),o=JSON.parse(localStorage.getItem("books"))||[];function l(){try{const t=JSON.parse(localStorage.getItem("books"))||[];if(!t)return;t.forEach(e=>g(e))}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function g(t){const e=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>${t.description}</p>
    <p>${t.author}</p>
    <p>${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;n.insertAdjacentHTML("beforeend",e)}function m(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.parentNode,i=e.id,r=o.findIndex(a=>a._id===i);r!==-1&&(o.splice(r,1),localStorage.setItem("books",JSON.stringify(o))),e.remove()}n.addEventListener("click",m);l();
//# sourceMappingURL=commonHelpers2.js.map
