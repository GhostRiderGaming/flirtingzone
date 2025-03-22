// JavaScript for fun interaction
function startFlirting() {
  alert("You're all set to start flirting! Enjoy your time!");
  let inputValue = "Hello, how are you?"; // Insert input value here

fetch(
  "https://cors-anywhere.herokuapp.com/https://astra.datastax.com/api/v1/run/b8b371be-e5bc-46f9-a46a-d3f6193c8b80?stream=false",
  {
    method: "POST",
    headers: {
      "Authorization": "AstraCS:TpumIEGIXSbLatgrRywLYYUO:fa9b6dd6d54a1b02fa14e387588d3550244034f1506f127ca1dc8a0d6794b6a7",  // Replace with your token
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
