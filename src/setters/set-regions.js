import updater from "../file-updater.js";
import getId from '../getters/get-id.js'
import readlinkSync from 'readline-sync';

const setRegion = () => {
    const newRegion = readlinkSync.question('New region: ').toLocaleLowerCase().trim()
    const id = getId('data/regions.csv')

    updater('data/regions.csv', `\n${id};${newRegion}`)
}

export default setRegion