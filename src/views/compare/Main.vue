<template>
	<v-container>
		<v-row>
			<v-col md="6">
				<clinic />
			</v-col>
			<v-col md="6">
				<clinic v-if="compare" />
				<v-row v-else>
					<v-col md="8">
						<v-row>
							<v-col md="6">
								<v-text-field hide-details outlined dense rounded placeholder="Speciality"
									append-icon="mdi-currency-usd" class="w-100"></v-text-field>
							</v-col>
							<v-col md="6">
								<v-text-field hide-details outlined dense rounded placeholder="Treatment"
									append-icon="mdi-microphone" class="w-100"></v-text-field>
							</v-col>
							<v-col md="6">
								<v-text-field hide-details outlined dense rounded placeholder="Location"
									append-icon="mdi-map-marker" class="w-100"></v-text-field>
							</v-col>
							<v-col md="6">
								<v-text-field hide-details outlined dense rounded placeholder="Price"
									append-icon="mdi-currency-usd" class="w-100"></v-text-field>
							</v-col>
						</v-row>
					</v-col>
					<v-col md="4">
						<div class="more-filters">
							More filters
						</div>
					</v-col>
					<v-col md="12">
						<v-row class="px-5">
							<v-col @click="compare = !compare" md="6" v-for="i in 6" :key="i">
								<card-speciality  />
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col md="12" class="text-center">
				<v-btn v-if="compare" @click="compare = !compare" color="primary" class="px-10 py-6" rounded>KEEP LOOKING</v-btn>
				<!-- <sh-button  text="KEEP LOOKING" class="px-10 py-3" /> -->
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Clinic from '@/components/Clinic'
	import ShButton from '@/components/ShButton'
	import CardSpeciality from '@/components/Card'
	export default {
		components: {
			Clinic, ShButton, CardSpeciality
		},
		data: () => ({
			compare: false
		})
	}
</script>

<style lang="scss" scoped>
.more-filters{
	border-radius: 1rem;
	border: 1px #a7a7a7be solid;
	margin-top: .8rem;
	height: calc(100% - 1.5rem);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>