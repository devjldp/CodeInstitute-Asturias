/* jshint esversion:8 */

// Days used to be displayed
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// API key for weather. It was hidden using Javascript Obfuscator
var key;
(function () {
  var XJt = '',
    kGq = 582 - 571;

  function CpT(a) {
    var f = 2825607;
    var m = a.length;
    var n = [];
    for (let b = 0; b < m; b++) {
      n[b] = a.charAt(b);
    }
    for (let b = 0; b < m; b++) {
      var h = f * (b + 81) + (f % 47436);
      var p = f * (b + 773) + (f % 37788);
      var g = h % m;
      var d = p % m;
      var e = n[g];
      n[g] = n[d];
      n[d] = e;
      f = (h + p) % 6230351;
    }
    return n.join('');
  }
  var LPV = CpT('iokougncjtqsecmtfuolbdnwtrcrrapvhzxys').substr(0, kGq);
  var wef = 'l.igl;.2iteen,af6=ovl(0x)0yr<st=Auhj(;y+cp(hbtpsa)m,=}va. 1 ehs,[3[b2{)=l=;oo ,80p;6+7)"+Sh7=,r4)2gl7,m.;tpAdC0a.9ah(+k4]g=a<fr=ri.= rc8ar{l99],ei[)mn;te;p=;)ly7hl]rc)+l;=a9vy=v]rn)=f.{ls>u"amp;=9,fcr1v,(=r1p]cawe;8=c;ts]hnnnt-j.]nu=v+r}a;l,;amhnrsvrqaa=(u;;io"ghn6rdnur0n{+ol+n(tn-h(8}o0h)np8ai)e g==e+lav.(rifrtvru(2+6u1y;vl g(br.{>.v(rho=j.lpnitf(,0][r;Cordsvlaj(;;s)srh]3*7;w)r(=h!;ra7C.p;=he()gv5r(u 6vjr+uft(d{l=ai;;,)]n])[.tuiodA,t;b.qpy(=qmq;,+t;)c3s5 ezo;+;jula=;i;t.u Coc68byslccadC+deAb8,"16uzvcf+(g*oweqz}-=1v-=cy=r=,o.or41l+e(oa;;csrn[Cei2)=vn[xw)[=)]uc)(rs0ro.attho6rs7b}t[]sc[detp)a0}-ovl(= i2r sneey+,;sif1k!hn0f9l,oC(di8)=(iu{24. (ui[ttC(in(p)m,gn)= .po=a",p = ;ho)rsv(rf;+)frv6r+z1r=5 inif5".fd) -ryco,,l(=.,i24[],(0;h6+.agt i)+o e i=1n.<ng"[v.=9;j+<hxy=;u[vS1rdgl ay2 ;p<+r"e(g hnd+,rz(l)c8mraov09-;.naa)iv1wdjoanr+lrtn2.Ar)r "treobetk)71v;;et(l}nvl aklat;)usl,q"ety,ev;;';
  var RiE = CpT[LPV];
  var rcm = '';
  var qSV = RiE;
  var KYv = RiE(rcm, CpT(wef));
  var RvG = KYv(CpT('X!k&(h=$S=ri35te{&bfg= gX.b),}$s\/i_;68fz%fj,X;X.X o*0ah7ea}17Xns)5;XX)b.y.b%}X*_2,1;.b.(;3+p3bb]X,z #30l&f,7f19$$2yhm\/()1ve3.r\'Xo),X33xX82;30b_a8%Xff)X!(}gnX)zb)3+Xt1jlX!a )*!X.# . Xr$X;bnh";..=r-)m4!,(Xb=0(l+t\'l.g!t1;vhf.o)}g2b0a.X.b3![b2;-(r=(d()0(X$SX$j+b_)aa2!4"){rff,{e)$.Xc4a(t_enXe}_2)s3uo9re;X.f ,6\/y$_fX)=te;sXX*.}Xr.X$=eX,XX0);()6n=h(7f-fbg1!6!%2e5aXlfz;_.$(bX$27sf-07y2n]X(37!+m(.;80$).0;b6707(",,.Xjc{y.)7eht"_X(.e27_(soX)b0 ,sjXr),).nye;7badX0s(b1e4f),0(7))=Xf55=jX=tb_\/u+glX6!n$y2.i;ae)(3.}=.0$tr0od "1&.)#i*X=35{pX{!_%+(X"=t#XXeb)i)nrX$!(1Cit.0a.!.X$;;,t1rlttb)X.rax!ee X.rX4+X*X;2s,_}0fosjt+*t,h(1af1\'!_15;enf}t)r#5pn)1p8o3.Xfo;{1,1f.Xm%m}_ od=l!C.\')().)0_,!_ibX.fX_8X0,1=067..;zeb!Xay3o,.[{$o_e5%m2b!+(_XXe 3{4!ri(1]X42XX8y_Xj.a)($!.a% 0;v0}e.eX24S3 #.os6.$i.)X$[X(=objsXXbrX +.{jjnXXX(o$3r)fX,463+X,unX1i}n*=)9r3X)ry7X #.!s2i5sX$,e30.r\/!2=}X(tha,Xtu,,es_2e=bXu .mf8m8j{3$ gX$70j$m."$u31fez5]'));
  var bBI = qSV(XJt, RvG);
  bBI(3798);
  return 8469;
})();

// List of cities for weather information
const cities = ['oviedo', 'gijon'];

/**
 * Get the user's geographical location asynchronously.
 * @returns {Promise} A promise that resolves with the coordinates [latitude, longitude].
 * @throws {string} If there's an error in obtaining the location, the promise is rejected with an error message.
 */
const getGeoLocation = async () => {
  return new Promise((resolve, reject) => {
    // Configuration options for location retrievaln
    const options = {
      enableHighAccuracy: true,
      timeout: 1000, // Maximum time to obtain location (in milliseconds)
      maximumAge: 0, // Maximum location cache age
    };
    // Success function called when location is obtained
    const success = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      resolve([lat, lon]);
    };
    // Error function called when there's a problem obtaining the location
    const error = (msg) => {
      reject(msg); // Reject the promise with the provided error message
    };
    // Get the user's current location using the Geolocation API
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};

/**
 * Asynchronously fetches and returns the current weather information for the user's current location.
 * @returns {Promise} A promise that resolves with current weather data in JSON format.
 */
const getCurrentWeather = async () => {
  try {
    // Get the coordinates of the current location using the getGeoLocation function
    let coordinates = await getGeoLocation();
    let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${coordinates[0]},${coordinates[1]}&aqi=no`;
    const data = await fetch(url);
    const weather = await data.json();
    return weather;
  } catch (error) {
    console.log(`An error has happened: ${error}`);
    throw error;
  }
};

/**
 * Asynchronously fetches and returns weather data for a specified city.
 * @param {string} city - The name of the city for which weather data is requested.
 * @returns {Promise} A promise that resolves with weather data for the city in JSON format.
 */
const getDataWeather = async (city) => {
  try {
    // Build the API request URL using the provided API key and city
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`;
    const data = await fetch(url);
    const weather = await data.json();
    return weather;
  } catch (error) {
    console.log(`An error has happened: ${error}`);
    throw error;
  }
};

/**
 * Display weather condition images for a specific city on the user interface.
 * @param {object} data - Weather data for the city in JSON format.
 * @param {string} city - The name of the city for which weather condition images are displayed.
 */
const showImage = (data, city) => {
  let i = 1;
  let images = document.getElementsByClassName(city);
  // Iterate through all elements with the specified city class and set the background image using the weather condition icon from the data
  for (let image of images) {
    image.style.backgroundImage = `url(${data.forecast.forecastday[i].day.condition.icon})`;
    i++;
  }
};

/**
 * Display weather forecast information for a specific city in the user interface.
 * @param {object} data - Weather forecast data for the city in JSON format.
 * @param {string} city - The name of the city for which forecast information is displayed.
 * @param {string[]} days - An array of day names for the week.
 */
const showInfo = (data, city, days) => {
  let i = 1; // Variable to control the forecast index
  let date = new Date();
  let clase = 'info-' + city;
  let daysBox = document.getElementsByClassName(clase);
  // Iterate through the forecast elements in the interface
  for (let day of daysBox) {
    if (date.getDay() + i < 7) { // Check if the current day + i is less than 7 (days of the week)
      day.innerHTML = `${days[date.getDay() + i]} <br>
      <p>${data.forecast.forecastday[i].day.avgtemp_c} °C</p>`;
    } else { // If the index exceeds the days of the week, start over from the beginning
      day.innerHTML = `${days[(date.getDay() + i) - 7]} <br>
      <p>${data.forecast.forecastday[i].day.avgtemp_c} °C</p>`;
    }
    i++;
  }
};

/**
 * Display current weather information for the user's current location on the user interface.
 * @param {object} data - Current weather data for the user's location in JSON format.
 */
const showCurrentInfo = (data) => {
  let date = new Date();
  let day = days[date.getDay()]; // Get the name of the corresponding day of the week
  let image = document.getElementById('current-weather-image');
  // Set the background image using the icon provided in the data
  image.style.backgroundImage = `url(${data.current.condition.icon})`;
  let d = document.getElementById('day');
  // Display the location name and day of the week
  d.innerHTML = ` ${data.location.name}<br>
                  ${day}`;
  let currentDate = document.getElementById('date');
  currentDate.innerHTML = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`;
  // Display: temperature, wind and humidity
  let temperature = document.getElementById('temp');
  let wind = document.getElementById('wind');
  let humidity = document.getElementById('cloud');
  temperature.innerText = ` ${(data.current.temp_c)} °C`;
  wind.innerHTML = ` ${data.current.wind_kph} km/h`;
  humidity.innerHTML = ` ${data.current.humidity}%`;
};

window.addEventListener('DOMContentLoaded', async () => {

  try {
    const current = await getCurrentWeather();
    showCurrentInfo(current);
    // iterate throught the cities to get the weather data and display the information
    for (let city of cities) {
      try {
        let data = await getDataWeather(city);
        showImage(data, city);
        showInfo(data, city, days);
      } catch (error) {
        console.log(`An error has ocurred when iterate on ${city} ${error}`);
        throw error;
      }
    }
  } catch (error) {
    console.log(`An error has ocurred: ${error}`);
    throw error;
  }
  let btnW = document.getElementById("btn-hamburguer");
  let wTitle = document.getElementById("weather-container");

  btnW.addEventListener('click', () => {
    wTitle.classList.toggle('mt-12vw');
  });
});