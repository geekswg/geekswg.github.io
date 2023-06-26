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
            if(ele.offsetHeight > overflowHeight){
                //console.log('#'+ele.id+'>.chroma.open>.table-wrapper');
                let curEle = document.querySelector('#'+ele.id+'>.chroma.open>.table-wrapper');
                //console.log(curEle);
                curEle.style.height = overflowHeight + 'px';
                curEle.style.overflow = 'auto';
            }
        });
    },

    hello: function(msg){
        console.info('CodeBlock.hello()=%s, by geekswg',msg);
    },
    init : function(args){
        this.hello(args);
        this.initCodeBlockOverflowY();
    }
}

