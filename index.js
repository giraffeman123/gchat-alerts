const express = require("express");
const gchatAlertRouter = require("./routes/gchatAlertRouter");

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(`/alerts`, gchatAlertRouter);
app.use(`/liveness`, (req, res, next) => {
	res.status(200).json('gchat-alerts API is alive');
});

app.use((req, res, next) => {
	res.status(404).json(
		{
			"timestamp": new Date().toUTCString(),
			"code": 404,
			"title": "Bad request",
			"detail": "Page not found"
		}
	)
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
