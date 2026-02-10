<script lang="ts">
	import type { Education, TimelineLayout } from '$lib/types/education';
	import SchoolCard from './SchoolCard.svelte';

	interface Props {
		educations: Education[];
		layout?: TimelineLayout;
		showTimeline?: boolean;
		title?: string;
	}

	let {
		educations,
		layout = 'vertical',
		showTimeline = true,
		title = 'Education'
	}: Props = $props();

	// Sort by start date, newest first
	const sortedEducations = $derived(
		[...educations].sort((a, b) => {
			const dateA = typeof a.startDate === 'string' ? new Date(a.startDate) : a.startDate;
			const dateB = typeof b.startDate === 'string' ? new Date(b.startDate) : b.startDate;
			return dateB.getTime() - dateA.getTime();
		})
	);
</script>

<section class="mb-16">
	<!-- Section Title -->
	<h2 class="text-3xl font-bold text-text-primary mb-8">{title}</h2>

	<!-- Timeline Container -->
	<div class="relative">
		<!-- Timeline Line (desktop only) -->
		{#if showTimeline && layout === 'vertical'}
			<div
				class="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block"
				aria-hidden="true"
			></div>
		{/if}

		<!-- Education Cards -->
		<div class="space-y-8 {showTimeline ? 'md:pl-8' : ''}">
			{#each sortedEducations as education (education.id)}
				<SchoolCard {education} />
			{/each}
		</div>
	</div>
</section>
