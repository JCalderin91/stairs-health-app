<template>
	<v-container id="categories">
		<div class="categories-container">
			<div class="categories-body">
				<slider ref="slider" :options="options">
					<!-- slideritem wrapped package with the components you need -->
					<slideritem v-for="(item,index) in someList" style="width:14%" :key="index">
						<category :active="index==2?true:false" :img="item.img" :title="item.title" />
					</slideritem>
					<!-- Customizable loading -->
					<div slot="loading">loading...</div>
				</slider>
			</div>
			<div class="inputs-container">
				Aqui es el betulio
			</div>
		</div>
	</v-container>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
import Category from '@/components/Category'
export default {
	data () {
		return {
			//data list [array]
			someList:[
				{
					img: 'fisioterapeuta.svg',
					title: 'slide1'
				},{
					img: 'teeth.svg',
					title: 'Odontology'
				},{
					img: 'psychiatry.svg',
					title: 'Phichiatry'
				},{
					img: 'bone.svg',
					title: 'Traumatology'
				},{
					img: 'heartbeat.svg',
					title: 'Cardiology'
				},{
					img: 'rinon.svg',
					title: 'Nephrology'
				},{
					img: 'utero (1).svg',
					title: 'slide7'
				}
			],
			//Slider configuration [obj]
			options: {
				currentPage: 0,
				infinite: 7,
				slidesToScroll: 7,
			}
		}
	},
	components: {
		slider,
		slideritem,
		Category
	}
}
</script>
<style scope lang="scss">
#categories{
	position: relative;
	.categories-container{
		background-color: #F5F5F5;
		margin-top: 0;
		.categories-body{
			position: relative;
			transform: translateY(-28px);
			margin: 0 15px;
			background-color: white;
			border-radius: 3px;
			z-index: 2;
		}
	}
	.inputs-container{
		padding: 15px;

	}
}
</style>