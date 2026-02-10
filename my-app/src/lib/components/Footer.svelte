<script lang="ts">
	import LinkButton from './common/LinkButton.svelte';
	import { EyeIcon, DownloadIcon } from './icons';
</script>

<footer class="mt-16 py-8 text-center border-t border-white/10">
	<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
		<LinkButton href="/JonathanVillarreal_Resume.pdf" target="_blank">
			<EyeIcon />
			View Resume
		</LinkButton>

		<LinkButton href="/JonathanVillarreal_Resume.pdf" download="Jonathan_Villarreal_Resume.pdf">
			<DownloadIcon />
			Download Resume
		</LinkButton>
	</div>
</footer>
