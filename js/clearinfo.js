const clearBtn = document.querySelector("#clearall");


function clearallinfo(){
    localStorage.clear();
    location.reload();
}

clearBtn.addEventListener("click", clearallinfo);
