<template>
	<v-row>
		<v-col :md="4" class="info-box">
			<h1>4</h1>
			<p>Anciallary services</p>
		</v-col>
		<v-col :md="4" class="info-box active">
			<h1>$ 500</h1>
			<p>Gross charge</p>
		</v-col>
		<v-col :md="4" class="info-box">
			<h1>$ 15</h1>
			<p>Apply Discount</p>
		</v-col>
		<v-col :md="12" align="center">
			<div class="sh-button">
				<div class="sub-container">
					<div class="text">
						Choose you insurance
					</div>
					<div class="icon">
						<img src="@/assets/image/surface1.svg" />
					</div>
				</div>
			</div>	
		</v-col>
	</v-row>
</template>

<style scoped lang="scss">
.info-box{
	text-align: center;
	h1{
		font-weight: 200 !important;
	}
	&.active{
		background: #00cae933;
		border-radius: 5px;
	}
}
.sh-button{
	display: inline-block;
	border-radius: 2rem;
	padding: 8px 25px;
	border: 2px solid #00cae9;
	.sub-container{
		display: flex;
		align-items: center;
		.text{
			text-align: center;
			margin-bottom: 0;
			color: #444;
			display: inline-block;
			font-size: 1rem;
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
</style>