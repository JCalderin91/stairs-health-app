<template>
	<v-row >
		<v-col :sm="12">
			<v-text-field
				label="Speciality"
				outlined
				rounded
				append-icon="mdi-magnify"
				v-model="specialitySearch"
			></v-text-field>
		</v-col>
		<v-col :md="4" v-for="(speciality, key) in filterSpecialities" :key="key">
			<category :active="speciality.title==='Cardiology'" :img="speciality.img" :title="speciality.title" />
		</v-col>
		<h6 v-if="filterSpecialities.length===0" class="text-center d-block">No hay resultados</h6>
	</v-row>
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
			}
		}
	}
</script>