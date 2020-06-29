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
					<img class="img-phone" src="@/assets/image/banner-gif-1.png" alt="">
				</v-col>
			</v-row>
			
		</section>
	</div>
</template>
<style lang="scss" scope>
	.hero{
		height: calc(100vh - 80px);
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
				height: 100%;
			}
		}
		.up{
			z-index: 1;
		}
	}
</style>