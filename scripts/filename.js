         // Get table object
			var count=0;
			function test(){
				var arr="";
					i=0
					for(i=0;i<81;i++)
					{	
						var result = document.getElementById("cell-"+i).value;
						if(result=="")
							result= "."
						arr=arr+result;
						arr=arr.toString();
					}
				console.log(arr);
				console.log(arr.length);
				var str = arr;
				var arr1=[];
				 for(i=0,k=0,l=9;i<9;i++,k+=9,l+=9)
    			{
    					res=str.slice(k,l);
    					arr1.push(res);
				}
				console.log(arr1);
				console.log(arr1[1][3]);
				for(i=0;i<arr1.length;i++)
					{
						var l=0;
						for(j=i+1;j<arr1[i].length;j++)
						{
							for(k=0;k<9;k++){
							if(arr1[i].charAt(k)==arr1[j].charAt(k)){
								//alert("row no.  "+(i+1)+" and "+(j+1)+" have same values in " +(k+1)+ " column");
								if(i==0){
									document.getElementById('cell-'+(0+k)).style.backgroundColor = "red";
									if(j==1)
										document.getElementById('cell-'+(8+k+1)).style.backgroundColor ="red";
									if(j==2)
										document.getElementById('cell-'+(17+k+1)).style.backgroundColor = "red";
									if(j==3)
										document.getElementById('cell-'+(26+k+1)).style.backgroundColor = "red";
									if(j==4)
										document.getElementById('cell-'+(35+k+1)).style.backgroundColor = "red";
									if(j==5)
										document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									
									}
								else if(i==1){
									document.getElementById('cell-'+(8+k+1)).style.backgroundColor = "red";
									if(j==2)
										document.getElementById('cell-'+(17+k+1)).style.backgroundColor = "red";
									if(j==3)
										document.getElementById('cell-'+(26+k+1)).style.backgroundColor = "red";
									if(j==4)
										document.getElementById('cell-'+(35+k+1)).style.backgroundColor = "red";
									if(j==5)
										document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==2){
									document.getElementById('cell-'+(17+k+1)).style.backgroundColor = "red";
									if(j==3)
										document.getElementById('cell-'+(26+k+1)).style.backgroundColor = "red";
									if(j==4)
										document.getElementById('cell-'+(35+k+1)).style.backgroundColor = "red";
									if(j==5)
										document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==3){
									document.getElementById('cell-'+(26+k+1)).style.backgroundColor = "red";
									if(j==4)
										document.getElementById('cell-'+(35+k+1)).style.backgroundColor = "red";
									if(j==5)
										document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==4){
									document.getElementById('cell-'+(35+k+1)).style.backgroundColor = "red";
								    if(j==5)
										document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								     
								else if(i==5){
									document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
									if(j==6)
										document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==6){
									document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
									if(j==7)
										document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==7){
									document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
									if(j==8)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									}
								else if(i==8){
									document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
									if(j==1)
										document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
								}
																
							}
						
								
							}
						
						}
						
					}
			}
function change()
{
	for(i=0;i<81;i++)
		document.getElementById('cell-'+i).style.backgroundColor = "white";
	
}
function chk_count(){
	
	count++;
	console.log(count);
	document.getElementById("info1").innerHTML=count;
}
function submit(){
	
	var result=100;
	console.log(count);
	document.getElementById("info2").innerHTML="YOUR SCORE IS "+(result-count);
}

