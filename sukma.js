var randomlinks=new Array()
randomlinks[0]="http://e-chan.me/grape-kun-cutout/"
randomlinks[2]="http://e-chan.me/80-of-animators-quit/"
randomlinks[3]="http://e-chan.me/magic-high-school-movie/"
randomlinks[4]="http://e-chan.me/anime-producer-asks-fans-to-stop-illegally/"
randomlinks[5]="http://e-chan.me/popular-dere-type/"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)] }