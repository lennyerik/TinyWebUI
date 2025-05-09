<script lang="ts">
	import Sun from '~icons/lucide/sun';
	import Moon from '~icons/lucide/moon';

	let { darkTheme = $bindable() } = $props<{ darkTheme: boolean }>();
</script>

<button
	class="border-none bg-transparent text-3xl text-inherit"
	onclick={() => (darkTheme = !darkTheme)}
	aria-label="Switch to {darkTheme ? 'light theme' : 'dark theme'}"
>
	{#if darkTheme}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
