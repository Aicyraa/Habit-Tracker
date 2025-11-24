// apply, call, bind
import makeHabitInstance from "./habit.class.js";
import storage from "./storage.js";

export function ReattachListeners(func) {
   // func = storage.load
   return function () {
      let storage = [];
      let result = func.call(this); // returns raw data from locale storage
      
      for (let habitObj of result) {
         let habit = Object.values(habitObj); 
         storage.push(makeHabitInstance(...habit)); // re-build (markDone, clear)
      }

      return storage; // returns the object with the method
   };
}

export function autosave(func){
   return function(habit) {
      let data = storage.load()
      let newData = data.concat(habit)
      func.call(this, newData) 
   }
}