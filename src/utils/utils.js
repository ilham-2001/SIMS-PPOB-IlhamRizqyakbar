

function validateInput(obj) {
  for (const [ _, value ] of Object.entries(obj)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

export { validateInput };