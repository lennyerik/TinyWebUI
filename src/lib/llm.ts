import { AI_API_BASE_URL, AI_API_KEY, AI_EMBEDDING_MODEL_NAME } from '$env/static/private';

export async function embedStrings(...strings: string[]): Promise<Float32Array[]> {
	const response = await fetch(`${AI_API_BASE_URL}/embed`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${AI_API_KEY}`
		},
		body: JSON.stringify({
			model: AI_EMBEDDING_MODEL_NAME,
			input: strings
		})
	});

	const json = await response.json();
	if (json.embeddings && json.embeddings.length === strings.length) {
		return json.embeddings.map((embedding: number[]) => new Float32Array(embedding));
	}

	throw 'Received invalid json data while trying to embed values';
}
