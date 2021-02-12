
$(".down_box").on("mouseover",function(){
    $(".down_box .ewm").css({"height":"140px"});
}).on("mouseout",function(){
    $(".down_box .ewm").css({"height":"0"});
})

//加入收藏
function AddFavorite(sURL, sTitle){
    try{
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e){
    try{
        window.sidebar.addPanel(sTitle, sURL, "");
        }catch(e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

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