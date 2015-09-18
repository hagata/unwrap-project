
# Unwrap-project
A command line tool for saving and opening all the directories, files, urls, programs, and anything else you need open for any given project. Works well for just about any type of project from web dev, front-end, static sites, design projects, video projects, etc.

---

## Installation
installation is easy with Node Package Manager (npm). If you don't already have Node, [Download & install Node.js](https://nodejs.org/en/).


once Node is installed, run
`npm install -g unwrap-project`

---
# Getting Started
- Install it
- check that unwrap works with `unwrap list`
- add your first project
- cd to the project foler, or drag and drop the folder onto the Terminal icon
- `unwrap add [projectName]` where project name is any name you want (no spaces though)
- `unwrap open [projectName]` By default, opening your project will open the project root directory in finder
- edit the unwrap.json file

---
## Creating the unwrap.json file
Each project in Unwrap will need to have an unwrap.json file containing the information of what should be opened when executing `unwrap open projectName`

The unwrap.json file must be in the root directory of the project (the same one defined when adding the project)

The unwrap.json file may contain urls, programs, and terminal commands as follows:
```json
  {
    "urls":[
      "http://google.com",
      "http://github.com",
      "localhost:3000"
    ],
    "apps":[
      "SourceTree",
      "Safari"
    ],
    "files":[
      "wireframe.ai"
    ],
    "folders":[
      ".",
      "assets"
    ],
    "commands":[
      "gulp sass",
      "gulp watch",
    ]
  }

```
- Urls: Can be any valid url. It will be launched in your default browser.
- Apps: applications can be any installed app in your application folder. Use the same name & spelling found in the application folder. *opened using open -a applicationName*
- Commands: commands can be any valid unix command.
- Files: files are referenced from the root directory and opened with their default app. 
- Folders: any directory listed in folders will open a Finder window at that location.


## Commands
### list
`unwrap list` or `unwrap ls`

*Options*

- `unwrap list --directories` or `-d`

  Will list the project names with their coresponding root directories.


### add
- `unwrap add` or `unwrap a`

To add a project to Unwrap, use the add command in the current/ root directory of your project; followed by a name for the project. By default, The current working directory will be saved as the root of the project (where the command is executed).
```
unwrap add ProjectName
```

#### Specifying the directory: 
If you would like to use add while not in the root directory, you can supply a directory as a second argument after the project name. 
```
unwrap add ProjectName /Users/user-name/documents/project-root
```

### remove
`unwrap remove projectName` or `unwrap rm projectName`

To remove a project saved in Unwrap, simply use the remove command. By Default, removing a project does not remove the unwrap.json file from the project root.

*Options*

- `unwrap remove --clean projectName` or `unwram rm -c projectName`
    Using the `--clean` or `-c` option on remove will remove the unwrap.json file if one exists in the project root directory

### open
`unwrap open projectName` or simply `unwrap projectName`

This is the default action for `unwrap`, meaning you don't need to use `open` if you pass in a valid project name afterwards. 

The open command will search the root directory of the project for the unwrap.json file. 

*Options*

- `unwrap open -newwindow projectName` or `unwrap open -n projectName`

  The -n | -newwindow option will unwrap the project and open a new terminal window at the project root directory.

- `unwrap open -tab projectName` or `unwrap open -t projectName`

  The -t | -tab option will unwrap the project and open a new terminal tab in the same Terminal window at the project root directory. 

## cd
`unwrap cd projectName`

Use `unwrap cd` to open a new terminal window at the root directory of a saved project. Useful when you just need to cd to the project but don't want to open everything along with it. 


### help
`unwrap --help` or `unwrap -h`

to get help for each command use the command, followed by ` -h`
```
unwrap open -h
```


## ROAD MAP
`unwrap add projectName -description "THis is a project about…"` Add descriptions to projects to be shown on unwrap list

`unwrap remove --all` Remove all projects 

colors - Add descriptive colors to the terminal output

Windows compatibility - rewrite/ remove -t|--tab option for open 