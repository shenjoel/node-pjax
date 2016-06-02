$(function() {
    pjax({
        selector: 'a',
        container: '#outermain', //内容替换的容器
        show: '',  //展现的动画，支持默认和fade, 可以自定义动画方式，这里为自定义的function即可。
        cache: false,  //是否使用缓存
        storage: false,  //是否使用本地存储
        titleSuffix: '', //标题后缀
        filter: function(){}, //过滤器
        callback: function(status){
            var type = status.type;
            console.log(type);
            switch(type){
                case 'success': ;break; //正常
                case 'cache':;break; //读取缓存 
                case 'error': ;break; //发生异常
                case 'hash': ;break; //只是hash变化
            }
        },
        xhrStart: function() {
            console.log('start');
        },
        xhrEnd: function() {
            console.log('end');
        }
    }); 
});