/*CMD
  command: /refss
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: π₯ Invitar
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
return
}
if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("TronUniverseV1Bot","131")
let TRX = 10*refcom.value()


let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{title:"βοΈ Share",url:"https://t.me/share/url?url="+bot}]]

Bot.sendMessage("*π₯ Refferrals System*" + "\n\n*1 Level:*" + "\n*π₯ LevelΒ°1 - 5%*")
Bot.sendMessage("*π¨βπ¨βπ¦βπ¦ Refferral direct bot url:* " +"["+bot+"]")
Bot.sendInlineKeyboard(key,"*π₯ Refferral Statistics*" + "\n\n*1Β° Level:* " +reflist.length+ " users" + "\n\n*π₯ Refferral Deposits:* "  + "\n" +TRX.toFixed(8) + " *TRX*" +
 "\n*βΎ Earnings:* " + "\n" +refcom.value().toFixed(8) + " *TRX*")
