<script lang="ts">
	import { AmbientLight, DirectionalLight, SpotLight } from '@threlte/core';
	import {
		type SpotLight as tSpotlight,
		type DirectionalLight as tDirectionalLight,
		Vector3
	} from 'three';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let lightRef: tSpotlight | undefined;
	let dirLight: tDirectionalLight | undefined;

	onMount(() => {
		if (!lightRef || !dirLight) return;
		gsap.to(lightRef, {
			intensity: 1.5,
			delay: 1,
			scrollTrigger: {
				scrub: true,
				start: '450%',
				end: '+=50%'
			}
		});
		gsap.to(dirLight, {
			intensity: 0,
			delay: 1,
			scrollTrigger: {
				scrub: true,
				start: '450%',
				end: '+=50%'
			}
		});
	});
</script>

<SpotLight
	target={new Vector3(0, 0, 6)}
	penumbra={0.5}
	position={{ x: 0, z: 6, y: 2 }}
	decay={2}
	distance={10}
	intensity={0}
	scale={0.01}
/>

<SpotLight
	target={new Vector3(0, 0, 2)}
	penumbra={0.5}
	position={{ x: 0, z: 2, y: 2 }}
	decay={2}
	distance={10}
	intensity={0}
	scale={0.01}
/>

<SpotLight
	target={new Vector3(0, 0, -2)}
	penumbra={0.5}
	position={{ x: 0, z: -1, y: 3 }}
	decay={2}
	distance={10}
	intensity={0}
	scale={1}
	bind:light={lightRef}
/>

<AmbientLight intensity={0.5} />
<DirectionalLight
	scale={1}
	shadow
	intensity={0.7}
	position={{ z: -3, x: 10, y: 10 }}
	bind:light={dirLight}
/>
