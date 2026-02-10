<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		target?: string;
		download?: string;
		children?: Snippet;
	}

	let { href, target, download, children }: Props = $props();
</script>

<a
	{href}
	{target}
	{download}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	class="inline-flex items-center gap-2 px-6 py-3
	       border border-white/30 text-white
	       hover:border-white/50 hover:bg-white/5
	       transition-all duration-200 rounded-lg
	       font-medium text-lg"
>
	{#if children}
		{@render children()}
	{:else}
		Button
	{/if}
</a>
