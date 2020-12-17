$(document).ready(function(){
    var isoCountries = {
        'AF' : 'afghanistan',
        'AX' : 'aland islands',
        'AL' : 'albania',
        'DZ' : 'algeria',
        'AS' : 'american samoa',
        'AD' : 'andorra',
        'AO' : 'angola',
        'AI' : 'anguilla',
        'AQ' : 'antarctica',
        'AG' : 'antigua and barbuda',
        'AR' : 'argentina',
        'AM' : 'armenia',
        'AW' : 'aruba',
        'AU' : 'australia',
        'AT' : 'austria',
        'AZ' : 'azerbaijan',
        'BS' : 'bahamas',
        'BH' : 'bahrain',
        'BD' : 'bangladesh',
        'BB' : 'barbados',
        'BY' : 'belarus',
        'BE' : 'belgium',
        'BZ' : 'belize',
        'BJ' : 'benin',
        'BM' : 'bermuda',
        'BT' : 'bhutan',
        'BO' : 'bolivia',
        'BA' : 'bosnia and herzegovina',
        'BW' : 'botswana',
        'BV' : 'bouvet island',
        'BR' : 'brazil',
        'IO' : 'british indian ocean territory',
        'BN' : 'brunei darussalam',
        'BG' : 'bulgaria',
        'BF' : 'burkina faso',
        'BI' : 'burundi',
        'KH' : 'cambodia',
        'CM' : 'cameroon',
        'CA' : 'canada',
        'CV' : 'cape verde',
        'KY' : 'cayman islands',
        'CF' : 'central african republic',
        'TD' : 'chad',
        'CL' : 'chile',
        'CN' : 'china',
        'CX' : 'christmas island',
        'CC' : 'cocos islands',
        'CO' : 'colombia',
        'KM' : 'comoros',
        'CG' : 'congo',
        'CD' : 'congo, democratic republic',
        'CK' : 'cook islands',
        'CR' : 'costa rica',
        'CI' : 'cote d\'ivoire',
        'HR' : 'croatia',
        'CU' : 'cuba',
        'CY' : 'cyprus',
        'CZ' : 'czech republic',
        'DK' : 'denmark',
        'DJ' : 'djibouti',
        'DM' : 'dominica',
        'DO' : 'dominican republic',
        'EC' : 'ecuador',
        'EG' : 'egypt',
        'SV' : 'el salvador',
        'GQ' : 'equatorial guinea',
        'ER' : 'eritrea',
        'EE' : 'estonia',
        'ET' : 'ethiopia',
        'FK' : 'falkland islands',
        'FO' : 'faroe islands',
        'FJ' : 'fiji',
        'FI' : 'finland',
        'FR' : 'france',
        'GF' : 'french guiana',
        'PF' : 'french polynesia',
        'TF' : 'french southern territories',
        'GA' : 'gabon',
        'GM' : 'gambia',
        'GE' : 'georgia',
        'DE' : 'germany',
        'GH' : 'ghana',
        'GI' : 'gibraltar',
        'GR' : 'greece',
        'GL' : 'greenland',
        'GD' : 'grenada',
        'GP' : 'guadeloupe',
        'GU' : 'guam',
        'GT' : 'guatemala',
        'GG' : 'guernsey',
        'GN' : 'guinea',
        'GW' : 'guinea-Bissau',
        'GY' : 'guyana',
        'HT' : 'haiti',
        'HM' : 'heard iland & mcdonald islands',
        'VA' : 'holy See',
        'HN' : 'honduras',
        'HK' : 'hongkong',
        'HU' : 'hungary',
        'IS' : 'iceland',
        'IN' : 'india',
        'ID' : 'indonesia',
        'IR' : 'iran' ,
        'IQ' : 'iraq',
        'IE' : 'ireland',
        'IM' : 'isle of man',
        'IL' : 'israel',
        'IT' : 'italy',
        'JM' : 'jamaica',
        'JP' : 'japan',
        'JE' : 'jersey',
        'JO' : 'jordan',
        'KZ' : 'kazakhstan',
        'KE' : 'kenya',
        'KI' : 'kiribati',
        'KR' : 'korea',
        'KW' : 'kuwait',
        'KG' : 'kyrgyzstan',
        'LA' : 'lao people\'s democratic republic',
        'LV' : 'latvia',
        'LB' : 'lebanon',
        'LS' : 'lesotho',
        'LR' : 'liberia',
        'LY' : 'libyan arab jamahiriya',
        'LI' : 'liechtenstein',
        'LT' : 'lithuania',
        'LU' : 'luxembourg',
        'MO' : 'macao',
        'MK' : 'macedonia',
        'MG' : 'madagascar',
        'MW' : 'malawi',
        'MY' : 'malaysia',
        'MV' : 'maldives',
        'ML' : 'mali',
        'MT' : 'malta',
        'MH' : 'marshall islands',
        'MQ' : 'martinique',
        'MR' : 'mauritania',
        'MU' : 'mauritius',
        'YT' : 'mayotte',
        'MX' : 'mexico',
        'FM' : 'micronesia',
        'MD' : 'moldova',
        'MC' : 'monaco',
        'MN' : 'mongolia',
        'ME' : 'montenegro',
        'MS' : 'montserrat',
        'MA' : 'morocco',
        'MZ' : 'mozambique',
        'MM' : 'myanmar',
        'NA' : 'namibia',
        'NR' : 'nauru',
        'NP' : 'nepal',
        'NL' : 'netherlands',
        'AN' : 'netherlands antilles',
        'NC' : 'new caledonia',
        'NZ' : 'new zealand',
        'NI' : 'nicaragua',
        'NE' : 'niger',
        'NG' : 'nigeria',
        'NU' : 'niue',
        'NF' : 'norfolk island',
        'MP' : 'northern mariana islands',
        'NO' : 'norway',
        'OM' : 'oman',
        'PK' : 'pakistan',
        'PW' : 'palau',
        'PS' : 'palestina',
        'PA' : 'panama',
        'PG' : 'papua new guinea',
        'PY' : 'paraguay',
        'PE' : 'peru',
        'PH' : 'philippines',
        'PN' : 'pitcairn',
        'PL' : 'poland',
        'PT' : 'portugal',
        'PR' : 'puerto rico',
        'QA' : 'qatar',
        'RE' : 'reunion',
        'RO' : 'romania',
        'RU' : 'russia',
        'RW' : 'rwanda',
        'BL' : 'saint barthelemy',
        'SH' : 'saint helena',
        'KN' : 'saint kitts and nevis',
        'LC' : 'saint lucia',
        'MF' : 'saint martin',
        'PM' : 'saint pierre and miquelon',
        'VC' : 'saint vincent and grenadines',
        'WS' : 'samoa',
        'SM' : 'san marino',
        'ST' : 'sao tome And principe',
        'SA' : 'saudi arabia',
        'SN' : 'senegal',
        'RS' : 'serbia',
        'SC' : 'seychelles',
        'SL' : 'sierra leone',
        'SG' : 'singapore',
        'SK' : 'slovakia',
        'SI' : 'slovenia',
        'SB' : 'solomon islands',
        'SO' : 'somalia',
        'ZA' : 'south africa',
        'GS' : 'south georgia and sandwich Isl.',
        'ES' : 'spain',
        'LK' : 'sri lanka',
        'SD' : 'sudan',
        'SR' : 'suriname',
        'SJ' : 'svalbard And Jan Mayen',
        'SZ' : 'swaziland',
        'SE' : 'sweden',
        'CH' : 'switzerland',
        'SY' : 'syria',
        'TW' : 'taiwan',
        'TJ' : 'tajikistan',
        'TZ' : 'tanzania',
        'TH' : 'thailand',
        'TL' : 'timor leste',
        'TG' : 'togo',
        'TK' : 'tokelau',
        'TO' : 'tonga',
        'TT' : 'trinidad and tobago',
        'TN' : 'tunisia',
        'TR' : 'turkey',
        'TM' : 'turkmenistan',
        'TC' : 'turks And Caicos Islands',
        'TV' : 'tuvalu',
        'UG' : 'uganda',
        'UA' : 'ukraine',
        'AE' : 'united arab emirates',
        'GB' : 'united kingdom',
        // 'GB' : 'uk',
        // 'GB' : 'england',
        // 'US' : 'usa',
        // 'US' : 'america',
        'US' : 'united states',
        'UM' : 'united States Outlying Islands',
        'UY' : 'uruguay',
        'UZ' : 'uzbekistan',
        'VU' : 'vanuatu',
        'VE' : 'venezuela',
        'VN' : 'vietnam',
        'VG' : 'virgin Islands, British',
        'VI' : 'virgin Islands, U.S.',
        'WF' : 'wallis And Futuna',
        'EH' : 'yestern Sahara',
        'YE' : 'yemen',
        'ZM' : 'zambia',
        'ZW' : 'zimbabwe'
    };

    function getCountryCode(value) {
        return Object.keys(isoCountries).find(key => isoCountries[key] === value);
      }

    let cityName = "";
    let lat = "";
    let lon = "";
    let countryCode = "";
    let imgCurrentIcon = "";
    let imgCurrentWeather = `http://openweathermap.org/img/wn/${imgCurrentIcon}.png`;
    
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    const APIKey = "28824411a2b98639cbaaffeb3e1aaaaf";

    function storeSearchData (){
        let searchDetails = {
            input : `${$('#city-input').val()} ${countryCode}`,
            city : $('#city-input').val(),
            country: countryCode,
        };
        console.log(searchDetails);
        searchHistory.push(searchDetails);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        console.log(searchHistory);
    }   

    function displayWeatherForecast(){
        let oneCallWeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${APIKey}`;

        $.ajax({
            url : oneCallWeatherAPI,
            method : "GET"
        }).then(function(response){
            console.log(response);
            $('.today').text('Today, ');
            
            let currentTimeStamp = response.current.dt + response.timezone_offset - 28800;
            let newDate = new Date(currentTimeStamp*1000);
            let currentHour = newDate.getHours();
            let currentMinute = newDate.getMinutes();
            let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let today = day[newDate.getDay()];
            let date = newDate.getDate();
            let nameOfMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let month = nameOfMonth[newDate.getMonth()];
            let year = newDate.getFullYear();
            $('.today-date').text(`${today},${date} ${month} ${year}`);
            if (currentHour < 10 && currentMinute <10) {
                $('.current-time').text(`Current Destination Time: 0${currentHour}:0${currentMinute}`);
            }else if(currentHour < 10){
                $('.current-time').text(`Current Destination Time: 0${currentHour}:${currentMinute}`);
            }else if(currentHour >= 10 && currentMinute <10){
                $('.current-time').text(`Current Destination Time: ${currentHour}:0${currentMinute}`);
            }else{
                $('.current-time').text(`Current Destination Time: ${currentHour}:${currentMinute}`);
            }
            imgCurrentIcon = response.current.weather[0].icon;
            imgCurrentWeather = `http://openweathermap.org/img/wn/${imgCurrentIcon}@2x.png`;
            $('#current-weather-image').attr({
                'src' : imgCurrentWeather,
                'alt' : response.current.weather[0].description,
            });
            $('.current-condition').text(response.current.weather[0].description);
            $('#current-temp').text(Math.floor(response.current.temp));
            $('#current-feel-like-temp').text(Math.floor(response.current.feels_like));
            $('#current-humidity').text(response.current.humidity);
            $('#current-windspeed').text(response.current.wind_speed);
            $('#current-UV-index').text(response.current.uvi);
            let UVindex = parseInt($('#current-UV-index').text());
            if (UVindex > 0 && UVindex <= 2){
                $('#current-UV-index').attr('style', 'background-color: rgba(114, 179, 114,0.8)');
            }else if (UVindex > 2 && UVindex <= 5 ){
                $('#current-UV-index').attr('style', 'background-color: rgba(233, 233, 113, 0.8)');
            }else if (UVindex > 5 && UVindex <= 7){
                $('#current-UV-index').attr('style', 'background-color: rgba(226, 147, 0, 0.8)');
            }else if (UVindex > 7 ){
                $('#current-UV-index').attr('style', 'background-color: rgba(219, 52, 52, 0.8)');
            }

            for(let i = 0; i <= 4; i++){
                let futureTimeStamp = currentTimeStamp + (i*86400) + 86400;
                let futureTime= new Date(futureTimeStamp*1000);
                let futureDay = day[futureTime.getDay()];
                let futureDate = futureTime.getDate();
                let futureMonth = nameOfMonth[futureTime.getMonth()];
                let futureYear = futureTime.getFullYear();

                $(`.day-${i+1}`).text(futureDay);
                $(`.date-${i+1}`).text(`${futureDate} ${futureMonth} ${futureYear}`);
                imgCurrentIcon = response.daily[i].weather[0].icon;
                imgCurrentWeather = `http://openweathermap.org/img/wn/${imgCurrentIcon}.png`;
                $(`#img-${i+1}`).attr({
                    'src' : imgCurrentWeather,
                    'alt' : response.daily[i].weather[0].description,
                });
                $(`.condition-${i+1}`).text(response.daily[i].weather[0].description);
                $(`#min-temp-${i+1}`).text(`min:${Math.floor(response.daily[i].temp.min)}\xB0C `);
                $(`#max-temp-${i+1}`).text(` max:${Math.floor(response.daily[i].temp.max)}\xB0C`);
                $(`#humidity-${i+1}`).text(response.daily[i].humidity);
                $(`#wind-${i+1}`).text(response.daily[i].wind_speed);
            }
        }).catch(function(error){
            console.log(error);
        })
    }

    function displaySearchHistory (){
        $('li').remove();
        for (let j = searchHistory.length; j >= 0; j--){
            if(searchHistory[j] !== undefined){
            let lastUserInput = searchHistory[j].input;
            let li = $('<li>').text(lastUserInput);
            $('#last-search-cities').append(li);
            }
        }
    }

    function getData(){
        let citySearchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${APIKey}`;

        $.ajax({
            url: citySearchURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            console.log(response.coord.lat);
            console.log(response.coord.lon);

            $('.city-name').text(`${response.name}, ${response.sys.country}`)
            lat = response.coord.lat;
            lon = response.coord.lon;
            console.log({lat});
            console.log({lon});

            displayWeatherForecast();

            $('#city-input').val("");
            $('#country-input').val("");

            displaySearchHistory();

        }).catch(function(error){
            console.log(error);
        })
    }

    function lastCityForecast (event){
        let lastCity = $(event.target).text().split(" ");
        cityName = lastCity[0];
        countryCode = lastCity[1];
        getData();
        
    }

    function displayLastSearchedCity (){
        if(searchHistory.length !== 0){
        let last = searchHistory.length - 1;
        cityName = searchHistory[last].city;
        countryCode = searchHistory[last].country;
        getData();
        }
    }
 
    $('#search-button').on('click',function(event){
        event.preventDefault();
        console.log(event);
        cityName = $('#city-input').val();
        if($('#country-input').val().length <= 2){
            countryCode = $('#country-input').val();
        }else{
            countryCode = getCountryCode($('#country-input').val().toLowerCase());
        }
        console.log(countryCode);

        storeSearchData();
        getData();
    })

    $('#last-search-cities').on('click', function(event){
        console.log(event);
        lastCityForecast(event);
        
    });

    $('#clear-history').on('click', function(event){
        console.log(event);
        window.localStorage.clear();
        $('li').remove();
        
    });
    
    displaySearchHistory();
    displayLastSearchedCity();

})
