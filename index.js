#! /usr/bin/env node

var unwrap = require('commander');
var fs = require('fs');
var exec = require('child_process').exec;
var storage = require('./utils/storage');
var unwrapper = require('./utils/unwrapper');


unwrap //list
  .command('list')
  .alias('ls')
  .description('List all projects that are saved in Unwrap-Projects')
  .option('-d, --directories', 'show the root directories of each project in the list')
  .action(function(options) {
    if (options.directories){
      storage.list('dir');
      console.log('With Option Directories');
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
  .description('Removes a project from the unwrap list')
  .action(function(project) {
    storage.remove(project)
  })

unwrap //open //default command
  .command('* [name]')
  .alias('open')
  .description('Open a saved project by name')
  .action(function(name) {
    unwrapper.openProject(name);
  })
unwrap.parse(process.argv);