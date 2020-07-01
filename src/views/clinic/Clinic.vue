<template>
	<div>
		<info />
		<treatment />
		<v-container>
			<v-row>
				<v-col :md="6">
					<details-clinic />
				</v-col>
				<v-col :md="6">2</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import Info from './Info'
	import Treatment from './Treatment'
	import DetailsClinic from './Details'
	export default {
		components: {
			Info, Treatment, DetailsClinic
		}
	}
</script>