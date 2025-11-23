export default function makeHabitInstance(habitName, habitID) {
   let history, lastDone, id, streak;
   streak = 0;
   history = [];
   lastDone = null;

   function record() {
      const now = new Date().toISOString();
      history.push(now);
      lastDone = now;
   }

   return {
      id: habitID,

      get name() {
         return habitName;
      },

      get streak() {
         return streak;
      },

      get lastDone() {
         return lastDone;
      },

      markDone() {
         streak++;
         record();
         console.log(this.name);
         console.log(streak, lastDone);
      },

      clear() {
         streak = 0;
         history = [];
         lastDone = null;
      },
   };
}
