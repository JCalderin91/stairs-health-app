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

			<div class="sh-button my-3">
				<div class="sub-container">
					<div class="text">
						Choose you insurance
					</div>
					<div class="icon">
						<img src="@/assets/image/surface1.svg" />
					</div>
				</div>
			</div>	
			<br>
			<table class="table w-100">
				<thead>
					<tr>
						<th>Ancillary Services</th>
						<th>CPT/HCPS</th>
						<th>Charge</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, key) in tabla_1" :key="key">
						<td>{{item.ac}}re</td>
						<td class="text-center">{{item.cpt}}</td>
						<td class="text-center">$ {{item.charge}}</td>
					</tr>
				</tbody>
			</table>

			<div class="separador"></div>

			<table class="table w-100">
				<thead>
					<tr>
						<th>Charges</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, key) in tabla_2" :key="key">
						<td>{{item.charges}}</td>
						<td class="text-center">$ {{item.price}}</td>
					</tr>
				</tbody>
			</table>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data: () => ({
			tabla_1: [
				{
					ac: 'Primari diagnostic procedure',
					cpt: 'XXX',
					charge: '100'
				},{
					ac: 'anestesia',
					cpt: 'XXX',
					charge: '100'
				},{
					ac: 'Pathology',
					cpt: 'XXX',
					charge: '100'
				},{
					ac: 'Phisician services',
					cpt: 'XXX',
					charge: '100'
				}
			],
			tabla_2: [
				{
					charges: 'Discounted Cash Price',
					price: '100',
				},{
					charges: 'Minimum Negociate Charge',
					price: '100',
				},{
					charges: 'Maximum Negociate Charge',
					price: '100',
				}
			],

		})
	}
</script>

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
.table{
	margin: 15px 5px;
	td{
		padding: 5px;
	}
}
.w-100{
	width:100%;
}

</style>