# 触发器（mysql）

# 示例代码
> 实现单表数据在更新某些列数据后 自动改变指定列的值。 

```sql
-- 触发器 修改上传标志
CREATE TRIGGER TR_REG_RECORD_UPDATE BEFORE UPDATE
ON cloud_reg_record FOR EACH ROW
BEGIN
DECLARE scbzVal INT DEFAULT 1; 
IF OLD.cancel_time != NEW.cancel_time THEN
 SET scbzVal=0;
ELSEIF old.visit_state!=NEW.visit_state THEN 
 SET scbzVal=0;
END IF;
IF scbzVal<>1 THEN 
 SET NEW.scbz=scbzVal;
END IF;
END;
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/%E8%A7%A6%E5%8F%91%E5%99%A8mysql/  

