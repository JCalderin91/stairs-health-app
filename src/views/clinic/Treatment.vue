<template>
	<v-container id="treatment">
		<v-row>
			<v-col :md="6">
				<h2>Treatment name</h2>
				<p>Treatment description associated cost for this service</p>
			</v-col>
			<v-col :md="6" class="d-flex align-center justify-end">
				<div class="d-flex justify-end aligns-center">
					<div class="sh-button primary">
						<div class="sub-container">
							<div class="text">
								Compare providers
							</div>
							<div class="icon">
								<img src="@/assets/image/calendario-3.svg" />
							</div>
						</div>
					</div>
				</div>	
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped lang="scss">
#treatment{
	border-bottom: 2px solid #aaaaaa55;
	border-top: 2px solid #aaaaaa55;
	margin-bottom: 20px;
	.sh-button{
		display: inline-block;
		border-radius: 15px;
		padding: 8px 25px;
		.sub-container{
			display: flex;
			align-items: center;
			.text{
				margin-bottom: 0;
				display: inline-block;
				color: white;
				font-size: 1rem;
				b{
					color: white
				}
			}
			.icon{
				display: inline-block;
				height: 1.8rem;
				display: inline-block;
				margin-left: 10px;
				img{
					height: 100%;
				}
			}
		}
	}
}
</style>