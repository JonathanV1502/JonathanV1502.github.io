<script lang="ts">
	type JobDescriptionProps = {
		content: string | string[];
	};

	let { content }: JobDescriptionProps = $props();

	const isArray = $derived(Array.isArray(content));
</script>

<div class="space-y-3 description-content">
	{#if isArray}
		<ul class="list-disc list-outside ml-5 space-y-2 text-text-secondary">
			{#each content as item}
				<li class="pl-1">{@html item}</li>
			{/each}
		</ul>
	{:else}
		<p class="text-text-secondary leading-relaxed">{@html content}</p>
	{/if}
</div>

<style>
	.description-content :global(a) {
		color: #3b82f6;
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	.description-content :global(a:hover) {
		color: #2563eb;
	}

	.description-content :global(a:visited) {
		color: #7c3aed;
	}
</style>
