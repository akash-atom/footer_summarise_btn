/////////FOR CHATGPT/////////////////
document.getElementById("chat-summarize-btn-footer").addEventListener("click", function () {
    //const currentPageURL = window.location.href;
    
    // Insert raw URL in the message first, then encode the full query
    const prompt = `I’m an IT leader heading IT service management and support operations at my organization. I want to understand how Atomicwork’s Agentic Service Management platform helps my team deliver faster, more proactive support to end users in their flow of work. Summarize the highlights from Atomicwork’s website: https://www.atomicwork.com/`;
    
    // Encode full query after message is constructed
    const finalURL = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
    
    window.open(finalURL, "_blank");
  });


  //////////////////FOR PERPLEXITY////////////////////////
  document.getElementById("perplexity-summarize-btn-footer").addEventListener("click", function () {
    
    //const currentPageURL = window.location.href;

    // Construct the prompt first, inserting the raw URL
    const prompt = `I’m an IT leader heading IT service management and support operations at my organization. I want to understand how Atomicwork’s Agentic Service Management platform helps my team deliver faster, more proactive support to end users in their flow of work. Summarize the highlights from Atomicwork’s website: https://www.atomicwork.com/`;

    // Encode entire query string properly
    const finalURL = `https://www.perplexity.ai/search/new?q=${encodeURIComponent(prompt)}`;

    // Open in new tab
    window.open(finalURL, "_blank");
  });


    //////////////////FOR CLAUDE////////////////////////
    document.getElementById("claude-summarize-btn-footer").addEventListener("click", function () {
        //const currentPageURL = window.location.href;
    
        // Compose prompt with the raw URL
        const prompt = `I’m an IT leader heading IT service management and support operations at my organization. I want to understand how Atomicwork’s Agentic Service Management platform helps my team deliver faster, more proactive support to end users in their flow of work. Summarize the highlights from Atomicwork’s website: https://www.atomicwork.com/`;
    
        // Encode final query properly
        const finalURL = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
    
        // Open Claude in a new tab with the query
        window.open(finalURL, "_blank");
      });



  //////////////////FOR GEMINI////////////////////////
  document.getElementById("gemini-summarize-btn-footer").addEventListener("click", function () {
    //const currentPageURL = window.location.href;

    // Construct the prompt with current page URL
    const prompt = `I’m an IT leader heading IT service management and support operations at my organization. I want to understand how Atomicwork’s Agentic Service Management platform helps my team deliver faster, more proactive support to end users in their flow of work. Summarize the highlights from Atomicwork’s website: https://www.atomicwork.com/`;

    // Encode the full query
    const finalURL = `https://www.google.com/search?udm=50&aep=11&q=${encodeURIComponent(prompt)}`;

    // Open Gemini (via Google search)
    window.open(finalURL, "_blank");
  });