/* Main interaction script for the Quantari static site. */
const header=document.querySelector("[data-header]");
const navToggle=document.querySelector("[data-nav-toggle]");
const navMenu=document.querySelector("[data-nav-menu]");
const revealElements=document.querySelectorAll(".reveal");
const counters=document.querySelectorAll("[data-counter]");
const contactForm=document.querySelector("[data-contact-form]");
const formNote=document.querySelector("[data-form-note]");
/* Apply a compact header state after the user begins scrolling. */
const updateHeader=()=>{if(!header)return;header.classList.toggle("is-scrolled",window.scrollY>12)};
/* Toggle the mobile menu and keep ARIA state accurate. */
if(navToggle&&navMenu){navToggle.addEventListener("click",()=>{const isOpen=navMenu.classList.toggle("is-open");navToggle.setAttribute("aria-expanded",String(isOpen))});navMenu.addEventListener("click",event=>{if(event.target instanceof HTMLAnchorElement){navMenu.classList.remove("is-open");navToggle.setAttribute("aria-expanded","false")}})}
/* Animate counters only once when their section becomes visible. */
const animateCounter=counter=>{const target=Number(counter.dataset.target||"0");const duration=1100;const startTime=performance.now();const tick=now=>{const progress=Math.min((now-startTime)/duration,1);const eased=1-Math.pow(1-progress,3);counter.textContent=String(Math.round(target*eased))+"+";if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};
/* Intersection Observer powers reveal effects and counter timing. */
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add("is-visible");if(entry.target.hasAttribute("data-counter")&&!entry.target.dataset.animated){entry.target.dataset.animated="true";animateCounter(entry.target)}observer.unobserve(entry.target)})},{threshold:.18,rootMargin:"0px 0px -48px 0px"});
/* Observe reveal elements and counters as independent animation targets. */
revealElements.forEach(element=>observer.observe(element));counters.forEach(counter=>observer.observe(counter));
/* Validate the static contact form before handing off to the email client. */
/* Send the contact form using EmailJS instead of opening an email client. */
if (contactForm && formNote) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            formNote.textContent = "Please complete each field before sending your enquiry.";
            return;
        }

        formNote.textContent = "Sending your enquiry...";

        emailjs.sendForm(
            "service_8yydc3f",
            "template_nu3czhs",
            contactForm
        )
        .then(function () {
            formNote.textContent = "Thank you. Your enquiry has been sent successfully.";
            contactForm.reset();
        })
        .catch(function (error) {
            console.error(error);
            formNote.textContent = "Sorry, something went wrong. Please try again.";
        });
    });
}
/* Keep the header state current on load and scroll. */
updateHeader();window.addEventListener("scroll",updateHeader,{passive:true});
