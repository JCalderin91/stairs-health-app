<template>
	<v-container>
		<specialities-slider />
		<v-row>
			<v-col md="3">
				<v-text-field hide-details outlined dense rounded placeholder="Speciality" append-icon="mdi-currency-usd"
					class="w-100"></v-text-field>
			</v-col>
			<v-col md="3">
				<v-text-field hide-details outlined dense rounded placeholder="Treatment" append-icon="mdi-microphone"
					class="w-100"></v-text-field>
			</v-col>
			<v-col md="3">
				<v-text-field hide-details outlined dense rounded placeholder="Location" append-icon="mdi-map-marker"
					class="w-100"></v-text-field>
			</v-col>
			<v-col md="3">
				<v-text-field hide-details outlined dense rounded placeholder="Price" append-icon="mdi-currency-usd"
					class="w-100"></v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col :md="mapCol" class="mapContainer">
				<!-- <div class="expand-button" @click="toogleMap()">
					<i v-if="mapCol===12" class="fa fa-chevron-left collapse-icon"></i>
					<span class="expand-text">{{mapCol === 3 ? 'Expand' : 'Collapse'}} map</span>
					<i v-if="mapCol===3" class="fa fa-chevron-right expand-icon"></i>
				</div> -->
				<div class="mapa" :class="{'static-map': true}">
					<map-specialities id="map"  />
				</div>
				<div id="floor"></div>
			</v-col>
			<v-col v-if="mapCol === 3" :md="9" class="specialities-container----">
				<v-row id="specialities-container">
					<v-col md="4" v-for="i in 20" :key="i">
						<specialities-card />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SpecialitiesSlider from '@/components/SpecialitiesSlider'
import SpecialitiesCard from '@/components/Card'
import MapSpecialities from '@/components/Map'
export default {
	components: {
		SpecialitiesSlider,
		SpecialitiesCard,
		MapSpecialities
	},
	data: () => ({
		mapCol: 3,
		fixed: ''
	}),
	methods: {
		toogleMap() {
			this.mapCol = this.mapCol === 3 ? 12 : 3
		}
	}
}
</script>

<style scoped lang="scss">


.indicator {
	position: fixed;
	bottom: 12px;
	right: 12px;
	z-index: 9999;
}

.mapContainer {
	.static-map {
		position: sticky;
		top: 61px;
		z-index: 11;
	}

	#floor {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #000;
	}

	.expand-button {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #00cae9;
		padding: .5rem 1.5rem;
		color: white;
		border-radius: 0 0 0 13px;
		z-index: 10;
		cursor: pointer;

		.expand-text {
			font-size: .9rem;
			font-weight: bold;
		}

		.expand-icon {
			font-size: .8rem;
			margin-left: 5px;
			transform: translateY(1px);
		}

		.collapse-icon {
			font-size: .8rem;
			margin-right: 5px;
			transform: translateY(1px);
		}
	}
}

.specialities-container {
	height: 100vh;
	overflow-y: scroll;
}
</style>