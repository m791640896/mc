<template>
	<view>
		<view class="input">
			<image src="../static/images/3.png" mode=""></image>
			<input @input="inputValue" @confirm="wc" type="text" placeholder='请输入您想要的商品'>
			<view class="a1" @click="ss">搜索</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	let s = ref('')

	let inputValue = (e) => {
		// 			console.log(e.detail
		// .value);
		s.value = e.detail.value
	}

	let wc = (e) => {
		console.log(e.detail.value);
		uni.navigateTo({
			url: '/pages/ss/ss?name=' + e.detail.value,

		})
	}
	
	let ss =()=>{
		if(s.value){
			uni.navigateTo({
				url: '/pages/ss/ss?name=' + s.value,
			
			})
		}
		
	}
	
</script>

<style scoped>
	.input {
		width: 710rpx;
		background-color: red;
		height: 64rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		background: #f4f4f4;
		border-radius: 28rpx;
		padding-top: 20rpx;
	}

	.input image {
		width: 40rpx;
		height: 40rpx;
		float: left;
		margin: 0 20rpx;

	}

	input {
		float: left;
	}
	.a1{
		float: right;
		font-size: 30rpx;
		line-height: 40rpx;
	}
</style>