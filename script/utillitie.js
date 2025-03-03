// generate random color codes function
function generateColor() {
  const randomNumbers = Math.floor(Math.random() * 16789788);
  const randomColorCodes = '#' + randomNumbers.toString(16);
  return randomColorCodes;
}