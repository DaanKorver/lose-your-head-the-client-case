<script lang="ts">
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import SmoothScroll from '$lib/components/SmoothScroll.svelte';
	import Loader from '$lib/components/Loader.svelte';

	// Register plugins
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.defaults({
		immediateRender: false
	});
</script>

<SmoothScroll />
<Loader />
<main>
	<slot />
</main>

<style>
	main {
		height: 100vh;
	}
</style>
