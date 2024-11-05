/**
 * 代码块超过指定高度自动折叠Y
 */
document.addEventListener('DOMContentLoaded', () => {
    CodeBlock.init('hello world')
});
const CodeBlock = {
    maxHeight: 512, //px
    //当 overflow-x 值为 hidden、scroll 或者 auto，而本属性的值为 visible（默认值）时，本属性会被隐式的计算为 auto。
    overflowY: 'auto',  // visible ,hidden
    initCodeBlockOverflowY:function(overflowHeight,overflowY){
        overflowY = overflowY || CodeBlock.overflowY;
        overflowHeight = overflowHeight || CodeBlock.maxHeight;
        eles = document.getElementsByClassName('highlight');
        eles = Array.from(eles);
        //console.log(eles);
        eles.forEach(function(ele, index, eles) {
            //console.log(ele, index);
            //console.info('ele.offsetHeight = ',ele.offsetHeight);
            let origalHeight = ele.offsetHeight;
            if(ele.offsetHeight > overflowHeight){
                //console.log('#'+ele.id+'>.chroma.open>.table-wrapper');
                let childEle = ele.getElementsByClassName('chroma')[0];
                //console.log(curEle);
                childEle.style.height = overflowHeight + 'px';
                childEle.style.overflowY = overflowY;

                let showMoreDiv = document.createElement('div');
                showMoreDiv.id = ele.id+'-more';
                
                showMoreDiv.style.cssText = 'position:sticky;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade" style="font-size:20px;"></i>';
                ele.appendChild(showMoreDiv);
                showMoreDiv.addEventListener('click', function(){
                    if(showMoreDiv.innerHTML.indexOf('fa-angles-down') >= 0 ){
                        childEle.style.height = origalHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-up fa-beat-fade" style="font-size:20px;"></i>';
                        showMoreDiv.style.cssText = 'margin-top: -34px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                        
                    }else{
                        childEle.style.height = overflowHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade" style="font-size:20px;"></i>';
                        showMoreDiv.style.cssText = 'margin-top: -24px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                        window.scrollTo({top:ele.offsetTop, behavior: 'smooth'});
                    }
                    
                });
            }
        });
    },
    hello: function(msg){
        console.info('CodeBlock.hello()=%s, by geekswg',msg);
    },
    init : function(args){
        try {
            this.initCodeBlockOverflowY(512,'auto');// unit px 
        }catch (error) {
            console.error('CodeBlock.init() error',error);
        }
        
    }
}

