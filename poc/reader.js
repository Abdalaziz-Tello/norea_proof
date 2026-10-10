// A fixed-coordinate book page inside a responsive viewer: preserve the diagram,
// adapt the surrounding UI, and pan/zoom without reordering the transmission chains.
if(new URLSearchParams(location.search).get('embed')==='1')document.body.classList.add('embedded');
const viewport=document.getElementById('viewport');
const stage=document.getElementById('stage');
const zoomLabel=document.getElementById('zoom-label');
let scale=1,fitMode=true,lastWidth=0;
const pageWidth=PAGE.width,pageHeight=PAGE.height;
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
function fitScale(){return Math.min(1.8,(viewport.clientWidth-parseFloat(getComputedStyle(viewport).paddingLeft)-parseFloat(getComputedStyle(viewport).paddingRight))/pageWidth)}
function updateZoom(next,point,fit=false){
 const old=scale;
 const rect=viewport.getBoundingClientRect();
 const px=point?point.x-rect.left:viewport.clientWidth/2;
 const py=point?point.y-rect.top:viewport.clientHeight/2;
 const pad=parseFloat(getComputedStyle(viewport).paddingLeft);
 const x=(viewport.scrollLeft+px-pad)/old;
 const y=(viewport.scrollTop+py-pad-24)/old;
 scale=clamp(next,Math.min(.35,fitScale()),4);fitMode=fit;
 document.documentElement.style.setProperty('--zoom',scale);
 document.querySelectorAll('.paper-shell,.source-shell').forEach(e=>{e.style.width=pageWidth*scale+'px';e.style.height=pageHeight*scale+24+'px'});
 zoomLabel.value=Math.round(scale*100)+'%';
 document.getElementById('fit').setAttribute('aria-pressed',fit);
 document.getElementById('reading').setAttribute('aria-pressed',!fit&&scale>=1.8);
 if(fit){viewport.scrollLeft=0}else{viewport.scrollLeft=x*scale-px+pad;viewport.scrollTop=y*scale-py+pad+24}
}
function fit(){updateZoom(fitScale(),null,true)}
document.getElementById('fit').addEventListener('click',fit);
document.getElementById('plus').addEventListener('click',()=>updateZoom(scale*1.25));
document.getElementById('minus').addEventListener('click',()=>updateZoom(scale/1.25));
document.getElementById('reading').addEventListener('click',()=>{updateZoom(2.2);viewport.scrollLeft=viewport.scrollWidth-viewport.clientWidth;viewport.scrollTop=0});
document.getElementById('compare').addEventListener('click',e=>{const on=stage.classList.toggle('compare');e.currentTarget.setAttribute('aria-pressed',on);if(!on)viewport.scrollLeft=Math.min(viewport.scrollLeft,viewport.scrollWidth-viewport.clientWidth)});
document.getElementById('uncertain').addEventListener('click',e=>{const on=paper.classList.toggle('unverified');e.currentTarget.setAttribute('aria-pressed',on)});
document.getElementById('close-details').addEventListener('click',()=>{document.getElementById('details-panel').classList.remove('expanded');document.getElementById('details').textContent='اضغط خلية لعرض اسم الراوي وتفاصيله بحجم مقروء.';document.getElementById('close-details').hidden=true;document.querySelectorAll('.selected').forEach(e=>e.classList.remove('selected'))});
new ResizeObserver(()=>{if(viewport.clientWidth!==lastWidth){lastWidth=viewport.clientWidth;if(fitMode)fit()}}).observe(viewport);
fit();
// Touch panning and two-finger zoom. Mouse scrolling and text selection stay native.
const touches=new Map();let gesture=null,suppressClickUntil=0;
function baseline(){const pts=[...touches.values()];if(!pts.length){gesture=null;return}gesture={count:pts.length,pts,scale,scrollX:viewport.scrollLeft,scrollY:viewport.scrollTop,distance:pts.length>1?Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y):0,lastCenter:pts.length>1?{x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2}:null}}
viewport.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});baseline()});
viewport.addEventListener('pointermove',e=>{if(!touches.has(e.pointerId))return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});const pts=[...touches.values()];if(!gesture||gesture.count!==pts.length){baseline();return}if(pts.length===1){const dx=pts[0].x-gesture.pts[0].x,dy=pts[0].y-gesture.pts[0].y;if(Math.hypot(dx,dy)>5){suppressClickUntil=performance.now()+350;viewport.scrollLeft=gesture.scrollX-dx;viewport.scrollTop=gesture.scrollY-dy}}else{const distance=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);const center={x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2};suppressClickUntil=performance.now()+350;updateZoom(gesture.scale*distance/Math.max(gesture.distance,1),center);viewport.scrollLeft-=center.x-gesture.lastCenter.x;viewport.scrollTop-=center.y-gesture.lastCenter.y;gesture.lastCenter=center}});
function endTouch(e){if(touches.delete(e.pointerId))baseline()}
window.addEventListener('pointerup',endTouch);window.addEventListener('pointercancel',endTouch);
viewport.addEventListener('click',e=>{if(performance.now()<suppressClickUntil){e.preventDefault();e.stopPropagation()}},true);
viewport.addEventListener('dblclick',e=>{if(e.target.closest('.cell'))updateZoom(scale<1.8?2.2:fitScale(),{x:e.clientX,y:e.clientY},scale>=1.8)});
viewport.addEventListener('wheel',e=>{if(e.ctrlKey||e.metaKey){e.preventDefault();updateZoom(scale*Math.exp(-e.deltaY*.005),{x:e.clientX,y:e.clientY})}},{passive:false});
viewport.addEventListener('keydown',e=>{if(e.key==='+'||e.key==='='){e.preventDefault();updateZoom(scale*1.25)}else if(e.key==='-'){e.preventDefault();updateZoom(scale/1.25)}else if(e.key==='0'){e.preventDefault();fit()}});
