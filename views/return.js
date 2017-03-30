$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"/return/re" , data:$("form").serialize() , type:"post" , dataType:"json" , async:"false" , success:function(data){
            $("P").hide();
            if(data.error != ""){
                $("p").html(data.error);
            }
            else{
                $("p").html(data.return);
            }
            $("p").show(500);
            $("#return").hide();
            $("#return").html("");
            for(var i = 0;i < data.bno.length;i++){
                var s = '<p class="data">书号:' + data.bno[i] + ", 书名:" + data.title[i] + ', 类型:' + data.type[i] + ", 作者:" + data.author[i] + ", 出版社:" + data.press[i] + ", 出版日期:" + data.year[i] + ", 价格:" + data.price[i].toString() + ", 总量:" + data.total[i].toString() + ", 库存:" + data.stock[i].toString() + "</p>";
                $("#return").append(s);
            }
            $("#return").show(1000);
        }});
    });
})