// Script do Chatbot
(function() {
  window.watsonAssistantChatOptions = {
    integrationID: "3a9a521c-894c-4c8b-bf2c-61a7df82d7e2", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "caa63f65-088b-4f37-9de8-7af5a9ee725b", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
})();