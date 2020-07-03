<template>
	<div class="pa-4">
		<h2 class="text-center py-4">Log In</h2>
		<div class="optional-logins">
			<a href="">
				<i class="fa fa-google"></i>
			</a>
			<a href="">
				<i class="fa fa-facebook"></i>
			</a>
			<a href="">
				<i class="fa fa-apple"></i>
			</a>
		</div>
		<p class="text-center">
			<small >Log In auth</small>			
		</p>
		<div class="form">
			<v-text-field
				label="Email Adress"
				outlined
				prepend-inner-icon="mdi-mail"
				v-model="credentials.mail"
			></v-text-field>
			<v-text-field
				label="Password"
				outlined
				prepend-inner-icon="mdi-lock"
				v-model="credentials.password"
			></v-text-field>
			<div class="d-flex justify-center">
				<sh-button text="Log In" />
			</div>
		</div>
	</div>
</template>

<script>
	import ShButton from '@/components/ShButton'
	export default {
		components: {
			ShButton
		},
		data: () => ({
			credentials: {}
		})
	}
</script>

<style scoped lang="scss">
	.main-title{
		text-align: center;
	}
	.optional-logins{
		text-align: center;
		a{
			padding: 3px 5px;
			margin: 0 10px;
			font-size: 1.5rem;
		}
	}
</style>