<template>
	<view class="box" v-if="listArr.length">
		<view class="rmlist" v-for="(item,index) in listArr" :key="index" @click="spxq(item.Id)">
			<image lazy-load :src=item.imageUrl mode="">
			</image>
			<view class="q1">
				￥ {{item.priceStr}}
			</view>
			<view class="aa">
				<view class="w1">
					爆品
				</view>
				<view class="w2">
					一起拼
				</view>
			</view>
			<view class="q2">
				{{item.salePoint}}
			</view>
			<view class="q3">
				{{item.title}}
			</view>
		
			<view class="q4">
				{{item.evaluate}}条好评
			</view>
		</view>
	</view>

		<view class="" v-else>暂无商品 </view>

</template>

<script setup>
	import {
		onLoad,
		onReachBottom,
		onPageScroll
	} from "@dcloudio/uni-app"
	import {
		useRoute,
		useRouter
	} from 'vue-router'

	import {
		sslist
	} from '/pages/apis/apis.js'
import { ref } from "vue";

	const route = useRoute()
	const router = useRouter()
	let listArr =ref([])
	
	
	
	
	

	onLoad(() => {
		console.log(route.query);
	})
	
	
	let  qq= async()=>{
		let cc = (await sslist(route.query.name)).data
		console.log(cc);
		listArr.value=cc
	}
	qq()
	let spxq = (id) => {
		// console.log(id);
		// uni.setStorageSync('id', id)
	
		// uni.navigateTo({
		// 	url: '/pages/spxq/spxq'
		// })
		router.push({
			path: '/pages/spxq/spxq',
			query: {
				id
			}
		})
	}
	
</script>

<style scoped>
.box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40rpx;
	}

	.rmlist {
		width: 374rpx;
		height: 568rpx;
		margin-bottom: 20rpx;
	}

	.rmlist image {
		width: 100%;
		height: 374rpx;
	}

	.q1 {
		color: #f7a701;
	}

	.q2 {
		color: #bf9e6b;
		margin-bottom: 0.08rem;
		font-size: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.q3 {
		margin-bottom: 0.08rem;
		font-size: 26rpx;
	}

	.q4 {
		color: #bbbbbb;
		font-size: 10rpx;
	}

	.aa {
		display: flex;
		font-size: 13rpx;
	}

	.w1 {
		background: rgb(171, 127, 209);
		color: rgb(255, 255, 255);
		border: 0.015rem solid rgb(171, 127, 209);
		border-radius: 2px;
	}

	.w2 {

		color: rgb(251, 76, 129);
		border: 0.015rem solid rgb(251, 76, 129);
		border-radius: 2px;
		margin-left: 10rpx;

	}
</style>