var persIframe=top.frames[1];
var actIframe=top.frames[2];
function lechenie(){
		var fight_from_castle = top.frames["d_pers"].fight_from_castle;
			console.log('�� ����� '+fight_from_castle);
			if (fight_from_castle == 0){		
				setTimeout(top.frames[1].frames['channel_3'].location=top.frames[1].castle_room,5000);;
			

				
			} else {
				
			
				setTimeout(top.frames[1].frames['channel_3'].location=top.frames[1].med_room,5000);;
			}; 

}
var mypers={};
var nform=document.forms.length-1;
var melvl=document.getElementsByTagName("select")["lvl"].selectedIndex;

FINDDEM=new Array();
FINDDEM[0]="(.+)/6(.+)��.:0-1 ����. (.+)�����. x �����.";
FINDDEM[1]="(.+)/6(.+)��.:1-2 ����. (.+)�����. x �����.";
FINDDEM[2]="(.+)/6(.+)��.:2-3 ����. (.+)�����. x �����.";
FINDDEM[3]="(.+)/6(.+)��.:2-3 ����. (.+)�����. x �����.";
FINDDEM[4]="(.+)/6(.+)��.:4-(4|5|6) ����. (.+)���������(.+)��������� x ���������";
FINDDEM[5]="(.+)/6(.+)��.:(4|5)-(5|6|7) ����. (.+)���������(.+)��������� x ���������";
FINDDEM[6]="(.+)/6(.+)��.:(5|6)-(6|7) ����. (.+)���������(.+)��������� x ���������";
FINDDEM[7]="(.+)/6(.+)��.:(5|6)-7 ����. (.+)���������(.+)��������� x ���������";
FINDDEM[8]="(.+)/10(.+)��.:8-(8|9|10) ����.";
FINDDEM[9]="(.+)/(8|10|12|14|16)(.+)��.:(8|9)-(9|10|11|12|13) ����.";
FINDDEM[10]="(.+)/(8|10|12|14|16)(.+)��.:(8|9|10)-(10|11|12|13) ����. (.+)�����. x �����.";
FINDDEM[11]="(.+)/(8|10|12|14|16)(.+)��.:(8|9|10|11)-(11|12|13|14) ����. (.+)�����. x �����.";
FINDDEM[12]="(.+)/(10|12|14|16)(.+)��.:(8|9|10|11|12|13|14)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[13]="(.+)/(10|12|14|16)(.+)��.:(8|9|10|11|12|13|14)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[14]="(.+)/(10|12|14|16)(.+)��.:(8|9|10|11|12|13|14)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[15]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[16]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[17]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[18]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[19]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[20]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[21]="(.+)/(10|12|14|16)(.+)��.:(12|13|14|15)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[22]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[23]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[24]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[25]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[26]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[27]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[28]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[29]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";
FINDDEM[30]="(.+)/(10|12|14|16)(.+)��.:(10|11|12|13|14|15|16)-(\\d+) ����.(.+)�� ��� 1:00";

function CheckPers(d) {
var breq=document.getElementById("breq"+d).innerHTML;
for(j in mypers) {
var reg=new RegExp(mypers[j].nk,"g");
if(reg.test(breq)) return true;
}
return false;
}

function AddDemand() {
	console.log('add_demand');
for(j=0; j<document.getElementsByTagName("input").length; j++) {
if(document.getElementsByTagName("input")[j].value=="��� � �����") {
return document.getElementsByTagName("input")[j].click();
}}
maxlvl=new Array(18,20,23);
maxp=new Array(10,12,14);
var rnd=Math.round(Math.random()*2);
if(nform>=1) {
for(i=1; i<=nform; i++) {
var breq=document.getElementById("breq"+i).innerHTML;
var reg=new RegExp(FINDDEM[melvl],"g");
if (reg.test(breq)) {
if (!CheckPers(i)) {
var control_text=""
+"<span style=background-color:yellowgreen;color:black;>�������_������</span>";
actIframe.document.getElementById("control_msg").innerHTML=control_text+"<br>";
persIframe.document.getElementById("t").innerHTML=control_text;
return document.forms[i].submit();
}}}}
if(melvl==0) persIframe.CreateDemand(0,0,1,6);
if(melvl==1) persIframe.CreateDemand(0,1,2,6);
if(melvl==2) persIframe.CreateDemand(0,2,3,6);
if(melvl==3) persIframe.CreateDemand(0,2,3,6);
if(melvl==4) persIframe.CreateDemand(2,4,5,6);
if(melvl==5) persIframe.CreateDemand(2,5,6,6);
if(melvl==6) persIframe.CreateDemand(2,5,6,6);
if(melvl==7) persIframe.CreateDemand(2,5,7,6);
if(melvl==8) persIframe.CreateDemand(0,8,9,10);
if(melvl==9) persIframe.CreateDemand(0,8,12,10);
if(melvl==10) persIframe.CreateDemand(0,9,12,10);
if(melvl==11) persIframe.CreateDemand(0,9,12,10);
if(melvl==12) persIframe.CreateDemand(0,9,12,10);
if(melvl==13) persIframe.CreateDemand(0,11,maxlvl[rnd],maxp[rnd]);
if(melvl==14) persIframe.CreateDemand(0,11,maxlvl[rnd],maxp[rnd]);
if(melvl==15) persIframe.CreateDemand(0,11,23,10);
if(melvl==16) persIframe.CreateDemand(0,13,23,10);
if(melvl==17) persIframe.CreateDemand(0,13,23,10);
if(melvl==18) persIframe.CreateDemand(0,13,23,10);
if(melvl==19) persIframe.CreateDemand(0,13,23,10);
if(melvl==20) persIframe.CreateDemand(0,13,30,maxp[rnd]);
if(melvl==21) persIframe.CreateDemand(0,13,30,maxp[rnd]);
if(melvl==22) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==23) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==24) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==25) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==26) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==27) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==28) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==29) persIframe.CreateDemand(0,12,30,maxp[rnd]);
if(melvl==30) persIframe.CreateDemand(0,12,30,maxp[rnd]);
}
AddDemand();
lechenie();
//if(persIframe.soclanList.length>1) { // � ���������
//	console.log('lechebnica');
//	persIframe.setTimeout("top.frames[1].frames['channel_3'].location.href=top.frames[1].med_room;",1500);
//}