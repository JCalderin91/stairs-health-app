<template>
	<div>
		<div class="tabs">
			<div @click="panel=1" class="tabs-item" :class="{'active': panel===1}">Treatments & Price list</div>
			<div @click="panel=2" class="tabs-item" :class="{'active': panel===2}">Direct contact</div>
		</div>
		<br>
		<v-row v-if="panel===1">
			<v-col :sm="12">
				<v-text-field
					label="Speciality"
					outlined
					append-icon="mdi-magnify"
					v-model="speciality"
				></v-text-field>
			</v-col>
			<v-col :md="4" v-for="(category, key) in filterCategories" :key="key">
				<category :active="category.title==='Cardiology'" :img="category.img" :title="category.title" />
			</v-col>
			<h6 v-if="filterCategories.length===0" class="text-center d-block">No hay resultados</h6>
		</v-row>
		<div v-else>
			<v-img src="@/assets/image/map.png" height="200"/>
			<br>
			<information class="px-2" />
			<br>
			<div class="icons">
				<i class="fa fa-envelope"></i>
				<i class="fa fa-globe"></i>
				<i class="fa fa-instagram"></i>
				<i class="fa fa-twitter"></i>
				<i class="fa fa-facebook"></i>
			</div>
			<br>
			<div class="d-flex justify-center">
				<sh-button text="Call Us" img="phone.svg" />
			</div>
		</div>
	</div>
</template>

<script>
	import Category from '@/components/Category'
	import Information from '@/components/Information'
	import ShButton from '@/components/ShButton'

	export default {
		components: {
			Category, Information, ShButton
		},
		data: () => ({
			speciality: '',
			categories: [
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
			panel: 1,
		}),
		computed:{
			filterCategories () {
				return this.speciality.length === 0 
					? this.categories
					: this.categories.filter(category => category.title.toUpperCase().includes(this.speciality.toUpperCase()))
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabs{
		display: flex;
		justify-content: space-between;
		.tabs-item{
			cursor: pointer;
			font-size: 1.3rem;
			padding: 8px 20px;
			&.active{
				border-bottom: 3px solid #00cae9;
			}
		}
	}
	.icons{
		text-align: center;
		font-size: 2.5rem;
		i{
			padding: .1rem .5rem;
		}
	}
</style>