/*CMD
  command: /bonOn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1498810624){
Bot.setProperty("BON" ,"✅ Turned On","string")
Bot.runCommand("/setbons")
}else{
return
}

