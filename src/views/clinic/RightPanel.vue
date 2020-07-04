<template>
	<div>
		<div class="tabs">
			<div @click="panel=1" class="tabs-item" :class="{'active': panel===1}">Treatments & Price list</div>
			<div @click="panel=2" class="tabs-item" :class="{'active': panel===2}">Direct contact</div>
		</div>
		<br>
		<speciality-list v-if="panel===1" />
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
	import Information from '@/components/Information'
	import ShButton from '@/components/ShButton'
	import SpecialityList from '@/components/SpecialityList'

	export default {
		components: {
			Information, ShButton, SpecialityList
		},		
		data: () => ({
			panel: 1
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