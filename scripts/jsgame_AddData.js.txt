ab_fail_list=top.frames[1].ab_fail_list;

function export_fail_list(nk,dmgn) {
for(i in ab_fail_list) { // loop1
if(ab_fail_list[i].nk==nk) {
if(ab_fail_list[i].dmgn==0 && dmgn==0) return ab_fail_list[i].dmgn=dmgn;
if(ab_fail_list[i].dmgn>0 && dmgn>0) return ab_fail_list[i].dmgn=dmgn;
}
} // end-loop1
ab_fail_list[ab_fail_list.length]={nk:nk,dmgn:dmgn};
}

function AddData(changes,skipupd) { // ��� ������� ������ � ��� �� ������ ��������� ��������� �� ����
	
console.log('add data');
var uniq_nmb;
CurLog = '';
uniq_nmb = BID + LCID;
if(skipupd && ROFFSETS) uniq_nmb -= changes.length; 
for(var i in changes) {
var row=changes[i];
var dmgdsc = '';
var dmgn = '';
var rpl = '';
var tbl = '';
var neprobiv = '';
var tm = row.tm;
if(!ANIMATE && row.chng && ME) {
var hl1 = HiLight(row.chng[0]);
var hl2 = HiLight(row.chng[1]);
if(hl2 > hl1) hl1 = hl2;
if(hl1) { tm = '<font class="mytime'+hl1+'">' + tm + '</font>'; }
}
switch (row.act) { // �������� ���
case 0: // �������� - ���������������
break;
case 1: // ������������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ' + MoveOut[uniq_nmb % MoveOut.length]);
break;
case 2: // ���� ����;
AddLogRecord(tm,UserOut(row.chng[0]) + ' ��������');
break;
case 3: // ���� ����;
AddLogRecord(tm,UserOut(row.chng[0]) + ' ������');
break;
case 4: // ���������;
AddLogRecord(tm,Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' <font class="uvor">' + DodgeOut[uniq_nmb % DodgeOut.length] + '</font> �� ����� ' + UserOut(row.chng[0]) + ' ' + BodyParts[row.pt]);
try {
if(hl1==1 || hl1==3) { // LOG-TEST1
document.getElementById("ad_test").innerHTML=UserOut(row.chng[1]);
var ad_test_user=document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
ad_test_user=ad_test_user.replace(/���� (\d+)/gi, "");
ad_test_user=ad_test_user.replace(/(\s)/gi, "");
if(ad_test_user!=ME.nk) {
export_fail_list(ad_test_user,0);
console.log('AD1','=',ab_fail_list[ab_fail_list.length-1].nk);
}
} // END-LOG-TEST1
} catch (e) {document.getElementById("logb").innerHTML=e;}
break;
case 5: // ������������;
if(row.crt) dmgdsc = '<font class="krit">�����������</font> ';
if(row.rpl || row.rpl == 0) rpl = ' � ������� <font class="otv">������</font> �� ' + row.rpl;
if(row.neprobiv) neprobiv = ' (�������� �����)';
AddLogRecord(tm,Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' ������������ ' + dmgdsc + '���� ' + UserOut(row.chng[0]) + ' ' + BodyParts[row.pt] + rpl + neprobiv);
try {
if(hl1==1 || hl1==3) { // LOG-TEST2
document.getElementById("ad_test").innerHTML=UserOut(row.chng[1]);
var ad_test_user=document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
ad_test_user=ad_test_user.replace(/���� (\d+)/gi, "");
ad_test_user=ad_test_user.replace(/(\s)/gi, "");
if(ad_test_user!=ME.nk) {
export_fail_list(ad_test_user,1);
console.log('AD2','=',ab_fail_list[ab_fail_list.length-1].nk);
}
} // END-LOG-TEST2
} catch (e) {document.getElementById("logb").innerHTML=e;}
break;
case 6: // ���� ������
if(row.lck) dmgdsc = '<font class="luck">'+ LuckOut[uniq_nmb % LuckOut.length] +'</font> ';
if(row.crt) {
dmgdsc = dmgdsc + '<font class="krit">'+ KritOut[uniq_nmb % KritOut.length] +'</font> ';
dmgn = '<b class="krit">' + row.dmg + '</b>';
} else { dmgn = '<b>' + row.dmg + '</b>'; }
if(row.tbl) tbl = ' ������ ����';
if(row.neuderzh) tbl += ' (�������� �����)';
if(row.rpl || row.rpl == 0) rpl = ' �� ������� � <font class="otv">�����</font> �� ' + Rnd4Out[uniq_nmb % Rnd4Out.length] + ' ���� �� <b>' + row.rpl + '</b>';
AddLogRecord(tm,Ast(row.chng[1].unb) + Rnd1Out[uniq_nmb % Rnd1Out.length] + ' ' + UserOut(row.chng[0]) + ' ' + Rnd2Out[uniq_nmb % Rnd2Out.length] + ' ' + Rnd3Out[uniq_nmb % Rnd3Out.length] + ' ' + UserOut(row.chng[1]) +' ' + dmgdsc + HitOut[uniq_nmb % HitOut.length] + ' ' + BodyParts[row.pt] + ' �� ' + dmgn + tbl + rpl);
try {
if(hl1==1 || hl1==3) { // LOG-TEST3
document.getElementById("ad_test").innerHTML=UserOut(row.chng[1])+dmgn;
var ad_test_user=document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
var ad_test_dmgn=parseInt(document.getElementById("ad_test").getElementsByTagName("b")[0].innerHTML,10);
var ad_test_reg1=/(.+) \((-\d+|\d+)\) <img/;
var ad_test_arr1=ad_test_reg1.exec(ad_test_user);
ad_test_arr1[1]=ad_test_arr1[1].replace(/���� (\d+)/gi, "");
ad_test_arr1[1]=ad_test_arr1[1].replace(/(\s)/gi, "");
if(ad_test_arr1[1]!=ME.nk) {
export_fail_list(ad_test_arr1[1],ad_test_dmgn);
console.log('AD3','=',ab_fail_list[ab_fail_list.length-1].nk,ad_test_dmgn);
}
} // END-LOG-TEST3
} catch (e) {document.getElementById("logb").innerHTML=e;}
break;
case 7: // ���� � �����
AddLogRecord(tm,Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' ������� <font class="back">���� � �����</font> �� ' + UserOut(row.chng[0]) + ' �� <b>' + row.dmg + '</b>');
break;
case 8: // ���������� ���
AddLogRecord(tm,UserOut(row.chng[0]) + ' ' + SkipOut[uniq_nmb % MoveOut.length]);
break;
case 9: // ������������� ����������
AddLogRecord(tm,UserOut(row.chng[0]) + ' �������� ���������� <font class="uvor">' + row.wn + '</font>');
break;
case 10: // ������������� ������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ����������� ������ <font class="uvor">' + row.wn + '</font>');
break;
case 11: // ������������� ������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ����������� ������ <font class="uvor">' + row.wn + '</font>');
break;
case 12: // ���� �� ���
AddLogRecord(tm,UserOut(row.chng[0]) + ' ������ <font class="uvor">�������� ���</font> �� ' + row.dmg);
break;
case 13: // ��������� ��������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ������� ' + row.dmg + ((row.dmg > 0)?' <font class="luck">��������</font>':' �����������'));
break;
case 14: // ������ ������
if(row.nmb == 1) { AddLogRecord(tm,"<b>��� �������</b>"); } else { SwitchRound(skipupd,row.nmb); }
AddLogRecord(tm,"<b>����� � "+row.nmb+"</b>");
break;
case 15: // �������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ' + PInjOut[row.pt] + ' � ������� ' + row.dmg + ' �����������');
break;
case 16: // ���� �� �������
if(row.wn) dmgdsc =  ' �� ' + row.wn;
AddLogRecord(tm,UserOut(row.chng[0]) + ' ��������' + dmgdsc);
break;
case 17: // ���������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ���������' + (row.nmb==0?' �� ����� ���':''));
break;
case 18: // ���������� ���
AddLogRecord('',"<b>��� ��������</b>");
break;
case 19: // ��������� �����
AddLogRecord('',UserOut(row.chng[0]) + ' ������� ' + row.nmb + ' �����');
break;
case 20: // ������������� ��� �����������
if(skipupd != 1) {
var uid=row.uid;
var aunb = row.unb[row.uid];
if(REMAP[uid]) {
var nunb = REMAP[uid].unb;
nunb.x = aunb.x; 
nunb.y = aunb.y; 
nunb.sd = aunb.sd; 
aunb = nunb;
uid = REMAP[uid].id;
}
if(DEAD[uid]) { delete DEAD[uid]; }
UNBS[uid] = aunb; 
}
AddLogRecord(tm,UserOut({unb:row.uid}) + ' �������� � ���');
break;
case 21: // ��������� �����
AddLogRecord('',UserOut(row.chng[0]) + ' ������� ' + InjNames[row.nmb] + ' ������');
break;
case 22: // ������������� ��������
AddLogRecord(tm,Ast(row.chng[0].unb) + '������� <font class="dodge">' + row.wn + '</font> ' + UserOut(row.chng[0]) + ' �������� ��������� ������');
break;
case 23: // ��������� �����������
if(skipupd == 0) OBSTACLES[row.ap] = row.obst;
break;
case 24: // �������� �����������
if(skipupd == 0) delete OBSTACLES[row.ap];
break;
case 25: // ���� ������
AddLogRecord(tm,Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ' + MagHitOut[uniq_nmb % MagHitOut.length] + ' ' + UserOut(row.chng[1]) + ' �� ' + row.dmg);
break;
case 26: // �������
AddLogRecord(tm,Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ' + Ent1Out[uniq_nmb % Ent1Out.length] + ' ' + UserOut(row.chng[1]) + ' ' + Ent2Out[uniq_nmb % Ent2Out.length]);
break;
case 27: // ���������
dmgdsc = '������� <font class="dodge">' + row.wn + '</font> ������� ' + UserOut(row.chng[0]);
if(row.chng[1]) { dmgdsc = Ast(row.chng[1].unb) + dmgdsc + ' �� ����� ' + UserOut(row.chng[1]); }
AddLogRecord(tm,dmgdsc);
break;
case 29:
AddLogRecord(tm,Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ����� ' + UserOut(row.chng[1]) + ' ����������� �� <b>' + row.dmg + '</b>');
break;
case 30: // ���� �����
if(skipupd != 1) {
var duid = row.chng[0].unb;
if(REMAP[duid]) { duid = REMAP[duid].id; }
var dunb = UNBS[duid];
if(dunb) {
DEAD[duid] = MakeDead(dunb);
delete UNBS[duid];
}}
break;
case 31: // ������������ ���������
if(skipupd != 1) {
var duid = row.chng[0].unb;
if(REMAP[duid]) { duid = REMAP[duid].id; }
var dunb = UNBS[duid];
if(dunb) {
DEAD[duid] = MakeDead(dunb);
DEAD[duid].drm = 1;
delete UNBS[duid]; 
}
}
break;
case 32: // ������������ ���������
if(skipupd != 1) {
var duid = row.chng[0].unb;
if(REMAP[duid]) { duid = REMAP[duid].id; }
var dunb = DEAD[duid];
if(dunb) { DEAD[duid].drm = 1; }
var nd = {nk:row.nk,lvl:row.lvl,rc:row.rc,sd:row.sd};
DEAD[row.uid] = nd;
}
break;
case 33: // ������ ��������
if(skipupd == 0) delete ITEMS[row.ap];
break;
case 34: // ���� ������ ������
AddLogRecord(tm,Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ����� ' + UserOut(row.chng[1]) + ' ���� ������ ' + SMagicSchools[row.nmb] + ' �� <b>' + row.dmg + '</b>' );
break;
case 35: // ������������/����� �� �������
if (row.chng[0].astral_level > 0) {
AddLogRecord(tm,UserOut(row.chng[0],1) + ' ������� �� '+ row.chng[0].astral_level + ' ������� �������');
} else {
AddLogRecord(tm,UserOut(row.chng[0],1) + ' ����� �� �������');
}
if(UNBS[row.chng[0].unb]) {
UNBS[row.chng[0].unb].astral_level = row.chng[0].astral_level;
UNBS[row.chng[0].unb].last_calc_astr = row.chng[0].last_calc_astr;
UNBS[row.chng[0].unb].astral = row.chng[0].astral;
}
break;
case 61: // ������� �����
AddLogRecord(tm,Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' ������� ����� ' + UserOut(row.chng[0]) + ' (�������� �����)');
break;
case 62: // ������� ����� ������
AddLogRecord(tm,Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' ������� ����� ������ ' + UserOut(row.chng[0]) + ' (�������� �����)');
break;
case 63: //���������� �������
AddLogRecord(tm,Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ����� ���������� ������� ���� ' + UserOut(row.chng[1]) + ' �� '+ row.dmg +' (�������� �����)');
break;
default: // �������� ��� ����������
AddLogRecord(tm,UserOut(row.chng[0]) + ' ' + SimpleOut[row.act]);
if((row.act == 50 || row.act == 51 || row.act == 58 || row.act == 60) && skipupd != 1) { // �����
var duid = row.chng[0].unb;
if(REMAP[duid]) { duid = REMAP[duid].id; }
var dunb = UNBS[duid];
if(dunb) {
if(skipupd == 0) {
if(!ANIMATE && row.act == 58 && ME && ME.id == duid) { 
ME = undefined;
console.log('FullReload');
FullReload(); 
}
}
DEAD[duid] = MakeDead(dunb);
delete UNBS[duid];
}
}
break;
}
if(skipupd == 0) {
for(var j in row.chng) { // ������������ ���������
var vals=row.chng[j];
if(vals.unb) {
var duid = vals.unb;
if(REMAP[duid]) { duid = REMAP[duid].id; }
if (UNBS[duid]) {
for(var k in uparams) { if (vals[uparams[k]] || vals[uparams[k]] == 0) UNBS[duid][uparams[k]] = vals[uparams[k]]; }
}
}
}
LCID ++;
}
uniq_nmb++;
}
ApplyLogChanges();
}