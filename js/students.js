// require module fs files
const fs = require('fs')

// creat file student

const dataStudent = ()=>{
    try {
        const data = fs.readFileSync('dataStudent.json').toString()
        // toString()  json to string
        return JSON.parse(data)
        // parse() string to json
    } catch (err) {
        return []
    }
}

// save data
const saveDataStudent = (data)=>{
    const saveData = JSON.stringify(data)
    fs.writeFileSync('dataStudent.json',saveData)
}

// add student
const addStudent = (name,id,deg,comment)=>{
    const data = dataStudent()
    // data --> file data
    const duplicateId = data.filter((el)=>{
        return el.id === id || el.name === name
})
    // console.log(duplicateId)
    if (duplicateId.length == 0) {
        total = 0
        deg.forEach(el => {
            return total += el
        })
        // console.log(total)
        data.push({
            name,
            id,
            deg,
            comment,
            total
        })
        console.log(data);
        saveDataStudent(data)
    } else {
        return console.log(' sorry this id or name in existing ');
    }
}

const deletStudent = (id) =>{
    const data = dataStudent()
    const studentDelet = data.filter((el)=>{
        return el.id !== id
    })
    if (studentDelet.length !== data.length) {
        saveDataStudent(studentDelet)
        console.log('deleted')
    } else {
        console.log('not found')
    }
}

const readStudent = (id)=>{
    const data = dataStudent()
    const studentData = data.find((el)=>{
        return el.id === id
    })
    if (studentData) {
        console.log(studentData)
        // saveDataStudent(data)  i do'n need save data fun because this line add step in my app
    } else {
        console.log(`sorry this ${id} is not found`)
    }
}

const listStudent = (id)=>{
    const data = dataStudent()
    data.forEach(el => {
        console.log(el)
    })
}

const updateStudent = (id,newName)=>{
    const data = dataStudent()
    const index = data.findIndex((el)=>{
        return el.id === id
    })
    console.log(index)
    data[index].name = newName
    console.log(data)
    saveDataStudent(data)
}

module.exports = {
    addStudent,
    deletStudent,
    readStudent,
    listStudent,
    updateStudent
}