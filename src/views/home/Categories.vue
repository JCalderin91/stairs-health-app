<template>
	<v-container id="categories">
		<div class="categories-container">
			<div class="categories-body">
				<slider ref="slider" :options="options">
					<!-- slideritem wrapped package with the components you need -->
					<slideritem v-for="(item,index) in someList" style="width:14%" :key="index">
						<category :active="index==1?true:false" :img="item.img" :title="item.title" />
					</slideritem>
					<!-- Customizable loading -->
					<div slot="loading">loading...</div>
				</slider>
			</div>
			<div class="inputs-container">
				<v-row>
					<v-col :md="4">
						<v-text-field
							outlined
							rounded
							dense
							placeholder="Search"
							append-icon="mdi-magnify"
						></v-text-field>
					</v-col>
					<v-col :md="4">
						<v-text-field
							outlined
							dense
							rounded
							placeholder="Zip code or City"
							append-icon="mdi-map-marker"
						></v-text-field>
					</v-col>
					<v-col :md="4">
						<v-range-slider
							class="mt-5"
							v-model="range"
							min="100"
							max="1000"
							thumb-label="always"
							:thumb-size="24"
						></v-range-slider>
					</v-col>
				</v-row>
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
			range: [125,587],
			someList:[
				{
					img: 'ophthalmology.svg',
					title: 'Ophthalmology'
				},{
					img: 'heartbeat.svg',
					title: 'Cardiology'
				},{
					img: 'psychiatry.svg',
					title: 'Phichiatry'
				},{
					img: 'teeth.svg',
					title: 'Odontology'
				},{
					img: 'pacifier.svg',
					title: 'Pediatric'
				},{
					img: 'bone.svg',
					title: 'Traumatology'
				},{
					img: 'rinon.svg',
					title: 'Nephrology'
				}
			],
			//Slider configuration [obj]
			options: {
				currentPage: 0,
				infinite: 7,
				slidesToScroll: 7,
				pagination: false,
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
<style scoped lang="scss">
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
		padding: 0 15px;
	}
}
</style>