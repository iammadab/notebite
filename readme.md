# Notebite

A command line tool to structure and access your knownledge bits in the form of notes.

## Installation

```javascript
    npm install notebite -g
```

## Mental Model

Files are represented by :[filename]<br>
Folders are represented by [foldername]<br>

You show the relationship between folders by separating them with a period [.]
[parentFolder].[childFolder]<br>

With these building blocks, you can target any location. Takes this folder structure<br>

-- music<br>
---- genre<br>
------ pop<br>
-------- bestOf2018.txt<br>

Locate the pop folder<br>
music.genre.pop<br>

Locate the bestOf2018.txt<br>
music.gener.pop:bestOf2018.txt<br>
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