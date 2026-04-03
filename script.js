const images = [
"images/main.jpg",
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg"
]

let index = 0

const mainImage = document.getElementById("mainImage")
const thumbs = document.querySelectorAll(".thumb")

document.querySelector(".arrow.right").onclick = () =>{
index = (index + 1) % images.length
update()
}

document.querySelector(".arrow.left").onclick = () =>{
index = (index - 1 + images.length) % images.length
update()
}

thumbs.forEach((thumb,i)=>{
thumb.onclick = ()=>{
index = i
update()
}
})

function update(){

mainImage.src = images[index]

thumbs.forEach(t=>t.classList.remove("active"))

thumbs[index].classList.add("active")

}

/* FAQ SECTION */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});

// APPLICATION SLIDER

const slider = document.getElementById("applicationsSlider");

document.getElementById("slideRight").onclick = () => {
slider.scrollLeft += 350;
};

document.getElementById("slideLeft").onclick = () => {
slider.scrollLeft -= 350;
};

// MANUFACTURING PROCESS SECTION
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab=>{
tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

});
});

// REQUEST QUOTE MODAL
const modal = document.getElementById("quoteModal");
const closeBtn = document.querySelector(".close-modal");

const quoteButtons = document.querySelectorAll(
".cta-btn, .primary-btn, .quote-btn, .expert-btn"
);

/* OPEN MODAL */

quoteButtons.forEach(btn => {
btn.addEventListener("click", () => {
modal.style.display = "flex";
});
});

/* CLOSE MODAL */

closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

/* CLICK OUTSIDE CLOSE */

window.addEventListener("click", (e) => {
if(e.target === modal){
modal.style.display = "none";
}
});

/* DATASHEET MODAL */

/* DATASHEET MODAL */

const datasheetModal = document.getElementById("datasheetModal");
const closeDatasheet = document.querySelector(".close-datasheet");

/* button that opens modal */

const downloadBtn = document.querySelector(".download-btn button");

downloadBtn.addEventListener("click", () => {
datasheetModal.style.display = "flex";
});

/* close modal */

closeDatasheet.addEventListener("click", () => {
datasheetModal.style.display = "none";
});

/* click outside close */

window.addEventListener("click", (e) => {
if(e.target === datasheetModal){
datasheetModal.style.display = "none";
}
});
