/**
 * Created by Administrator on 2017/10/7.
 */
$(function(){
           $("#button").button({
               icons:{
                   primary:"ui-icons_555555"
               }
           });

    //点击弹出弹窗
        $("#register").dialog({
            width:410,
            title:'登录',
            buttons:{
                '提交':function(){
                    alert('正在AJAX提交中.....');
                }
            },
            beforeClose:function(){
                alert("确认关闭？");
                //return false;
                 },
            autoOpen:false
            //draggable:false   使对话框不能移动
            //resizable:false 为false则无法调整对话框的大小
        });
         $("#register_a").click(function(){
             $("#register").dialog("open");
         });

    //日历汉化
    $("#date").datepicker({
        dateFormat:'yy-mm-dd',
        dayNames:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort:['周日','周一','周二','周三','周四','周五','周六'],
        dayNamesMin:['日','一','二','三','四','五','六'],
        monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort:['一','二','三','四','五','六','七','八','九','十','十一','十二'],
        showWeek:true,
        //appendText:'(yy-mm-dd)',
        weekHeader:'周',
        firstDay:1
    });

   /* $("#register input[title]").tooltip({
        //track:false,
        position:{
               my:"left center",
               at:'right center'
        }
    });*/
   /* var host=['@163.com','@qq.com'];
    $("#email").autocomplete({
        source:host
    });*/
    //表单验证

    $("form :input.required").each(function(){
               //给所有符合要求的元素内部添加
               // append是给其内部添加
         $(this).parent().append("<span class='star'>*</span>");
     });
    $("form :input").blur(function(){
        var $parent=$(this).parent();
        $parent.find(".star1").remove();
    });
    $("#user").blur(function(){
        //验证用户名
      var $parent=$(this).parent();
      if( $(this).is('#user') ){
          if(this.value=="" || this.value.length<6){
              var Emsg="最少为六位";
              $parent.append("<span class='star1 onError'>"+Emsg+"</span>");
          }else{
              var msg="输入正确";
              $parent.append("<span class='star1 onSuccess'>"+msg+"</span>");
          }
      }
    });
    //验证密码是否一致
    $('#rpwd').blur(function(){
        var $parent=$(this).parent();
        var pwd=$('#pwd').val();
       if($(this).is('#rpwd')){
           if(this.value==pwd||this.value!=''){
               var msg='输入正确';
               $parent.append("<span class='star1 onSuccess'>"+msg+"</span>");
           }else{
               var Emsg="密码错误";
               $parent.append("<span class='star1 onError'>"+Emsg+"</span>");
           }
       }

    });
          //验证邮箱
    $("#email").blur(function(){
        var $parent=$(this).parent();
        var regExp=/^\w+@\w+([-.]\w+)*(\.\w+)+$/;
        if($(this).is('#email')){
            if(regExp.test(this.value)){
                var msg='输入正确';
                $parent.append("<span class='star1 onSuccess'>"+msg+"</span>");
            }else{
                var Emsg="格式错误";
                $parent.append("<span class='star1 onError'>"+Emsg+"</span>");
            }
        }
    });

















});


