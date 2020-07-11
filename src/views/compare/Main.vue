<template>
	<v-container class="pa-0">
		<v-row>
			<v-col md="6" class="px-5">
				<clinic />
			</v-col>
			<v-col md="6" class="px-5 right-panel">
				<clinic v-if="compare" />
				<v-row v-else>
					<v-row>
						<v-col md="6">
							<v-text-field hide-details outlined dense rounded placeholder="Speciality"
								append-icon="mdi-currency-usd" class="w-100 px-5"></v-text-field>
						</v-col>
						<v-col md="6">
							<v-text-field hide-details outlined dense rounded placeholder="Treatment"
								append-icon="mdi-microphone" class="w-100 px-5"></v-text-field>
						</v-col>
						<v-col md="6">
							<v-text-field hide-details outlined dense rounded placeholder="Location"
								append-icon="mdi-map-marker" class="w-100 px-5"></v-text-field>
						</v-col>
						<v-col md="6">
							<v-text-field hide-details outlined dense rounded placeholder="Price"
								append-icon="mdi-currency-usd" class="w-100 px-5"></v-text-field>
						</v-col>
					</v-row>
					<v-row class="px-5">
						<v-col @click="compare = !compare" md="6" v-for="i in 6" :key="i">
							<card-speciality  />
						</v-col>
					</v-row>
				</v-row>
			</v-col>
			<v-col v-if="compare" md="12" class="text-center">
				<v-btn @click="compare = !compare" color="primary" class="px-10 py-6" rounded>KEEP LOOKING</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Clinic from '@/components/Clinic'
	import CardSpeciality from '@/components/Card'
	export default {
		components: {
			Clinic,  CardSpeciality
		},
		data: () => ({
			compare: false
		})
	}
</script>

<style lang="scss" scoped>
.right-panel{
	position: relative;
	&::before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 50vw;
		background-color: #f5f5f5;
	}
}
</style>