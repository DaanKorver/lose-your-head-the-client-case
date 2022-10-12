<script>
	import IlojoBar from '$lib/components/3D/IlojoBar.svelte';
	import { useEnter } from '$lib/state/enterStore';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	let y = 0;
	$: instruction = $useEnter.animated;

	$: {
		instruction = y < 50 ? true : false;
	}
</script>

{#if instruction}
	<h2 transition:fade>Scroll to view the street</h2>
{/if}
<IlojoBar />
<svelte:window bind:scrollY={y} />

<style>
	h2 {
		position: fixed;
		top: 5%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 2.5rem;
		color: #ffffff;
	}
</style>
