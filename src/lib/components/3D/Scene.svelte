<script lang="ts">
	import { AmbientLight, OrbitControls, PerspectiveCamera, useThrelte } from '@threlte/core';
	import Street from './Street/Street.svelte';
	import Camera from './Camera.svelte';
</script>

<Street />
<Camera />
<AmbientLight color={'white'} intensity={0.8} />
