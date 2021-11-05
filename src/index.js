const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const {teste} = require('./functions/index')


const tecladoCarne = Markup.keyboard([ 
    ['🐷 Porco', '🐮 Vaca', '🐑 Carneiro'],
    ['🐔 Galinha', '🐣 Eu como é ovo'],
    ['🐟 Peixe', '🐙 Frutos do mar'],
    ['🍄 Eu sou vegetariano']
]).resize().extra()

bot.start(ctx => {
    ctx.reply("Escolha um idioma/Which a idiom:",
        Markup.keyboard(['🇧🇷 Português', '🇺🇸 English']).resize().oneTime().extra())
})

bot.hears('🇧🇷 Português', ctx => {
    const from = ctx.update.message.from
    ctx.reply(`Seja bem vindo, ${from.first_name}!
              Eu sou o MathBot, bot desenvolvido pelo Matheus, será um prazer em te ajudar`)
    ctx.reply(teste("pt-br"))    
})


bot.hears('🇺🇸 English', ctx => {
    const from = ctx.update.message.from
    ctx.reply(`Welcome, ${from.first_name}!
              I'm the MathBot, bot developed by Matheus, it will be a pleasure to help you`)
})

bot.startPolling()