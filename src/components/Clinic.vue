<template>
	<div>
		<v-img class="main-img" src="@/assets/image/hero.png" height="250"></v-img>
		<h1 class="title-clinic">Clinic Domenic</h1>	
		<information />	
		<div class="separador"></div>
		<h2>Treatment name</h2>
		<p>Treatment description associated cost for this service</p>
		<div class="separador"></div>
		<details-clinic class="px-10" />
	</div>
</template>

<script>
	import Information from '@/components/Information'
	import DetailsClinic from '@/views/clinic/Details'
	export default {
		components: {
			Information, DetailsClinic
		}
	}
</script>