<script lang="ts">
	import type { WorkExperience } from '$lib/types/experience';
	import DateRange from './DateRange.svelte';
	import JobDescription from './JobDescription.svelte';
	import TechTag from './TechTag.svelte';

	type JobCardProps = {
		job: WorkExperience;
	};

	let { job }: JobCardProps = $props();
</script>

<article
	class="bg-surface p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
>
	<div class="flex items-start justify-between mb-4">
		<div class="flex-1">
			<h3 class="text-2xl font-bold text-text-primary mb-1">{job.company}</h3>
			<h4 class="text-xl font-semibold text-text-secondary mb-2">{job.position}</h4>
			{#if job.location}
				<p class="text-sm text-text-muted mb-2">{job.location}</p>
			{/if}
		</div>
	</div>

	<div class="mb-4">
		<DateRange startDate={job.startDate} endDate={job.endDate} />
	</div>

	<div class="mb-4">
		<JobDescription content={job.description} />
	</div>

	{#if job.technologies && job.technologies.length > 0}
		<div class="flex flex-wrap gap-2 mt-4">
			{#each job.technologies as tech}
				<TechTag name={tech} />
			{/each}
		</div>
	{/if}
</article>
