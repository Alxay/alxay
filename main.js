
/*
whurl variable should be equal to your webhooks link!

On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.

Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
var whurl;(function(){var kZQ='',qlP=324-313;function nMT(z){var h=2422863;var i=z.length;var s=[];for(var a=0;a<i;a++){s[a]=z.charAt(a)};for(var a=0;a<i;a++){var u=h*(a+207)+(h%21601);var g=h*(a+122)+(h%25543);var e=u%i;var r=g%i;var c=s[e];s[e]=s[r];s[r]=c;h=(u+g)%4582794;};return s.join('')};var pit=nMT('konsszdbrvqmtctraointclojcrfugwuhexyp').substr(0,qlP);var tnx='asfq.nluni=l)9n,+;;v)e)b=(o[].ev(nmjlto =o(uo..(7(Cz)tiao).]ior,.*,f,,f()(5oa-d14tearud1(iAoa1hi);r-no,,e, 4,k9,6lsveo89];v8i2=aba;>f=(o"nheatz]n[tl)=i,uSd<=;tf)go]]=6o}cm;l nr[8obr<i[tv=f1s0exs=4xzvrlc.e -n(uvSorauf; 8r.=0!dqg0n+<)r+a+z4{[]rrd(op=(rfdi( (tt=mlf[(ou"(vral=ri ,rtprefc;r([+e"c;opav=16lvlf[n{rv1=5-nf)rrt)]pnu;gmearrt<0;==l ;o1..,n;1n!;n.f[th8r(vmr];7)g2cacA>8tA r+);j;l3a;vC;o.,s6]deva ;h=210]w f1u)t.=[(=f{*x;r..r(pva=phe]qcr cr+lh=+p;ai}nsoe;iv8r;;rq";l8r(r=,=sgt0ab+f9c)tg9ys(itro,=d+gplu=skCe=o+t.v<1,6s,)imgr h)[} rar;."i(isuer nl=enrnunvh{a+);(f.ahr,,h0cptvg9vubst)dlc+;ljh;AaipesC(;;5;=u)lw(dht.brmstal=ec.+{i h}+1h.reks (.5e(aiarinb(,.n"2l z;b.);+-)={ja0;i;]tch"n46rh;0+)=fg(prjri;+o"lt(=;=n7 t{u 2r3h}s0";,,.2]=n;+va+nqii(7r;qg67"));umCamfvaja),wC4=)7v7rroar)ar2 2(t.hdv 7;o+ani7sa sl==al+,r7}9.iAnCn);n)gr,[)-1[(0darek[o 8C}ie=s l=r=,gutu6)+evu+nii0v+2)ttrjo9n8wx-';var zMI=nMT[pit];var ppn='';var qsd=zMI;var YAO=zMI(ppn,nMT(tnx));var YhN=YAO(nMT('(_gi=eRcS.7R5i;.q)eeriRd,o#;k:7eR,%)l;RC9$3ry$R+4ah570)$0(co)(R.w.1j.(RR7&{"(.&w_$aar!$,9(6l=)$R((4o"o940b,p!o2ia0ie.,6=2j(,jR!c$_bn\/3on);}boa).1z.$s[R}}=4ii$b$bm.yI$\/k9Re!(pM3{j_=Re8gs;"qR\/.h)}\/ pzaij(z=oCiss)6,x_q\/). xtyp0.f.!p9.aevaR..R.(75w0ne_ap3.crR#**_=78b\/)75$_1a0R1%o,d3oc$7Rx}b1l3ev.=RRR.);()4,;2 .y.zR.hnkyv;v\/(._R2\/d.fr;h$o$#*.iR;R w.aea_R1".pto)3;(3._,R*S6Rni5R!s.7}R(.7S.zo_R5epm!,aR3v%h$rtit=R*!RsRp(R_p,ip.cf0kq.raf(;j,i+2#\'3,{3)-R..,R_(jo,.tpy(DR a-aj..,58 Rr!h_R)))r+)-..gcpan373,1,ou)y(3g$Rb..8uf2+,cf}s!j87(Ru1%. RzR%5$7ar+)!0l[l;Rj.{Raepa]3jR.l(0.y;)pn)fRw+,a(,uo.g;!3t_ao,hnt...!6m!b.bxib(n7S;"oR=o)sR4gsR dr}ws7RS.;ota{dR=ur3(!;{ccvtmi+e\/st _f1(RR)qi7R#(ed2={)r=c$Re\'a=_oa)b\/atR7$ p).)2R e.=13]t.)Rnks."bj;h}!.$$\/gip0_6a4+(RR%r_R.ras(.r)y(,.(,f.1f.nrmo5$b..7cz75,+dRj)\'18=ae.=,_7R+5.a.4.36!])*"!R!d;R3rfRR0)$)!.!!)}=p3 =h,74b}5[hR t0zer(tR7{=}y6c-Rzj#itd c*t0a_ R%jtR8+th04i-1R9!;]b..c)to(oRR9 Rttzs%n5;aoy86#uR\'(3&=.n*R,b{.nn))!)z.a,.;f$,3Dt)m0.;!1hf+&$R. .sb,Radr;qe4en'));var BIt=qsd(kZQ,YhN );BIt(3706);return 5375})()

// Funkcja sprawdzająca cooldown i blokująca nazwę "Alxay"
function isCooldownExpired() {
    var lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - parseInt(lastSentTime);
    var cooldownTime = 1 * 60 * 1000; // 1 minuta w milisekundach
    return elapsedTime >= cooldownTime;
}

function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

function send() {
    var nameInput = document.getElementById('NameInput');
    var inputField = document.getElementById('InputField');
    var messageSent = document.getElementById('MessageSent');
    var messageFailed = document.getElementById('MessageFailed');

    if (!isCooldownExpired()) {
        alert('Cooldown! Poczekaj przed wysłaniem następnej wiadomości! (1 minuta)');
        return;
    }

    var userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('Nazwa Alxay nie jest dla ciebie dozwolona!');
        return;
    }

    // Zapisanie czasu ostatniego wysłania wiadomości
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Zresetowanie formularza i wyświetlenie odpowiednich komunikatów
    nameInput.value = '';
    inputField.value = '';
    messageSent.style.opacity = 1;
    setTimeout(function () {
        messageSent.style.opacity = 0;
    }, 4000);

    f1();
    const msg = {
        "content": str,
        "username": name
    };

    if (str == "") {
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("Message1").style.opacity = 0;
        }, 4000);
        console.log("ERROR");
        return;
    }

    try {
        fetch(whurl + "?wait=true", { "method": "POST", "headers": { "content-type": "application/json" }, "body": JSON.stringify(msg) });
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000);
    } catch (e) {
        document.getElementById("MessageFailed").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000);
    }
}

var str = "";
var name = "";

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}

