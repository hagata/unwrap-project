#Unwrap-project
A command line tool for saving and opening all the directories, files, urls, programs, and anything else you need open for any given project. Works well for just about any type of project from web dev, front-end, static sites, design projects, video projects, etc.

##installation
installation is easy with Node Package Manager (npm). If you don't already have npm installed, install it here; [installing npm](htpp://www.npm.org).

once npm is installed, run
`npm install unwrap-project`

---

##Creating the unwrap.json file
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
      ""
    ],
    "directories":[
      ""
    ],
    "commands":[
      "gulp sass",
      "gulp watch",
    ]
  }

```
- Urls: Can be any valid url. It will be launched in your default browser.
- Apps: applications can be any installed app in your application folder. Use the same name & spelling found in the application folder. *opened using open -a applicationName*
- Commands: commands can be any valid unix command



##commands
###list
`unwrap list` or `unwrap ls`

*Options*

`unwrap list --directories` or `-d`
Will list the project names with their coresponding root directories.


###add
`unwrap add` or `unwrap a`
To add a project to Unwrap, use the add command in the current/ root directory of your project; followed by a name for the project. By default, The current working directory will be saved as the root of the project (where the command is executed).
```
unwrap add ProjectName
```
####Specifying the directory: 
If you would like to use add while not in the root directory, you can supply a directory as a second argument after the project name. 
```
unwrap add ProjectName /Users/user-name/documents/project-root
```

###remove
`unwrap remove projectName` or `unwrap rm projectName`
To remove a project saved in Unwrap, simply use the remove command. *This cannot *

###open
`unwrap open projectName` or simply `unwrap projectName`
This is the default action for `unwrap`, meaning you don't need to use `open` if you pass in a valid project name afterwards. 

The open command will search the root directory of the project for the unwrap.json file. 

*Options*
`unwrap open -newwindow projectName` or `unwrap open -n projectName`
The -n | -newwindow option will unwrap the project and open a new terminal window at the project root directory.

`unwrap open -tab projectName` or `unwrap open -t projectName`
The -t | -tab option will unwrap the project and open a new terminal tab in the same Terminal window at the project root directory. 

###help
`unwrap --help` or `unwrap -h`

to get help for each command use the command, followed by ` -h`
```
unwrap open -h
```

