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
	
	
	$("#md5decbtn").click(function(){
		$("#md5plain").html("Loading...");
		$.get("http://md5.gromweb.com/query/"+$("#md5secret").val()).success(function(html){
			$("#md5plain").html(html);
		}).fail(function(){
			$("#md5plain").html("Not found!");
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
	
	$("#btnpwdgen").click(function(){
		
		var type = $("#pwdtype").val();
		
		var x =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-=_+`<>?/.,;:";
		
		switch(type){
		case "1":
			x = "abcdefghijklmnopqrstuvwxyz0123456789";
			break;
		case "2":
			x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			break;
		case "3":
			x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			break;
		}
		
		var m = $("#pwdlen").val();
		var res = "";
		
		
		for(var i=1;i<=m;i++){
			res = res.concat(x[parseInt(Math.random()*x.length)]);
		}
		
		$("#pwdresult").val(res);
		
	});

});
