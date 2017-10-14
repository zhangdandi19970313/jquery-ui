/**
 * Created by Administrator on 2017/10/11.
 */
$(function(){
        var x=10;
        var y=20;
    $("a.tooltip").mouseover(function(e){
        this.myTitle =this.title;
        this.title='';
        var imgTitle= this.myTitle?"</br>"+ this.myTitle:"";
        var tooltip="<div id='tooltip'><img src='"+this.href+"'alt=¡¯²úÆ·Ô¤ÀÀÍ¼'/>"+imgTitle+"</div>";
        $("body").append(tooltip);
        $("#tooltip").css({
            "top":(e.pageY+y) + "px",
            "left":(e.pageX+x) + "px"
        }).show("fast");

    }).mouseout(function(){
        this.myTitle =this.title;
        $('#tooltip').remove();
    }),mousemove(function(e){
        $("#tooltip").css({
            "top":(e.pageY+y) + "px",
            "left":(e.pageX+x) + "px"
        });
    });
});