import {buildAndRun} from './src/build'
import {watch} from 'chokidar'

const configPath = './config/'
const watcher = watch('config')

buildAndRun(configPath)
// TODO: handle file creation
watcher.on('all', (eventName, path) => {
  if(eventName === 'add' || eventName === 'change'){
    console.log(`${eventName}: ${path}`);
    buildAndRun(configPath)
  }
})

console.log('watching config...');
