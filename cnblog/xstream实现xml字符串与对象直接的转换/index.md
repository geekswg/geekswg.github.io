# 

<div class="cnblogs_code">
<pre><span style="color: #008000;">/**</span><span style="color: #008000;">
 * TODO 使用xStream 实现xml字符和对象之间的转换
 * &lt;p&gt;
 * &lt;!-- </span><span style="color: #008000; text-decoration: underline;">https://mvnrepository.com/artifact/com.thoughtworks.xstream/xstream</span><span style="color: #008000;"> --&gt;
 * &lt;!-- xml字符串，对象之间互转 --&gt;
 * &lt;dependency&gt;
 * &lt;groupId&gt;com.thoughtworks.xstream&lt;/groupId&gt;
 * &lt;artifactId&gt;xstream&lt;/artifactId&gt;
 * &lt;version&gt;${xstream.version}&lt;/version&gt;
 * &lt;/dependency&gt;
 *
 * </span><span style="color: #808080;">@author</span><span style="color: #008000;">: geekswg@qq.com
 * </span><span style="color: #808080;">@since</span><span style="color: #008000;">: 2020/8/1 10:31
 </span><span style="color: #008000;">*/</span>
<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span><span style="color: #000000;"> XmlUtils {

    </span><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">final</span> XStream xStreamHelper = <span style="color: #0000ff;">new</span> XStream(<span style="color: #0000ff;">new</span><span style="color: #000000;"> StaxDriver());
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 初始化配置</span>
    <span style="color: #0000ff;">static</span><span style="color: #000000;"> {
        XStream.setupDefaultSecurity(xStreamHelper);
        xStreamHelper.allowTypesByWildcard(</span><span style="color: #0000ff;">new</span> String[]{"org.demo.springcloud.**"<span style="color: #000000;">});
        xStreamHelper.ignoreUnknownElements();</span><span style="color: #008000;">//</span><span style="color: #008000;">忽略未知节点</span>
        xStreamHelper.autodetectAnnotations(<span style="color: #0000ff;">true</span><span style="color: #000000;">);
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> &lt;T&gt; T xmlToBean(String xmlStr, Class&lt;?&gt;<span style="color: #000000;"> clazz) {
        xStreamHelper.ignoreUnknownElements();</span><span style="color: #008000;">//</span><span style="color: #008000;">忽略未知节点</span>
        xStreamHelper.autodetectAnnotations(<span style="color: #0000ff;">true</span><span style="color: #000000;">);
        xStreamHelper.processAnnotations(clazz);
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (T) xStreamHelper.fromXML(xmlStr);
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> &lt;T&gt; T xmlToBean(File xmlFile, Class&lt;?&gt;<span style="color: #000000;"> clazz) {
        xStreamHelper.processAnnotations(clazz);
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (T) xStreamHelper.fromXML(xmlFile);
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> &lt;T&gt;<span style="color: #000000;"> String beanToXmlStr(T t) {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> xStreamHelper.toXML(t);
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> &lt;T&gt; <span style="color: #0000ff;">boolean</span><span style="color: #000000;"> beanToXml(T t, String filePath){
        </span><span style="color: #0000ff;">boolean</span> flag = <span style="color: #0000ff;">true</span><span style="color: #000000;">;
        </span><span style="color: #0000ff;">try</span><span style="color: #000000;"> {
            FileWriter fileWriter </span>= <span style="color: #0000ff;">new</span> FileWriter(<span style="color: #0000ff;">new</span><span style="color: #000000;"> File(filePath));
            fileWriter.write(xStreamHelper.toXML(t));
            fileWriter.flush();
            fileWriter.close();
        } </span><span style="color: #0000ff;">catch</span><span style="color: #000000;"> (IOException e) {
            flag </span>= <span style="color: #0000ff;">false</span><span style="color: #000000;">;
            e.printStackTrace();
        }</span><span style="color: #0000ff;">finally</span><span style="color: #000000;"> {
            </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> flag;
        }
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">void</span><span style="color: #000000;"> main(String[] args) {
        BsBankInfo bsBankInfo </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> BsBankInfo();
        bsBankInfo.setBankName(</span>"中国建设银行"<span style="color: #000000;">);
        bsBankInfo.setBankNo(</span>"b10001"<span style="color: #000000;">);

        String xmlStr </span>=<span style="color: #000000;"> beanToXmlStr(bsBankInfo);
        System.out.println(</span>"===&gt;" +<span style="color: #000000;"> xmlStr);
        System.out.println(xmlToBean(xmlStr, BsBankInfo.</span><span style="color: #0000ff;">class</span><span style="color: #000000;">).toString());
        System.out.println(beanToXml(bsBankInfo, </span>"d:/t.xml"<span style="color: #000000;">));
    }
}</span></pre>
</div>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/xstream%E5%AE%9E%E7%8E%B0xml%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%8E%E5%AF%B9%E8%B1%A1%E7%9B%B4%E6%8E%A5%E7%9A%84%E8%BD%AC%E6%8D%A2/  

