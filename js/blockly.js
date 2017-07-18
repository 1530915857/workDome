/**
 * Created by admin on 2017/3/22.
 */
$("#up li").click(function(){//nav下选项卡颜色切换
    index=$(this).index();
    $("#up li").eq(index).addClass("select").siblings().removeClass("select");
})