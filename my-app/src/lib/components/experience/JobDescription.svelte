<script lang="ts">
	type JobDescriptionProps = {
		content: string | string[];
	};

	let { content }: JobDescriptionProps = $props();

	const isArray = $derived(Array.isArray(content));
</script>

<div class="space-y-3">
	{#if isArray}
		<ul class="list-disc list-inside space-y-2 text-text-secondary">
			{#each content as item}
				<li>{item}</li>
			{/each}
		</ul>
	{:else}
		<p class="text-text-secondary leading-relaxed">{content}</p>
	{/if}
</div>
