<script lang="ts">
	import type { Education } from '$lib/types/education';
	import DateRange from '../experience/DateRange.svelte';

	interface Props {
		education: Education;
	}

	let { education }: Props = $props();
</script>

<div class="bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
	<!-- School name (larger, bold) -->
	<h3 class="text-2xl font-bold text-text-primary mb-1">
		{education.school}
	</h3>

	<!-- Degree and Major -->
	<p class="text-xl text-text-secondary mb-1">
		{education.degree} in {education.major}
	</p>

	<!-- Minor (if present) -->
	{#if education.minor}
		<p class="text-lg text-text-secondary mb-1">
			Minor in {education.minor}
		</p>
	{/if}

	<!-- Location -->
	<p class="text-sm text-text-muted mb-3">
		{education.location}
	</p>

	<!-- Date Range -->
	<DateRange startDate={education.startDate} endDate={education.endDate} />
</div>
