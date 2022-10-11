<script lang="ts">
	import { Instance, InstancedMesh } from '@threlte/core';
	import { GLTF, useGltf } from '@threlte/extras';
	import type { BufferGeometry, Mesh, MeshBasicMaterial } from 'three';
	import type { GLTF as tGLTF } from 'three/examples/jsm/loaders/GLTFLoader';

	const { gltf } = useGltf('/models/lantern/lantern.glb');

	$: geometry = ($gltf?.nodes['Laterne_1_Material_#47_0'] as Mesh)?.geometry as BufferGeometry;
	$: material = ($gltf?.nodes['Laterne_1_Material_#47_0'] as Mesh)?.material as MeshBasicMaterial;
</script>

{#if $gltf}
	<h2>hoi</h2>
	<InstancedMesh rotation={{ x: -Math.PI / 2 }} position={{ y: 0.5 }} {geometry} {material}>
		<Instance scale={0.0015} position={{ x: -1.7 }} />
		<Instance scale={0.0015} position={{ x: 1.7 }} />

		<Instance scale={0.0015} position={{ x: -1.7, y: -3 }} />
		<Instance scale={0.0015} position={{ x: 1.7, y: -3 }} />

		<Instance scale={0.0015} position={{ x: -1.7, y: -6 }} />
		<Instance scale={0.0015} position={{ x: 1.7, y: -6 }} />

		<Instance scale={0.0015} position={{ x: -1.7, y: -8 }} />
		<Instance scale={0.0015} position={{ x: 1.7, y: -8 }} />
	</InstancedMesh>
{/if}
