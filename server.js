const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post(
            'https://astra.datastax.com/api/v1/run/YOUR-API-ID',
            req.body,
            {
                headers: {
                    'Authorization': 'Your New API Key',
                    'Content-Type': 'application/json',
                    'x-api-key': 'Your New API Key'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));