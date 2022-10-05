<script lang="ts">
	import { GLTF } from '@threlte/extras';
	import type { GLTF as tGLTF } from 'three/examples/jsm/loaders/GLTFLoader';
	import { useLoading } from '$lib/state/loadingStore';

	let gltf: tGLTF | undefined;
</script>

<GLTF
	bind:gltf
	url="/models/bar/scene.gltf"
	position={{ z: -3, x: 0.3 }}
	scale={1.4}
	castShadow
	receiveShadow
	on:load={() => useLoading.set({ loaded: true })}
/>
