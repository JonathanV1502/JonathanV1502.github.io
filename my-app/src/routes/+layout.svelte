<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/radio.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jonathan Villarreal - SWE</title>
	<meta name="description" content="Portfolio of Jonathan Villarreal" />
</svelte:head>
{@render children()}
