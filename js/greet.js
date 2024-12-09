function getTimeGreeting() {
    const now = new Date();
    const hours = now.getHours(); // 获取当前小时

    // 问候语集合
    const greetings = {
        earlyMorning: [
            "😴凌晨了，快进入梦乡吧，明天会是新的一天！🐲",
            "🌟夜深了，早点休息，明天会更好！",
            "🛏️夜幕降临，给自己一个放松的时间，晚安！🛏️",
            "😪深夜了，关掉一切，给自己充充电！",
        ],
        morning: [
            "🌅早上好！新的一天，新的开始，振作起来！",
            "🔆早上好！起床啦，迎接这美好的一天！",
            "🌞新的一天，新的机会，早安！",
            "🌄早上好！享受阳光，迎接美好的晨光吧！",
            "🌥️早安！别忘了微笑迎接今天的挑战！",
            "🌻今天是个充满希望的一天，早上好！",
        ],//🦄💼📈😼🙀😿🐴🦄🐲🐒🧑‍🏫🏃‍♀️🏌️🛌🛀🧘‍♂️🏄‍♀️🚴✌️✍️🎆🎉🏀🎯🏅🏆🎮🕹️🎰🎵🧱🧰
        midMorning: [
            "🦄上午好！别忘了适时休息，保持精力充沛！🧱",
            "🧑‍🏫上午好！时光飞逝，抓住每一个学习或工作的机会！",
            "🏃‍♀️上午好！别让懒惰挡住你前进的脚步！🧱",
            "🏃上午好！今天的你能做得更好，继续加油！🧱",
        ],
        noon: [
            "🍽中午好！吃个午餐休息一下，为下午充电！",
            "🥢中午好！别忘了吃点东西，补充能量！",
            "🍴中午时光，正是恢复能量的最佳时机，享受午餐！",
            "🥡中午了，记得吃个营养丰富的午餐哦！",
        ],
        afternoon: [
            "💻下午好！你已经做得很棒，继续加油！",
            "⌨️下午好！别忘了适时休息，保持精力充沛！",
            "📱下午的阳光正好，别忘了放松一下，恢复元气！",
            "💻下午好！继续努力，离目标更近了！",
            "🏀下午好！工作或学习进展如何？别忘了适时休息！",
        ],
        evening: [
            "🌇晚上好！今天的努力值得肯定，放松享受吧！🎉",
            "🌇晚上好！今天很充实，今晚好好休息吧！",
            "🌇晚上好！收获满满的一天，晚安时光！",
            "🌇晚上好！让心情放松，准备迎接明天的挑战！",
            "🌇晚上好！今天已经很精彩，明天会更好！",
        ],
        night: [
            "🌃深夜了，记得关掉屏幕，好好休息，晚安！",
            "🌃夜深了，今天的努力已经结束，明天再战！",
            "🌃深夜了，放下所有烦恼，享受宁静的夜晚！",
            "🌃夜深了，是时候为自己充电，准备迎接明天了！",
            "🌃夜深了，愿你做个好梦，明天再接再厉！",
            "🌃深夜了，收拾好疲惫，安然入睡，晚安！",
        ],
    };

    let greetingArray;

    if (hours >= 0 && hours < 5) {
        greetingArray = greetings.earlyMorning;
    } else if (hours >= 5 && hours < 8) {
        greetingArray = greetings.morning;
    } else if (hours >= 8 && hours < 10) {
        greetingArray = greetings.midMorning;
    } else if (hours >= 10 && hours < 12) {
        greetingArray = greetings.noon;
    } else if (hours >= 12 && hours < 14) {
        greetingArray = greetings.afternoon;
    } else if (hours >= 14 && hours < 18) {
        greetingArray = greetings.afternoon;
    } else if (hours >= 18 && hours < 20) {
        greetingArray = greetings.evening;
    } else if (hours >= 20 && hours < 22) {
        greetingArray = greetings.evening;
    } else {
        greetingArray = greetings.night;
    }

    // 随机选择一条问候语
    const randomGreeting = greetingArray[Math.floor(Math.random() * greetingArray.length)];
    return randomGreeting;
}
