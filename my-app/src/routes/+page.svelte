<script lang="ts">
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import EducationTimeline from '$lib/components/education/EducationTimeline.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { workExperiences } from '$lib/data/experience-data';
	import { educations } from '$lib/data/education-data';
</script>

<div class="min-h-screen bg-background">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
		<!-- Header -->
		<header class="mb-12 sm:mb-16 text-center">
			<h1 class="text-5xl font-bold text-text-primary mb-2">Jonathan Villarreal</h1>
			<p class="text-xl text-text-secondary">Software Engineer</p>
		</header>

		<!-- Experience Timeline -->
		<ExperienceTimeline experiences={workExperiences} showTimeline={true} title="Experience" />

		<!-- Spacing between sections -->
		<div class="my-16"></div>

		<!-- Education Timeline -->
		<EducationTimeline educations={educations} showTimeline={true} title="Education" />

		<!-- Footer with Resume Download -->
		<Footer />
	</div>
</div>
