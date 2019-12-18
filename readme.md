# Notebite

A command line tool to structure and access your knownledge bits in the form of notes.

## Installation

```javascript
    npm install notebite -g
```

## Mental Model

Files are represented by :[filename]\
Folders are represented by [foldername]\

You show the relationship between folders by separating them with a period [.]
[parentFolder].[childFolder]\

With these building blocks, you can target any location. Takes this folder structure\

-- music\
---- genre\
------ pop\
-------- bestOf2018.txt\

Locate the pop folder\
music.genre.pop\

Locate the bestOf2018.txt\
music.gener.pop:bestOf2018.txt\
#### The colon is used because bestOf2018.txt is a file

## CLI

### Create a folder
notes folder [folderLocator]

### Create a file
notes file [fileLocator]

### List Content
notes list [folderLocator]

### Open File
notes open [fileLocator]


## Author
[Wisdom Ogwu (iammadab)](https://twitter.com/iammadab)