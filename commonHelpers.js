import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;return(await i.get(t)).data}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;return(await i.get(t)).data}async getCategory(t){const s=this.BASE_URL+this.CATEGORY+t;return(await i.get(s)).data}async getBook(t){const s=this.BASE_URL+"/"+t;return(await i.get(s)).data}}const a=new u,l=document.querySelector(".books-list"),p=document.querySelector(".top-books-list"),d=document.querySelector(".category"),g=document.querySelector(".book-item");async function h(){const t=(await a.getCategories()).map(({list_name:s})=>`<li>${s}</li>`).join("");l.insertAdjacentHTML("beforeend",t)}async function f(){(await a.getTopBooks()).forEach(t=>{const s=`<h2>${t.list_name}</h2>`,r=t.books.map(e=>`
        <div class="book" id="${e._id}">
            <img src="${e.book_image}" alt="${e.title}">
            <h3>${e.title}</h3>
            <p>Author: ${e.author}</p>
            <p>Publisher: ${e.publisher}</p>
            <a href="${e.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),o=s+r;p.insertAdjacentHTML("beforeend",o)})}async function m(n){const s=(await a.getCategory(n)).map(r=>`<div class="book" id="${r._id}">
            <img src="${r.book_image}" alt="${r.title}">
            <h3>${r.title}</h3>
            <p>Author: ${r.author}</p>
            <p>Publisher: ${r.publisher}</p>
            <a href="${r.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join("");d.insertAdjacentHTML("beforeend",s)}async function y(n){const t=await a.getBook(n),s=`<img src="${t.book_image}" alt="${t.title}">
                  <h3>${t.title}</h3>
                  <p>Author: ${t.author}</p>
                  <p>Publisher: ${t.publisher}</p>
                  <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>`;g.insertAdjacentHTML("beforeend",s)}h();f();m("Picture Books");y("643282b2e85766588626a10c");
//# sourceMappingURL=commonHelpers.js.map
