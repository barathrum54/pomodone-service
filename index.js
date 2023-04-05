const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Log = require('./models/log');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/pomodone';


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose başarıyla MongoDB\'ye bağlandı');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose bağlantı hatası:', err);
});

app.use(cors());
app.use(express.json());

app.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find();
        res.status(200).json({ success: true, logs });
    } catch (error) {
        console.error('Error encountered while fetching logs:', error);
        res.status(500).json({ error: 'Error encountered while fetching logs' });
    }
});
app.get("/logs/:id", async (req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        if (log) {
            res.json({ success: true, log });
        } else {
            res.status(404).json({ success: false, error: "Log not found." });
        }
    } catch (error) {
        console.error("Error fetching log details:", error);
        res.status(500).json({ success: false, error: "Error fetching log details" });
    }
});
app.post('/logs', async (req, res) => {
    const { message } = req.body;
    console.log(req)
    if (!message) {
        return res.status(400).json({ error: 'message cannot be empty.' });
    }

    try {
        const newLog = new Log({ message });
        await newLog.save();

        console.log('New log saved successfully:', newLog);
        res.status(200).json({ success: true, post: newLog });
    } catch (error) {
        console.error('Error encountered while storing log:', error);
        res.status(500).json({ error: 'Error encountered while storing log' });
    }
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
