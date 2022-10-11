<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import Street from './Street/Street.svelte';
	import Camera from './Camera.svelte';
	import { LinearEncoding } from 'three';

	import PostProcessing from './PostProcessing/PostProcessing.svelte';
	import Lights from './Lights.svelte';

	const { renderer } = useThrelte();

	if (renderer) {
		renderer.outputEncoding = LinearEncoding;
	}
</script>

<!-- <PostProcessing /> -->
<Street />
<Camera />
<Lights />
