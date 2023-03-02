
 var svg = d3.select('body').append('svg')
                            .attr('width',320)
                            .attr('height',600);
 var x1 = 160,
     y1 = 150;  
     var c_color ;
     var color_is_choosed = false;
     var colors = [
     '#ff4422','#ee1166' ,'#9911bb' ,'#6633bb' ,'#3344bb' ,'#1199ff','#00aaff',
     '#00bbdd','#009988','#44bb44','#88cc44','#ccdd22','#ffee11','#ffcc00','#ff9900','#ff5500',
     '#775544','#999999','#828080','#444'];
      var palet= d3.select('svg');
 function deg_color(color){
  
  return d_color = [
     d3.hsl(color).darker(0.5),
     d3.hsl(color).darker(0.3),
     color,
     d3.hsl(color).brighter(0.5),
     d3.hsl(color).brighter(1)
   ]
}
 function draw_palet(){
    
    var palet_container = d3.select('svg').append('g').attr('id','palet_container');
     for(var i= 0; i<colors.length;i++){
      palet_container.append('g')
                     .attr('id','graphe_container'+i)
                     .attr('data-color',colors[i])
                     .attr('class','graphe_container');
      
      drawRect('#graphe_container'+i,x1,y1,5,5,145,20,'#fff','#ccc');                                  
      drawRect('#graphe_container'+i,x1+25,y1,4,4,20,20,deg_color(colors[i])[0],'','','color_rect color_rect0');
      drawRect('#graphe_container'+i,x1+50,y1,4,4,20,20,deg_color(colors[i])[1],'','','color_rect color_rect1'); 
      drawRect('#graphe_container'+i,x1+75,y1,4,4,20,20,deg_color(colors[i])[2],'','','color_rect color_rect2'); 
      drawRect('#graphe_container'+i,x1+100,y1,4,4,20,20,deg_color(colors[i])[3],'','','color_rect color_rect3');
      drawRect('#graphe_container'+i,x1+125,y1,4,4,20,20,deg_color(colors[i])[4],'','','color_rect color_rect4');
        
                    
     }
     drawButton();
      d3.selectAll('.color_rect').on('mouseover',mouseover);
      d3.selectAll('.color_rect').on('click',mouseClick);
 }          
 function mouseover(){
    var el = d3.select(this);
    var s_color = el.attr('fill');
                               
    setColor('#show_circle',s_color );
    d3.select('#color_code').text(s_color).attr('fill',s_color).attr('stroke',s_color); 
}
 function mouseClick(){
  
       p_color =d3.select(this.parentNode).attr('data-color');
       d3.select('#button_show_color').attr('fill',p_color);
       c_color= d3.select(this).attr('fill');
       choosed_palet.addColor(c_color);
}  
 function setColor(el,color){
    d3.select(el).transition().duration('200').attr('fill',color);
 }
 function drawGrapheText(x,y,id=null,value,s_color){
   var graphe = d3.select('svg').append('g').attr('id','text_graphe');
  
        graphe.append('text')
              .attr('id',id)
              .attr('x',x)
              .attr('y',y)
              .attr('stroke',s_color)
              .text(value);
        graphe.append('line')
              .attr('x1',x)
              .attr('y1',y+5)
              .attr('x2',x-20)
              .attr('stroke',s_color)
              .attr('y2',y+20);
       graphe.append('line')
              .attr('x1',x)
              .attr('y1',y+5)
              .attr('x2',x+50)
              .attr('stroke',s_color)
              .attr('y2',y+5);
 }
 function drawCircle(container,x,y,r,color=null,id=null){
     
    
   var ele = d3.select('svg').append('g');
   
   ele.append('circle')
             .attr('fill',color)
             .attr('id',id)
             .attr('cx',x)
             .attr('cy',y)
             .attr('stroke','#ccc')
             .attr('r',r);
  };
   function drawRect(container,x,y,rx,ry,width,height,color=null,stroke=null,id=null,classed=null){
     var ele;
      if(container == 'rect'){
        ele = d3.select('svg').append('g');
      }else{
        ele = d3.select('svg').select(container);
      }
      ele.append('rect') 
               .attr('id',id)
               .attr('class',classed)
               .attr('fill',color)
               .attr('stroke',stroke)
               .attr('x',x)
               .attr('y',y)
               .attr('rx',rx)
               .attr('ry',ry)
               .attr('width',width)
               .attr('height',height);
  }
  function drawButton(){
         
        drawCircle('svg',x1,y1+10,15,colors[colors.length-1],id="button_show_color");
         drawCircle('svg',x1,y1+10,10,'orange');
         drawCircle('svg',x1,y1+10,9,'white',id="button");
         d3.select('#button').on('click',buttonClicked);
  }
function buttonClicked(){
          // toggle_color('#button');
           toggle_palet();
           toggle_cirle();
           toggle_text_graphe();
           show_choosed_bar();
     };
function show_choosed_bar(){
  var last_g= colors.length-1;
  var last_color = colors[colors.length-1];
   var p_color = d3.select('#button_show_color').attr('fill');
   
    if( palet.attr('data-palet')=='on'){
      d3.selectAll('#graphe_container'+last_g).attr('data-color',last_color);
         for(var i = 0; i < 5;i++){
         
         d3.selectAll('#graphe_container'+last_g+'>.color_rect'+i).attr('fill',deg_color(last_color)[i]);
         
       }
    }else{
       d3.selectAll('#graphe_container'+last_g).attr('data-color',deg_color(p_color)[2]);
       for(var i = 0; i < 5;i++){
        d3.selectAll('#graphe_container'+last_g+'>.color_rect'+i).attr('fill',deg_color(p_color)[i]);
      }
    }
  
  
}
  
function toggle_color(el){
        var element = d3.select(el);
        var color = d3.select(el).attr('fill');
        if(color == 'white'){
         element.attr('fill','orange');
        }else{
          element.attr('fill','white');
        }
}
 drawCircle('circle',x1,y1+230,50,'#ccc',id='show_circle');
 drawGrapheText(x1+70,y1+200,'color_code','#cccccc','#ccc');
function toggle_cirle(){
 
       var palet= d3.select('svg'),
       circle = d3.select('#show_circle');
     if( palet.attr('data-palet')=='on'){
          circle.transition().duration(500).attr('r',50).attr("transform", "translate(0,0)");;
     }else{
          circle.transition().duration(500).attr('r',100).attr("transform", "translate(0," + -75 + ")");
     }
}
function toggle_text_graphe(){
 
       var palet= d3.select('svg'),
       text_graphe = d3.select('#text_graphe');
     if( palet.attr('data-palet')=='on'){
         text_graphe.transition().duration(500).attr("transform", "translate(0,0)");
     }else{
         text_graphe.transition().duration(500).attr("transform", "translate(0," + -150 + ")");
     }
}
function open_palet(){
  var step= 18;
    d3.select('svg').attr('data-palet','on');
   
     for(var i = 0; i <colors.length ;i++){
       d3.select('#graphe_container'+i)
       .transition()
      .duration(500).attr("transform", 'rotate('+i*step+' )');
    }
}
function close_palet(){
 var el =d3.selectAll('.graphe_container');
     
      el.transition()
      .duration(500)
      .attr("transform", 'rotate('+-90+')' );
 
       
}
function toggle_palet(){
    
     if( palet.attr('data-palet')=='on'){
         close_palet();
          
         palet.attr('data-palet','off');
     }else{
         open_palet();
         palet.attr('data-palet','on');
     }
}
draw_palet();
open_palet();
var choosed_palet = {
  container:d3.select('svg').append('g').attr('class','choosed_palet'),
  x:50,
  y:450,
  width:30,
  height:10,
  max_length:7,
  color :[],
 
  addColor:function(color){
    if(this.color.length<this.max_length){
       this.color.push(color);
      this.draw();
    }
   
  },
  removeColor:function(index){
    
   
    this.color.splice(index,1);
    
   this.draw();
  },
  draw:function(){
   this.container.html('');
    for(var i = 0; i <this.color.length;i++){
      
      this.container.append('rect').attr('x',this.x+(i*this.width))
                                  .attr('y',this.y)
                                  .attr('data_color_index',i)
                                  .attr('width',this.width)
                                  .attr('height',this.height)
                                  .attr('fill',this.color[i])
                                  .on('mouseover',mouseover)
                                  .on('dblclick',function(){ 
                                     var el=  d3.select(this);
                                     var index = el.attr("data_color_index");
                                    choosed_palet.removeColor(index);
                                    el.remove();
                                });
    }
  }
  
}