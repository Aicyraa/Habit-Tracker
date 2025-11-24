export default function makeHabitInstance(habitID, habitName, streak = 0, lastDone = null) {
   
   let history = [];
   streak = streak;
   lastDone = lastDone;

   function record() {
      const now = new Date().toISOString();
      history.push(now);
      lastDone = now;
   }

   return {
      // no setter for streak and lastDone
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
      },

      clear() {
         streak = 0;
         history = [];
         lastDone = null;
      },
   };
}
