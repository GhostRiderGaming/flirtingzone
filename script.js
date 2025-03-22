// JavaScript for fun interaction
function startFlirting() {
  alert("You're all set to start flirting! Enjoy your time!");
  let inputValue = "Hello, how are you?"; // Insert input value here

fetch(
  
  "https://flirtingzone.vercel.app/api/proxy",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: {message: inputValue} , // The input you want to send
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "ChatInput-bt7is": {},
        "Prompt-eK1N1": {},
        "ChatOutput-R5cYx": {},
        "GoogleGenerativeAIModel-QFGwI": {}
      }
    }),
  }
)
  .then(res => res.json())  // Parse the response as JSON
  .then(data => console.log(data))  // Handle the data
  .catch(error => console.error('Error:', error));  // Handle errors
}
