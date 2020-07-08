<template>
	<v-container>
		<v-row>
			<v-col md="6">
				<clinic />
			</v-col>
			<v-col md="6">
				<clinic />
			</v-col>
			<v-col md="12" class="text-center">
				<sh-button text="KEEP LOOKING" class="px-10 py-3" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Clinic from '@/components/Clinic'
	import ShButton from '@/components/ShButton'
	export default {
		components: {
			Clinic, ShButton
		}
	}
</script>