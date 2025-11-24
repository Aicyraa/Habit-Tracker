import storage from "./storage.js";
import { renderHabits } from "./ui.js";

export function setID() {
   let key, rawID, currentID, oldID, newID;
   key = "habit__engine__ID";
   rawID = localStorage.getItem(key);
   currentID = rawID ? JSON.parse(rawID) : 1;
   [oldID, newID] = [currentID, ++currentID];
   localStorage.setItem(key, newID);
   return oldID;
}

export function update(habit) {
   let data = storage.load();
   let updatedData = data.map(h => {
      if (habit.id == h.id){
         return habit
      }
      return h
   })

   storage.save(updatedData, true)
   renderHabits(storage.load())
}


