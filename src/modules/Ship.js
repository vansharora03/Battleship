/**
 * Create a Ship object from length
 * @param {number} length 
 */
const Ship = function(length=null) {
   let hits = 0;

   /**
    * Hit the ship if it has not been sunk
    */  
   const hit = function() {
    if(!this.isSunk()) {
        this.hits++;
    }
   }

   /**
    * Determine if the ship has sunk
    * @returns boolean
    */
    const isSunk = function() {
        return this.hits >= this.length;
    }

    return{length, hits, hit, isSunk}
}

export default Ship;