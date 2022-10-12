<script lang="ts">
	import { OrbitControls, PerspectiveCamera, useFrame, useThrelte } from '@threlte/core';
	import AxesHelper from '../helpers/AxesHelper.svelte';
	import { isDebug } from '$lib/utils/isDebug';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { useEnter } from '$lib/state/enterStore';

	const { camera } = useThrelte();

	useFrame(() => null);

	$: {
		const scrollAnimation = gsap
			.timeline({
				scrollTrigger: {
					scrub: true,
					pin: document.querySelector('main'),
					start: 'top top',
					end: '+=500%'
				}
			})
			.fromTo(
				$camera.position,
				{
					z: 10,
					y: 2,
					x: 0
				},
				{
					z: 8,
					y: 1,
					x: 0,
					ease: 'none',
					duration: 1
				},
				'scene1'
			)
			.fromTo(
				$camera.rotation,
				{
					x: -0.25,
					y: 0,
					duration: 1
				},
				{
					x: 0,
					y: 0,
					duration: 1
				},
				'scene1'
			)
			.to($camera.position, {
				z: 1,
				y: 0.75,
				ease: 'none',
				duration: 2
			});

		const initCam = gsap
			.timeline({
				paused: true,
				ease: 'easeInOut',
				onComplete: () => {
					useEnter.set({ entered: true, animated: true });
				}
			})
			.fromTo(
				$camera.position,
				{
					z: 5,
					y: 6,
					x: -5,
					duration: 2
				},
				{
					z: 10,
					y: 2,
					x: 0,
					duration: 2
				},
				'init'
			)
			.fromTo(
				$camera.rotation,
				{
					x: -1,
					y: 0.2,
					duration: 2
				},
				{
					x: -0.25,
					y: 0,
					duration: 2
				},
				'init'
			);

		scrollAnimation.scrollTrigger?.disable();

		if ($useEnter.entered && !$useEnter.animated) {
			initCam.play();
		}

		if ($useEnter.animated) {
			scrollAnimation.scrollTrigger?.enable();
		}
	}

	onMount(() => {});
</script>

{#if $isDebug}
	<AxesHelper />
	<PerspectiveCamera fov={70} position={{ z: -5 }}>
		<OrbitControls enableDamping />
	</PerspectiveCamera>
{:else}
	<PerspectiveCamera fov={70} rotation={{ x: -0.5 }} lookAt={{ x: 0, y: 0, z: 0 }} />
{/if}
