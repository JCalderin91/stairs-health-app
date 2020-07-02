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
				<v-col :md="6">
					<div style="width:100%;margin:20px auto;height:400px">
						<slider ref="slider" :options="options" @slide="slide">
							<!-- slideritem wrapped package with the components you need -->
							<slideritem>
								<img class="img-phone" src="@/assets/image/banner-gif-1.png" alt="">
							</slideritem>
							<slideritem>
								<img class="img-phone" src="@/assets/image/banner-gif-2.png" alt="">
							</slideritem>
							<slideritem>
								<img class="img-phone" src="@/assets/image/banner-gif-3.png" alt="">
							</slideritem>
							<!-- Customizable loading -->
							<div slot="loading">Cargando...</div>
						</slider>
					</div>
					
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
						<div @click="setBanner(i-1)" :class="{'active': (i-1)===showBanner}" class="dot" v-for="i in 3" :key="i"></div>
						</div>
				</v-col>
			</v-row>
			
		</section>
	</div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
	components: {
		slider, slideritem
	},
	data () {
		return {
			showBanner: 0,
			options: {
				currentPage: 0,
				infinite: 1,
				slidesToScroll: 1,
				pagination: false,
				loop: true
			}
		}
	},
	mounted () {

	},
	methods: {
		setBanner (indx) {
			this.$refs.slider.$emit('slideTo', indx)
		},
		slide (slide) {
			this.showBanner = slide.currentPage
		}
	}
}
</script>

<style lang="scss" scoped>
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
				height: 100%
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