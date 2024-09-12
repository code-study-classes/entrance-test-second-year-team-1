import fs from 'fs'
import getPath from './get-path.js';
// import readlinkSync from 'readline-sync';
// import reader from './file-reader.js'

const updater = (fPath, pattern) => {
    const filePath = getPath(fPath)
    fs.appendFileSync(filePath, pattern, 'utf-8')
    return true
}

export default updater


// const filePath = getPath('data/regions.csv')
// const newData = readlinkSync.question('new region: ')
// const actualData = reader('data/regions.csv')
// const newId = actualData.split('\n').length

// fs.appendFileSync(filePath, `\n${newId};${newData}`, 'utf-8')