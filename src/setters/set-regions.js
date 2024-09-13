import updater from "../file-updater.js";
import getId from '../getters/get-id.js'
import readlinkSync from 'readline-sync';

const setRegion = (name = '') => {
    let newRegion;
    if (name === '') {
        newRegion = readlinkSync.question('New region: ').toLocaleLowerCase().trim()
    } else {
        newRegion = name
    }
    const id = getId('data/regions.csv')
    updater('data/regions.csv', `\n${id};${newRegion}`)
    return id
}

export default setRegion