// JavaScript for fun interaction
function startFlirting() {
  alert("You're all set to start flirting! Enjoy your time!");
  let inputValue = "Hello, how are you?"; // Insert input value here

fetch(
  "http://localhost:3000/proxy",
  {
    method: "POST",
    headers: {
      "Authorization": "AstraCS:WekjSYmdIrKxyFBXOpOtZdoH:ae8fcced8a73507e9a5dc746c4b98152023141e8a13d7932eabc7c2ac81245f9",  // Replace with your token
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY_HERE",  // Replace with your API key
    },
    body: JSON.stringify({
      input_value: inputValue,  // The input you want to send
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
