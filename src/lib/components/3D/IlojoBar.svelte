<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	$: innerWidth = 0;
	$: innerHeight = 0;

	function refresh() {
		ScrollTrigger.refresh();
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight on:resize={refresh} />

<div>
	<Canvas
		size={{ width: innerWidth, height: innerHeight }}
		dpr={window.devicePixelRatio}
		rendererParameters={{ antialias: true }}
		flat={true}
		linear
	>
		<Scene />
	</Canvas>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
</style>
