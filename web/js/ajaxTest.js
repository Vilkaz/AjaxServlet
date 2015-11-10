
function getData(){
    console.log("js geht");
    $.post(
        {
            type:'POST',
            url:'JsListener',
            success:function(data){
                console.log(data);
            }
        }
    );
}