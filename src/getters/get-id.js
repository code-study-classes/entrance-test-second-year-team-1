import reader from '../file-reader.js'

const getID = (fPath) => {
    const id = reader(fPath).split('\n').length
    return id
}

export default getID