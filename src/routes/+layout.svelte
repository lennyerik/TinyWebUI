<script lang="ts">
	import '../app.css';

	import ThemeSelector from './theme-selector.svelte';

	let { children } = $props();

	let darkTheme = $state(true);
</script>

<div
	class="flex min-h-dvh flex-col justify-between px-4 {darkTheme
		? 'bg-gray-900 text-white'
		: 'bg-white text-black'}"
>
	<header
		class="mb-4 flex w-full flex-row items-center justify-between self-start p-4 text-xl text-gray-300"
	>
		<h1>TinyWebUI</h1>
		<ThemeSelector bind:darkTheme />
	</header>

	{@render children()}
</div>
