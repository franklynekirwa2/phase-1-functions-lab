 function distanceFromHqInBlocks(pickup_location){
   const headquarters=42;
  const distance=Math.abs(pickup_location - headquarters);
    return distance;
 }

 function distanceFromHqInFeet(pickup_location){
    const block_feet = 264;
    const blocksaway = distanceFromHqInBlocks(pickup_location);
    const feetaway = blocksaway * block_feet;
    return feetaway;
}
function distanceTravelledInFeet(start_block, end_block){

   let blocks_travelled = Math.abs(end_block - start_block);
    let feet_travelled = blocks_travelled * 264;
    return feet_travelled;
}

function calculatesFarePrice(start_block, end_block){
    const feet_travelled = distanceTravelledInFeet(start_block, end_block);

    if (feet_travelled <= 400) {
        return 0;
    } else if (feet_travelled > 400 && feet_travelled <= 2000) {
        const fare = (feet_travelled - 400) * 0.02;
        return fare;
    } else if (feet_travelled > 2000 && feet_travelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}



