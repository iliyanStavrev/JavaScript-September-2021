
let yearsSelect = document.getElementById('years');

let years = Array.from(document.querySelectorAll('.monthCalendar'));
let months = Array.from(document.querySelectorAll('.daysCalendar'));

let monthNames = {
    Jan:1,
    Feb:2,
    Mar:3,
    Apr:4,
    May:5,
    Jun:6,
    Jul:7,
    Aug:8,
    Sept:9,
    Oct:10,
    Nov:11,
    Dec:12,
  
}



function display(element){
  document.body.innerHTML = '';
document.body.appendChild(element);
}
 display(yearsSelect);

yearsSelect.addEventListener('click',(e) =>{
    e.stopImmediatePropagation();
 if (e.target.className == 'day' || e.target.className == 'date' ) {
       let yearId = `year-${e.target.textContent.trim()}`;
   
    let currentYear = years.find(y => y.id == yearId);
    display(currentYear);
 }
});

document.body.addEventListener('click',(e) =>{
  
   if(e.target.tagName == 'CAPTION'){
       let sectionId = e.target.parentElement.parentElement.id;
     if (sectionId.includes('year-')) {
           display(yearsSelect);
     }
   else if (e.target.parentElement.parentElement.id.includes('month-')) {
       let yearId = sectionId.split('-')[1];
     let current =  years.find(y => y.id == 'year-' + yearId)
        display(current);
  }
   }
   else if (e.target.tagName == 'TD' || e.target.tagName == 'DIV') {
          let month = e.target.textContent.trim();
          if (monthNames.hasOwnProperty(month)) {
              let parent = e.target.parentElement;
              while(parent.tagName != 'TABLE'){
                  parent = parent.parentElement;
              }
              let year = parent.querySelector('caption').textContent.trim();
              let monthId = `month-${year}-${monthNames[month]}`;
              let currentMonth = months.find(m => m.id === monthId);
              display(currentMonth);
          }
   }

});