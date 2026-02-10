<script lang="ts">
	import { formatDate, calculateDuration } from '$lib/utils/date-formatter';

	type DateRangeProps = {
		startDate: Date | string;
		endDate?: Date | string | null;
	};

	let { startDate, endDate = null }: DateRangeProps = $props();

	const formattedStart = $derived(formatDate(startDate));
	const formattedEnd = $derived(endDate ? formatDate(endDate) : 'Present');
	const duration = $derived(calculateDuration(startDate, endDate));
</script>

<div class="text-sm text-text-muted">
	<time datetime={startDate instanceof Date ? startDate.toISOString() : startDate}>
		{formattedStart}
	</time>
	<span class="mx-1">-</span>
	{#if endDate}
		<time datetime={endDate instanceof Date ? endDate.toISOString() : endDate}>
			{formattedEnd}
		</time>
	{:else}
		<span>{formattedEnd}</span>
	{/if}
	<span class="block text-xs mt-1">{duration}</span>
</div>
