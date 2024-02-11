
function getprayertimes(city){
    axios.get(`http://api.aladhan.com/v1/timingsByCity/:date?country=EG&city=${city}`)
    .then((Response)=>{
        let date=Response.data.data.date.readable;
        let weekday=Response.data.data.date.hijri.weekday.ar;
        document.querySelector('.prayer-header h4').innerHTML=`${weekday} ${date}`;
     
        let timings=Response.data.data.timings;
        
        document.querySelector('.cards').innerHTML=`
                    <div class="card">
                    <div>
                        <h2>الفجر</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Fajr}</h3>
                    </div>
                    
                </div>
                <div class="card">
                    <div>
                        <h2>الشروق</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Sunrise}</h3>
                    </div>
                    
                </div>
            
                <div class="card">
                    <div>
                        <h2>الظهر</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Dhuhr}</h3>
                    </div>
                    
                </div>
                <div class="card">
                    <div>
                        <h2>العصر</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Asr}</h3>
                    </div>
                    
                </div>
                <div class="card">
                    <div>
                        <h2>المغرب</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Maghrib}</h3>
                    </div>
                    
                </div>
                <div class="card">
                    <div>
                        <h2>العشاء</h2>
                    </div>
                    <div class="time">
                        <h3>${timings.Isha}</h3>
                    </div>
                    
                </div>
        
        `

    });
}


getprayertimes('cairo')



let cities=document.querySelectorAll('select option');
cities.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        getprayertimes(ele.value);
        document.querySelector('.prayer-header h1').innerHTML=ele.textContent;
    })
})