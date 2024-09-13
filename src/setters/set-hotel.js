import updater from "../file-updater.js";
import getId from '../getters/get-id.js'
import readlineSync from 'readline-sync';
import reader from "../file-reader.js";
import setRegion from '../setters/set-regions.js'

const setHotel = () => {
    const newHotel = readlineSync.question('New hotel: ').toLowerCase().trim()
    const id = getId('data/hotels.csv')
    const newRegion = readlineSync.question(`Hotel's region: `).toLowerCase().trim()
    const regions = reader('data/regions.csv').split('\n')
    const regionId = regions.filter((string) => {
        const [, name] = string.split(';')
        return name === newRegion ? true : false
    })

    let regId;

    if (regionId[0] === undefined) {
        console.log('ты ввёл какойто CrIngE')
        const markToAdd = readlineSync.question('хочешь добавить новый регион? [y/n]: ').toLowerCase().trim()
        if (markToAdd === 'y') {
            regId = setRegion(newRegion)
        } else {
            return false
        }
        
    } else {
        regId = regionId.at(0).split(';').at(0)
    }

    updater('data/hotels.csv', `\n${id};${newHotel};${regId}`)
    return true
}

setHotel()

export default setHotel