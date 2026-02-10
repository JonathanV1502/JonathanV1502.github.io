<script lang="ts">
	import { getTechIcon } from '$lib/utils/tech-icon-mapper';

	type TechTagProps = {
		name: string;
		iconSize?: number;
	};

	let { name, iconSize = 20 }: TechTagProps = $props();

	// Derive icon component from name
	const IconComponent = $derived(getTechIcon(name));
</script>

<span
	class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border border-white/30 text-white hover:border-white/50"
	role="img"
	aria-label={name}
>
	{#if IconComponent}
		<IconComponent size={iconSize} />
	{/if}

	<span>{name}</span>
</span>
