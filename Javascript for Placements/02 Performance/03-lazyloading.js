// ...What is Lazy Loading?

// Cheez tab load karo jab uski zarurat ho, pehle nahi.

// 📌 “Abhi kaam nahi → abhi load nahi”

// 🔹 Why Lazy Loading?
// Faster page load
// Kam data usage
// Better performance
// Mobile-friendly

const images = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach(img => observer.observe(img));

button.addEventListener("click", async () => {
  const module = await import("./analytics.js");
  module.track();
});


// 1️⃣ Select all images which have data-src attribute
// (actual image URL is stored in data-src, not src)
const imagess = document.querySelectorAll("img[data-src]");

// 2️⃣ Create an IntersectionObserver
// This observer watches when images enter the viewport (screen)
const observers = new IntersectionObserver((entries, observer) => {

  // 3️⃣ entries = list of elements being observed
  entries.forEach(entry => {

    // 4️⃣ Check if image is visible on screen
    if (entry.isIntersecting) {

      // 5️⃣ entry.target is the image element
      const img = entry.target;

      // 6️⃣ Load the actual image
      // data-src → src (browser now loads the image)
      img.src = img.dataset.src;

      // 7️⃣ Stop observing this image
      // (image is already loaded, no need to track it anymore)
      observer.unobserve(img);
    }
  });
});

// 8️⃣ Attach observer to each image
images.forEach(img => observer.observe(img));
