const express = require('express')
const app = express()
const empleadoRuta = express.Router()

//declaramos un objeto del modelo
let empleados = require('../models/Empleado')
const Empleado = require('../models/Empleado')

//agregar un nuevo empleado
empleadoRuta.route('/create').post((req,res) => {

    Empleado.create(req.body)
    .then((data)=>{
        console.log('se inserto el documento')
        res.send(data)

    } ) 
    .catch((err) =>{
        console.log(err)
    })
})  

//obtener todos los empleados 
empleadoRuta.route('/empleados').get((req,res) => {
    Empleado.find()
    .then((data) =>{
     res.send(data)
    })
    .catch((err) =>{
     console.error(err)
    })
 })


//obtenemos un solo empleado por su ID
empleadoRuta.route('/empleados/:id').get((req,res) => {
   Empleado.findById(req.params.id)
   .then((data) =>{
    res.send(data)
   })
   .catch((err) =>{
    console.error(err)
   })
})

//actualizar un empleado
empleadoRuta.route('/empleados/:id').put((req,res) => {
    Empleado.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) =>{
     res.send(data)
    })
    .catch((err) =>{
     console.error(err)
    })
 })



//elimninar empleado
empleadoRuta.route('/delete/id:').delete((req,res) =>{
    Empleado.findByIdAndRemove(req.params.id)
    .then((data) =>{
        console.log('sse elimino el documento')
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = empleadoRuta;

