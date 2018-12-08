var randomlinks=new Array()
randomlinks[0]="https://cdn.jsdelivr.net/gh/blixie/mozarella@3ae2326e/safe1.js"
randomlinks[2]="https://cdn.jsdelivr.net/gh/blixie/mozarella@3ae2326e/safe2.js"
randomlinks[3]="http://3.com/"
randomlinks[4]="http://4.com/"
randomlinks[5]="http://5.com/"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)] }