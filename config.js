//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "918133098693";
global.owner = process.env.OWNER_NUMBER || "919395599794";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9f5bf0ce707f2a8c100bc.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "918133098693";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "918133098693";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUl6ZXhhVGtDalZnVk1yS1kvZ2VLbzB2bUdrZEhWUVV6TGJwVG9QeHNsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjBSSUU1ZXdqV1JrYk5odGtEUGVNQ0toaE9DMFcrUkwvUVFMdlA3d1dTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ0NMUWdXdmlhZlZSc0pucEREQUZpQzZPTGFNSVMxNDRaT085ZFR4Mkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWjlOYUluMWhkMVdFUGJuTFhYNTRPZEUxRTZxYVBBemhHSlB2Sm5OeUdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLT1pEQml3cTBEeXVLazVWa2VFU2k0akUrNEJLcmx2aUlKeDA3eGlRWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx3bStzc2JwbC9JQmU3THB2Q1l1dTUwejBEU291czB2eUlZZGUyK1RQalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0d0RDVkQzJvVXBnQTdQZ1NQME1taVE3VGtyckdVRGxESC9MSkVzYXRuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXFFVEdpLzk4dDlwTXEzdzhOaDVpQnF1QWJ1bzVtdG8va2dUSm1iRXZoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhIcWFNREZ0T01oRVlVdmtJdmlNV2dOODNYYVQ4cHFidktkc2tXOGxya3o5V2Vhc1J6QTYwYWhUOUluYTRUbVZoREZGb2hWcWcxQnA3SFAxejdoUWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJucWZsQzRic2RRWVMxOUQrWTBtZFZ3NXNDNXNkSng2NnpHK1hucG4vMW84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5MFBER2NnVFF5cTV0dWl0XzF4ZjdBIiwicGhvbmVJZCI6IjdiNGJlNDM1LTQ1YjAtNDExYy04MjY2LTc5MTg5OGU4ZWYzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQVEE1NXJGTEdjWTc3RzlnYTVoVzJLeGhyL2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm1qVFdwUWpxR2NaSWUxVjJTcnVxeDJoQk00PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5QN0JCV1lDIiwibWUiOnsiaWQiOiI5MTkzOTU1OTk3OTQ6NzJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ092ZTFMZ0hFS3FsaUxZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFGbDJiZnF2U2lvd2FZK3F3d1M4QmRFemVieXBKZzFXWnFaVVF0Q2Y1MTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImwwSHNoMFF5Um1pTW9ZOVdTSE5hcFh1ZGQ3bDdBM1gvSEZTWG9UNjZvNXhZTW4yMTlwOXpIbVhvT1FXZE1aWW1EeDlhRzhhZ1N2YkFCVkpHeUtrc0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBNHpiMmNDVUlqM3VuazBGdGlCdEd5ejZBWEhEa1ZFaEN5OHo5ajMzSVZvRWRZdDdYQUhXYml1akxXemlKSmdud1FBYWNuVVBkbkVPS1p3bER6K1dpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTM5NTU5OTc5NDo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRQlpkbTM2cjBvcU1HbVBxc01FdkFYUk0zbThxU1lOVm1hbVZFTFFuK2RkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzOTk0ODA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5uaSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_DEBASHREE™`",
  author: process.env.PACK_AUTHER || "QUEEN_DEBADHREE",
  packname: process.env.PACK_NAME || "SHREE",
  botname: process.env.BOT_NAME || "QUEEN",
  ownername: process.env.OWNER_NAME || "DEVIL  KING",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
