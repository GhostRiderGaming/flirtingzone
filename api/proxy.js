export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const response = await fetch("https://astra.datastax.com/api/v1/run/b8b371be-e5bc-46f9-a46a-d3f6193c8b80?stream=false", {
        method: "POST",
        headers: {
            "Authorization": "Bearer AstraCS:chOuwSfduGRHpjxORGFhZHiw:b39fb7706eb29f96f0d75e4c25826c6ffbf5ef48295455ac41a4e6f3c40cb411",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
}