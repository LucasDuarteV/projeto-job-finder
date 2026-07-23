const express = require('express')
const router = express.Router()
const Job = require('../models/job')

router.get('/test' , (req,res) =>{
    res.send('Deu certo!')
})

router.post('/add' , (req , res) =>{
    let {title, salary, company, description, email, new_job} = req.body

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(erro => console.log(erro))
})

module.exports = router