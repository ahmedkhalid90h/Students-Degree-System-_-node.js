// require module fs files
// const fs = require('fs')

// require module yargs
const yargs = require('yargs')

// require file students
const data = require('./students')

// start command

// add
// delet
// read
// list
// update

// add

yargs.command({
    command: 'add',
    describe: 'add student',
    builder:{
        name:{
            describe: 'this is name student describe in add ccommand',
            type: 'string',
            demandOption: true
        },
        id:{
            describe: 'this is id student describe in add ccommand',
            type: 'number',
            demandOption: true
        },
        degree:{
            describe: 'this is degree student describe in add ccommand',
            type: 'array',
            demandOption: true
        },
        comment:{
            describe : 'any comment student',
            type: 'string'
        }
    },
    handler: ()=>{
        data.addStudent(yargs.argv.name,yargs.argv.id,yargs.argv.degree)
    }
})

// delet
yargs.command({
    command: 'delet',
    describe: 'delet student',
    builder:{
        id:{
            describe: 'this is id student describe in add ccommand',
            type: 'number',
            demandOption: true
        }
    },
    handler: ()=>{
        data.deletStudent(yargs.argv.id)
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'read student',
    builder:{
        id:{
            describe: 'this is id student describe in add ccommand',
            type: 'number',
            demandOption: true
        }
    },
    handler: ()=>{
        data.readStudent(yargs.argv.id)
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'list student',
    handler: ()=>{
        data.listStudent(yargs.argv.id)
    }
})

// update
yargs.command({
    command: 'update',
    describe: 'update student',
    builder:{
        newName:{
            describe: 'this is name student describe in add ccommand',
            type: 'string',
            demandOption: true
        },
        id:{
            describe: 'this is id student describe in add ccommand',
            type: 'number',
            demandOption: true
        }
    },
    handler: ()=>{
        data.updateStudent(yargs.argv.id,yargs.argv.newName)
    }
})

yargs.parse()

// run add --> node js/app.js add --name="your frist name" --id=your id --degree=your degree
// run delet --> node js/app.js delet --id=your id 
// run read --> node js/app.js read --id=your id 
// run list --> node js/app.js list --id=your id 
// run update --> node js/app.js update --id=your id 