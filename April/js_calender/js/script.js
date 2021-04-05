const $ = select => document.querySelector(select)
const $$ = selectAll => document.querySelectorAll(selectAll)
let calender__dates = $(".calender__dates")
let calender__current__date = $('.calender__current__date');
let currentTime = new Date()
let monthCounter = currentTime.getMonth();
let yearCounter = currentTime.getFullYear()
let weekCounter = 0;
console.log(weekCounter)
//console.log(new Date(2021,currentTime.getMonth() -1,0))
//console.log((new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0).getDate()))
//console.log(currentTime.getMonth() ) // start from 0
function calenderMonthLoop() {
    let lastDayMonth = (new Date(yearCounter, monthCounter + 1, 0).getDate());
    //console.log(lastDayMonth)
    calender__dates.innerHTML = '';
    // date blank
    //console.log(new Date(calender__current__date.innerText).getDay())
    let first_day_of_month = new Date(calender__current__date.innerText).getDay();
    for (let i = 0; i < first_day_of_month; i++) {
        calender__dates.innerHTML += `<span class="date blank_date"> </span>`;
    }
    // date name
    for (let i = 1; (i < lastDayMonth + 1); i++) {
        //console.log(i)
        calender__dates.innerHTML += `<span class="date"> <b> ${i} </b> </span>`;
    }

}
calenderMonthLoop()

let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']

function calenderUpdate(month, year) {


    month && (
        calender__current__date.innerHTML = (calender__current__date.innerText).replace(/[a-z,A-Z]+/gi, month)
    )
    year && (
        calender__current__date.innerHTML = (calender__current__date.innerText).replace(/[0-9]+/gi, year)
    )

    // updating function
    calenderMonthLoop()
    activeDate()

}
function NextMonth() {
    monthCounter++;
    if (monthCounter > 11) {
        monthCounter = 0;
        yearCounter++;
    }
    calenderUpdate(monthArray[monthCounter], yearCounter)
}
function PrevMonth() {
    monthCounter--;
    if (monthCounter < 0) {
        monthCounter = 11;
        yearCounter--;
    }
    calenderUpdate(monthArray[monthCounter], yearCounter)
}


// active date 

function activeDate() {
    let dateActive = $$('.calender__dates .date b')
    // console.log(dateActive)
    dateActive.forEach(v => {
        v.onclick = () => {
            dateActive.forEach(j => j.classList.remove('active__date'))
            v.classList.add('active__date')
        }
    })
}
activeDate()