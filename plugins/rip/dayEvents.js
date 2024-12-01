class RestInPeace {

  load(conf) {
    fetch(conf).then(response => {
      // 检查响应是否成功
      if (!response.ok) {
        throw new Error('dayEvents: Failed to load config.json');
      }
      // 解析为 JSON 格式
      return response.json();
    }).then(data => {
      this.dayEvent(data);
    });
  }
  dayEvent(EVENTS) {
    /**
     * 昔人已乘白云去，兹地空余黄鹤楼。逝者安息 🕯️
     * @type {Array<Object>} R.I.P events
     */

    const now = new Date();
    const today = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      date: now.getDate(),
    };
    const todayEvents = EVENTS.filter(event => {
      const [eventYear, eventMonth, eventDate] = event.date.split('-');
      // 计算出 event 的结束日期
      const eventStart = new Date(
        eventYear === '*' ? today.year : eventYear,
        (eventMonth === '*' ? today.month : eventMonth) - 1,
        eventDate === '*' ? today.date : eventDate
      );
      const eventEndDate = new Date(eventStart.getTime() + event.duration * 24 * 60 * 60 * 1000);
      //alert("eventStart" + eventStart);
      return (now >= eventStart && now < eventEndDate);
    });

    this.eventHandler(todayEvents);
    return todayEvents;
  }

  eventHandler(events) {

    console.clear()
    console.table(events);
    //alert(sessionStorage.getItem("isPopupWindow"));
    /** 
    if(sessionStorage.getItem("isPopupWindow") == 1){
      events.forEach(event => {this.infoHandler(event);console.table(event);});
      return;
    }
    sessionStorage.setItem("isPopupWindow", 1);*/
    
    
    events.forEach(event => {
      this.infoHandler(event)
      console.table(event);

      if (event.type === "rip") {
        this.htmlGrayScale();
      }
      mySwal.fire({
        title: event.title,
        text: event.info,
        timer: 1000 * 10,
      });
    });
  }
  infoHandler(event) {
    const curentYear = new Date().getFullYear();
    event.info = event.info.replace(/{years}/g, curentYear- event.year);
    event.info = event.info.replace(/{currentYear}/g, curentYear);
    return event.info;
  }
  htmlGrayScale(scale){
    scale = scale || '100%';
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale("+scale+");");
  }

  init() {
    console.log('得到==>rip init');
    this.load('/plugins/rip/config.json');
  }
}

(() => {

  const rip = new RestInPeace();

  document.addEventListener('DOMContentLoaded', () => {
    /** 
    rip.init();
    const today = Lunar.fromDate(new Date());
    console.log(Lunar.fromDate(new Date()).toFullString());
    console.log(Solar.fromYmd(2016, 1, 1).toFullString());
    console.log(HolidayUtil.getHoliday(2020, 5, 2) + '');

    mySwal.fire({
      title: today,
      text: today.toFullString(),
      timer: 1000 * 10,
    });
    */
  });
})();