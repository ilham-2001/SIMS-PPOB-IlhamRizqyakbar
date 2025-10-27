

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
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    }
    reader.onerror = (err) => reject(err);
  });
}

export { validateInput, toBase64String };