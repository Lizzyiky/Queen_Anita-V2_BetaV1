//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";2349078532947
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxrYUptYVM4c0pGZG5wYUE5a1ZCWHEzbEY0Ti9CTGh4c042L3ZLWjlHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHdyeStuV2pvTFhXczVKTmNZOW8xQUpOMFZzOTh1aHZjaEpyQ1QvTUhVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQW1LTVZmbkprTnlNZXdiNTVZVHROOXpTR2E3MzVwUzhZUGpUK2xVMWwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRM01rT3Zna3hBZU9hWVd0QmZSL2p3SkpSUzBoYzQxbFdGK3Z1Zy9ibUg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEZ3p3K3lFRy9TdUpuRU9vZ0NSb2pxeTFEUDdOV0J3Z1RrR0lPU0V1R2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPL3E1VnlvcVJvMW1IYm5OT280dGtlaDJQZHFsRTRwSGxKc0plUFdNaG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JqRHRaa3JFbE51dFk1ZjczOUpBbkhpQkhpS2ZZRGs4emRXc0p4aGZHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTVJTmI4VDJPZC8vY2xjOFlOLy91TC93d2FnbVhEQU9WZVRjYm82elN4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKZlhYNXFCSmtmdmIzTnBlT0FUaDIvQ25JQVhIM1RHSmFrVkZIdlJwRXUyMEEySVUzOStjbVcyWTkyNHdTZjNESDc2RFNpN2ZmK3hLbVhWd2lKdGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6InFRUlVOczhTVldsRThQZnIyWXE5dmRpalB6VVZXQ08yT3llTUR4Wmp5dk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZfMko1U1JHUzItcjFPNmdZOTM0X2ciLCJwaG9uZUlkIjoiMWQxYmVhMjQtOGUyMS00MTkwLWFlOGYtYzI0NGJkZWNjMDEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhvS21vM1FYakowdTdFWlFJWEFMRjJrTnl1WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTjlIYW1rNWJ1eDlrc0FqdExMN3VySitMWjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUpaWlM4SzYiLCJtZSI6eyJpZCI6IjIzNDkwNzg1MzI5NDc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCdXNpbmVzcyBDb2FjaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JBd1BrQkVNS3hoTFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVpXMVNyWE90dGxXVFFjL0RuYmd6RU9EUVhQeHhubU5JcGl5Rm1qTzJrRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNGxTSjM2Q3JDSFlpTGR6Zmx6a1l2SVJ6cU12YVRzNnA1TUswL2F6cEhqVVBLOUt1VWR5TUJEVFUxc0MrVWcvNDc3OThRcUdBSDRTMnhCK3NQTmRuQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJZQ3VFSUl3b21uMDA3ZnhhbDc1OEEyM0h6dG8wRFJFUThHaU9qT0l0M3QwVmpNbTZ4c2RseUJweHhFejg1WGVRVUd2MVRScG94Tm4xVGtLZkhKMGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3ODUzMjk0NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlltVnRVcTF6cmJaVmswSFB3NTI0TXhEZzBGejhjWjVqU0tZc2hab3p0cEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM5MzA4MzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHJRIn0=
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
