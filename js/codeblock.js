/**
 * 代码块超过指定高度自动折叠Y
 */
document.addEventListener('DOMContentLoaded', () => {
    CodeBlock.init('hello world')
});

const CodeBlock = {
    maxHeight: 512, //px
    initCodeBlockOverflowY:function(overflowHeight){
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
                let curEle = document.querySelector('#'+ele.id+'>.chroma.open>.table-wrapper');
                //console.log(curEle);
                curEle.style.height = overflowHeight + 'px';
                curEle.style.overflow = 'auto';
                curEle.append();
                
                let showMoreDiv = document.createElement('div');
                showMoreDiv.id = ele.id+'-more';
                showMoreDiv.style.cssText = 'text-align: center;margin-top: -28px;cursor: pointer;';
                showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade"></i>';
                ele.appendChild(showMoreDiv);
                showMoreDiv.addEventListener('click', function(){
                    if(showMoreDiv.innerHTML.indexOf('fa-angles-down')>0){
                        curEle.style.height = origalHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-up fa-beat-fade"></i>';
                        showMoreDiv.style.cssText = 'text-align: center;margin-top: -62px;cursor: pointer;';
                        
                    }else{
                        curEle.style.height = overflowHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade"></i>';
                        showMoreDiv.style.cssText = 'text-align: center;margin-top: -28px;cursor: pointer;';
                    }
                    window.scrollTo({top:ele.offsetTop, behavior: 'smooth'});
                });
            }
        });
    },

    hello: function(msg){
        console.info('CodeBlock.hello()=%s, by geekswg',msg);
    },
    init : function(args){
        this.hello(args);
        this.initCodeBlockOverflowY(512);// unit px
    }
}

