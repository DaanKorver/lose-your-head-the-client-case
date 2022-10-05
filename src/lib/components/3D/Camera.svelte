<script lang="ts">
	import { OrbitControls, PerspectiveCamera, useFrame, useThrelte } from '@threlte/core';
	import AxesHelper from '../helpers/AxesHelper.svelte';
	import { isDebug } from '$lib/utils/isDebug';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	const { camera } = useThrelte();

	useFrame(() => null);

	onMount(() => {
		gsap
			.timeline({
				scrollTrigger: {
					scrub: true,
					pin: document.querySelector('main'),
					start: 'top top',
					end: '+=300%'
				}
			})
			.to(
				$camera.position,
				{
					z: 8,
					y: 1,
					ease: 'ease-out'
				},
				'scene1'
			)
			.to(
				$camera.rotation,
				{
					x: 0
				},
				'scene1'
			)
			.to($camera.position, {
				z: 1,
				ease: 'none'
			});
	});
</script>

{#if $isDebug}
	<AxesHelper />
	<PerspectiveCamera fov={70} position={{ z: -5 }}>
		<OrbitControls enableDamping minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
	</PerspectiveCamera>
{:else}
	<PerspectiveCamera
		fov={70}
		rotation={{ x: -0.25 }}
		position={{ z: 10, y: 2 }}
		lookAt={{ x: 0, y: 0, z: 0 }}
	/>
{/if}
