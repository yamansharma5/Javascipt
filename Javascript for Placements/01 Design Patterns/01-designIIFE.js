// IIFE Function
//🔹 What is an IIFE?

// An IIFE is a JavaScript function that:

// And executed immediately at the same time

// 👉 It runs as soon as the code is loaded, without calling it separately.
//.........why.................
// ✅ Create private variables (data hiding)

// ✅ Avoid polluting global scope

// ✅ Used in Module Pattern

let Bank = (function () {
  // private data
  let bankbalance = 12000;

  function checkBalance() {
    console.log(bankbalance);
  }

  function setBalance(val) {
    bankbalance = val;
  }

  function withdraw(val) {
    if (val <= bankbalance) {
      bankbalance -= val;
      console.log(bankbalance);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw
  };
})();
