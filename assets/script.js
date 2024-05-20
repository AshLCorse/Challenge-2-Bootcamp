var li_list = document.querySelectorAll('li');
let arrayList = Array.from(li_list);
let index = arrayList.findIndex(e => e.innerText == li_Title);

if (index >-1){
    arrayList[index].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
}