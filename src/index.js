const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const Extra = require('telegraf/extra')
const bot = new Telegraf(env.token)
//const {teste} = require('./functions/index')


const infoKeyboardPt = Markup.keyboard([ 
    ['😺 Meu GitHub','💼 Meu Linkedin'],
    ['📱 Meu numero de telefone','✉️ Meu email']
]).resize().extra()
const infoKeyboardEn = Markup.keyboard([ 
    ['😺 My GitHub','💼 My Linkedin'],
    ['📱 My phone number','✉️ My email']
]).resize().extra()

const optionsKeyboardBr =  Markup.keyboard([
        ['Sim','não']
]).resize().extra()
const optionsKeyboardEn =  Markup.keyboard([
        ['Yes','No']
]).resize().extra()


const language = '';
bot.start(ctx => {
    ctx.reply("Escolha um idioma/Which a idiom:",
        Markup.keyboard(['🇧🇷 Português', '🇺🇸 English']).resize().oneTime().extra())
})

bot.hears('🇧🇷 Português', ctx => {
    const from = ctx.update.message.from
    language = 'BR';
    ctx.reply(`Seja bem vindo, ${from.first_name}!
              Eu sou o MathBot, bot desenvolvido pelo Matheus, Em que posso ajudar?`,infoKeyboardPt)         
})

bot.hears('🇺🇸 English', ctx => {
    const from = ctx.update.message.from
    ctx.reply(`Welcome, ${from.first_name}!
              I'm the MathBot, bot developed by Matheus, it will be a pleasure to help you`,infoKeyboardEn)
})

bot.hears('😺 Meu GitHub', ctx => {
    ctx.replyWithMarkdown('[Github](https://github.com/MatheusRodri)')
    ctx.reply("Posso te ajudar em algo a mais ?",optionsKeyboardBr)
})
bot.hears('😺 My GitHub',ctx => {
    ctx.replyWithMarkdown('[Github](https://github.com/MatheusRodri)')
    ctx.reply('Can I help you with something else?',optionsKeyboardEn)
})

bot.hears('💼 Meu Linkedin', ctx => {
    ctx.replyWithMarkdown('[Linkedin](https://www.linkedin.com/in/matheus-rodri/)')
    ctx.reply("Posso te ajudar em algo a mais ?",optionsKeyboardBr)
})
bot.hears('💼 My Linkedin',ctx => {
    ctx.replyWithMarkdown('[Linkedin](https://www.linkedin.com/in/matheus-rodri/)')
    ctx.reply('Can I help you with something else?',optionsKeyboardEn)
})

bot.hears('📱 Meu numero de telefone', ctx => {
    ctx.reply(env.myNumber)
    ctx.reply("Posso te ajudar em algo a mais ?",optionsKeyboardBr)
})
bot.hears('📱 My phone number',ctx => {
    ctx.reply(env.myNumber)
    ctx.reply('Can I help you with something else?',optionsKeyboardEn)
})

bot.hears('✉️ Meu email', ctx => {
    ctx.reply(env.myEmail)
    ctx.reply("Posso te ajudar em algo a mais ?",optionsKeyboardBr)
})
bot.hears('✉️ My email',ctx => {
    ctx.reply(env.myEmail)
    ctx.reply('Can I help you with something else?',optionsKeyboardEn)
})

bot.startPolling()