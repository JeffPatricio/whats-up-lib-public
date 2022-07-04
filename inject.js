!function(){"use strict";function a(){a.mID=Math.random().toString(36).substring(7),a.mObj={};try{window.webpackChunkwhatsapp_web_client.push([[a.mID],{},function(t){Object.keys(t.m).forEach(function(e){a.mObj[e]=t(e)})}])}catch(e){}return{modules:a.mObj,constructors:a.cArr,findModule:function(n){var d=[];return Object.keys(a.mObj).forEach(function(e){var t=a.mObj[e];if(void 0!==t)if("string"==typeof n){if("object"==typeof t.default)for(var i in t.default)i==n&&d.push(t);for(var o in t)o==n&&d.push(t)}else{if("function"!=typeof n)throw new TypeError("findModule can only find via string and function, "+typeof n+" was passed");n(t)&&d.push(t)}}),d},get:function(e){return a.mObj[e]}}}const i={AUTHENTICATED:"authenticated",AUTHENTICATION_FAILURE:"auth_failure",READY:"ready",MESSAGE_RECEIVED:"message",MESSAGE_CREATE:"message_create",MESSAGE_REVOKED_EVERYONE:"message_revoke_everyone",MESSAGE_REVOKED_ME:"message_revoke_me",MESSAGE_ACK:"message_ack",MEDIA_UPLOADED:"media_uploaded",GROUP_JOIN:"group_join",GROUP_LEAVE:"group_leave",GROUP_UPDATE:"group_update",QR_RECEIVED:"qr",DISCONNECTED:"disconnected",STATE_CHANGED:"change_state",BATTERY_CHANGED:"change_battery",INCOMING_CALL:"incoming_call"},t={TEXT:"chat",AUDIO:"audio",VOICE:"ptt",IMAGE:"image",VIDEO:"video",DOCUMENT:"document",STICKER:"sticker",LOCATION:"location",CONTACT_CARD:"vcard",CONTACT_CARD_MULTI:"multi_vcard",ORDER:"order",REVOKED:"revoked",PRODUCT:"product",UNKNOWN:"unknown",GROUP_INVITE:"groups_v4_invite",LIST:"list",LIST_RESPONSE:"list_response",BUTTONS_RESPONSE:"buttons_response",PAYMENT:"payment",BROADCAST_NOTIFICATION:"broadcast_notification",CALL_LOG:"call_log",CIPHERTEXT:"ciphertext",DEBUG:"debug",E2E_NOTIFICATION:"e2e_notification",GP2:"gp2",GROUP_NOTIFICATION:"group_notification",HSM:"hsm",INTERACTIVE:"interactive",NATIVE_FLOW:"native_flow",NOTIFICATION:"notification",NOTIFICATION_TEMPLATE:"notification_template",OVERSIZED:"oversized",PROTOCOL:"protocol",REACTION:"reaction",TEMPLATE_BUTTON_REPLY:"template_button_reply"};class e{constructor(e){Object.defineProperty(this,"client",{value:e})}_clone(){return Object.assign(Object.create(this),this)}_patch(e){return e}}class s extends e{constructor(e,t){super(e),t&&this._patch(t)}_patch(e){return this.id=e.id,this.number=e.userid,this.isBusiness=e.isBusiness,this.isEnterprise=e.isEnterprise,this.labels=e.labels,this.name=e.name,this.pushname=e.pushname,this.sectionHeader=e.sectionHeader,this.shortName=e.shortName,this.statusMute=e.statusMute,this.type=e.type,this.verifiedLevel=e.verifiedLevel,this.verifiedName=e.verifiedName,this.isMe=e.isMe,this.isUser=e.isUser,this.isGroup=e.isGroup,this.isWAContact=e.isWAContact,this.isMyContact=e.isMyContact,this.isBlocked=e.isBlocked,super._patch(e)}async getProfilePicUrl(){return this.client.getProfilePicUrl(this.id._serialized)}async getAbout(){var e=await window.Store.Wap.statusFind(this.id._serialized);return"string"!=typeof e.status?null:e.status}}class o extends s{}class n extends s{_patch(e){return this.businessProfile=e.businessProfile,super._patch(e)}}class d extends e{constructor(e,t){super(e),t&&this._patch(t)}_patch(e){return this.pushname=e.pushname,this.wid=e.wid,this.me=e.wid,this.platform=e.platform,super._patch(e)}}class r{constructor(e,t,i){this.latitude=e,this.longitude=t,this.description=i}}class w{constructor(e,t,i){this.mimetype=e,this.data=t,this.filename=i}}class l extends e{constructor(e,t){super(e),t&&this._patch(t)}_patch(e){return this._data=e,this.mediaKey=e.mediaKey,this.id=e.id,this.ack=e.ack,this.hasMedia=Boolean(e.mediaKey&&e.directPath),this.body=this.hasMedia?e.caption||"":e.body||"",this.type=e.type,this.timestamp=e.t,this.from="object"==typeof e.from&&null!==e.from?e.from._serialized:e.from,this.to="object"==typeof e.to&&null!==e.to?e.to._serialized:e.to,this.author="object"==typeof e.author&&null!==e.author?e.author._serialized:e.author,this.deviceType=21<e.id.id.length?"android":"3A"==e.id.id.substring(0,2)?"ios":"web",this.isForwarded=e.isForwarded,this.forwardingScore=e.forwardingScore||0,this.isStatus=e.isStatusV3,this.isStarred=e.star,this.broadcast=e.broadcast,this.fromMe=e.id.fromMe,this.hasQuotedMsg=!!e.quotedMsg,this.duration=e.duration||void 0,this.location=e.type===t.LOCATION?new r(e.lat,e.lng,e.loc):void 0,this.vCards=e.type===t.CONTACT_CARD_MULTI?e.vcardList.map(e=>e.vcard):e.type===t.CONTACT_CARD?[e.body]:[],this.inviteV4=e.type===t.GROUP_INVITE?{inviteCode:e.inviteCode,inviteCodeExp:e.inviteCodeExp,groupId:e.inviteGrp,groupName:e.inviteGrpName,fromId:e.from._serialized,toId:e.to._serialized}:void 0,this.mentionedIds=[],e.mentionedJidList&&(this.mentionedIds=e.mentionedJidList),this.orderId=e.orderId||void 0,this.token=e.token||void 0,this.isGif=Boolean(e.isGif),this.isEphemeral=e.isEphemeral,e.title&&(this.title=e.title),e.description&&(this.description=e.description),e.businessOwnerJid&&(this.businessOwnerJid=e.businessOwnerJid),e.productId&&(this.productId=e.productId),this.links=e.links,e.dynamicReplyButtons&&(this.dynamicReplyButtons=e.dynamicReplyButtons),e.selectedButtonId&&(this.selectedButtonId=e.selectedButtonId),e.listResponse&&e.listResponse.singleSelectReply.selectedRowId&&(this.selectedRowId=e.listResponse.singleSelectReply.selectedRowId),super._patch(e)}_getChatId(){return this.fromMe?this.to:this.from}getContact(){return this.client.getContactById(this.author||this.from)}async getMentions(){return Promise.all(this.mentionedIds.map(async e=>this.client.getContactById(e)))}async getQuotedMessage(){if(this.hasQuotedMsg){let e=window.Store.Msg.get(this.id._serialized);var t=e.quotedMsgObj().serialize();return new l(this.client,t)}}async reply(e,t,i={}){return t=t||this._getChatId(),i={...i,quotedMessageId:this.id._serialized},this.client.sendMessage(t,e,i)}}(class f{});async function c(e){try{var t=m();if(!t)throw new Error("Nenhum chat ativo foi encontrado");var i=e.detail["text"],o=await window.waClient.sendMessage(t,i);window.emit("send-text@response",{id:o.id._serialized})}catch(e){window.emit("send-text@response",{error:e.toString()})}}async function u(e){try{var t=m();if(!t)throw new Error("Nenhum chat ativo foi encontrado");var{mimetype:i,data:o,filename:n}=e.detail,d=new w(i,o,n),a=(console.log(d),await window.waClient.sendMessage(t,d));window.emit("send-media@response",{id:a.id._serialized})}catch(e){window.emit("send-media@response",{error:e.toString()})}}function m(){var e=Store.Chat._models.find(e=>e.__x_active);return e?e.id._serialized:null}window.emit=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))};const p=new class extends class{constructor(){this.callbacks={}}on(e,t){this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(t)}emit(e,t){let i=this.callbacks[e];i&&i.forEach(e=>e(t))}}{constructor(){super()}async initialize(){t=a,window.mR=t(),window.Store=Object.assign({},window.mR.findModule(e=>e.default&&e.default.Chat)[0].default),window.Store.AppState=window.mR.findModule("Socket")[0].Socket,window.Store.Conn=window.mR.findModule("Conn")[0].Conn,window.Store.BlockContact=window.mR.findModule("blockContact")[0],window.Store.Call=window.mR.findModule("CallCollection")[0].CallCollection,window.Store.Cmd=window.mR.findModule("Cmd")[0].Cmd,window.Store.CryptoLib=window.mR.findModule("decryptE2EMedia")[0],window.Store.DownloadManager=window.mR.findModule("downloadManager")[0].downloadManager,window.Store.MDBackend=window.mR.findModule("isMDBackend")[0].isMDBackend(),window.Store.Features=window.mR.findModule("FEATURE_CHANGE_EVENT")[0].LegacyPhoneFeatures,window.Store.GroupMetadata=window.mR.findModule(e=>e.default&&e.default.handlePendingInvite)[0].default,window.Store.Invite=window.mR.findModule("sendJoinGroupViaInvite")[0],window.Store.InviteInfo=window.mR.findModule("sendQueryGroupInvite")[0],window.Store.Label=window.mR.findModule("LabelCollection")[0].LabelCollection,window.Store.MediaPrep=window.mR.findModule("MediaPrep")[0],window.Store.MediaObject=window.mR.findModule("getOrCreateMediaObject")[0],window.Store.NumberInfo=window.mR.findModule("formattedPhoneNumber")[0],window.Store.MediaTypes=window.mR.findModule("msgToMediaType")[0],window.Store.MediaUpload=window.mR.findModule("uploadMedia")[0],window.Store.MsgKey=window.mR.findModule(e=>e.default&&e.default.fromString)[0].default,window.Store.MessageInfo=window.mR.findModule("sendQueryMsgInfo")[0],window.Store.OpaqueData=window.mR.findModule(e=>e.default&&e.default.createFromData)[0].default,window.Store.QueryExist=window.mR.findModule("queryExists")[0].queryExists,window.Store.QueryProduct=window.mR.findModule("queryProduct")[0],window.Store.QueryOrder=window.mR.findModule("queryOrder")[0],window.Store.SendClear=window.mR.findModule("sendClear")[0],window.Store.SendDelete=window.mR.findModule("sendDelete")[0],window.Store.SendMessage=window.mR.findModule("addAndSendMsgToChat")[0],window.Store.SendSeen=window.mR.findModule("sendSeen")[0],window.Store.User=window.mR.findModule("getMaybeMeUser")[0],window.Store.UploadUtils=window.mR.findModule(e=>e.default&&e.default.encryptAndUpload?e.default:null)[0].default,window.Store.UserConstructor=window.mR.findModule(e=>e.default&&e.default.prototype&&e.default.prototype.isServer&&e.default.prototype.isUser?e.default:null)[0].default,window.Store.Validators=window.mR.findModule("findLinks")[0],window.Store.VCard=window.mR.findModule("vcardFromContactModel")[0],window.Store.Wap=window.mR.findModule("queryLinkPreview")[0].default,window.Store.WidFactory=window.mR.findModule("createWid")[0],window.Store.ProfilePic=window.mR.findModule("profilePicResync")[0],window.Store.PresenceUtils=window.mR.findModule("sendPresenceAvailable")[0],window.Store.ChatState=window.mR.findModule("sendChatStateComposing")[0],window.Store.GroupParticipants=window.mR.findModule("sendPromoteParticipants")[0],window.Store.JoinInviteV4=window.mR.findModule("sendJoinGroupViaInviteV4")[0],window.Store.findCommonGroups=window.mR.findModule("findCommonGroups")[0].findCommonGroups,window.Store.StatusUtils=window.mR.findModule("setMyStatus")[0],window.Store.ConversationMsgs=window.mR.findModule("loadEarlierMsgs")[0],window.Store.sendReactionToMsg=window.mR.findModule("sendReactionToMsg")[0].sendReactionToMsg,window.Store.StickerTools={...window.mR.findModule("toWebpSticker")[0],...window.mR.findModule("addWebpMetadata")[0]},window.Store.GroupUtils={...window.mR.findModule("sendCreateGroup")[0],...window.mR.findModule("sendSetGroupSubject")[0],...window.mR.findModule("markExited")[0]},await(!window.Store.Chat._find&&!(window.Store.Chat._find=e=>{var t=window.Store.Chat.get(e);return t?Promise.resolve(t):Promise.resolve({id:e})}));var e,t=await navigator.serviceWorker.getRegistrations();for(e of t)e.unregister();window.WWebJS={},window.WWebJS.sendSeen=async e=>{e=window.Store.Chat.get(e);return void 0!==e&&(await window.Store.SendSeen.sendSeen(e,!1),!0)},window.WWebJS.sendMessage=async(t,i,o={})=>{let e={},n=(o.attachment&&(e=o.sendMediaAsSticker?await window.WWebJS.processStickerData(o.attachment):await window.WWebJS.processMediaData(o.attachment,{forceVoice:o.sendAudioAsVoice,forceDocument:o.sendMediaAsDocument,forceGif:o.sendVideoAsGif}),i=o.sendMediaAsSticker?void 0:e.preview,delete o.attachment,delete o.sendMediaAsSticker),{});if(o.quotedMessageId){let e=window.Store.Msg.get(o.quotedMessageId);e.canReply()&&(n=e.msgContextInfo(t)),delete o.quotedMessageId}o.mentionedJidList&&(o.mentionedJidList=o.mentionedJidList.map(e=>window.Store.Contact.get(e).id));let d={},a=(o.location&&(d={type:"location",loc:o.location.description,lat:o.location.latitude,lng:o.location.longitude},delete o.location),{});if(o.contactCard){var s=window.Store.Contact.get(o.contactCard);a={body:window.Store.VCard.vcardFromContactModel(s).vcard,type:"vcard",vcardFormattedName:s.formattedName},delete o.contactCard}else if(o.contactCardList){let e=o.contactCardList.map(e=>window.Store.Contact.get(e));s=e.map(e=>window.Store.VCard.vcardFromContactModel(e));a={type:"multi_vcard",vcardList:s,body:void 0},delete o.contactCardList}else if(o.parseVCards&&"string"==typeof i&&i.startsWith("BEGIN:VCARD")){delete o.parseVCards;try{var r=window.Store.VCard.parseVcard(i);r&&(a={type:"vcard",vcardFormattedName:window.Store.VCard.vcardGetNameFromParsed(r)})}catch(e){}}if(o.linkPreview&&(delete o.linkPreview,!window.Store.MDBackend)){s=window.Store.Validators.findLink(i);if(s){const m=await window.Store.Wap.queryLinkPreview(s.url);m.preview=!0,m.subtype="url",o={...o,...m}}}let w={};if(o.buttons){let e;e="chat"===o.buttons.type?i=o.buttons.body:o.caption||" ",w={productHeaderImageRejected:!1,isFromTemplate:!1,isDynamicReplyButtonsMsg:!0,title:o.buttons.title||void 0,footer:o.buttons.footer||void 0,dynamicReplyButtons:o.buttons.buttons,replyButtons:o.buttons.buttons,caption:e},delete o.buttons}let l={};if(o.list){if("smba"===window.Store.Conn.platform||"smbi"===window.Store.Conn.platform)throw"[LT01] Whatsapp business can't send this yet";l={type:"list",footer:o.list.footer,list:{...o.list,listType:1},body:o.list.description},delete o.list,delete l.list.footer}var r=window.Store.User.getMaybeMeUser(),s=window.Store.MDBackend,s=new window.Store.MsgKey({from:r,to:t.id,id:window.Store.MsgKey.newId(),participant:s&&t.id.isGroup()?r:void 0,selfDir:"out"}),c=o.extraOptions||{},u=(delete o.extraOptions,{ephemeralDuration:t.isEphemeralSettingOn()?t.getEphemeralSetting():void 0,ephemeralSettingTimestamp:t.getEphemeralSettingTimestamp()||void 0,disappearingModeInitiator:t.getDisappearingModeInitiator()||void 0}),o={...o,id:s,ack:0,body:i,from:r,to:t.id,local:!0,self:"out",t:parseInt((new Date).getTime()/1e3),isNewMsg:!0,type:"chat",...u,...d,...e,...n,...a,...w,...l,...c};return await window.Store.SendMessage.addAndSendMsgToChat(t,o),window.Store.Msg.get(s._serialized)},window.WWebJS.toStickerData=async e=>{if("image/webp"==e.mimetype)return e;e=window.WWebJS.mediaInfoToFile(e);const t=await window.Store.StickerTools.toWebpSticker(e);e=await t.arrayBuffer();return{mimetype:"image/webp",data:window.WWebJS.arrayBufferToBase64(e)}},window.WWebJS.processStickerData=async e=>{if("image/webp"!==e.mimetype)throw new Error("Invalid media type");var e=window.WWebJS.mediaInfoToFile(e),t=await window.WWebJS.getFileHash(e),i=await window.WWebJS.generateHash(32),o=new AbortController,o=await window.Store.UploadUtils.encryptAndUpload({blob:e,type:"sticker",signal:o.signal,mediaKey:i});return{...o,clientUrl:o.url,deprecatedMms3Url:o.url,uploadhash:o.encFilehash,size:e.size,type:"sticker",filehash:t}},window.WWebJS.processMediaData=async(e,{forceVoice:t,forceDocument:i,forceGif:o})=>{e=window.WWebJS.mediaInfoToFile(e),e=await window.Store.OpaqueData.createFromData(e,e.type);const n=window.Store.MediaPrep.prepRawMedia(e,{asDocument:i}),d=await n.waitForPrep(),a=window.Store.MediaObject.getOrCreateMediaObject(d.filehash);e=window.Store.MediaTypes.msgToMediaType({type:d.type,isGif:d.isGif}),t&&"audio"===d.type&&(d.type="ptt"),o&&"video"===d.type&&(d.isGif=!0),i&&(d.type="document"),d.mediaBlob instanceof window.Store.OpaqueData||(d.mediaBlob=await window.Store.OpaqueData.createFromData(d.mediaBlob,d.mediaBlob.type)),d.renderableUrl=d.mediaBlob.url(),a.consolidate(d.toJSON()),d.mediaBlob.autorelease(),t=await window.Store.MediaUpload.uploadMedia({mimetype:d.mimetype,mediaObject:a,mediaType:e}),o=t.mediaEntry;if(o)return d.set({clientUrl:o.mmsUrl,deprecatedMms3Url:o.deprecatedMms3Url,directPath:o.directPath,mediaKey:o.mediaKey,mediaKeyTimestamp:o.mediaKeyTimestamp,filehash:a.filehash,encFilehash:o.encFilehash,uploadhash:o.uploadHash,size:a.size,streamingSidecar:o.sidecar,firstFrameSidecar:o.firstFrameSidecar}),d;throw new Error("upload failed: media entry was not created")},window.WWebJS.getMessageModel=e=>{const t=e.serialize();return t.isEphemeral=e.isEphemeral,t.isStatusV3=e.isStatusV3,t.links=e.getLinks().map(e=>({link:e.href,isSuspicious:Boolean(e.suspiciousCharacters&&e.suspiciousCharacters.size)})),t.buttons&&(t.buttons=t.buttons.serialize()),t.dynamicReplyButtons&&(t.dynamicReplyButtons=JSON.parse(JSON.stringify(t.dynamicReplyButtons))),t.replyButtons&&(t.replyButtons=JSON.parse(JSON.stringify(t.replyButtons))),"object"==typeof t.id.remote&&(t.id=Object.assign({},t.id,{remote:t.id.remote._serialized})),delete t.pendingAckUpdate,t},window.WWebJS.getChatModel=async e=>{let t=e.serialize();var i;return t.isGroup=e.isGroup,t.formattedTitle=e.formattedTitle,t.isMuted=e.mute&&e.mute.isMuted,e.groupMetadata&&(i=window.Store.WidFactory.createWid(e.id._serialized),await window.Store.GroupMetadata.update(i),t.groupMetadata=e.groupMetadata.serialize()),delete t.msgs,delete t.msgUnsyncedButtonReplyMsgs,delete t.unsyncedButtonReplies,t},window.WWebJS.getChat=async e=>{e=window.Store.WidFactory.createWid(e),e=await window.Store.Chat.find(e);return window.WWebJS.getChatModel(e)},window.WWebJS.getChats=async()=>{const e=window.Store.Chat.getModelsArray();var t=e.map(e=>window.WWebJS.getChatModel(e));return Promise.all(t)},window.WWebJS.getContactModel=e=>{let t=e.serialize();return t.isBusiness=e.isBusiness,e.businessProfile&&(t.businessProfile=e.businessProfile.serialize()),t.isMe=e.isMe,t.isUser=e.isUser,t.isGroup=e.isGroup,t.isWAContact=e.isWAContact,t.isMyContact=e.isMyContact,t.isBlocked=e.isContactBlocked,t.userid=e.userid,t},window.WWebJS.getContact=async e=>{e=window.Store.WidFactory.createWid(e),e=await window.Store.Contact.find(e);return window.WWebJS.getContactModel(e)},window.WWebJS.getContacts=()=>{const e=window.Store.Contact.getModelsArray();return e.map(e=>window.WWebJS.getContactModel(e))},window.WWebJS.mediaInfoToFile=({data:e,mimetype:t,filename:i})=>{const o=window.atob(e);e=new ArrayBuffer(o.length);const n=new Uint8Array(e);for(let e=0;e<o.length;e++)n[e]=o.charCodeAt(e);e=new Blob([e],{type:t});return new File([e],i,{type:t,lastModified:Date.now()})},window.WWebJS.arrayBufferToBase64=e=>{let t="";var i=new Uint8Array(e),o=i.byteLength;for(let e=0;e<o;e++)t+=String.fromCharCode(i[e]);return window.btoa(t)},window.WWebJS.getFileHash=async e=>{e=await e.arrayBuffer(),e=await crypto.subtle.digest("SHA-256",e);return btoa(String.fromCharCode(...new Uint8Array(e)))},window.WWebJS.generateHash=async e=>{for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=i.length,n=0;n<e;n++)t+=i.charAt(Math.floor(Math.random()*o));return t},window.WWebJS.sendClearChat=async e=>{e=window.Store.Chat.get(e);return void 0!==e&&(await window.Store.SendClear.sendClear(e,!1),!0)},window.WWebJS.sendDeleteChat=async e=>{e=window.Store.Chat.get(e);return void 0!==e&&(await window.Store.SendDelete.sendDelete(e),!0)},window.WWebJS.sendChatstate=async(e,t)=>{switch(window.Store.MDBackend&&(t=window.Store.WidFactory.createWid(t)),e){case"typing":await window.Store.ChatState.sendChatStateComposing(t);break;case"recording":await window.Store.ChatState.sendChatStateRecording(t);break;case"stop":await window.Store.ChatState.sendChatStatePaused(t);break;default:throw"Invalid chatstate"}return!0},window.WWebJS.getLabelModel=e=>{let t=e.serialize();return t.hexColor=e.hexColor,t},window.WWebJS.getLabels=()=>{const e=window.Store.Label.getModelsArray();return e.map(e=>window.WWebJS.getLabelModel(e))},window.WWebJS.getLabel=e=>{e=window.Store.Label.get(e);return window.WWebJS.getLabelModel(e)},window.WWebJS.getChatLabels=async e=>{const t=await window.WWebJS.getChat(e);return(t.labels||[]).map(e=>window.WWebJS.getLabel(e))},window.WWebJS.getOrderDetail=async(e,t,i)=>{i=window.Store.WidFactory.createWid(i);return window.Store.QueryOrder.queryOrder(i,e,80,80,t)},window.WWebJS.getProductMetadata=async e=>{var t=window.Store.Conn.wid,t=await window.Store.QueryProduct.queryProduct(t,e);if(t&&t.data)return t.data},this.info=new d(this,{...window.Store.Conn.serialize(),wid:window.Store.User.getMeUser()}),window.onAddMessageEvent=e=>{var t;e.isNewMsg&&(t=new l(this,e),e.id.fromMe||this.emit(i.MESSAGE_RECEIVED,t))},window.Store.Msg.on("add",e=>{e.isNewMsg&&window.onAddMessageEvent(window.WWebJS.getMessageModel(e))}),setTimeout(()=>{this.emit(i.READY)},2e3)}async sendSeen(e){return await window.WWebJS.sendSeen(e)}async sendMessage(e,t,i={}){let o={linkPreview:!1!==i.linkPreview||void 0,sendAudioAsVoice:i.sendAudioAsVoice,sendVideoAsGif:i.sendVideoAsGif,sendMediaAsSticker:i.sendMediaAsSticker,sendMediaAsDocument:i.sendMediaAsDocument,caption:i.caption,quotedMessageId:i.quotedMessageId,parseVCards:!1!==i.parseVCards,mentionedJidList:Array.isArray(i.mentions)?i.mentions.map(e=>e.id._serialized):[],extraOptions:i.extra};var n=void 0===i.sendSeen||i.sendSeen,i=(t instanceof w?(o.attachment=t,t=""):i.media instanceof w?(o.attachment=i.media,o.caption=t,t=""):t instanceof r?(o.location=t,t=""):t instanceof s?(o.contactCard=t.id._serialized,t=""):Array.isArray(t)&&0<t.length&&t[0]instanceof s?(o.contactCardList=t.map(e=>e.id._serialized),t=""):t instanceof Buttons?("chat"!==t.type&&(o.attachment=t.body),o.buttons=t,t=""):t instanceof List&&(o.list=t,t=""),window.Store.WidFactory.createWid(e)),i=await window.Store.Chat.find(i);n&&window.WWebJS.sendSeen(e);const d=await window.WWebJS.sendMessage(i,t,o,n);e=d.serialize();return new l(this,e)}async getContactById(e){e=await window.WWebJS.getContact(e);return class{static create(e,t){return new(t.isBusiness?n:o)(e,t)}}.create(this,e)}async getProfilePicUrl(e){e=await window.Store.WidFactory.createWid(e),e=await window.Store.ProfilePic.profilePicFind(e);return e?e.eurl:void 0}};function h(){window.emit("wa-info@response",p.info.wid)}p.on("ready",()=>{window.waClient=p,window.addEventListener("wa-info",h,!1),window.addEventListener("send-text",c,!1),window.addEventListener("send-media",u,!1),console.log("INITIALIZE WA LIBRARY ✅ "),window.emit("wa-build",{})}),p.initialize()}();
