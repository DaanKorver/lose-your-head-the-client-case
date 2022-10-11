<script>
	import IlojoBar from '$lib/components/3D/IlojoBar.svelte';
	import { useLoading } from '$lib/state/loadingStore';
	import { fly } from 'svelte/transition';
</script>

{#if $useLoading.loaded}
	<header in:fly={{ y: 50, delay: 1000, duration: 800 }}>
		<p>The origin story of</p>
		<h1>Ilojo Bar</h1>
	</header>
{/if}
<IlojoBar />

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem 0;
		font-size: 3rem;
	}
	h1,
	p {
		margin: 0;
		color: white;
	}

	h1 {
		text-transform: uppercase;
		letter-spacing: 0.5rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
