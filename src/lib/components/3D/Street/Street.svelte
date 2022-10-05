<script>
	import { Mesh, Group } from '@threlte/core';
	import { DoubleSide, MeshBasicMaterial, PlaneGeometry } from 'three';
	import Model from './Model.svelte';
</script>

<!-- Street -->
<Group>
	<Mesh
		rotation={{ x: Math.PI / 2 }}
		geometry={new PlaneGeometry(3.5, 18)}
		material={new MeshBasicMaterial({ color: '#bbb', side: DoubleSide })}
	/>
	<Mesh
		rotation={{ x: Math.PI / 2 }}
		position={{ y: -0.01 }}
		geometry={new PlaneGeometry(100, 18)}
		material={new MeshBasicMaterial({ color: '#deeded', side: DoubleSide })}
	/>
</Group>
<Model />
