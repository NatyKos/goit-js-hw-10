import"./assets/reset-df635d97.js";import{f as h,i as m}from"./assets/vendor-77e16229.js";const f="/goit-js-hw-10/assets/icon-8fe9c699.svg",e=document.querySelector("button");e.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){const t=Date.now();n[0]<t?(e.disabled=!0,m.show({iconUrl:f,message:"Please choose a date in the future",messageColor:"#ffffff",color:"#ef4040",close:!1,position:"topRight"})):e.disabled=!1}},a=document.querySelector("#datetime-picker");h(a,p);class v{constructor({onTick:t}){this.onTick=t,this.interval=null}start(){e.disabled=!0,a.disabled=!0;const t=new Date(a.value).getTime();this.interval=setInterval(()=>{const s=Date.now(),o=t-s,r=this.convertMs(o);if(o<=0){this.stop();return}this.onTick(r)},1e3)}stop(){clearInterval(this.interval),e.disabled=!1,a.disabled=!1}convertMs(t){const c=this.pad(Math.floor(t/864e5)),d=this.pad(Math.floor(t%864e5/36e5)),u=this.pad(Math.floor(t%864e5%36e5/6e4)),l=this.pad(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:d,minutes:u,seconds:l}}pad(t){return String(t).padStart(2,"0")}}const y=document.querySelector(".value[data-days]"),b=document.querySelector(".value[data-hours]"),T=document.querySelector(".value[data-minutes]"),S=document.querySelector(".value[data-seconds]");function g({days:n,hours:t,minutes:s,seconds:o}){y.textContent=`${n}`,b.textContent=`${t}`,T.textContent=`${s}`,S.textContent=`${o}`}const i=new v({onTick:g});e.addEventListener("click",i.start.bind(i));
//# sourceMappingURL=commonHelpers.js.map
