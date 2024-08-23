//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://tempmail1829:7W1Ji1KDtd5W5pdE@cluster0.w9oryfw.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "94759549725,255764182801,255776663848,255752593977";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lONlFzWjJpaTZhU0N3ZUlVVTFhWDB4ek9WblV4VXJQaFBPL1YyL0dYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU5Za3YveWx0V1pWaTVWU1c4ajR2NU1FKzdwQktoSUxINDFlZ1JpcHpXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRzMvZGJCK3hnT2RiWkk0RzQ3VzF2TzdaSTdlN3FBSnoya2FPbnJYam1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZmU3Wm00em5hR25PUEgyY1ROWTN4RXdrRTloTUFCSkp4TVNjaGJlU0FBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNVkFsRFBtR2NJRFJSYTBLdnd5N3ZjNlUxSitDTjRXQjJMaWkwTXdNMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJWclZIaUx5bDVhVXloQUxEMFRCYTQ0eGdDTzlKdXM4Q0pkaTNKeFh5bDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUthYnZueldyaE9aQ2taazA4cVJ4ankwOVNadWUyWDVlOFNPVFJiNVYzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEhRWWZVanhpRzBSdndLekh3RDN4VVdaR2hvVEhRTUpZQnhpdlFWZnZ6RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQbWFlQkRaeWM0eUdobmN2Z1R4NGl2VVF3K3REc29LbkRacnJBL1dsTWVoZmgwR3N1TE1objgyMC9MUXl6dWRKRFJ1ZkhRaVZJUEVGNWhvdlgrNmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiIrcFQrLzZnMWRKbUt0dExnbWxGbEVqOFVsVE0yTEduMkRhM1BlZGtiVkVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFSzlqMHE2SlJfU2QweU94ZkRfTF9RIiwicGhvbmVJZCI6ImFhMDAxYjlmLTdmOGUtNDk1Yi1iODA1LTY0YzllY2Y2YzU0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSEZ0QWxNcDdha0t6a3BxWDZHRDJ3Y1VaNzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkVsTW5GaDhram95WUdNd2VJajgrL1F4bGgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVDOFFCM1RKIiwibWUiOnsiaWQiOiI5NDc1OTU0OTcyNTo4MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtLXhtYDLoiAg8J2ZvPCdmbQgIPCdkJLwnZCH8J2QgPCdkI0g8J2QjPCdkI7wnZCD8J2QsyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTy9WeElFSEVMdTNvcllHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXVLTkt5YldTMmg2OWZVR0pkRzdFU0JMSUc0a1I4WXExVDRnV05nbEpGOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTzZLQXJvRjhEY3JDSFFwOXdJMm8vNk0vM0dMZVFYZlk0N2dhNzY3VTcvVXgzZjhhNERHdVYrYjJHMUx3eGxkdm5qL2pPMTJLNUlMMWpLdXRxbnB1Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6InBTbTkzSm93V1NnNXRTeURQbTBGdjBjOEc5OHZ4Q1JTT1Q5UEtnbGV0SmNyMUhVaGprZ1ErNVAwcVNDSEdFeWkrSGowYndsMm1sbVRzSW1aZXR6cWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTk1NDk3MjU6ODJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUxpalNzbTFrdG9ldlgxQmlYUnV4RWdTeUJ1SkVmR0t0VStJRmpZSlNSZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDQyMzExMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMN20ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
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
