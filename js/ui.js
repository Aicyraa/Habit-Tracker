import { update } from "./utils.js";

export function renderHabits(list) {
   let habitContainer = document.querySelector(".habit__storage");
   habitContainer.innerHTML = "";
   list.forEach((habit) => {
      let div = document.createElement("div");
      div.setAttribute("class", `habit habitNo-${habit.id}`);
      div.innerHTML = `
            <div class="habit__details">
               <span> ${habit.name} </span>
               <h5>Streak: <span id="count"> ${habit.streak}</span></h5>
            </div>
            <div class="habit__btns habitBtnsID-${habit.id}">
               <button class="habit__done">Mark Done</button>
               <button class="habit__reset">Reset</button>
               <span id="habit__last"> ${
                  habit.lastDone
                     ? new Date(habit.lastDone).toLocaleString()
                     : "never"
               }</span>
            </div>
         `;
      habitContainer.append(div);
      attachListeners(habit);
   });
}

export function attachListeners(habit) {
   let btnParent = document.querySelector(`.habitBtnsID-${habit.id}`);

   for (let element of btnParent.children) {
      if (element.tagName === "DIV") continue;
      if (element.classList.contains("habit__done")) {
         element.addEventListener("click", (e) => {
            habit.markDone();
            console.log(habit);
            update(habit)            
         });
      } else {
         element.addEventListener("click", (e) => {
            habit.clear();
         });
      }
   }
}
