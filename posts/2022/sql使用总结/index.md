# SQL使用总结


## oracle

## 索引
> 查看索引
```sql
-- 查看索引 all_indexes,user_ind_columns
SELECT a.OWNER,a.TABLE_NAME,a.INDEX_NAME
,LISTAGG(b.COLUMN_NAME,',') AS 索引列
FROM all_indexes a LEFT JOIN user_ind_columns b ON a.INDEX_NAME=b.INDEX_NAME
WHERE a.TABLE_NAME=UPPER('ZY_BRRY')
GROUP BY a.OWNER,a.TABLE_NAME,a.INDEX_NAME
```
> 创建索引、修改索引
```
create[unique]|[bitmap] index index_name --UNIQUE表示唯一索引、BITMAP位图索引
on table_name(column1,column2...|[express])--express表示函数索引
[tablespace tab_name] --tablespace表示索引存储的表空间
[pctfree n1]    --索引块的空闲空间n1
[storage         --存储块的空间
 (
    initial 64K  --初始64k
    next 1M
    minextents 1
    maxextents unlimited

)];
drop index index_name -- 删除索引
alter index index_old rename to index_new;-- 重新命名索引
alter index index_name coalesce;-- 合并索引
alter index index_name rebuild;-- 重新构造
```

## 表空间
```
SELECT created, log_mode, log_mode FROM v$database; 
--1G=1024MB 
--1M=1024KB 
--1K=1024Bytes 
--1M=11048576Bytes 
--1G=1024*11048576Bytes=11313741824Bytes 
SELECT a.tablespace_name "表空间名", 
total "表空间大小", 
free "表空间剩余大小", 
(total - free) "表空间使用大小", 
total / (1024 * 1024 * 1024) "表空间大小(G)", 
free / (1024 * 1024 * 1024) "表空间剩余大小(G)", 
(total - free) / (1024 * 1024 * 1024) "表空间使用大小(G)", 
round((total - free) / total, 4) * 100 "使用率 %" 
FROM (SELECT tablespace_name, SUM(bytes) free 
FROM dba_free_space 
GROUP BY tablespace_name) a, 
(SELECT tablespace_name, SUM(bytes) total 
FROM dba_data_files 
GROUP BY tablespace_name) b 
WHERE a.tablespace_name = b.tablespace_name 
ORDER BY 1
```

# mysql

# sqlServer

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2022/sql%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93/  

