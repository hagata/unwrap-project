#! /usr/bin/env node

var unwrap = require('commander');
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');
var utils = require('./utils/utils');


// Check for persist
var pPath = path.join(path.dirname(fs.realpathSync(__filename)), './utils/persist.json')
var pExists = utils.fileExistsCheck(pPath);
if (!pExists){
  utils.createPersistFile();
  console.log('Persist was missing. Creating persist.storage at %s'.red, pPath);
  return;
}


var storage = require('./utils/storage');
var unwrapper = require('./utils/unwrapper');

unwrap
  .version('0.5.0');


unwrap //list
  .command('list')
  .alias('ls')
  .description('List all projects that are saved in Unwrap-Projects')
  .option('-d, --directories', 'show the root directories of each project in the list')
  .action(function(options) {
    if (options.directories){
      storage.list('dir');
    }else {
      storage.list();
    }
  })

unwrap //add
  .command('add <name> [directory]')
  .alias('a')
  .description('Adds a project to unwrap')
  .action(function(name, directory) {
    storage.add(name, directory)
  })

unwrap //remove
  .command('remove <project>')
  .alias('rm')
  .option('-c, --clean', 'removes the project, and the unwrap.json file from the project root')
  .description('Removes a project from the unwrap list')
  .action(function(project, options) {
    storage.remove(project, options)
  })

unwrap //open //default command
  .command('* [name]')
  .alias('open')
  .option('-n, --newwindow', 'Open a new Terminal window at the project Root directory' )
  .option('-t, --tab', 'Open a new Terminal tab at the project Root directory' )
  .description('Open a saved project by name')
  .action(function(name, options) {
    unwrapper.openProject(name, options);
  })

unwrap //change directory
  .command('cd <project>')
  .description('changes the current working directory to the root of a saved project.')
  .action(function(project) {
    storage.changeDirectory(project)
  })
unwrap.parse(process.argv);