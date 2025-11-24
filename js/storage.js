
const storage = {
   key: "habit__storage__engine",
   load() {
      try {
         const rawdata = localStorage.getItem(this.key);
         return rawdata ? JSON.parse(rawdata) : [];
      } catch (e) {
         console.log("Error while loading data! " + e);
         return [];
      }
   },

   save(list) {
      try {
         localStorage.setItem(this.key, JSON.stringify(list));
      } catch (e) {
         console.log("Error while loading saving data! " + e);
      }
   },

   clear() {
      localStorage.removeItem(this.key);
   },
};

export default storage;
