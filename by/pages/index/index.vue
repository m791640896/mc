<template>
	<view class="content">

		<view class="top">
			<view class="a1">
				50元
			</view>
			<view class="a2">
				下载app领取新用户限量专属特权
			</view>
		</view>
		<Ss></Ss>
	</view>

	<view class="listbox">
		<scroll-view scroll-x="true" class="list">
			<view :class="{'active b2':name==item,'b2':name!=item}" v-for="(item,index) in listarr" key="item"
				@click="qh(item)">
				{{item}}
			</view>
		</scroll-view>

	</view>

	<view class="imgbox">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item class="s1" v-for="(item,index) in imgArr" :key="index">
				<image :src=item mode=""></image>
			</swiper-item>
		</swiper>

	</view>

	<view class="imgs">
		<image src="../../static/images/cc.png" mode=""></image>
	</view>

	<view class="box">
		<view class="rmlist" v-for="(item,index) in rmArr" :key="index" @click="spxq(item.Id)">
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

		<view class="db" @click="db" v-show="flag">

			<image src="../../static/images/huidaodingbu.png" mode=""></image>
		</view>
	</view>
</template>



<script setup>
	import {
		onLoad,
		onReachBottom,
		onPageScroll
	} from "@dcloudio/uni-app"
	import Ss from '/components/ss.vue'
	import {
		ref
	} from "vue";
	import {
		useRoute,
		useRouter
	} from 'vue-router'

	const route = useRoute()
	const router = useRouter()


	let listarr = ref([])
	let name = ref('')
	let imgArr = [
		'https://bfs.biyao.com/group2/M00/31/B0/CghjFmJ4v6qANQS-AABcvNLp9hc824.jpg',
		'https://bfs.biyao.com/group2/M00/34/E8/CghkFmJ-EeWAcRj2AAB9_WNgZck385.jpg',
		'https://bfs.biyao.com/group2/M00/42/F0/CghkFmKWvKuANeyvAABULufO7gk482.jpg',
		'https://bfs.biyao.com/group2/M00/34/1F/CghiFmJ8vw2APA6GAABukR4YAj4734.jpg',
		'https://bfs.biyao.com/group2/M00/31/B0/CghjFmJ4v6qANQS-AABcvNLp9hc824.jpg',
	]
	let num = ref(1)
	let rmArr = ref([])
	let flag = ref(false)

	let qq = () => {
		// let cc= await getList()
		// console.log(cc)
		uni.request({
			url: '/api/getTypeOne',
			success: (res) => {
				// console.log(res.data);
				listarr.value = res.data
			}
		})

	}
	qq()

	let qh = (e) => {
		console.log(e);
		name.value = e

	}

	let rm = (a) => {
		// console.log(num.value);
		num.value++
		uni.request({
			url: '/api/hotList?page=' + a,
			success: (res) => {
				// console.log(res.data);
				let cc = res.data
				let arr = []
				rmArr.value = rmArr.value.concat(cc)
				// console.log(rmArr.value);
			}
		})

	}
	rm(num.value)
	
	onReachBottom(() => {
		rm(num.value)
	})

	let spxq = (id) => {
		// console.log(id);
		// uni.setStorageSync('id', id)

		uni.navigateTo({
			url: '/pages/spxq/spxq?id='+id
		})
		// router.push({
		// 	path: '/pages/spxq/spxq',
		// 	query: {
		// 		id
		// 	}
		// })
	}
	onPageScroll((e) => {
		if (e.scrollTop > 100) {
			flag.value = true
		} else {
			flag.value = false
		}

	})

	let db = () => {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 300
		})
	}
</script>

<style scoped>
	.content {}

	.top {
		background: url(https://bfs.biyao.com/group1/M00/B4/3B/rBACW1yjqW6Ae7RhAAAd5r4TJxY228.jpg) no-repeat;
		background-size: 100% 100%;
		height: 100rpx;
	}

	.a1 {
		line-height: 100rpx;
		font-family: PingFangSC-Medium;
		margin: 0 30rpx;
		font-size: 35rpx;
		color: #fff;
		text-align: center;
		float: left;
	}

	.a2 {
		font-family: PingFangSC-Regular;
		font-size: 20rpx;
		color: #fff;
		line-height: 100rpx;
		float: left;
	}

	.list {
		width: 100%;
		/* height: 77rpx; */
		white-space: nowrap;
		margin-top: 28rpx;
	}

	.b2 {
		display: inline-block;
		height: 100%;
		line-height: 77rpx;
		font-size: 22rpx;
		padding: 0 16rpx;
	}

	.active {
		font-family: PingFangSC-Medium;
		border-bottom: 4rpx solid #7f4395;
		color: #7f4395;
	}

	.s1 image {
		width: 100%;
		height: 100%;
	}

	.imgbox {
		width: 100%;
	}

	.imgs {
		width: 100%;
		height: 270rpx;
	}

	.imgs image {
		width: 100%;
		height: 100%;
	}


	.box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
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

	.db {
		width: 72rpx;
		height: 72rpx;
		position: fixed;
		right: 20rpx;
		bottom: 120rpx;
	}

	.db image {
		width: 100%;
		height: 100%;
	}
</style>