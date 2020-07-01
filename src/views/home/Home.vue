<template>
	<div>
		<hero />
		<categories />
		<clinics />		
		<features />		
		<parallax />		
		<end-page />		
	</div>
</template>

<script>
	import Hero from './Hero'
	import Categories from './Categories'
	import Clinics from './Clinics'
	import Features from './Features'
	import Parallax from './Parallax'
	import EndPage from './EndPage'
	export default {
		components : {
			Hero, Categories, Clinics, Features, Parallax, EndPage
		},
		data () {
			return {}
		}
	}
</script>