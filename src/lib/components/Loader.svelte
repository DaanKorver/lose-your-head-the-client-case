<script lang="ts">
	import { useLoading } from '$lib/state/loadingStore';
	import { scale } from 'svelte/transition';

	$: console.log($useLoading.loaded);
</script>

{#if !$useLoading.loaded}
	<p transition:scale>Loading...</p>
{/if}

<style>
	p {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 4rem;
	}
</style>
