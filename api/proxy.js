
const cors = require("cors");
 
handler.use(cors())

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const response = await fetch("https://astra.datastax.com/api/v1/run/b8b371be-e5bc-46f9-a46a-d3f6193c8b80?stream=false", {
            method: "POST",
            headers: {
                "Authorization": "Bearer AstraCS:NCsKGmZHUhXqgEiDCdCLQrSi:929f6dc15dc631b7ee648d34d3034fe45f18d25cf27cb054fa72c6a28bc8b43b",  // Replace with your Astra token
                "Content-Type": "application/json",
                "x-api-key": "AIzaSyCgCoSqcMV-zKw5ILsXEB90-KlSbCPU3lA"
            },
            body: JSON.stringify(req.body)
        });

        const textData = await response.text(); // Read response as text to debug
        try {
            const jsonData = JSON.parse(textData);
            return res.status(response.status).json(jsonData);
        } catch (jsonError) {
            console.error("Non-JSON response from Astra:", textData);
            return res.status(500).json({ error: "Astra API returned invalid JSON", response: textData });
        }

    } catch (error) {
        console.error("Error in Proxy API:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}
