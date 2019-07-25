const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] 💎 Çakırbeyli Ailesinin Botu Kullanıma Hazır !`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame("+yardım | 💎Çakırbeyli Ailesi. Made By Professor ", "https://twitch.tv/shazem3333");
}