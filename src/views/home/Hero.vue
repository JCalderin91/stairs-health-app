<template>
	<div id="home">
		<section class="hero">
			<img src="@/assets/image/hero.png" alt="" class="img-hero">
			<img src="@/assets/image/wave.svg" alt="" class="img-hero-wave">
			<v-row class="container-hero" align="center">
				<v-col :md="6" class="d-flex align-center flex-column">
					<img class="img-logo" src="@/assets/image/logo-full-white.png" alt="">
					<h4 class="py-5 up white--text">Become a Stairs member</h4>
					<ul class="up white--text">
						<li>Get control of your healtcare y One Step.</li>
						<li>Multiple Telehealth visits every year.</li>
						<li>Your medical records saved in your system.</li>
						<li>We will guide you and help you find the best <br> quality and cost-effective care.</li>

					</ul>
				</v-col>
				<v-col :md="6" class="d-flex justify-center">
					<img class="img-phone" :src="getUrl()" :alt="showBanner">
				</v-col>
				<v-col :sm="12" class="up">
					<v-container>
						<div class="social-icons">
							<a href="#">
								<img class="icon" src="@/assets/icons/facebook-f.svg" alt="">
							</a>
							<a href="#">
								<img class="icon" src="@/assets/icons/twitter.svg" alt="">
							</a>
							<a href="#">
								<img class="icon" src="@/assets/icons/instagram.svg" alt="">
							</a>
							<a href="#">
								<img class="icon" src="@/assets/icons/globe-americas.svg" alt="">
							</a>

						</div>
					</v-container>
				</v-col>
				<v-col :sm="12" class="up d-flex justify-center">
					<div class="banner-dots">
						<div @click="setBanner(index)" :class="{'active': index===showBanner}" class="dot" v-for="(dot, index) in banners" :key="index"></div>
					</div>
				</v-col>
			</v-row>
			
		</section>
	</div>
</template>

<script>
export default {
	data () {
		return {
			banners: [
				'banner-gif-1.png',
				'banner-gif-2.png',
				'banner-gif-3.png'
			],
			showBanner: 0
		}
	},
	mounted () {
		setInterval( () => {
			if (this.showBanner<2) this.showBanner++
			else this.showBanner = 0
		}, 5000)
	},
	methods: {
		getUrl () {
			return require('../../assets/image/' + this.banners[this.showBanner])
		},
		setBanner (indx) {
			this.showBanner = indx
		}
	}
}
</script>

<style lang="scss" scope>
	.hero{
		height: calc(100vh - 40px);
		position: relative;
		.img-hero{
			position: absolute;
			top:0;
			left: 0;
			width: 100%;
			height:100%;
			z-index: 0;
		}
		.img-hero-wave{
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 1;
		}
		.container-hero{
			height:100%;
			.img-phone,
			.img-logo{
				z-index: 1;
			}
			.img-phone{
				height: 500px;
			}
		}
		.up{
			z-index: 1;
		}
		.social-icons{
			a{
				padding: 5px 8px;
				.icon{
					width: 1.2rem;
					height: 1.2rem;
					filter: invert(1);
				}
			}
		}
		.banner-dots{
			.dot{
				display: inline-block;
				height: 1rem;
				width: 1rem;
				background-color: #fff;
				border-radius: 50%;
				margin: 5px;
				cursor: pointer;
				transition: all .3s ease-in-out;
				&.active,
				&:hover{
					transform: scale(1.4)
				}
			}
		}
	}
</style>