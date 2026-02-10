<script lang="ts">
	import type { WorkExperience, TimelineLayout } from '$lib/types/experience';
	import JobCard from './JobCard.svelte';

	type ExperienceTimelineProps = {
		experiences: WorkExperience[];
		layout?: TimelineLayout;
		showTimeline?: boolean;
		title?: string;
	};

	let {
		experiences,
		layout = 'vertical',
		showTimeline = true,
		title = 'Work Experience'
	}: ExperienceTimelineProps = $props();

	// Sort experiences by start date (newest first)
	const sortedExperiences = $derived(
		[...experiences].sort((a, b) => {
			const dateA = new Date(a.startDate);
			const dateB = new Date(b.startDate);
			return dateB.getTime() - dateA.getTime();
		})
	);
</script>

<section class="w-full">
	{#if title}
		<h2 class="text-3xl font-bold text-text-primary mb-8">{title}</h2>
	{/if}

	<div class="relative">
		{#if showTimeline && layout === 'vertical'}
			<!-- Timeline line -->
			<div
				class="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block"
				aria-hidden="true"
			></div>
		{/if}

		<div class="space-y-8 {showTimeline ? 'md:pl-8' : ''}">
			{#each sortedExperiences as job (job.id)}
				<JobCard {job} />
			{/each}
		</div>
	</div>
</section>
