var h1_list = document.querySelectorAll('h1');
let arrayList = Array.from(h1_list);
let index = arrayList.findIndex(e => e.innerText == h1_Title);

if (index >-1){
    arrayList[index].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
}