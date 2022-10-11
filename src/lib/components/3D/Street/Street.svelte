<script>
	import { Mesh, Group, useTexture } from '@threlte/core';
	import { text } from 'svelte/internal';
	import {
		Color,
		DoubleSide,
		LinearEncoding,
		MeshBasicMaterial,
		MeshStandardMaterial,
		PlaneGeometry,
		RepeatWrapping,
		ShaderMaterial,
		sRGBEncoding
	} from 'three';
	import Buildings from './Buildings.svelte';
	import Lantern from './Lantern.svelte';
	import Model from './Model.svelte';

	const [normal, ao, bump, rough, height] = useTexture([
		'/images/street-normal.jpg',
		'/images/street-ao.jpg',
		'/images/street-bump.png',
		'/images/street-rough.jpg',
		'/images/street-height.png'
	]);
	const texture = useTexture('/images/street.jpg', {
		onLoad: (tex) => {
			tex;
			tex.wrapS = RepeatWrapping;
			tex.wrapT = RepeatWrapping;
			tex.encoding = sRGBEncoding;

			tex.offset.set(0, 0);
			tex.repeat.set(64, 16);
		}
	});

	const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
		uniform float uOpacity;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), uOpacity);
    }
  `;

	const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `;
</script>

<!-- Street -->
<Mesh
	receiveShadow
	rotation={{ x: -Math.PI / 2 }}
	position={{ y: -0.07 }}
	geometry={new PlaneGeometry(100, 18)}
	material={new MeshStandardMaterial({
		color: '#eee'
		// map: texture,
		// shadowSide: DoubleSide,
		// normalMap: normal,
		// transparent: true,
		// opacity: 0.7
	})}
/>
<!-- Background -->
<Mesh
	position={{ z: -7, y: 9 }}
	geometry={new PlaneGeometry(100, 18)}
	material={new ShaderMaterial({
		fragmentShader,
		vertexShader,
		uniforms: {
			uOpacity: {
				value: 1
			},
			color1: {
				value: new Color('lightblue')
			},
			color2: {
				value: new Color('deepskyblue')
			}
		}
	})}
/>
<Model />
<Lantern />
<Buildings />
