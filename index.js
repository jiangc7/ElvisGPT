import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

const openai = new OpenAI({
    organization: "org-VeeIcrwbx3J9FMCL8fdn5x1A",
    apiKey: "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", // This is also the default, can be omitted
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

    const { message } = req.body

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a DesignGPT helpful assistant by Elvis."},
            {"role": "user", "content": `${message}`}
        ],
    });

    res.json({
        completion: chatCompletion.choices[0].message

    })
      

});

app.listen(port, () => {
    console.log('listening at http://localhost:3000');
});

