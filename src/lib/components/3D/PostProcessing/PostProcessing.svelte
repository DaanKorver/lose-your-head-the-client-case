<script lang="ts">
	import { Pass, useFrame } from '@threlte/core';
	import vertexShader from './vertexShader.glsl';
	import fragmentShader from './fragmentShader.glsl';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
	import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';

	let counter = 0.0;

	useFrame(() => {
		myEffect.uniforms.amount.value += 0.01;
	});

	const myEffect = {
		uniforms: {
			tDiffuse: { value: null },
			amount: { value: counter }
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader
	};

	const pass = new ShaderPass(myEffect);
</script>

<Pass pass={new FilmPass(0, 0, 0, 0)} />
