export function setID() {
   let key, rawID, currentID, oldID, newID;
   key = "habit__engine__ID"
   rawID = localStorage.getItem(key);
   currentID = rawID ? JSON.parse(rawID) : 1;
   [oldID, newID] = [currentID, ++currentID]
   localStorage.setItem(key, newID)
   return oldID
}

