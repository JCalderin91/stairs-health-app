<template>
	<v-parallax
		dark
		src="@/assets/image/parallax.png"
		height="350"
	>
		<v-row
			align="center"
			justify="center"
		>
			<v-col :md="6" class="d-flex justify-center" cols="12">
				<div class="registered">
					<h1 class="display-1 font-weight-thin mb-4">Registered</h1>
					<h4 class="subheading">Build your application today!</h4>
				</div>
			</v-col>

			<v-col :md="6" class="d-flex justify-center" cols="12">
				<div class="premium">
					<h1 class="display-1 font-weight-thin mb-4">Premium</h1>
					<h4 class="subheading">Build your application today!</h4>
				</div>
			</v-col>
		</v-row>
	</v-parallax>
</template>

<style scoped lang="scss">
.registered{
	background-color: #00cae9ee;
	padding: 3rem 4.5rem;
	border-radius: 3px;
}
.premium{
	background-color: #ffe600ee;
	padding: 3rem 4.5rem;
	border-radius: 3px;
	color: #555;
}
</style>