import {buildAndRun} from './src/build'
import {watch} from 'chokidar'

const configPath = './config/'
const watcher = watch('config')

buildAndRun(configPath)
watcher.on('change', path => {
    console.log(`changed: ${path}`)
    buildAndRun(configPath)
})

console.log('watching config...');
