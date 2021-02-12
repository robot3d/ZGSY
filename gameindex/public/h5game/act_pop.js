;(function(){
    $(".act_pop").on("click",".close,.mask",function(e){
        e.preventDefault();
        $(".act_pop").hide();
    })

    function getCookie(name){
	    var arr = document.cookie.split("; ");
	    for( i=0;i<arr.length;i++ ){
	        var arrs = arr[i].split("=");
	        if( arrs[0]==name ){
	            return arrs[1];
	        };
	    };
	    return null;
	}

    function setActCookie(name,value,time){
        var date = new Date();
        date.setTime(date.getTime()+time);
        console.log(date.toGMTString())
        document.cookie = name+"="+value+";path=/;expires="+date.toGMTString();
    }

    function cacheTime(){
        var total_time = 24*60*60;
        var date = new Date();
        var hours = date.getHours(); //小时
        var minute = date.getMinutes(); //分
        var second = date.getSeconds(); //秒
        var time_diff = total_time-(hours*60*60+minute*60+second);
        // return 10 * 1000
        return time_diff * 1000;
        // var day = time_diff/(24*60*60);
        // return day;
    }

    if($(".act_pop").length!=0 && !getCookie("cache_act_time")){
        $(".act_pop").show();
        setActCookie("cache_act_time","true",cacheTime());
    }
})();