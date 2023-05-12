console.clear();

function CountdownTracker(label, value){
  var el = document.createElement('div');
  el.className = 'flip-clock__piece';
  
  var piece = document.createElement('span');
  piece.className = 'flip-clock__piece';
  piece.innerHTML = '<span class="flip-clock__slot">' + label + '</span>' 
    + '<b class="flip-clock__card card">'
      +'<b class="card__top"></b>'
      +'<b class="card__bottom"></b>'
      +'<b class="card__back">'
        +'<b class="card__bottom"></b>'
      +'</b>'
    +'</b>';
  
  el.appendChild(piece);
  
  if (label != '초') {
    var colon = document.createElement('span');
    colon.className = 'flip-colon';
    colon.innerText = ':';
    el.appendChild(colon);
  }

  this.el = el;
  
  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function(val){
    val = ( '0' + val ).slice(-2);
    if ( val !== this.currentValue ) {
      
      if ( this.currentValue >= 0 ) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute('data-value', this.currentValue);

      this.el.classList.remove('flip');
      void this.el.offsetWidth;
      this.el.classList.add('flip');
    }
  }
  
  this.update(value);
}

// Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  return {
    'Total': t,
    '일': Math.floor(t / (1000 * 60 * 60 * 24)),
    '시간': Math.floor((t / (1000 * 60 * 60)) % 24),
    '분': Math.floor((t / 1000 / 60) % 60),
    '초': Math.floor((t / 1000) % 60)
  };
}

function getTime() {
  var t = new Date();
  return {
    '일': t,
    '시간': t.getHours() % 12,
    '분': t.getMinutes(),
    '초': t.getSeconds()
  };
}

function Clock(countdown,callback) {
  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function(){};
  
  var updateFn = countdown ? getTimeRemaining : getTime;

  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  var trackers = {},
      t = updateFn(countdown),
      key, timeinterval;

  for ( key in t ){
    if ( key === 'Total' ) { continue; }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  var i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);
    
    // throttle so it's not constantly updating the time.
    if ( i++ % 10 ) { return; }
    
    var t = updateFn(countdown);
    if ( t.Total < 0 ) {
      cancelAnimationFrame(timeinterval);
      for ( key in trackers ){
        trackers[key].update( 0 );
      }
      callback();
      return;
    }
    
    for ( key in trackers ){
      trackers[key].update( t[key] );
    }
  }

  setTimeout(updateClock,500);
}

// 특정 일자로 지정 
// var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
var deadline = new Date(2023, 4, 13, 16, 0, 0, 0); // 예시 : "2023년 5월 13일 오후 4시" 로 지정
var c = new Clock(deadline, function(){ alert('countdown complete') });
document.body.appendChild(c.el);