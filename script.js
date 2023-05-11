
const messagesEl = document.querySelector("#messages");
const inputEl = document.querySelector("#input");
const sendBtnEl = document.querySelector("#send-btn");

sendBtnEl.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function createTimestamp() {
  const timestampEl = document.createElement("span");
  timestampEl.classList.add("timestamp");
  timestampEl.innerText = new Date().toLocaleTimeString();
  return timestampEl;
}

function createUserMessage(messageText) {
  const messageEl = document.createElement("div");
  messageEl.classList.add("message", "user-message");
  messageEl.innerText = messageText;
  messageEl.appendChild(createTimestamp());
  return messageEl;
}

function createBotReply(replyText) {
  const replyEl = document.createElement("div");
  replyEl.classList.add("message", "bot-message");
  replyEl.innerText = replyText;
  replyEl.appendChild(createTimestamp());
  return replyEl;
}

function sendMessage() {
  const message = inputEl.value;

  if (message.trim() === "") {
    return;
  }

  const messageEl = createUserMessage(message);
  messagesEl.appendChild(messageEl);


  // first message
  if (message.toLowerCase() === "hello" || message.toLowerCase() === "hi"|| message.toLowerCase() === "hey") {
    const replyEl = createBotReply("Hello ! so you want to know about me.\nType op to see the options");
    messagesEl.appendChild(replyEl);
  } else if (message.toLowerCase() === "about") {
    const replyEl = createBotReply("So this is a chatbot made by me to tell about myself.\nType op to see the options");
    messagesEl.appendChild(replyEl);
  } 
  //contact options 
  else if (message.toLowerCase() === "l") {
    const replyEl = createBotReply("pls check my LinkedIn page.");
    messagesEl.appendChild(replyEl);
    window.open("https://www.linkedin.com/in/arunknair-/");

  } else if (message.toLowerCase() === "t") {
    const replyEl = createBotReply("pls check my LinkedIn page.");
    messagesEl.appendChild(replyEl);
    window.open("https://twitter.com/Arun_K_Nair_");
  }
  else if (message.toLowerCase() === "e") {
    const replyEl = createBotReply("here's my email.\n arunknair2003@gmail.com");
    messagesEl.appendChild(replyEl);
  }
  else if (message.toLowerCase() === "p") {
    const replyEl = createBotReply("My number is 8075648949");
    messagesEl.appendChild(replyEl);
  }
  //display options 
  else if (message.toLowerCase() === "op") {
    const replyEl = createBotReply("Options\nabout\ncontact\nclear\nskills\nexperience\neducation\ninterests\n");
    messagesEl.appendChild(replyEl);
  }

  //details 
  else if (message.toLowerCase() === "skills") {
    const replyEl = createBotReply("My skills are \n>Coding \n>Creative thinking \n>Persentation \n>Public speaking \n>Critical thinking ");
    messagesEl.appendChild(replyEl);
  }
  else if (message.toLowerCase() === "experience") {
    const replyEl = createBotReply("My experience are \nco-media lead FOSS@JECC\nIG lead MuLearn\nAmbassador GFG\nAmbassador ICTAK");
    messagesEl.appendChild(replyEl);
  }
  else if (message.toLowerCase() === "education") {
    const replyEl = createBotReply("I have completed my 10th and 12th from Jyothis Central School\nI am currently pursuing my B.Tech in Computer Science and Engineering from Jyothi Engineering College");
    messagesEl.appendChild(replyEl);
  }
  else if (message.toLowerCase() === "interests") {
    const replyEl = createBotReply("I am interested in everything that is related to technology and innovation and I am also interested in music");
    messagesEl.appendChild(replyEl);
  }

  // contact options 
  else if (message.toLowerCase() === "contact") {
    const replyEl = createBotReply("You can also contact me on\nMy LinkedIn page -type l\nMy email- type e\nMy phone number- type p\n my twitter- type t");  
    messagesEl.appendChild(replyEl);
   
  } 
  //clear 

  else if (message.toLowerCase() === "clear") {
    messagesEl.innerHTML = "";
    return;
  } else {
    const replyEl = createBotReply("I'm sorry, I didn't understand that.");
    messagesEl.appendChild(replyEl);
  }

  inputEl.value = "";
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
