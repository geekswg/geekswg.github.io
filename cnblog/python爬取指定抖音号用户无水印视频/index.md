# 

## 运行效果图
[源码地址](https://github.com/geekswg/pythonDemo)
![](https://img2023.cnblogs.com/blog/2055231/202301/2055231-20230131122816161-1466424179.png)
## 安装python环境
Python3 下载
Python3 最新源码，二进制文档，新闻资讯等可以在 Python 的官网查看到：
Python 官网：[https://www.python.org/](https://www.python.org/)
你可以在以下链接中下载 Python 的文档，你可以下载 HTML、PDF 和 PostScript 等格式的文档。
Python文档下载地址：[https://www.python.org/doc/](https://www.python.org/doc/)

## 编写python代码
```python
import requests
import re
import asyncio
from concurrent.futures import ThreadPoolExecutor
import os
import time

def get_sec_uid(keyword):
    # 获取用户sec_uid
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cookie': 'ttwid=1%7CM9FkU8n5hTTvOiLZPjo8aU35Tr5BTMRIPed4BEtyDJA%7C1648208749%7Cdd2ade07781195bfd1fa21643fd59b3903008085a0f298cfb1c76b79bc3f78c7; passport_csrf_token=279410d140ba25b4e91cde4f6cd05aef; passport_csrf_token_default=279410d140ba25b4e91cde4f6cd05aef; MONITOR_WEB_ID=ecaa2897-8a68-4ade-b947-6cc9d931598e; odin_tt=417a9f77f6d2cd774da7807b0c714862d355b4a5ace66a03a9c00ac68dacbdec5ceca709555e30fff9adf1ecea84239111079643bd474943fe97d254cb0152ec; pwa_guide_count=3; _tea_utm_cache_6383=undefined; _tea_utm_cache_1300=undefined; _tea_utm_cache_2285=undefined; IS_HIDE_THEME_CHANGE=1; THEME_STAY_TIME=299720; __ac_signature=_02B4Z6wo00f01CI8ePQAAIDBQTa4nMTMMjwiHHxAAGrN5U0QgDC54gfGRL89zHJwk8zFNN8QWzhqZVluxIfOzDSckoBA5oFsW2dSnbl5l.IgboZ92n3goGNLjAJZBQlWId9Caa2Bweusdfcy29; douyin.com; strategyABtestKey=1648993217.224; s_v_web_id=verify_l1jbzhx9_1kxeNOEN_L1cd_42w9_Azm7_hVO7VNdDI4ld; msToken=4FsOZZEB0ReRvlBQJdmO-7GUER2EMYUSGfa6IEqs4AsvTxsTSD5ejPxg7yskHiuyLp51Av3hhmUSIWVcxC3P-pRxfCT00w1FQvpephON2euuQWyUOof7XWSxW2cg5gQ=; tt_scid=t7EPzZDDnRhuqBcv0W2umIeppJ3eoHUIusBuW.FwQfGu.AosRQ1Cb6EM9cCAQVLW56cc; msToken=mN3AP6NNssl_SxKLG6Tl30-ns7vuVjuVfu4gcQZbYYb87W3uohReUh31Zl1kKBFHNYlm-mqguVrVKCvCxqRJ1FtZMquGY9ihliRXZwTn-1R3zX4m9IOk0r7dvV5CpgA=; home_can_add_dy_2_desktop=0',
        'referer': 'https://www.douyin.com/search/%E5%88%98%E5%B8%88%E5%B8%88?source=search_history&aid=89c0b0ee-9905-422a-adad-6262771a99c1&enter_from=recommend&gid=7075376490342305038',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Microsoft Edge";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
    }
    response = requests.get('https://www.douyin.com/aweme/v1/web/general/search/single/?device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword={}&search_source=search_history&query_correct_type=1&is_filter_search=0&from_group_id=7075376490342305038&offset=0&count=10&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Edge&browser_version=100.0.1185.29&browser_online=true&engine_name=Blink&engine_version=100.0.4896.60&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7079002627996157440&msToken=mN3AP6NNssl_SxKLG6Tl30-ns7vuVjuVfu4gcQZbYYb87W3uohReUh31Zl1kKBFHNYlm-mqguVrVKCvCxqRJ1FtZMquGY9ihliRXZwTn-1R3zX4m9IOk0r7dvV5CpgA=&X-Bogus=DFSzswSOsdUAN9szSlxj3RXAIQR6&_signature=_02B4Z6wo00001ZcY6sgAAIDA9BIqoSsiGW2XGO5AAAeQPG8dden-CrmangUDQSgXK2be8jgqDjM2ZmSYTwyJHeRV-BeCkHWI4.T.x5yaCoZJn4Q3zXQxR6Nmh.IrhUHvmsIoURG7l7qpp9IJ61'.format(keyword), headers=headers)
    try:
        # 获取用户信息
        return response.json()['data'][0]['user_list'][0]['items'][0]['author']['sec_uid']
    except:
        return None

def get_normal_string():
    # 获取含有视频链接信息的字符串
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'max-age=0',
        'cookie': 'douyin.com; ttwid=1%7CM9FkU8n5hTTvOiLZPjo8aU35Tr5BTMRIPed4BEtyDJA%7C1648208749%7Cdd2ade07781195bfd1fa21643fd59b3903008085a0f298cfb1c76b79bc3f78c7; passport_csrf_token=279410d140ba25b4e91cde4f6cd05aef; passport_csrf_token_default=279410d140ba25b4e91cde4f6cd05aef; MONITOR_WEB_ID=ecaa2897-8a68-4ade-b947-6cc9d931598e; odin_tt=417a9f77f6d2cd774da7807b0c714862d355b4a5ace66a03a9c00ac68dacbdec5ceca709555e30fff9adf1ecea84239111079643bd474943fe97d254cb0152ec; pwa_guide_count=3; _tea_utm_cache_6383=undefined; _tea_utm_cache_1300=undefined; _tea_utm_cache_2285=undefined; IS_HIDE_THEME_CHANGE=1; THEME_STAY_TIME=299720; __ac_nonce=06249a3c30083ec55465e; __ac_signature=_02B4Z6wo00f01CI8ePQAAIDBQTa4nMTMMjwiHHxAAGrN5U0QgDC54gfGRL89zHJwk8zFNN8QWzhqZVluxIfOzDSckoBA5oFsW2dSnbl5l.IgboZ92n3goGNLjAJZBQlWId9Caa2Bweusdfcy29; douyin.com; strategyABtestKey=1648993217.224; s_v_web_id=verify_l1jbzhx9_1kxeNOEN_L1cd_42w9_Azm7_hVO7VNdDI4ld; msToken=4FsOZZEB0ReRvlBQJdmO-7GUER2EMYUSGfa6IEqs4AsvTxsTSD5ejPxg7yskHiuyLp51Av3hhmUSIWVcxC3P-pRxfCT00w1FQvpephON2euuQWyUOof7XWSxW2cg5gQ=; home_can_add_dy_2_desktop=1; tt_scid=EMfspRGfZ7FLIBzlrEuWZDSIy6yiAuMKgzHJwsIcfNRe3fI7urXTAv.99v5Gz7BHd00e; msToken=AQEOChwSeREaGw8BejMHFLHlxYWo0cZQI0h7CbfF8NCXeXT4lJIFwjeheooB35Lp8P97Sdbfny1adTAUUtHdhhdtCcGgt2kXtARBl9XtdY_oxnljZvdpJuDEKwI7dWM=',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Microsoft Edge";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
    }

    response = requests.get('https://www.douyin.com/user/{}'.format(sec_uid),
                            headers=headers)

    txt = response.text
    r = re.compile(r'''(<script id="RENDER_DATA" type="application/json">)(.*)(</script>)''')
    return r.search(txt).groups()[1]

def get_normal_dict():
    # 从含有视频链接信息的字符串提取重要键值对
    r = re.compile(r"video_id%3D(\w+)%26line%3D(\d)%26file_id%3D(\w+)%26sign%3D(\w+)%26is_play_url%3D(\d)%26source%3D(\w+)%26aid%3D(\d+)")
    i = r.findall(normal_string)
    print("解析获取视频数量 --- ",len(i))
    # 去除重复视频video_id
    i2 = []
    [i2.append(t) for t in i if not t in i2]
    i = i2
    print("最终下载视频数量 --- ",len(i))

    ls = []
    for s in i:
        params = {
            'video_id': s[0],
            'line': s[1],
            'file_id': s[2],
            'sign': s[3],
            'is_play_url': s[4],
            'source':s[5],
            'aid': s[6]
        }
        ls.append(params)
    return ls


def get_video(params, name, up_name):

    # print("正在下载 ---",'{}/{}.mp4'.format(up_name, name),params)
    # lt = []
    # for k,v in params.items():
    #     lt.append(k+'='+str(v))
    # q_str = '&'.join(lt)
    # print("正在下载 --- " + 'https://www.douyin.com/aweme/v1/play/'+q_str)
    '''
    下载视频
    params: 视频特征字典
    name: video_id
    up_name: 抖音号或抖音名称
    '''
    headers = {
        'authority': 'www.douyin.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cookie': 'ttwid=1%7CM9FkU8n5hTTvOiLZPjo8aU35Tr5BTMRIPed4BEtyDJA%7C1648208749%7Cdd2ade07781195bfd1fa21643fd59b3903008085a0f298cfb1c76b79bc3f78c7; passport_csrf_token=279410d140ba25b4e91cde4f6cd05aef; passport_csrf_token_default=279410d140ba25b4e91cde4f6cd05aef; MONITOR_WEB_ID=ecaa2897-8a68-4ade-b947-6cc9d931598e; odin_tt=417a9f77f6d2cd774da7807b0c714862d355b4a5ace66a03a9c00ac68dacbdec5ceca709555e30fff9adf1ecea84239111079643bd474943fe97d254cb0152ec; pwa_guide_count=3; _tea_utm_cache_6383=undefined; _tea_utm_cache_1300=undefined; _tea_utm_cache_2285=undefined; IS_HIDE_THEME_CHANGE=1; THEME_STAY_TIME=299720; __ac_signature=_02B4Z6wo00f01CI8ePQAAIDBQTa4nMTMMjwiHHxAAGrN5U0QgDC54gfGRL89zHJwk8zFNN8QWzhqZVluxIfOzDSckoBA5oFsW2dSnbl5l.IgboZ92n3goGNLjAJZBQlWId9Caa2Bweusdfcy29; douyin.com; strategyABtestKey=1648993217.224; s_v_web_id=verify_l1jbzhx9_1kxeNOEN_L1cd_42w9_Azm7_hVO7VNdDI4ld; home_can_add_dy_2_desktop=1; tt_scid=wYQ9CV08zLOj9gljfBRWRrDMs6WFOLT1Bq1uwJfy2EGIxnfe2AJYvI5WthiOSi8h99a5; msToken=xjE-gyJdOM8AWBVvQcuypDx2bELRkMXgOyDk4rpDy0tnrpOQ-PSEyam3V3guVyCP_CTbv15cgWTzT6Nb8lbbPffdOP9ygjQ2VMp8wtuW4Cymmr1dqV8HmlQ8TnPjm5M=; msToken=aQZA1P-018EJlZPqPqrWxV_BlQJarmKJM-R5mWsonPmVEGio2n7cvtZS-CTqEZXclkSIwpD3_af5zjN6ORWdn9bBupt1mM2ev6niJK2UZ5SaNgatPZLsqQ==',
        'range': 'bytes=0-',
        'referer': 'https://www.douyin.com/discover?modal_id=7074783619138522368',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Microsoft Edge";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'video',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
    }
    response = requests.get('https://www.douyin.com/aweme/v1/play/', headers=headers, params=params)
    # 下载文件
    if not os.path.exists(up_name):
        os.makedirs(up_name)
    with open('{}/{}.mp4'.format(up_name, name), 'wb') as fp:
        fp.write(response.content)

def run(ls, func):
    # 多线程异步提取
    loop = asyncio.get_event_loop()
    exector = ThreadPoolExecutor(25)
    tasks = []
    for i in ls:
        future = loop.run_in_executor(exector, func, i, i['video_id'], keyword)
        tasks.append(future)
    loop.run_until_complete(asyncio.wait(tasks))
    loop.close()

if __name__ == "__main__":
    while True:
        keyword = input("请输入需要下载视频的抖音号:")
        start = time.perf_counter()
        sec_uid = get_sec_uid(keyword)
        if sec_uid:
            print('开始抓取 %s' % keyword)
            normal_string = get_normal_string()
            params_ls = get_normal_dict()
            run(params_ls, get_video)
            end = time.perf_counter()
            print('下载用时: %f 秒' % (end - start))
        else:
            print('没有查找到该用户 %s，请用手机打开主页查看用户抖音号!'%(keyword))
        os.system("pause")
```

## 打包py文件成exe

### 封装py 文件，打包成exe
安装pyinstaller
> 打开cmd窗口，输入 `pip install pyinstaller`，命令行输出successfully表示成功。
### 打包PY文件
> `pyinstaller -F target.py`


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/python%E7%88%AC%E5%8F%96%E6%8C%87%E5%AE%9A%E6%8A%96%E9%9F%B3%E5%8F%B7%E7%94%A8%E6%88%B7%E6%97%A0%E6%B0%B4%E5%8D%B0%E8%A7%86%E9%A2%91/  

