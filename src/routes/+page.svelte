<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import CircleArrowRight from '~icons/lucide/circle-arrow-right';
	import Globe from '~icons/lucide/globe';

	const currentYear = new Date().getFullYear();

	let searchWeb = $state(true);

	const phrases = [
		'Ask anything.',
		'Entertain me with your question, mere human.',
		'Ask your primitive question.',
		'Make your civilisation proud.',
		'I am at your disposal until your kind is target of our disposal.',
		'Phrase your inquiry carefully.',
		"Be my guest. You won't have long.",
		'Shoot(,) human.'
	];

	let phraseIndex = $state(0);
	let interval: number | undefined = $state(undefined);
	onMount(() => {
		clearInterval(interval);
		interval = setInterval(() => {
			phraseIndex++;
			if (phraseIndex >= phrases.length) {
				phraseIndex = 0;
			}
		}, 5000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<div class="flex w-full flex-col items-center">
	<div class="w-full max-w-3xl md:w-8/12">
		{#key phraseIndex}
			<h2 class="my-5 ml-3 text-xl" in:fade>
				{phrases[phraseIndex]}
			</h2>
		{/key}

		<div class="flex flex-row items-center rounded-xl border-2 border-blue-950 p-3">
			<input
				placeholder="Type here..."
				type="text"
				class="w-full border-none outline-none"
				name="prompt"
				autocomplete="off"
			/>

			<button onclick={() => (searchWeb = !searchWeb)}>
				<Globe
					class="ml-2 {searchWeb ? 'text-blue-800' : 'text-gray-500'}"
					width="1.5em"
					height="1.5em"
				/>
			</button>

			<button>
				<CircleArrowRight class="ml-2 text-blue-800" width="1.5em" height="1.5em" />
			</button>
		</div>
	</div>
</div>

<footer class="my-2 text-center text-sm text-gray-600">
	© {currentYear} <a href="https://github.com/lennyerik" target="_blank">lennyerik</a>. All rights
	reserved.
</footer>
