const express = require('express')
const empleadoRuta = express.Router()

// declaramos un objeto de nuestro modelo
let Empleado = require('../models/Empleado')

//Método para agregar un nuevo empleado

empleadoRuta.route('/create').post((req,res)=>{
    Empleado.create(req.body)
    .then((data) => {
        console.log('Se insertó un nuevo documento')
        res.send(data)

    })
    .catch((err) =>{
        console.error(err)
    })
})

//obtenemos todos los empleados

empleadoRuta.route('/empleados').get((req,res) => {
    Empleado.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.log.error(err)
    })
})

//Obtener un solo empleado por su Id

empleadoRuta.route('/empleado/:id').get((req,res) =>{
    Empleado.findById(req.params.id)
    .then((data) =>{
        res.send(data)
    })
    .catch((err) =>{
        console.error(err)
    })
})

//Actualizar un empleado
empleadoRuta.route('/update/:id').put((req,res) =>{
    Empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) =>{
        res.send(data)
    })
    .catch((err) =>{
        console.error(err)
    })
})

//Eliminar un empleado
empleadoRuta.route('/delete/:id').delete((req,res) =>{
    Empleado.findByIdAndRemove(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) =>{
        console.error(err)
    })
})

module.exports = empleadoRuta;