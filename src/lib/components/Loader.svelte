<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import { useEnter } from '$lib/state/enterStore';

	let { progress } = useProgress();
	const loadingProgress = tweened(0);

	$: loadingProgress.set($progress);
</script>

{#if !$useEnter.entered}
	<div class="wrap" transition:fade>
		<div class="text">
			<p>The origin story of</p>
			<h1>Ilojo Bar</h1>
		</div>
		{#if $loadingProgress !== 1}
			<div
				out:fly={{ y: 25, duration: 400 }}
				class="progress"
				style="--progress: {$loadingProgress * 100}%"
			/>
		{:else}
			<button
				on:click={() => useEnter.set({ entered: true, animated: false })}
				in:fly={{ y: 25, delay: 450 }}>Enter experience</button
			>
		{/if}
	</div>
{/if}

<style>
	.wrap {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 5;
		background: url('/images/ilojobar.webp');
		background-size: cover;
		background-position: center;
		color: #ffffff;
	}

	.wrap::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: -1;
	}

	p {
		font-size: clamp(1rem, 6vw, 2rem);
	}

	.progress {
		width: 20rem;
		height: 3px;
		background-color: #757575;
		border-radius: 1rem;
		position: absolute;
		left: 50%;
		top: 55%;
		transform: translate(-50%, -50%);
	}

	.progress::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: var(--progress);
		height: 100%;
		background-color: #ffffff;
	}

	h1 {
		font-size: clamp(3rem, 6vw, 6rem);
		text-transform: uppercase;
		margin: 0;
	}

	.text {
		position: absolute;
		left: 50%;
		top: 35%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	}

	button {
		padding: 1rem;
		border: 1px solid #ffffff;
		background-color: transparent;
		color: #ffffff;
		font-size: 1.2rem;
		text-transform: uppercase;
		position: absolute;
		left: 50%;
		top: 55%;
		transform: translate(-50%, -50%);
		font-size: clamp(1rem, 4vw, 1.3rem);
		white-space: nowrap;
		transition: 300ms color ease-out, 300ms background-color ease-out;
		cursor: pointer;
	}

	button:hover,
	button:focus {
		background-color: rgba(255, 255, 255, 0.4);
		color: white;
	}
</style>
