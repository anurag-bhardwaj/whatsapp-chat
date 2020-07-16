console.log("start...")

const wfoot=document.querySelector(".wfoot");

function addmessage(message)
{
	const chat=document.querySelector(".chats");
	chat.insertAdjacentHTML("beforeend", `<div class="msgr">${message}</div>`);
	if(message==="Hi" | message==="hello" | message==="hi" | message==="Hello")
	{
		setTimeout(function(){ document.querySelector(".chats").insertAdjacentHTML("beforeend", `<div class="msg">kya kar rahe ho</div>`); }, 2000);
	}
	else if(message==="kya kar rahe ho" | message==="kya kar rhe ho" | message==="kya kr rhe ho")
	{
		setTimeout(function(){ document.querySelector(".chats").insertAdjacentHTML("beforeend", `<div class="msg">kuch nahi</div>`); }, 2000);
	}
	else if(message==="hm" | message==="hmm")
	{
		setTimeout(function(){ document.querySelector(".chats").insertAdjacentHTML("beforeend", `<div class="msg">ghr main sb thik ?</div>`); }, 2000);
	}
	else if(message==="hn" | message==="Hn")
	{
		setTimeout(function(){ document.querySelector(".chats").insertAdjacentHTML("beforeend", `<div class="msg">Or sunao</div>`); }, 2000);
	}
	else
	{
		setTimeout(function(){ document.querySelector(".chats").insertAdjacentHTML("beforeend", `<div class="msg">Hmm</div>`); }, 2000);
	}
}

function restore()
{
	const message = document.querySelector(".messageinp");
	console.log(message.value)
	addmessage(message.value);
	wfoot.innerText="";
	// const message = document.querySelector(".messageinp");
	// message.style.width="60%";
	wfoot.innerHTML=`
			<i class="far fa-smile"></i>
			<input type="text" name="message" onclick="messagebox()" onchange="writemessage(event)" class="messageinp" placeholder="Type a message">
			<i class="fas fa-paperclip" onclick="attachment()"></i>
			<i class="fas fa-camera"></i>`;
}

function messagebox()
{
	wfoot.innerText="";
	wfoot.innerHTML=`<input type="text" name="message" class="messageinp" placeholder="Type a message">
	<i class="fas fa-chevron-circle-right" onclick="restore()"></i>`;
	const message = document.querySelector(".messageinp");
	message.style.width="85%";
}
var overlay_val=0;
function attachment()
{
	const overlay=document.querySelector(".cover");
	const attach =document.querySelector(".attachment-box");
	if(overlay_val===0)
	{
		overlay_val=1;
		overlay.style.display="block";
		attach.style.display="block";
	}
	else
	{
		overlay_val=0;
		overlay.style.display="none";
		attach.style.display="none";
	}
}

function removecover()
{
	const attach =document.querySelector(".attachment-box");
	const overlay=document.querySelector(".cover");
	const moreop=document.querySelector(".more-option");
	if(overlay_val===0)
	{
		moreop.style.display="block";
		overlay_val=1;
		overlay.style.display="block";
		attach.style.display="block";
	}
	else
	{
		overlay_val=0;
		overlay.style.display="none";
		attach.style.display="none";
		moreop.style.display="none";
	}
}
function moreoption()
{
	const overlay=document.querySelector(".cover");
	const moreop=document.querySelector(".more-option");
	if(overlay_val===0)
	{
		moreop.style.display="block";
		overlay_val=1;
		overlay.style.display="block";
		
	}
	else
	{
		overlay_val=0;
		moreop.style.display="none";
		overlay.style.display="none";
		
	}
}