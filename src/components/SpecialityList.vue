<template>
	<section>
		<div>
			<v-text-field
				:label="`Specialities: ${specialitiesCount}`"
				outlined
				rounded
				append-icon="mdi-magnify"
				v-model="specialitySearch"
			></v-text-field>
		</div>
		<div>
			<v-row class="list-specialities">
				<v-col  :md="4" v-for="(speciality, key) in filterSpecialities" :key="key">
					<category :active="speciality.title==='Cardiology'" :img="speciality.img" :title="speciality.title" />
				</v-col>
				<v-col :md="12" filterSpecialities class="text-center d-block">No matches found</v-col>
			</v-row>
		</div>
	</section>
</template>

<script>
	import Category from '@/components/Category'
	import {mapState} from 'vuex'
	export default {
		components: {
			Category
		},
		data: () => ({
			specialitySearch: '',
		}),
		computed:{
			...mapState({
				specialities: ({Speciality}) => Speciality.all
			}),
			filterSpecialities () {
				return this.specialitySearch.length === 0 
					? this.specialities
					: this.specialities.filter(category => category.title.toUpperCase().includes(this.specialitySearch.toUpperCase()))
			},
			specialitiesCount () {
				return this.filterSpecialities.length
			}
		}
	}
</script>

<style scoped lang="scss">
	.list-specialities{
		height: 600px;
		overflow: auto;
	}
</style>