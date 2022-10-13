<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import { LinearEncoding } from 'three';
	import Camera from './Camera.svelte';
	import Street from './Street/Street.svelte';

	import { usePopup } from '$lib/state/popupStore';
	import { HTML } from '@threlte/extras';
	import { fly } from 'svelte/transition';
	import Lights from './Lights.svelte';
	import gsap from 'gsap';

	const { renderer } = useThrelte();
	let overlay: HTMLDivElement;

	if (renderer) {
		renderer.outputEncoding = LinearEncoding;
	}

	const { camera } = useThrelte();

	function redirect() {
		usePopup.set({ popup: false });
		document.body.style.overflow = 'hidden !important';
		//@ts-ignore
		window.lenis.stop();

		gsap.to($camera.position, {
			z: -1.45,
			x: 0.4,
			y: 0.35,
			delay: 0.5,
			duration: 0.8,
			ease: 'Expo.easeIn'
		});

		gsap.to(overlay, {
			opacity: 1,
			delay: 1.1,
			onComplete: () => {
				//@ts-ignore
				window.location = 'https://lose-your-head-the-client-case.vercel.app/';
			}
		});
	}
</script>

<!-- <PostProcessing /> -->
<Street />
<Camera />
<Lights />
<HTML position={{ x: 0.2, y: 0.82, z: -4 }}>
	{#if $usePopup.popup}
		<p in:fly={{ y: 10 }} out:fly={{ y: -20 }}>Click to enter</p>
		<div class="fake-click" on:click={redirect} />
	{/if}
	<div class="overlay" bind:this={overlay} />
</HTML>

<style>
	p {
		padding: 0.3rem 2rem;
		background-color: white;
		position: relative;
	}

	p::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, 50%) rotate(45deg);
		width: 0.5rem;
		height: 0.5rem;
		bottom: 0;
		background-color: white;
	}

	.fake-click {
		width: 6rem;
		position: absolute;
		height: 9rem;
		top: 4.6rem;
		left: 1.6rem;
		opacity: 0.4;
	}

	.overlay {
		background-color: black;
		position: fixed;
		top: 0;
		left: 0;
		width: 110vw;
		height: 130vh;
		transform: translate(-50%, -50%);
		opacity: 0;
		pointer-events: none;
		z-index: 10;
	}
</style>
