window.onload=function(){//注意：所有的代码哦度要写在这两个大括号内

//----------窝要创建一个-------	
	var 
	row =10,
	home = document.getElementById('sence'),
	width= Math.floor((550-row) /row ),
	child,
	shuxian,
	hengxian;
	home.style.position = 'relative' ;
	for(var i = 0 ; i < row ; i++){
		var width2 =Math.floor(((550/row)/2) + (550/row)*i)+ 'px';
		hengxian = document.createElement('div');
		hengxian.setAttribute('class','heng');
		hengxian.style.width = '550px';
		hengxian.style.height = '1px';
		hengxian.style.position = 'absolute';
		hengxian.style.top = width2;
		hengxian.style.backgroundColor='white';
		home.appendChild(hengxian);
		zongxian = document.createElement('div');
		zongxian.setAttribute('class','zong');
		zongxian.style.width = '1px';
		zongxian.style.height = '550px';
		zongxian.style.position = 'absolute';
		zongxian.style.left = width2;
		zongxian.style.backgroundColor='white';
		home.appendChild(zongxian);

	}
	for (var i = 0 ; i < row ;i++){
		for(var j = 0; j < row ; j++){
			child = document.createElement('div');
			child.setAttribute('id',i+'_'+j);
			child.setAttribute('class','block');
			child.style.width = width+ 'px';
			child.style.height = width+ 'px';
			child.style.position = 'absolute' ;
			home.appendChild(child);	
			child.style.zIndex = 20 ;
			child.style.left =  j*width+3 +'px';
			child.style.top  =  i*width+3 +'px' ;
		}
			
	}
	
	panduan = function(dic,id){
		var
		x = Number(id.split('_')[0]),
		y = Number(id.split('_')[1]);
		var tx,ty;
		var hang = 1;
		tx = x ; ty = y;
		while(dic[tx + '_' + (ty-1)]){hang++;ty--;}
		tx = x ; ty=y;
		while(dic[tx + '_' + (ty+1)]){hang++;ty++;}
		if(hang == 5){return true;}
		
		var 
		lie  = 1; 
		
		tx = x ; ty = y ;
		while(dic[(tx-1) +'_'+ ty]){lie++;tx--}
		tx = x ; ty = y;
		while(dic[(tx+1) +'_'+ ty]){lie++;tx++}
		if(lie == 5){return true;}

		var zx =1;
		tx=x;ty=y;
		while(dic[(tx-1) + '_'+ (ty+1)]){zx++;tx--;ty++}
		tx=x;ty=y;
		while(dic[(tx+1) + '_'+ (ty-1)]){zx++;tx++;ty--}
		if(zx==5){return true;}
		

		var ax = 1 ; 
		tx = x ; ty = y ;
		while(dic[(tx+1) + '_'+ (ty+1)]){ax++;tx--;ty++}
		tx = x ; ty = y ;
		while(dic[(tx-1) + '_'+ (ty-1)]){ax++;tx--;ty--}
		if(ax==5){return true;}
		return false;
	}
	var block = document.getElementsByClassName('block');
	var 
	dict1 = {},
	dict2 = {};
	var kaiguan = true;
	for(var i = 0 ; i<block.length ; i++){
		block[i].onclick = function(){
			if( this.hasAttribute('aa') ){ return; }
			this.style.boxShadow = "5px 5px 5px rgba(13, 11, 10, 0.4)  ";
			var id = this.getAttribute('id');
			this.style.borderRadius = '50%';		
				if(kaiguan){
					this.style.backgroundColor = '#0d0d0d';
					kaiguan = false; 
					dict1[id] = true;
					if( panduan(dict1,id)) {
						 alert('黑棋赢了！');
						 location.reload();
					};
				}else{
					this.style.backgroundColor = '#Fafafa';
					kaiguan = true;
					dict2[id] = true;
	 				if( panduan(dict2,id) ) {
	 					 alert('白棋赢了！' );
	 					 location.reload();
	 				};
	 				
	 				
				}		
			this.setAttribute('aa','true');
		};
	}









































	

};/*这里是结束的那个花括号*/

