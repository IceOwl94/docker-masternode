import {build} from './src/build'
import {watch} from 'chokidar'

const configPath = './config/'
const watcher = watch('config')

build(configPath)
watcher.on('change', path => {
    console.log(`changed: ${path}`)
    build(configPath)
})

console.log('watching config...');
