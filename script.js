const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function to wait for given milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the message display after delay
async function handleSubmit() {
  const message = textInput.value.trim(); // Trim whitespace
  const delay = Number(delayInput.value);

  // Optional: Basic validation
  if (!message) {
    output.textContent = "Please enter a message.";
    return;
  }
  if (isNaN(delay) || delay < 0) {
    output.textContent = "Please enter a valid delay (in ms).";
    return;
  }

  output.textContent = "Waiting...";
  await wait(delay);
  output.textContent = message;
}

// Add event listener to the button
button.addEventListener("click", handleSubmit);