const env = require('../../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)


const teste = (language) =>{
    if(language === 'pt-br'){
        return 'Olá'
    }
    else{
        return 'Hello'
    }
}

module.exports = {
    teste
}

