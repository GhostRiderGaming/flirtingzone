export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const response = await fetch("https://astra.datastax.com/api/v1/run/b8b371be-e5bc-46f9-a46a-d3f6193c8b80?stream=false", {
            method: "POST",
            headers: {
                "Authorization": "Bearer AstraCS:evOfBIHZEhFFvPHtNuGejzti:7aa08934cb27858572c0e9df79611c3dcb33667a23446ae7e8e67773ea72a077",  // Replace with your Astra token
                "Content-Type": "application/json"
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
