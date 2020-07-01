<template>
	<div>
		<hero />
		<categories />
		<clinics />		
		<features />		
		<parallax />
	</div>
</template>

<script>
	import Hero from './Hero'
	import Categories from './Categories'
	import Clinics from './Clinics'
	import Features from './Features'
	import Parallax from './Parallax'
	export default {
		components : {
			Hero, Categories, Clinics, Features, Parallax
		},
		data () {
			return {}
		}
	}
</script>