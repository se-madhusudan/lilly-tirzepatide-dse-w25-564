<template>
	<div class="rotate_wrapper">
		<div class="rotate_content">
			<div class="rotate_circle">
				<div v-if="userAgent.orientation === 'landscape'" class="rotate_phone"></div>
				<div v-if="userAgent.orientation === 'portrait'" class="rotate_phone-left"></div>
			</div>
			<span class="rotate_text" v-if="userAgent.orientation === 'landscape'">Rotate to portrait mode<br/> to display the content.</span>
			<span class="rotate_text" v-if="userAgent.orientation === 'portrait'">Rotate to landscape mode<br/> to watch the video.</span>
		</div>
	</div>
</template>

<script>
	import { TimelineMax, TweenMax } from 'gsap';
	import { mapState }              from 'vuex';

	export default {
		name: 'rotateLock',
		data() {
			return {};
		},
		props: [],
		computed: {
			...mapState([ 'userAgent' ])
		},
		methods: {
			rotationAnimationLandscape(origin, destination, direction) {
				let tl = new TimelineMax({ repeat: -1 });
				let element_1 = document.querySelector('.rotate_circle');
				tl.fromTo(element_1, 0.6, { opacity: 0 }, { opacity: 1 }, 0.2);
				tl.fromTo(element_1, 1, {
					rotationZ: '0deg',
					ease: Linear.easeNone
				}, {
					rotationZ: '90deg',
					ease: Linear.easeNone
				}, 1);
				tl.to(element_1, 0.6, { opacity: 0 }, 2);
			},
			rotationAnimationPortrait(origin, destination, direction) {
				let tl = new TimelineMax({ repeat: -1 });
				let element_2 = document.querySelector('.rotate_circle');
				tl.fromTo(element_2, 0.6, { opacity: 0 }, { opacity: 1 }, 0.2);
				tl.fromTo(element_2, 1, {
					rotationZ: '0deg',
					ease: Linear.easeNone
				}, {
					rotationZ: '-90deg',
					ease: Linear.easeNone
				}, 1);
				tl.to(element_2, 0.6, { opacity: 0 }, 2);
			}
		},
		mounted() {
			if (this.userAgent.orientation === 'landscape') {
				this.rotationAnimationLandscape();
			} else {
				this.rotationAnimationPortrait();
			}
		},
		watch: {}
	};
</script>

<style lang="scss" rel="stylesheet/scss">
	.rotate_wrapper {
		position: fixed;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999999;
		background-color: #ffffff;

		.rotate_content {
			display: flex;
			width: 100vw;
			height: 100vh;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: fixed;
		}

		.rotate_circle {
			width: 86px;
			height: 60px;
			position: relative;
			background-size: 100%;

			.screentest & {
				animation: none;
			}
		}

		.rotate_phone {
			background: url("./assets/rotate_to_portrait.svg") no-repeat center;
			width: 100%;
			height: 100%;
			position: absolute;
			/*	*/
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer */
			-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
			-webkit-user-select: none; /* Chrome, Safari, and Opera */
			-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
		}

		.rotate_phone-left {
			background: url("./assets/rotate_to_landscape.svg") no-repeat center;
			width: 100%;
			height: 100%;
			position: absolute;
			/*	*/
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer */
			-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
			-webkit-user-select: none; /* Chrome, Safari, and Opera */
			-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
		}

		.rotate_text {
			font-family: Helvetica, Arial, sans-serif;
			font-size: 18px;
			color: #142847;
			display: block;
			margin-top: 40px;
			text-align: center;

			/*	*/
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer */
			-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
			-webkit-user-select: none; /* Chrome, Safari, and Opera */
			-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
		}
	}
</style>
