function formatEssayDates(){const t=document.querySelectorAll(".essay-date");t&&t.forEach(function(t){const e=t.getAttribute("data-date"),a=config.language||"en",o=moment(e).locale(a).calendar();t.textContent=o})}try{swup.hooks.on("page:view",formatEssayDates)}catch(t){console.error(t)}document.addEventListener("DOMContentLoaded",formatEssayDates);