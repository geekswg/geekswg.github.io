MyHoliday = {
    init: function(newly) {
        var words = [
            '革命即将胜利，同志们再摸 {d} 天就到{n}了！',
            '距离{n}假期还有 {d} 天！'
        ];
        var events = [
            '鲁迅曾经说过：如果别人看不见你的电脑屏幕，那么只要你在打字他们就会觉得你在工作。',
            '一个月总有那么三十几天不想上班。',
            '你们上会班吧，我替你们老板求求你们了。',
            '办公室为什么一直弥漫着一股海鲜味？原来都是你们在摸鱼？',
            '工作再疲惫，划水要学会，工作再紧张，摸鱼不能忘。',
            '注意：近期发现有人在偷偷工作，不认真摸鱼！最后警告一次，再有被抓到在工作的，一经发现立即开除，永不录用！',
            '每天坚持带薪拉屎10分钟，每年会多出5.5天的带薪假期。',
            '办公室和同事聊天的时候记得带上笔和本子。',
            '刷微博=跟热点、看B站=找素材、水论坛=做调研。',
            '废文件不要扔，堆在桌子上，这样不但看起来很忙，而且能随时把手机藏起来。',
            '摸鱼的时候要紧皱眉头，不时发出“啧”的声音。',
            '准备一副舒服的耳机，哪怕没在听任何东西也挂着，会减少57.3%不必要的麻烦。',
            '新建一个桌面，摆满文档，Ctrl+Win+方向键，工作摸鱼一键换装。',
            '不要给自己的办公电脑做开机加速，你是在减少自己有偿发呆的总时长。',
            '这一上午没活干还要装作很忙的样子，搞得人心惊胆战的，比干活都累 。',
            '建一个闲聊的小群吧，名字叫“XX项目组”。',
            '工作再累，一定不要忘记摸鱼哦！',
            '有事没事起身去茶水间，去厕所，去廊道走走，别老在工位上坐着，钱是老板的，但命是自己的。',
            '上班是帮老板赚钱，摸鱼是赚老板的钱！',
            '在忙啥呢家人们，现在是摸鱼时间，该摸鱼的时候摸鱼，别让自己忙碌起来，老板不会关心你的，只有我会关心你。',
            '认认真真上班，这根本就不叫赚钱，那是用劳动换取报酬。只有偷懒，在上班的时候摸鱼划水，你才是从老板手里赚到了钱。'
        ];
        var last = [
            '最后一天坚持住！',
            '今天注定要一直肚子痛了！',
            '如果一个人在周五并没有显得特别高兴，说明他周一到周四都在摸鱼。'
        ];
        var l = [];
        var solar = Solar.fromDate(new Date());
        var hour = solar.getHour();
        var greet = '上王者';
        if (hour >= 0 && hour <= 4) {
            greet = '起来嗨';
        } else if (hour > 4 && hour <= 7) {
            greet = '早安';
        } else if (hour > 7 && hour <= 11) {
            greet = '上午好';
        } else if (hour > 11 && hour <= 13) {
            greet = '吃了吗';
        } else if (hour > 13 && hour <= 17) {
            greet = '下午好';
        } else if (hour > 17 && hour <= 18) {
            greet = '下班没';
        }
        l.push(solar.getMonth() + '月' + solar.getDay() + '日' + greet + '，摸鱼人！');
        //l.push(events[Math.floor(Math.random() * events.length)]);
        var nextHoliday = function (d) {
            var name = '';
            var i = 0;
            var max = 400;
            while (--max > 0) {
                var h = HolidayUtil.getHoliday(d.toYmd());
                if (h) {
                    if (!h.isWork()) {
                        name = h.getName();
                        break;
                    }
                } else {
                    var week = d.getWeek();
                    if (0 == week || 6 == week) {
                        name = '周末';
                        break;
                    }
                }
                d = d.next(1);
                i++;
            }
            return { days: i - 1, name: name };
        };
        var nextLongHoliday = function (d, skip) {
            var name = '';
            var i = 0;
            var skiped = 0;
            var max = 400;
            while (--max > 0) {
                var h = HolidayUtil.getHoliday(d.toYmd());
                if (h) {
                    if (!h.isWork()) {
                        name = h.getName();
                        if (skiped >= skip) {
                            break;
                        }
                    }
                } else {
                    if (name) {
                        skiped++;
                    }
                    name = null;
                }
                d = d.next(1);
                i++;
            }
            return { days: i - 1, name: name };
        };
        var nh = nextHoliday(solar);
        switch (nh.days) {
            case -1:
                l.push('放假就好好享受吧！');
                break;
            case 0:
                l.push(last[Math.floor(Math.random() * last.length)]);
                break;
            default:
                l.push(words[Math.floor(Math.random() * words.length)].replace('{d}', nh.days).replace('{n}', nh.name));
        }

        var hs = [];
        var counter = 0;
        newly = newly || 3;//最近几个
        while (counter < newly) {
            var nlh = nextLongHoliday(solar, counter++);
            
            if (nlh.days < 0) {
                continue;
            }
            if (!nlh.name) {
                continue;
            }
            hs.push('距离' + nlh.name + '假期还有 ' + nlh.days + ' 天！');
        }
        for (var i = 0, j = hs.length; i < j; i++) {
            var s = hs[i];
            var exist = false;
            for (var x = 0, y = l.length; x < y; x++) {
                if (l[x] === s) {
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                l.push(s);
            }
        }
        return l;
    }
}



    h = MyHoliday.init();
    console.table(h);
    h.forEach(function (s) {
        document.getElementById('holiday').innerHTML += s + '<br/>';
    });
