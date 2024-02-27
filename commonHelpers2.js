import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                             */import{P as g}from"./assets/vendor-e8675f53.js";const n=JSON.parse(localStorage.getItem("books"))||[],p=document.getElementById("tui-pagination-container"),s=document.querySelector(".shopping-list"),o=new g(p,{totalItems:n.length,itemsPerPage:3,visiblePages:3,page:1});console.log(o);o.on("afterMove",function(e){c(e.page)});function c(e){s.innerHTML="";const t=(e-1)*o._options.itemsPerPage,i=t+o._options.itemsPerPage;n.slice(t,i).forEach(a=>{l(a)})}function l(e){const t=`
  <li id="${e._id}">
    <img src="${e.book_image}" alt="${e.title}">
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    <p>${e.author}</p>
    <p>${e.publisher}</p>
    <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;s.insertAdjacentHTML("beforeend",t)}function d(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,i=t.id,r=n.findIndex(a=>a._id===i);r!==-1&&(n.splice(r,1),localStorage.setItem("books",JSON.stringify(n)),o.reset(n.length),c(o.getCurrentPage())),t.remove()}s.addEventListener("click",d);c(1);
//# sourceMappingURL=commonHelpers2.js.map
