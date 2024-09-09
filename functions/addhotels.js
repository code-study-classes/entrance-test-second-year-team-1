import fs from 'node:fs';
import path from 'path';

const sethotel = (hotel, region) => { // region это каким-то образом и автор жанр и страницы по индексам
  const hotels = JSON.parse(fs.readFileSync(path.resolve("hotels.json"))); 

  let regionId;
  let regionName;
  let hotelsInRegion
  let est = 'none';
  let imm = 0

  for(let i = 0; i < hotels.length; i++) {
    if(Object.keys(hotels[i])[0] === region) {
        regionName = Object.keys(hotels[i])[0];
        regionId = i
        imm = 1
        hotelsInRegion = hotels[i][region]
        for(let j = 0; j < Object.keys(hotelsInRegion).length; j++) {
            if (hotel === Object.keys(hotelsInRegion)[j]) {
                console.log('takoe est')
                est === hotel
                break
            }

        }
        break;
    }
   }
   if (imm = 0) {
    // добавить новый регион и отель
   }



   if (est === 'none') {
    hotels[regionId][region][hotel] = {}   
   }

  // проверка
  if (!hotels.region) { // если отеля и региона не существует

  }

  

  hotels[index] = [hotel, region];
  if (region === 'delete') {
    hotels[index] = null;
  }
  const newhotel = JSON.stringify(hotels);
  fs.writeFileSync(path.resolve("hotels.json"), newhotel);

console.log(cityId);

  return true
}
export default sethotel