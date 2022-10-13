<script lang="ts">
	//@ts-ignore
	import Lenis from '@studio-freight/lenis';

	interface LenisScroll {
		scroll: number;
		limit: number;
		velocity: number;
		direction: string;
		progress: number;
	}

	const lenis = new Lenis({
		duration: 1.2,
		easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
		direction: 'vertical',
		smooth: true,
		smoothTouch: false,
		touchMultiplier: 2
	});

	//@ts-ignore
	window.lenis = lenis;

	// Info
	// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }: LenisScroll) => {
	// 	({ scroll, limit, velocity, direction, progress });
	// });

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
</script>
