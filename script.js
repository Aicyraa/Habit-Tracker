import makeHabitInstance from "./js/habit.class.js";
import storage from "./js/storage.js";
import { setID } from "./js/utils.js";
import { renderHabits } from "./js/ui.js";
import { ReattachListeners, autosave} from "./js/decorators.js";

(function init() {
   storage.save = autosave(storage.save)
   storage.load = ReattachListeners(storage.load);
   renderHabits(storage.load());
})();


document.getElementById("add__habit").addEventListener("click", (e) => {

   let data, habit 
   data = document.getElementById("new__habit");
   habit = makeHabitInstance(setID(), data.value);
   storage.save(habit)
   renderHabits(storage.load())

});


