<template>
	<view class="bigbox">
		<view class="imgbox">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
				indicator-active-color="white">
				<swiper-item v-for="(item,index) in imgArr " :key="index">
					<image :src=item mode=""></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="content">
			<view class="a1">
				{{listObj.priceStr}}
			</view>
			<view class="a2">
				{{listObj.supplier}}
			</view>
			<view class="a3">
				{{listObj.title}}
			</view>
			<view class="a4">
				{{listObj.salePoint}}
			</view>
		</view>

		<view class="pl">
			<view class="pl_top">
				商品评价
			</view>
			<view class="pl_bot">
				<view class="pl1">
					<image :src=comment.userPic mode=""></image>
					<view>
						{{comment.userName}}
					</view>


				</view>

				<view class="pl2">
					{{comment.product}}
				</view>
				<view class="pl3">
					{{comment.text}}
				</view>
			</view>
		</view>

		<view class="tl">

			<view class="tl_top">
				<image :src=listObj.addressLogo mode=""></image>
				<view class="tl_top1">
					{{listObj.addressName}}
				</view>
				<view class="tl_top2">
					全部商品
				</view>
			</view>

			<view class="tllist">
				<scroll-view scroll-x="true" class="scroll">
					<view class="lists" v-for="(item,index) in tlArr" :key="index" @click="xqs(item.Id)">
						<image :src=item.imageUrl mode=""></image>
						<view class="b1">
							{{item.title}}
						</view>
						<view class="b2">
							一起拼
						</view>
						<view class="b3">
							￥{{item.priceStr}}
						</view>
					</view>
				</scroll-view>


			</view>
		</view>

		<view class="xj">
			<image v-for="(item,index) in xjArr" :src=item mode=""></image>
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
	import {
		ref
	} from "vue";
	import {
		spxq,
		tlsp
	} from '../apis/apis.js'
	import {
		useRoute,
		useRouter
	} from 'vue-router'

	const route = useRoute()
	const router = useRouter()
	console.log(route.query.id);

	let listObj = ref({})
	let imgArr = ref([])
	let comment = ref({})
	let tlArr = ref([])
	let xjArr = ref([])
	let flag = ref(false)

	onLoad(() => {
		// console.log(uni.getStorageSync('id'));
		uni.pageScrollTo({
			scrollTop: 0,
		
		})

	})


	let xq = async (c) => {
		
		// console.log(route.query.id);
		let cc = await spxq(route.query.id)
		listObj.value = cc.data[0]
		imgArr.value = JSON.parse(cc.data[0].imgs)
		console.log(cc.data[0]);
		comment.value = (JSON.parse(cc.data[0].comment))[0]
		// console.log(comment.value );

		let ss = (await tlsp(listObj.value.supplier)).data
		// console.log(ss);
		tlArr.value = ss
		xjArr.value = JSON.parse(cc.data[0].descriptionImage)
		// console.log(xjArr.value);

	}
	xq()

	let xqs = (id) => {
		console.log(id);
		uni.navigateTo({
			url: '/pages/spxq/spxq?id='+id
		})

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
	.bigbox {
		background-color: #f5f5f5;
	}

	.imgbox {
		height: 750rpx;
	}

	swiper {
		width: 100%;
		height: 100%;
	}

	swiper image {
		width: 100%;
		height: 100%;
	}

	.content {
		padding: 24rpx;
		background-color: white;
		margin-bottom: 30rpx;
		box-sizing: border-box;
	}

	.a1 {
		font-family: PingFangSC-Medium;
		font-size: 44rpx;
		color: #ff3637;
	}

	.a2 {
		margin-top: 15rpx;
		font-size: 18rpx;
		color: #bf9e6b;
	}

	.a3 {
		font-family: PingFangSC-Medium;
		margin-top: 15rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 40rpx;
		color: #4a4a4a;
	}

	.a4 {
		font-size: 20rpx;
		margin-top: 15rpx;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.pl {
		padding: 24rpx;
		background-color: white;
		margin-bottom: 30rpx;
		box-sizing: border-box;
	}

	.pl_top {
		height: 98rpx;
		border-bottom: 2rpx solid #ebebeb;
		line-height: 70rpx;
	}

	.pl_bot {
		margin-top: 20px;
	}

	.pl1 {
		height: 56rpx;


	}

	.pl1 image {
		height: 56rpx;
		width: 56rpx;
		border-radius: 50%;
		float: left;

	}

	.pl1 view {
		margin-left: 20rpx;
		float: left;
		font-size: 24rpx;
		line-height: 56rpx;
	}

	.pl2 {
		font-family: PingFangSC-Regular;
		font-size: 22rpx;
		color: #999;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.pl3 {
		font-size: 25rpx;
		color: #333;
	}

	.tl {
		margin-top: 20rpx;
		height: 60px;
		padding-left: 20rpx;

	}

	.tl_top {
		height: 131rpx;
		padding: 16rpx 0;
	}

	.tl_top image {
		width: 96rpx;
		height: 96rpx;
		float: left;
	}

	.tl_top1 {
		float: left;
		line-height: 96rpx;
		margin-left: 30rpx;
	}

	.tl_top2 {
		font-size: 26rpx;
		float: right;
		line-height: 96rpx;
		margin-right: 40rpx;
	}

	.scroll {
		white-space: nowrap;

		width: 100%;
	}

	.lists {
		width: 200rpx;
		height: 322rpx;
		display: inline-block;
	}

	.lists image {
		width: 190rpx;
		height: 190rpx;

	}

	.b1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26rpx;
	}

	.b2 {
		display: inline-block;
		color: #FB4C81;
		border-color: #FB4C81;
		font-size: 18rpx;
		border: 2rpx solid #FB4C81;
		margin: 5rpx 0;
	}

	.b3 {
		color: #F7A701;
		font-size: 29rpx;
	}


	.xj {
		margin-top: 400rpx;
	}

	.xj image {
		width: 710rpx;
	}
	.db {
		width: 72rpx;
		height: 72rpx;
		position: fixed;
		right: 20rpx;
		bottom: 70rpx;
	}
	
	.db image {
		width: 100%;
		height: 100%;
	}
	
</style>