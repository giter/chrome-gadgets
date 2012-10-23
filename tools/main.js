$(function(){

	$("#center").click(function(){
		chrome.tabs.create({'url': 'chrome://chrome/extensions/'}, function(window) {});
	});

	$(".toggle").click(function(){
		$(".form").hide();
		$(".toggled").removeClass("toggled");
		$(this).addClass("toggled");
		$("#"+$(this).attr("for")).slideDown('fast');
	});

	$("#md5btn").click(function(){
		$("#md5result").html("Loading...");
		$.ajax({
			url:"http://www.xmd5.org/md5/encrypt.asp",
			data:{
				'word':$("#md5str").val()
			},
			success:function(html){
					$("#md5result").html(/32位小写：([0-9a-f]+)/.exec(html)[1]);
			},
			error:function(){
				$("#md5result").html("Error!");
			}
		});
	});


	$("#libbtn").click(function(){
		$.ajax({
			type:'POST',
			url:'http://libsys.jxlib.com/reader.asp?WCI=Login',
			data:{
				loginname:$("#liblic").val(),
				loginpwd:$("#liblic").val()
			},
			success:function(){
				chrome.tabs.create({'url': 'http://libsys.jxlib.com/reader.asp?WCI=Continue'}, function(window) {});
			}
		});
	});

});