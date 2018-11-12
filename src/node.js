const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');

const nexmo = new Nexmo(
	{
		apiKey: 'af22abdb',
		apiSecret: '57793d6f57131b70',
	},
	{ debug: true }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ meg: 'lol' });
});

app.post('/users/register', (req, res) => {
	// res.send(req.body);
	// console.log(req.body);
	const { number, text } = req.body;

	nexmo.message.sendSms('YOURVURTUALNUMBER', number, text, { type: 'unicode' }, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			const { messages } = responseData;
			const { ['message-id']: id, ['to']: number, ['error-text']: error } = messages[0];

			console.dir(responseData);
			res.json(responseData);
			// Get data from response
			const data = {
				id,
				number,
				error,
			};
		}
	});
});

const port = 3000;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));
