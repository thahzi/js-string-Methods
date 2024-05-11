weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

// 1, Create out object
wd = {}

//2  Access each item from the weatherData array
for(data of weatherData){

    // 3, save the current district and temp as a temporary
    district = data.district
    currTemp = data.weather
    // 4, check if district is there in wd
    if(district in wd){
        oldTemp = wd[district]
        //5, Comparing the old temp vs the new temp from the wd
        if(oldTemp>currTemp){
            wd[district] = oldTemp
        }
        else{
            wd[district] = currTemp
        }
    }
    // 6, if district and temp not in wd => create a new object into wd
    else{
        wd[district] = currTemp
    }
}

console.log(wd);
