<template>
	<v-container>
		<v-row>
			<v-col :md="4">
				<v-img class="main-img" src="@/assets/image/hero.png" height="250"></v-img> 
			</v-col>
			<v-col :md="8" class="pt-10">
				<h1 class="title-clinic">Clinic Domenic</h1>	
				<div class="details-clinic">
					<h6 class="details-clinic-item">867 Greenholt parkways Apt. 670, New York city</h6>
					<h6 class="details-clinic-item">www.clinicdomenic.com</h6>
					<h6 class="details-clinic-item">10 am - 10pm</h6>
					<h6 class="details-clinic-item">603775138</h6>
				</div>	
				<div class="button d-flex justify-end">
					<div class="sh-button primary">
						<div class="sub-container">
							<div class="text">
								Save your <b>Spot</b>
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

<style scope lang="scss">
	.main-img{
		z-index:5;
	}
	.title-clinic{
		font-weight: 100;
		font-size: 2.5rem;
	}
	.details-clinic{
		.details-clinic-item{
			padding: 5px 0;
			font-size: .8rem 
		}
	}
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
</style>