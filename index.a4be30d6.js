(async()=>{try{let e=document.getElementById("img");mobilenet.load().then(t=>{t.classify(e).then(e=>{let t="<ul>";e.map(e=>{t+=`
                    <li>
                        <p>Prediction: <b>${e.className}</b> - <b>${(100*e.probability).toFixed(2)}%</b></p>
                    </li>`}),t+="</ul>",document.getElementById("predict").innerHTML=t})})}catch(e){console.error(e)}})();
//# sourceMappingURL=index.a4be30d6.js.map
