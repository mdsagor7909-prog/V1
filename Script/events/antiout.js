module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Sorry Boss, ${name} i can't add him/her duo to the privacy issues or he/she block me 
\n──────꯭─⃝‌‌Ariful 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭─────`, event.threadID)
   } else api.sendMessage(`Listen, ${name}, This group is brand 
If you want to leave from this group you have take permission from the group admin
You take leave from the group without admin permission – that's why you have been re-added
\n──────꯭─⃝‌‌Ariful 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭─────`, event.threadID);
  })
 }
}
