
export const spxq =(c)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:'/api/detail?goodId=' + c,
				success:res => resolve(res)
			})
			
		
	})
	
}


export const tlsp =(c)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:'/api/sameList?supplier='+ c,
				success:res => resolve(res)
			})
			
		
	})
	
}

export const sslist =(c)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:'/api/search?word='+ c,
				success:res => resolve(res)
			})
			
		
	})
	
}


export const one =(c)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:'/api/getTypeOne',
				success:res => resolve(res)
			})
			
		
	})
	
}

export const two =(c)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:'/api/getTypeTwo?type_one='+c,
				success:res => resolve(res)
			})
			
		
	})
	
}


export const sss =(a,b)=>{
	return new Promise((resolve,reject)=>{
			uni.request({
				url:`/api/getTypeTwoList?type_one=${a}&type_two=${b}`,
				success:res => resolve(res)
			})
			
		
	})
	
}