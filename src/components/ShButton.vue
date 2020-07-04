<template>
	<div class="sh-button primary">
		<div class="sub-container">
			<div class="text">
				{{text}}
			</div>
			<div v-if="this.img" class="icon">
				<img :src="getImg()" :class="{'invert': invert}"/>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		props: {
			text: {
				type: String
			},
			img: {
				type: String,
				default: false
			},
			invert: {
				type: Boolean, 
				default: false
			}
		},
		methods: {
			getImg () {
				return this.img 
					? require('../assets/image/' + this.img)
					: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.sh-button{
		cursor: pointer;
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
		.invert{
			filter: invert(1)
		}
	}
</style>