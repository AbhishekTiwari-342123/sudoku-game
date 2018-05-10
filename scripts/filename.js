var count=0;
var totalSeconds = 0;
var c=0;	
function test()
{
	var arr="";
	var box_count=0;
	for(i=0;i<81;i++)
	{	
		var result = document.getElementById("cell-"+i).value;
		if(result=="")
		{
			result= "."
			box_count++;
		}
		arr=arr+result;
		arr=arr.toString();
	}
	console.log(box_count);
	var str = arr;
	var arr1=[];
	for(i=0,k=0,l=9;i<9;i++,k+=9,l+=9)
    {
    	res=str.slice(k,l);
    	arr1.push(res);
	}			
	for(i=0;i<arr1.length;i++)
	{				
		for(j=i+1;j<arr1[i].length;j++)
		{
			for(k=0;k<9;k++)
			{
				if(arr1[i].charAt(k)==arr1[j].charAt(k))
				{
					if(i==0)
					{
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
					else if(i==1)
					{
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
					else if(i==2)
					{
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
					else if(i==3)
					{
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
					else if(i==4)
					{
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
					else if(i==5)
					{
						document.getElementById('cell-'+(44+k+1)).style.backgroundColor = "red";
						if(j==6)
							document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
						if(j==7)
							document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
						if(j==8)
							document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
					}
					else if(i==6)
					{
						document.getElementById('cell-'+(53+k+1)).style.backgroundColor = "red";
						if(j==7)
							document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
							if(j==8)
								document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
					}
					else if(i==7)
					{
						document.getElementById('cell-'+(62+k+1)).style.backgroundColor = "red";
						if(j==8)
							document.getElementById('cell-'+(71+k+1)).style.backgroundColor = "red";
					}
					else if(i==8)
					{
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
function chk_count()
{
	count++;
	document.getElementById("count").innerHTML=count;
}
function submit()
{
	var result=100;
	document.getElementById("score_msg").innerHTML="YOUR SCORE IS "+(result-count);
}
function time()
{
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	setInterval(setTime, 1000);
	function setTime()
	{
  		++totalSeconds;
  		secondsLabel.innerHTML =totalSeconds;
	}
}
function stop()
{
	document.getElementById("tim").style.visibility = 'hidden';
	if(count==1)
		document.getElementById("chk_msg").innerHTML="CHECK  BUTTON USED "+count+" TIME.";
	else
		document.getElementById("chk_msg").innerHTML="CHECK  BUTTON USED "+count+" TIMES.";
	document.getElementById("time_msg").innerHTML= "YOU TOOK ABOUT " +(totalSeconds/60).toFixed(2)+ " minutes";
}
function reload()
{
	location.reload();
}
