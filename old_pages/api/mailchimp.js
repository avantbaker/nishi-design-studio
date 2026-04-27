export default async function handler(req, res) {
	try {
		res.status(200).json({ result });
	} catch (e) {
		console.log('Error: e', e);
		res.status(500).json({ error: e });
	}
}
