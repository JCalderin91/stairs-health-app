<template>
	<v-container id="categories">
		<div class="categories-container">
			<div class="categories-body">
				<div @click="slidePrev()" class="slider-controller left-controller">
					<i class="fa fa-chevron-left"></i>
				</div>
				<slider class="slider" ref="sliderSpeciality" :options="options">
					<!-- slideritem wrapped package with the components you need -->
					<slideritem v-for="(item,index) in specialities" style="width:14%" :key="index">
						<category :img="item.img" :title="item.title" />
					</slideritem>
					<!-- Customizable loading -->
					<div slot="loading">loading...</div>
				</slider>
				<div @click="slideNext()" class="slider-controller right-controller">
					<i class="fa fa-chevron-right"></i>
				</div>
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
							class="mx-10"
						></v-text-field>
					</v-col>
					<v-col :md="4">
						<v-text-field
							outlined
							dense
							rounded
							placeholder="Zip code or City"
							append-icon="mdi-map-marker"
							class="mx-10"
						></v-text-field>
					</v-col>
					<v-col :md="4">
						<v-range-slider
							label="Price range"
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
import {mapState} from 'vuex'
import Category from '@/components/Category'
export default {
	data () {
		return {
			//data list [array]
			range: [125,587],
			//Slider configuration [obj]
			options: {
				currentPage: 0,
				infinite: 7,
				slidesToScroll: 7,
				pagination: false,
			}
		}
	},
	methods: {
		slideNext () {
			this.$refs.sliderSpeciality.$emit('slideNext')
		},
		slidePrev () {
			this.$refs.sliderSpeciality.$emit('slidePre')
		}
	},
	computed: {
		...mapState({
			specialities: ({Speciality}) => Speciality.all
		})
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
	z-index: 10;
	.categories-container{
		background-color: #F5F5F5;
		margin-top: 0;
		transform: translateY(-20px);
		.categories-body{
			position: relative;
			transform: translateY(-15px);
			margin: 10px 15px;
			background-color: white;
			z-index: 10;
			display: flex;
			height: 170px;
			border-radius: 5px;
			overflow: hidden;
			box-shadow: 0 1px 6px -2px #0000006b;
			.slider{
				display: block;
			}
			.slider-controller{
				height: 100%;
				background: #f5f5f5;
				display: flex;
				align-items: center;
				padding: 1.2rem;
				font-size: 1.2rem;
				color: #00cae9;
				cursor: pointer;
			}
		}
	}
	.inputs-container{
		padding: 0 15px;
	}
}
</style>