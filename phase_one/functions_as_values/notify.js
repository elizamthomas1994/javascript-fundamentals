const notifyByEmail = (email_address) => {
  return `Email sent to ${email_address}`;
};

const notifyByText = (phone_number) => {
  return `Text sent to ${phone_number}`;
};

const notify = (contact, transformFunction) => {
  return transformFunction(contact);
}

notify("eliza@eliza.com", notifyByEmail);

notify("0123456789", notifyByText);