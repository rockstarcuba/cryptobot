/*CMD
  command: /reinvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                     
var balance = Libs.ResourcesLib.userRes("balance")
var deposit = Libs.ResourcesLib.userRes("deposit")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let reinvest = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
var history = User.getProperty("historyr");
let ID = "@TronUniverseV1Payments"
let amountt = message*1.2
let f = message*2
var info =
  "["+user.first_name
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*๐ Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}
if(message < 1){
Bot.sendMessage("*โ Minimum amount to Reinvest 1 TRX*")
}else{
if(message > balance.value()){
Bot.sendMessage("*๐ซ Amount is bigger than your balance*")
}else{
if (message>= 1 && message <=999){
User.setProperty("minertr",message,"text");
Bot.run({
command : "/accTRXF",
run_after : 1*60*60*24,
options: { amount: message }
});
balance.add(-message)
deposit.add(message*1)
reinvest.add(+message)
let amount = message
Api.sendMessage ({chat_id: ID, text: "*๐ New Reinvest Active ๐*\n *" +user.first_name+ "*  just Reinvested " +amount+ " TRX " + " ~ " +x.toFixed(2) + "$" + "\n\n*๐Transaction Hash:* " + " *Account Balance* "+ "\n*โฐ Update Time:* `" +time+ "`\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
Bot.sendMessage ("*โ New ReInvestment Started in Bot* " + "\n\n๐ Total Investment Duration: 1 Days" + ", for a daily 120%" + "\n\n_๐ Get paid on Every Day_" + "\n\n*โฑ Payment* 120% every 24 hours" + "\n\n*๐ด Invested Amount:* " +amount+  " *TRX*" + "\n\n*๐งฎ Expected Return:* " + amountt + " *TRX*");
}
}
if (message>= 1000 && message <=29999){
User.setProperty("minertr2",message,"text");
Bot.run({
command : "/accTRXF2",
run_after : 1*60*60*24,
options: { amount: message }
});
balance.add(-message)
deposit.add(message*1)
reinvest.add(+message)
let amount = message
Api.sendMessage ({chat_id: ID, text: "*๐ New Reinvest Active ๐*\n *" +user.first_name+ "*  just Reinvested " +amount+ " TRX " + " ~ " +x.toFixed(2) + "$" + "\n\n*๐Transaction Hash:* " + " *Account Balance* "+ "\n*โฐ Update Time:* `" +time+ "`\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
Bot.sendMessage ("*โ New ReInvestment Started in Bot* " + "\n\n๐ Total Investment Duration: 1 Days" + ", for a daily 200%" + "\n\n_๐ Get paid on Every Day_" + "\n\n*โฑ Payment* 200% every 24 hours" + "\n\n*๐ด Invested Amount:* " +amount+  " *TRX*" + "\n\n*๐งฎ Expected Return:* " + f + " *TRX*");
}
}

