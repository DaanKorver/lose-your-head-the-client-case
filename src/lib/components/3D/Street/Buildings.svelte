<script lang="ts">
	import { Instance, InstancedMesh, Mesh } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	const { gltf: building } = useGltf('/models/buildings/single-building2.glb');
	const { gltf: market } = useGltf('/models/buildings/market.glb');
	$: buildingGeometry = ($building?.nodes['Cube'] as Mesh)?.geometry;
	$: buildingMaterial = ($building?.nodes['Cube'] as Mesh)?.material;

	$: marketGeometry = ($market?.nodes['Cube'] as Mesh)?.geometry;
	$: marketMaterial = ($market?.nodes['Cube'] as Mesh)?.material;
</script>

{#if $building && $market}
	<InstancedMesh castShadow id="building" geometry={buildingGeometry} material={buildingMaterial}>
		<InstancedMesh castShadow id="market" geometry={marketGeometry} material={marketMaterial}>
			<Instance id="building" position={{ x: -3, z: 2, y: 0.55 }} scale={0.7} />
			<Instance
				id="building"
				position={{ x: 3, z: 7, y: 0.55 }}
				scale={0.7}
				rotation={{ y: Math.PI }}
			/>

			<Instance
				id="market"
				position={{ x: 3.5, z: 2, y: 0.8 }}
				scale={0.8}
				rotation={{ y: Math.PI }}
			/>
			<Instance id="market" position={{ x: -3.5, z: 6, y: 0.8 }} scale={0.8} />
		</InstancedMesh>
	</InstancedMesh>
{/if}
