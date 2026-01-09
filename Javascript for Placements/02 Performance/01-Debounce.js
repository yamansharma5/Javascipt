

// 🔹 What is Debounce?

// Debounce delays execution until the event stops firing for a certain time.
// 📌 “Ruk ja bhai, jab band ho jaaye tab kaam karunga”

//Examples - Search box → user typing, API call should happen after typing stops



//search Box implementation and this is a classic example of closure
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

document.querySelector("input")
.addEventListener("input", debounce(function(){// this function is only the return func in above debounce function
    console.log("heili yaman")
}, 1000))
