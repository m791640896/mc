<template>
	<view>
		<Ss></Ss>
		
		
		<view class="box">
			
			<scroll-view class="left" scroll-y="true" >
				<view :class="{'active':item==sp}" v-for="(item,index) in oneArr" :key="index" @click="qh(item)" >
					{{item}}
				</view>
			</scroll-view>
			
			<view class="right">
				<view v-for="(item,index) in twoArr" :key="index" @click="er(item)">
					{{item}}
				</view>
			</view>
			
		</view>
		
		
		
		
	</view>
</template>

<script setup>
 import Ss from '../../components/ss.vue'
 import {one,two}from '../apis/apis.js'
import { ref } from "vue";
 
 let oneArr =ref([])
 let sp =ref('个护')
 let twoArr =ref([])
 
 let qq=async()=>{
	 
	 let  cc =(await one()).data
	 // console.log(cc);
	 oneArr.value=cc
	 
	 
 }
 qq()
 
 let to =async(c)=>{
	 let cc =(await two(c)).data
	 
	 // console.log(cc);
	 twoArr.value=cc
 }
 
 to('个护')
 
 
 
 
 
 let qh=(item)=>{
	 sp.value=item 
	  to(item)
 }
 
 let er=(item)=>{
	 console.log(item);
	 uni.navigateTo({
	 	url:`/pages/splist/splist?one=${sp.value}&two=${item}`
	 })
	 
	 
 }
 
 
 
</script>

<style scoped>
	.box{
		display: flex;
		justify-content: space-between;
		margin-top: 40rpx;
	}
 .left{
	 width: 172rpx;
	 height: 100vh;
	 float: left;
background: #f7f7f7;
 }
.left view{
	height: 98rpx;
	line-height: 98rpx;
	text-align: center;
	font-size: 28rpx;
}
.active{
	background-color: white;
	border-left: 8rpx solid #7f4395;
}
.right{
	width: 569rpx;
	padding-left: 40rpx;
	box-sizing: border-box;
}
.right view{
	float: left;
	width: 150rpx;
	height: 134rpx;
	margin-right: 40rpx;
	margin-left: 40rpx;
	text-align: center;
	line-height: 134rpx;
}



</style>
