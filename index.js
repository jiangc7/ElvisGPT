import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

const openai = new OpenAI({
    organization: " ",
    apiKey: " ", // This is also the default, can be omitted
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
            {"role": "system", "content": "You are a ElvisGPT helpful assistant by Elvis."},
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

