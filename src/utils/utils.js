

function validateInput(obj) {
  for (const [ _, value ] of Object.entries(obj)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

function toBase64String(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
  });
}

export { validateInput, toBase64String };