window.onload=function (){
	var con1=document.getElementById('con1');
	var img=con1.getElementsByTagName('img')[0];
	var img1=con1.getElementsByTagName('img')[1];
	img.onmouseover=function(){
		img1.style.display="block";		
	}
	img1.onmouseout=function(){
 		img1.style.display="none";
	}





	var con2=document.getElementById('con2');
	var ul=document.getElementById('ul')
	var lis=ul.getElementsByTagName('li');
	// var ul=document.getElementById('ul');
	function byclass1(parentn,classn){
			var parent=document.getElementById(parentn);
			var tags=parent.all?parent.all:parent.getElementsByTagName('*');
			 // alert(tags.length);
			var arr=[];
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].className==classn) {
					arr.push(tags[i]);
				}
			}
			return arr;
		}
	var arr1=byclass1("ul","p1");
    


	function byclass2(parentn,classn){
			var parent=document.getElementById(parentn);
			var tags=parent.all?parent.all:parent.getElementsByTagName('*');
			 // alert(tags.length);
			var arr=[];
			for (var i = 0; i < tags.length; i++) {
				if (tags[i].className.indexOf(classn)!=-1) {
					arr.push(tags[i]);
				}
			}
			return arr;
		}
	var c=byclass2("con3","one");
    console.log(c);
	//类名调用
	console.log(arr1);
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
		arr1[this.index].style.borderTop="1px solid #a8d89e";		
		}
		lis[i].onmouseout=function(){
		arr1[this.index].style.borderTop="1px solid #f2f2f2";		
		}
	}


	var ul1=document.getElementById('ul1')
	var lis1=ul1.getElementsByTagName('li');
	var arr2=byclass1("ul1","p1");
	console.log(arr2);
	for (var i = 0; i < lis.length; i++) {
		lis1[i].index=i;
		lis1[i].onmouseover=function(){
		arr2[this.index].style.borderTop="1px solid #a8d89e";		
		}
		lis1[i].onmouseout=function(){
		arr2[this.index].style.borderTop="1px solid #f2f2f2";		
		}
	}


	var ul2=document.getElementById('ul2');
	var lis2=ul2.getElementsByTagName('li');
	var arr3=byclass1("ul2","p1");
	for (var i = 0; i < lis.length; i++) {
		lis2[i].index=i;
		lis2[i].onmouseover=function(){
		arr3[this.index].style.borderTop="1px solid #a8d89e";		
		}
		lis2[i].onmouseout=function(){
		arr3[this.index].style.borderTop="1px solid #f2f2f2";		
		}
	}



	var arr4=byclass1("con3","img1");
	var hidden=document.getElementById('hidden');
	var time1=null;
	var time2=null;
	var a=221;
	arr4[0].onmouseover=function(){
		clearInterval(time2)
		time1=setInterval(function(){
 			a-=1;
 			hidden.style.display="block";
 			if(a<=0) {
 				a=0;
 				clearInterval(time1);

 			}
 			hidden.style.top=a+"px";
		},3)
		arr4[0].onmouseout=function(){
			clearInterval(time1);
			time2=setInterval(function(){
				a++;
			if (a>=221) {
				clearInterval(time2);
				a=221;
			}
			hidden.style.top=a+"px";
			},3)
			
		}
	}
// ===============
	var hidden1=document.getElementById('hidden1');
	var time3=null;
	var time4=null;
	var b=221;
	arr4[1].onmouseover=function(){
		clearInterval(time4)
		time3=setInterval(function(){
 			b-=1;
 			hidden1.style.display="block";
 			if(b<=0) {
 				b=0;
 				clearInterval(time3);

 			}
 			hidden1.style.top=b+"px";
		},3)
		arr4[1].onmouseout=function(){
			clearInterval(time3);
			time4=setInterval(function(){
				b++;
			if (b>=221) {
				clearInterval(time4);
				b=221;
			}
			hidden1.style.top=b+"px";
			},3)
			
		}
	}
	var hidden2=document.getElementById('hidden2');
	var time5=null;
	var time6=null;
	var c=221;
	arr4[2].onmouseover=function(){
		clearInterval(time6)
		time5=setInterval(function(){
 			c-=1;
 			hidden2.style.display="block";
 			if(c<=0) {
 				c=0;
 				clearInterval(time5);

 			}
 			hidden2.style.top=c+"px";
		},3)
		arr4[2].onmouseout=function(){
			clearInterval(time5);
			time6=setInterval(function(){
				c++;
			if (c>=221) {
				clearInterval(time6);
				c=221;
			}
			hidden2.style.top=c+"px";
			},3)
			
		}
	}
//=========
	var con3div1=document.getElementById('con3div1');
	var arr5=byclass1("con3","p1");
	console.log(arr5);
	var arr6=byclass1("con3","p2")
	con3div1.onmouseover=function(){
		arr5[0].style.color="#ffa000";
		arr6[0].style.borderRight="5px solid #2eb9d2";
		arr6[0].style.borderBottom="5px solid #2eb9d2"
	}
	con3div1.onmouseout=function(){
		arr5[0].style.color="#3c3c3c";
		arr6[0].style.borderRight="5px solid #d2d2d2";
		arr6[0].style.borderBottom="5px solid #d2d2d2"
	}
	con3div2.onmouseover=function(){
		arr5[1].style.color="#ffa000";
		arr6[1].style.borderRight="5px solid #2eb9d2";
		arr6[1].style.borderBottom="5px solid #2eb9d2"
	}
	con3div2.onmouseout=function(){
		arr5[1].style.color="#3c3c3c";
		arr6[1].style.borderRight="5px solid #d2d2d2";
		arr6[1].style.borderBottom="5px solid #d2d2d2"
	}
	con3div3.onmouseover=function(){
		arr5[2].style.color="#ffa000";
		arr6[2].style.borderRight="5px solid #2eb9d2";
		arr6[2].style.borderBottom="5px solid #2eb9d2"
	}
	con3div3.onmouseout=function(){
		arr5[2].style.color="#3c3c3c";
		arr6[2].style.borderRight="5px solid #d2d2d2";
		arr6[2].style.borderBottom="5px solid #d2d2d2"
	}



	var con4cen=document.getElementById('con4-cen');
	var span1=document.getElementById('span1');
	var span2=document.getElementById('span2');
	var arr7=byclass1("con4","div");
	var arr8=byclass1("con4","p3");
	var divh=arr7[0].offsetHeight;
	for (var i = 0; i < arr7.length; i++) {
		arr7[i].index=i;
		arr7[i].onmouseover=function(){
			arr8[this.index].style.borderBottom="5px solid #ffa000";
			arr8[this.index].style.borderRight="5px solid #ffa000";
		}
		arr7[i].onmouseout=function(){
			arr8[this.index].style.borderBottom="5px solid #d2d2d2";
			arr8[this.index].style.borderRight="5px solid #d2d2d2";
		}
	}
	span1.onclick=function(){
 		con4cen.scrollTop=0;
 		span1.className="span2"
 		span2.className=""
	}
	span2.onclick=function(){
 		con4cen.scrollTop=divh;
 		span1.className=""
 		span2.className="span2"
	}
	

	var out=document.getElementById('out');
	var gonglve=document.getElementById('gonglve');
	var fengjing=document.getElementById('fengjing')
	var imgs1=out.getElementsByTagName('img');
	var imgs2=fengjing.getElementsByTagName('img');
	console.log(imgs2.length);
	var imgs1w=imgs1[0].offsetWidth;
	var x=3;
	for (var i = 3; i < imgs2.length; i++) {		
		imgs2[i].onclick=function(){
			for (var i = 3; i < imgs2.length; i++) {
				imgs2[i].className="";
			if (imgs2[i]==this) {
				x=i;
				imgs2[i].className="imgboder";
				out.scrollLeft=(i-3)*imgs1[0].offsetWidth;
				}					
			}
		}
	}



	var out1=document.getElementById('out1');
	var inner=document.getElementById('inner');
	var left=document.getElementById('left');

	var right=document.getElementById('right');
	var zuozhes=byclass2("inner","zuozhe");
	var zuozhew=zuozhes[0].offsetWidth+18;
	var time7=null;
	var start=0;
	var x2=0;
	function move(){
		var step=0;
		var maxstep=20;
		start=out1.scrollLeft;
		var end=zuozhew*x2;
		var everystep=(end-start)/maxstep;
		time7=setInterval(function(){
			start+=everystep;
			step++;
			if (step>=20) {
				step=0;
				clearInterval(time7);
			}
			out1.scrollLeft=start;			
		},10)
	}
	right.onclick=function(){
		clearInterval(time7);
		x+=1;
		if (x>5) {
			x=3;
		}
		x2++;
		if (x2>2) {
				x2=0;
			}
		move();
		for (var i = 3; i < imgs2.length; i++) {
				imgs2[i].className="";
				imgs2[x].className="imgboder";
				out.scrollLeft=(x-3)*imgs1[0].offsetWidth;	
		}

	}
	left.onclick=function(){
		clearInterval(time7);
		x--;
		if (x<3) {
			x=5;
		}
		x2--;
		if (x2<0) {
				x2=2;
			}
		move();
		for (var i = 3; i < imgs2.length; i++) {
				imgs2[i].className="";
				imgs2[x].className="imgboder";
				out.scrollLeft=(x-3)*imgs1[0].offsetWidth;	
		}		
	}





	var span3=document.getElementById('span3');
	var text=byclass2("con6","text");
	var zishu=byclass2("con6","em2");
	var input=document.getElementById('input');
	var pinglun=document.getElementById('pinglun');
	var time8=null;
	var b=200;

	time8=setInterval(function(){
		var length=input.value.length;
		var shengyu=b-length;
		if (shengyu<=0) {
			clearInterval(time8);			
		}
		zishu[0].innerHTML=shengyu;
	},1)
	span3.onclick=function(){
		var value=input.value;
		var newtext=document.createElement("div");
		if (value=="") {
			alert("你还没有评论");
		}else{
			newtext.innerHTML='<div class="yonghu"><img src="img/32_43.jpg" alt=""><span>闪烁尾戒</span></div><p class="p4">'+value+'</p><p class="p5"><var>2014-7-26 14:22</var><span class="span1">回复</span><em class="em1">1168</em><span class="span2">更多>></span></p><div class="huifu">						<textarea name="" class="input2"  id="" cols="30" rows="10" value=""></textarea>						<p class="p2"><span>最多输入<em class="em2">200</em>字</span></p>						<p class="p3"><span class="span3">评论</span></p>					</div>';
			newtext.setAttribute("class","text");
			pinglun.appendChild(newtext);
		}
		input.value="";


		var huifubutton=byclass2("pinglun","span1");
		var gengduo=byclass2("pinglun","span2")
    	var huifu=byclass2("pinglun","huifu");
    	for (var i = 0; i < huifubutton.length; i++) {
			huifubutton[i].index=i;
			huifubutton[i].onclick=function(){
				huifu[this.index].style.display="block";
				gengduo[this.index].innerHTML="收起>>";
				var v=this.index;
				gengduo[this.index].onclick=function(){
					huifu[v].style.display="none";
					gengduo[v].innerHTML="更多>>";
				}
			}			
		}
		var huifu=byclass2("pinglun","huifu");
		var con6=document.getElementById('con6');
		var pinglun2=byclass2("pinglun","span3");
		var textarea2=byclass2("pinglun","input2");
		var shanchu=byclass2("pinglun","shanchu");
		for (var i = 0; i < pinglun2.length; i++) {
			pinglun2[i].index=i;
			pinglun2[i].onclick=function(){
				var huifutext=textarea2[this.index].value;
				console.log(huifutext);
				var newhuifu=document.createElement("div");
				newhuifu.innerHTML='<div class="taolun"><div class="yonghu2"><img src="img/42_43.jpg" alt=""><span>时尚旅游</span></div><p class="pp1">时尚旅游&nbsp;&nbsp;回复&nbsp;&nbsp;闪烁尾戒</p><p class="pp2">'+huifutext+'</p><p class="pp3">2014-7-26 14:22 <span>回复</span><span class="shanchu">删除</span></p></div>';
				huifu[this.index].insertBefore(newhuifu,textarea2[this.index]);				
				textarea2[this.index].value="";
				shanchu=byclass2("pinglun","shanchu");
				var taolun=byclass2("pinglun","taolun");
				console.log(shanchu);
				for (var i = 0; i < shanchu.length; i++) {
					shanchu[i].onclick=function(){
						for (var i = 0; i < shanchu.length; i++) {
							if(shanchu[i]==this){
								taolun[i].parentNode.removeChild(taolun[i]);
							}
						}
					}
				}
			}
		}
	}
	// var huifu=byclass2("pinglun","huifu");
	// var con6=document.getElementById('con6');
	// var pinglun2=byclass2("pinglun","span3")
	// var textarea2=con6.getElementsByTagName('textarea')[1];
	// console.log(pinglun2);
	// for (var i = 0; i < pinglun2.length; i++) {
	// 	pinglun2[i].index=i;
	// 	pinglun2[i].onclick=function(){
	// 		var huifutext=textarea2.value;
	// 		console.log(huifutext);
	// 		var newhuifu=document.createElement("div");
	// 		newhuifu.innerHTML='<div class="yonghu"><img src="img/32_43.jpg" alt=""><span>闪烁尾戒</span></div>';
	// 		huifu[this.index].insertBefore(newhuifu,textarea2);

	// 	}
	// }

    





}
