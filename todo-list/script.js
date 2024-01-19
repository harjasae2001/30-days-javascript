const btn = document.querySelector(".btn");
const ul = document.querySelector(".to-do");
let i = 0;
//Adding a task to the list
window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const li = document.createElement("li");
    li.id = `item${i}`;
    li.innerHTML = `<img id='${i}' class='show' src='./To-Do-Img/images/unchecked.png'><p>${localStorage.getItem(`item${i}`)}</p>`;
    ul.appendChild(li);
  }


});

btn.addEventListener("click", (e) => {
  // e.preventDefault();
  const input = document.querySelector(".input").value;
  // console.log('clicked');
  if(input === ""){
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.id = `item${i}`;
  li.innerHTML = `<img id='${i}' class='show' src='./To-Do-Img/images/unchecked.png'><p>${input}</p>`;
  ul.appendChild(li);
  document.querySelector(".input").value = "";
  //Saving the list to local storage
  localStorage.setItem(`item${i}`, input);
  i += 1;
});

// localStorage.clear();

    //Removing a task from the lis
    console.log(window)
if(localStorage.length > 0){
    document.addEventListener("click", (e) => {
      e.preventDefault();

      // console.log(e.target);
      
      const img = e.target;
      const imgs = document.querySelectorAll(".show");
      // console.log(imgs);  
      const id = img.id;
      // console.log(id);
      const cl = imgs[id];
     
      if(cl.src.includes("unchecked")){
        cl.src = "./To-Do-Img/images/checked.png";
        localStorage.removeItem(`item${id}`);
        document.querySelector(`#item${id} p`).style.textDecoration = "line-through";
      }
      else{
        cl.src = "./To-Do-Img/images/unchecked.png";
        localStorage.setItem(`item${id}`, document.querySelector(`#item${id} p`).innerHTML);
      }
    });
  }
    // localStorage.clear();