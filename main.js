import {us} from "./export.js";
let data = document.getElementById("data");
let input_search = document.getElementById("input_text");
let input_div = document.getElementById("input_div");

us.forEach((elem) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="user-card bg-[#FFFFFF] inline-block rounded-xl px-[2px] py-[2px] relative cursor-pointer hover:shadow-lg transition-shadow">
    <div class="px-[20px] py-[20px] w-[278px] ">
    <img class="rounded-t-xl" src="${elem.img}" alt="ing"/>
    <p class="bg-[#EAEDF0] inline-block py-1 px-2 rounded-md">${elem.button}</p>
    <p class="max-w-[238px] text-[18px] text-[#16191D] hover:text-[#388FF3] cursor-pointer font-semibold mt-[16px] line-clamp-1">${elem.text}</p>
    <p class="mt-[8px] text-[14px] text-[#8E9297] font-normal">${elem.data}</p>
    <p class="mt-[8px] text-[#8E9297] text-[16px] font-semibold">${elem.number}</p>
    <p class="font-bold text-[24px] text-[#16191D] mt-[16px]">${elem.price}</p>
    </div>
    
    </div>
    
    
    `
    data.append(div);
})
input_search.addEventListener("input", (event) => {
    let result = us.filter((elem) => {
        return elem.text.toLowerCase().includes(event.target.value.toLowerCase());
    });

    input_div.classList.remove("hidden");
    if (input_search.value.length === 0) {
        input_div.classList.add("hidden");
    }
});
