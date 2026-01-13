# 

<p>最最常用的快捷键，Tab 键 ，自动补全功能，</p>
<p>/ 根目录</p>
<p>man 帮助手册；man cd ,查看cd的用法！</p>
<p>cd 进入目录；ls -l 列表查看文件详细信息；pwd 当前路径；</p>
<p>cp 复制 。rm -rf fileName 静默删除，删除时千万要注意！</p>
<h3 id="h3_1">一、linux 中向防火墙添加例外端口。</h3>
<p>/sbin/iptables&nbsp;-D&nbsp;INPUT&nbsp;-p&nbsp;tcp&nbsp;--dport&nbsp;8080&nbsp;-j&nbsp;ACCEPT&nbsp;#删除8080端口</p>
<p>/sbin/iptables&nbsp;-I&nbsp;INPUT&nbsp;-p&nbsp;tcp&nbsp;--dport&nbsp;8080&nbsp;-j&nbsp;ACCEPT&nbsp;#开启8080端口<br />/etc/rc.d/init.d/iptables&nbsp;save&nbsp;#保存配置<br />/etc/rc.d/init.d/iptables&nbsp;restart&nbsp;#重启服务&nbsp;</p>
<h3 id="h3_2">二、vi 操作快捷</h3>
<p>查看文件 vi fileName 退出不保存 :q! ,保存退出 :wq!</p>
<p>删除行 dd 复制一行 yy , 粘贴 p</p>
<p>撤销 u</p>
<h3 id="h3_3">三、tar 解压、压缩</h3>
<p>-c: 建立压缩档案<br />-x：解压<br />-t：查看内容<br />-r：向压缩归档文件末尾追加文件<br />-u：更新原压缩包中的文件</p>
<p>这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。<br /><br />-z：有gzip属性的<br />-j：有bz2属性的<br />-Z：有compress属性的<br />-v：显示所有过程<br />-O：将文件解开到标准输出</p>
<p>下面的参数-f是必须的</p>
<p>-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。</p>
<p>解压到当前文件夹(注意压缩包后缀)</p>
<p>tar -xvzf fileName.tar.gz</p>
<p>tar -xvf fileName.tar</p>
<h3 id="h3_4">四、mysql 相关操作</h3>
<p>关闭防火墙</p>
<p>chkconfig iptables off<br /><br />2.设置MySQL数据库密码及导入mysql脚本<br />1)配置MySQL开机自启动[可选择命令配置或手动配置]<br />命令配置：<br />cd /etc/rc.d/init.d<br />chmod +x mysqld<br />/sbin/chkconfig --del mysqld<br />/sbin/chkconfig --add mysqld<br />chkconfig --level 345 mysqld on<br />service mysqld start<br /><br />3)设置mysql初始root账户密码<br />运行service mysqld status查看数据库服务是否已经启动，若未启动则运行 service mysqld start<br />/usr/bin/mysqladmin -u root password 123456<br /><br />4)导入脚本<br />mysql -u root -p<br />Enter password:输入数据库账户root的密码 123456<br />mysql&gt;set names utf8;<br />mysql&gt;create database mispos_ccb;<br />mysql&gt;source /mispos_ccb.sql; (注意sql文件的路径)<br />mysql&gt;quit;</p>
<h3 id="h3_5">五、chmod 权限相关操作</h3>
<p>chomd 777 fileName; // 给指定的文件赋予最高权限</p>
<p>chmod -R 777 fileDir; // 给指定的 文件目录（递归执行，包含其子文件夹和文件）赋予最高权限</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4-%E6%80%BB%E7%BB%93/  

