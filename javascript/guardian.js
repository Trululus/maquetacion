// authGuards.js
(
    () => {
    
      const user = localStorage.getItem("users");
    
      if(!user) {
        window.location.href = "index.html";
      }
    }
)()