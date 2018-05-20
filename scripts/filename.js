var count=0;
var totalSeconds = 0;
var c=0;
var reset="";
var timer=null;
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
	//document.getElementById("percent_msg").innerHTML="YOU HAVE COMPLETED "+ ((81-box_count)/81*100).toFixed(2)+"% OF THE GAME" ;
	console.log(((81-box_count)/81*100).toFixed(2));
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
	var score=0;
	var empty=0;
	for(i=0;i<81;i++)
	{	
		var result = document.getElementById("cell-"+i).value;
		if(result=="")
			empty++;
	}
	if(totalSeconds<=300 && totalSeconds>0 && empty==0)
		score=50;
	else
		score=0;
	if(totalSeconds>300 && totalSeconds<600 && empty==0)
		score=30;
	else 
		score=0;
	if(totalSeconds>600 && empty==0)
		score=20;
	else
		score=0;
	if(count>2)
		score=score-(count-2)*5;
	if(score<0)
		score=0;
	document.getElementById("score_msg").innerHTML="YOUR SCORE IS "+score;
	document.getElementById("count").style.visibility = 'hidden';
	document.getElementById("score").style.visibility = 'hidden';
	document.getElementById("chk").style.visibility = 'hidden';
}
function time()
{
	var secondsLabel = document.getElementById("seconds");
	
	if (!timer) {
      timer = setInterval(setTime, 1000);
    }
	
	function setTime()
	{
  		++totalSeconds;
  		secondsLabel.innerHTML =totalSeconds;
	}
}
function stoop()
{
	document.getElementById("tim").style.visibility = 'hidden';
	if(count==1)
		document.getElementById("chk_msg").innerHTML="CHECK  BUTTON USED "+count+" TIME.";
	else
		document.getElementById("chk_msg").innerHTML="CHECK  BUTTON USED "+count+" TIMES.";
	document.getElementById("time_msg").innerHTML= "YOU TOOK ABOUT " +(totalSeconds/60).toFixed(2)+ " minutes";
	document.getElementById("tim2").innerHTML= "TIME :"+totalSeconds+" s";
	document.getElementById("sub").style.visibility = 'hidden';
	document.getElementById("chk").style.visibility = 'hidden';
	document.getElementById("start").style.visibility = 'hidden';
	document.getElementById("gen").style.visibility = 'hidden';
	document.getElementById("ref").style.visibility= 'visible';
	
	
}
function generate()
{	
	
    if (timer) {
      totalSeconds = 0;
      stop();
    }

	var result="";
	var dat1=["004300209005009001070060043006002087190007400050083000600000105003508690042910300","600120384008459072000006005000264030070080006940003000310000050089700000502000190","000000657702400100350006000500020009210300500047109008008760090900502030030018206","065370002000001370000640800097004028080090001100020940040006700070018050230900060","850420370003000010000170009000500602029304000010000438046090805005000900702840003","680905000003000508402108703390720800000000010045006900060804002001002075700013000","020980040030047601019006080700490000800023907000605000904800006001000300350014020","290041000470302050000060208039400005100000070504100603613200704000003080005900100","431800006000300010000006205609134070020000040000570089003659020500080104807000003","503070190000006750047190600400038000950200300000010072000804001300001860086720005","900084060604005207030070080760001500053000001000409603105026090002040000800003710","205040003001009000046001587004607090802000056090020340170008200000500800500903001","065370002000001370000640800097004028080090001100020940040006700070018050230900060","700084005300701020080260401624109038803600010000000002900000000001005790035400006","497200000100400005000016098620300040300900000001072600002005870000600004530097061","807000000610005430400690000002800709003007820900051046000009670054000000200403018","107008000650100000300060072060030250480009700001407009000000800003980015040203060","980046025000090700700300004008023010045070008000105006014800900506000307090002600","270600050000070406006059030040005600081000040029006173390000002000097800807140005","206597403080103000507000009000004210028006500409010060700305000001200000300480902"];
	var test=dat1[Math.floor(Math.random()*dat1.length)];
	reset=test;
	console.log(dat1.length);
	for(i=0;i<81;i++)
	{
		if(test[i]==0)
			result="";
		else
			result=test[i];
		document.getElementById("cell-"+i).value=result;
	}
	for(i=0;i<81;i++)
	{
		var disable=document.getElementById("cell-"+i).value;
		if(disable!="")
			document.getElementById("cell-"+i).disabled=true;
		else
			document.getElementById("cell-"+i).disabled=false;
	}
	
	
}
function reload()
{
	var result2="";
	console.log(reset);
	for(i=0;i<81;i++)
	{
		if(reset[i]==0)
			result2="";
		else
			result2=reset[i];
		document.getElementById("cell-"+i).value=result2;
	}
	for(i=0;i<81;i++)
	{
		var disable=document.getElementById("cell-"+i).value;
		if(disable!="")
			document.getElementById("cell-"+i).disabled=true;
		else
			document.getElementById("cell-"+i).disabled=false;
	}
}
function refresh(){
	
	location.reload();
}




