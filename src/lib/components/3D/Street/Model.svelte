<script lang="ts">
	import { GLTF } from '@threlte/extras';
	import type { GLTF as tGLTF } from 'three/examples/jsm/loaders/GLTFLoader';
	import type { Material, MeshStandardMaterial } from 'three';

	let gltf: tGLTF | undefined;
	let materialsRef: { [x: string]: Material | undefined };

	$: {
		if (materialsRef) {
			const mats = Object.values(materialsRef);
			mats.forEach((mat) => {
				if (!mat) return;
				(mat as MeshStandardMaterial).flatShading = true;
				mat.toneMapped = false;
			});
		}
	}
</script>

<GLTF
	bind:gltf
	url="/models/bar/scene.gltf"
	position={{ z: -4, x: 0.3 }}
	scale={2}
	castShadow
	bind:materials={materialsRef}
	receiveShadow
/>
