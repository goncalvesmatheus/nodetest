const { Stats } = require('fs')
const os = require('os')
const log = require('./logger')


setInterval(() => {
    const { freemen } = os
    const totalmen = os
    
    
    const total = parseInt(totalmen / 1024 / 1024)
    const mem = parseInt(freemen / 1024 / 1024)
    
    console.log(mem, total)
    
    log(`${JSON.stringify(Stats)}\n`)



}, 1000)