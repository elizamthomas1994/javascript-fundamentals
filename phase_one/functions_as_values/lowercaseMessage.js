const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transformFunction) => {
  return lowercaseMessage(message);
}

transform("WHY ARE YOU SHOUTING?", lowercaseMessage);