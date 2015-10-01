#! /usr/bin/env node

var utils = require('./utils/utils');
var unwrap = require('commander');
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');
var colors = require('colors');
var sync = require('fs-sync');


// Check for persist
var pPath = path.join(path.dirname(fs.realpathSync(__filename)), './utils/persist.json')
var parentPath = path.join(path.dirname(fs.realpathSync(__filename)), '../unwrap-storage/persist.json')

if( sync.exists(parentPath) ){
  var storage = require('./utils/storage');
  var unwrapper = require('./utils/unwrapper');
}else{

  console.log('Persist Storage was missing.'.red + '\nCreating persist.storage at %s'.green, parentPath );
  utils.createPersistFile();
}



unwrap
  .version('0.12.1');


unwrap //list
  .command('list')
  .alias('ls')
  .description('List all projects that are saved in Unwrap-Projects')
  .option('-d, --directories', 'show the root directories of each project in the list')
  .option('-i, --info', 'show the project description if one is listed')
  .action(function(options) {
    if (options){ 
      storage.list(options);
    } else {
      storage.list();
    }
  })

unwrap //add
  .command('add <name> [directory]')
  .alias('a')
  .option('-i, --info [info]', 'Add a description for the project, what project is it?')
  .description('Adds a project to unwrap')
  .action(function(name, directory, options) {
    console.log('This desc. %s', options);
    storage.add(name, directory, options)
  })

  unwrap // describe -- add a project description 
  .command('info <project> <description>')
  .alias('i')
  .description('Allows you to add a project description to an already existing project.')
  .action( function(project, description) {
    storage.projectDescription(project, description)
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