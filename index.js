#! /usr/bin/env node

var unwrap = require('commander');
var fs = require('fs');
var exec = require('child_process').exec;
var storage = require('./utils/storage');


unwrap
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


  unwrap
    .command('add <name> [directory]')
    .alias('a')
    .description('Adds a project to unwrap')
    .action(function(name, directory) {
      storage.add(name, directory)
    })

  unwrap.parse(process.argv);