// Rain water trapping problem

function rainWater(a= [0,4,0,0,0,6,0,6,4,0] ){
    let n = a.length ; 
    

    let left = [] 
    let right = []
    left.length = n ; 
    right.length = n ; 
   
    
    left[0]=a[0] ; 
   
    for (let i = 1; i < n; i++) {

        left[i]=Math.max(left[i-1],a[i])
       
        
    }
    
    right[n-1] = a[n-1];
    
    for (let i = n-2; i >= 0; i--) {

        right[i]=Math.max(right[i+1],a[i])
        
    }
    
    let ans = 0 ; 
    for (let i = 0; i < n; i++) {
        ans += (Math.min(left[i],right[i])-a[i] ); 
      
        
        
    }
    return ans ;
}
b=rainWater()
console.log(`Units = ${b}`);


