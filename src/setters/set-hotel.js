import updater from "../file-updater.js";
import getId from '../getters/get-id.js'
import readlinkSync from 'readline-sync';
import reader from "../file-reader.js";
import setRegion from '../setters/set-regions.js'

const newHotel = readlinkSync.question('New hotel: ').toLowerCase().trim()
const id = getId('data/hotels.csv')
const newRegion = readlinkSync.question(`Hotel's region: `).toLowerCase().trim()
const pustota = []

const regions = reader('data/regions.csv').split('\n')
const regionId = regions.filter((string) => {
    const [id, name] = string.split(';')
    console.log(id, name)
    return name === newRegion ? true : false
})

if (regionId === pustota) {
    
}

// (string) => string.split(';').at(1) === newRegion

console.log(regionId)
updater('data/hotels.csv', `\n${id};${newHotel};${regionId}`)