/*CMD
  command: π’
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                                 
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("refcom");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendKeyboard("π¦ Inversiones,β Retiros,\nπ«Exit","*π€ Saldo de la cuenta:*\n\n*π³ Saldo Depositado: * \n" +deposit.value().toFixed(8) + " USD\n\n*π₯ Ganancias Referidos:*\n" +refcom.value().toFixed(8) +" USD")

}
