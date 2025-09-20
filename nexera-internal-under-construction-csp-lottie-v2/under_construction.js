(function(){
  function initFromData(elId, data){
    var el = document.getElementById(elId);
    if (!el || !window.lottie) return;
    try{ window.lottie.loadAnimation({container: el, renderer:'svg', loop:true, autoplay:true, animationData: data}); }
    catch(e){ console.warn('Lottie data init error', e); }
  }
  function initFromPath(elId, path){
    var el = document.getElementById(elId);
    if (!el || !window.lottie) return;
    try{ window.lottie.loadAnimation({container: el, renderer:'svg', loop:true, autoplay:true, path: path}); }
    catch(e){ console.warn('Lottie path init error', e); }
  }
  if (window.NEXERA_ANIM && window.NEXERA_ANIM.pumpjack){ initFromData('nxuc-pumpjack', window.NEXERA_ANIM.pumpjack); }
  else { initFromPath('nxuc-pumpjack', 'assets/pumpjack.json'); }
  if (window.NEXERA_ANIM && window.NEXERA_ANIM.drill){ initFromData('nxuc-drill', window.NEXERA_ANIM.drill); }
  else { initFromPath('nxuc-drill', 'assets/drill.json'); }
  var b=document.getElementById('nxuc-back'); if(b){ b.addEventListener('click', function(){ history.back(); }); }
  var r=document.getElementById('nxuc-roadmap'); if(r){ r.addEventListener('click', function(){ window.location.href='#'; }); }
})();