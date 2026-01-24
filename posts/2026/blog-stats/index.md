# Hugo博客添加数据统计页面


给你的博客添加统计页面，展示你的博客数据统计信息。[点击这里](https://geekswg.js.cool/stats/)预览效果。

> [!IMPORTANT]
> 理论上该方法适用于所有hugo博客，但由于每个博客的配置和主题结构不同，可能会存在兼容性问题，请自己适配！已在[Fixit主题](https://fixit.lruihao.cn/zh-cn/)下测试通过。

## 思路

利用[hugo](https://gohugo.io/functions/)内置的功能函数，结合一些js代码实现博客数据的统计展示，包括：文章，页面、分类，标签，友情链接，字数等数据。文章条形图，分类饼图等图表使用svg+js绘制而成。

## 代码

### 创建统计页面layout文件

在博客根目录下创建`layouts/stats.html`文件，内容如下：

```html
{{- define "title" -}}
  {{- .Title }} {{ .Site.Params.titleDelimiter }} {{ .Site.Title -}}
{{- end -}}

{{- define "content" -}}
<!-- 引入 stats 样式 -->
<link rel="stylesheet" href="{{ "/stats/stats.css" | relURL }}">

{{- /* Calculate statistics for rendering */ -}}
{{- /* Article count */ -}}
{{ $articleCount := len .Site.RegularPages }}
{{ if eq $articleCount 0 }}
  {{ $articleCount = 1 }}
{{ end }}

{{- /* Page count */ -}}
{{ $pageCount := len (where .Site.Pages "Type" "=" "page") }}

{{- /* DLogs count from content/dlogs/dlogs.yml */ -}}
{{ $dlogsCount := 0 }}
{{ $dlogsFilePath := "content/dlogs/dlogs.yml" }}
{{ with os.ReadFile $dlogsFilePath | transform.Unmarshal }}
  {{ $dlogsData := .dlogs | default . }}
  {{ with $dlogsData.list }}
    {{ $dlogsCount = len . }}
  {{ end }}
{{ end }}
{{ $dlogsUrl := default "/dlogs/" }}
{{ $tagsUrl := default "/tags/" }}
{{ $categoriesUrl := default "/categories/" }}
{{ $postsUrl := default "/posts/" }}
{{ $friendsUrl := default "/friends/" }}

{{- /* Category and tag counts */ -}}
{{ $categories := slice }}
{{ $tags := slice }}
{{ range .Site.RegularPages }}
  {{ if .Params.categories }}
    {{ $categories = union $categories .Params.categories }}
  {{ end }}
  {{ if .Params.tags }}
    {{ $tags = union $tags .Params.tags }}
  {{ end }}
{{ end }}
{{ $categoryCount := len $categories }}
{{ $tagCount := len $tags }}

{{- /* Total word count */ -}}
{{ $scratch := newScratch }}
{{ range (where .Site.Pages "Kind" "page") }}
  {{ $scratch.Add "total" .WordCount }}
{{ end }}
{{ $totalWords := $scratch.Get "total" }}

{{- /* Stats for year/category charts */ -}}
{{ $stats := slice }}
{{ range .Site.RegularPages }}
  {{ $stats = $stats | append (dict "date" .Date "categories" .Params.categories "year" (.Date.Format "2006") "month" (.Date.Format "2006-01") "hour" (.Date.Format "15") "week" (.Date.Format "Monday") "count" .WordCount "slug" .Slug "title" .Title) }}
{{ end }}

{{- /* Friends links count */ -}}
{{ $linkCount := 0 }}
{{ $friendsFile := site.Data.friends }}
{{ if $friendsFile }}
  {{ $linkCount = len $friendsFile }}
{{ end }}

{{- /* Stats data from stats.json */ -}}
{{ $steamGameCount := "7" }}
{{ $steamUrl := "https://steamcommunity.com/id/geekswg" }}
{{ $githubUrl := "https://github.com/geekswg/blog-fixit" }}
{{ $totalCommits := 1024 }}
{{ $lastCommitDate := time.Now.Format "2006-01-02" }}
{{ $commitHashLong := "master" }}
{{ $commitHashShort := "master" }}
{{ $repoSize := 1024000 }} 

{{ with resources.Get "data/stats/stats.json" }}
  {{ with . | transform.Unmarshal }}
    {{ $steamGameCount = .steam_game_owner_count | default $steamGameCount }}
    {{ $steamUrl = .steam_url | default $steamUrl }}
    {{ $githubUrl = .github_url | default $githubUrl }}
    {{ $totalCommits = .github_commits | default $totalCommits }}
    {{ $lastCommitDate = .github_last_commit | default $lastCommitDate }}
    {{ $commitHashLong = .github_hash_long | default $commitHashLong }}
    {{ $commitHashShort = .github_hash_short | default $commitHashShort }}
    {{ $repoSize = .github_repo_size | default $repoSize }}
  {{ end }}
{{ end }}

{{- /* Convert repo size from KB to MB/GB */ -}}
{{ $sizeInMB := div (float $repoSize) 1024 }}
{{ if ge $sizeInMB 1000 }}
  {{ $repoSize = printf "%.2f GB" (div $sizeInMB 1024) }}
{{ else }}
  {{ $repoSize = printf "%.2f MB" $sizeInMB }}
{{ end }}

<article class="page single special">
  <div class="header">
    <h1 class="single-title animate__animated animate__pulse animate__faster">{{ .Title }}</h1>
  </div>

  <noscript>
    Please enable JavaScript to view the Stat page.
  </noscript>

  <div class="content" id="content">
    {{ .Content }}
    <div class="gap-6 mb-14" data-pagefind-ignore="all">

      <div class="article-content max-w-full mb-20">

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          <div class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">文章</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 20 20"><path fill="currentColor" d="M13 0a2 2 0 0 1 2 2H6a2 2 0 0 0-2 2v12a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/><path fill="currentColor" d="M18 5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2zm-7 5H7V5h4zm5-4h-4V5h4zm0 2h-4V7h4zm0 2h-4V9h4zm0 2H7v-1h9zm0 2H7v-1h9zm0 2H7v-1h9z"/></svg></span></div>
            </div>
            <div class="flex flex-col items-start">
              <a href="{{ $postsUrl }}" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">{{- lang.FormatNumber 0 (default 0 $articleCount) -}}</a>
            </div>
          </div>
          <div
            class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium">页面</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M36.91 3.486c2.546.223 4.45 2.212 4.627 4.762c.225 3.227.463 8.38.463 15.752s-.238 12.525-.463 15.752c-.177 2.55-2.081 4.539-4.627 4.762C34.12 44.76 29.885 45 24 45s-10.121-.24-12.91-.486c-2.546-.223-4.45-2.212-4.627-4.762C6.238 36.525 6 31.372 6 24s.238-12.525.463-15.752c.177-2.55 2.081-4.539 4.627-4.762C13.88 3.24 18.115 3 24 3s10.121.24 12.91.486M42 24H6"/><path d="M41.45 40.418c-4.077-4.07-6.887-6.31-8.644-7.521c-1.42-.98-3.172-.82-4.495.29c-1.543 1.293-4.03 3.531-7.811 7.313a183 183 0 0 0-4.217 4.345M18 33a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5-16h22m-22-6.5h12"/></g></svg></span></div>
            </div>
            <div class="flex items-end justify-between">
              <div class="text-3xl font-bold">{{- $pageCount | default 0 -}}</div>
            </div>
          </div>
          <div class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">日常</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m13-.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 16.25A2.25 2.25 0 0 1 4.25 14h7.5A2.25 2.25 0 0 1 14 16.25v.106l-1.509 1.509a3.7 3.7 0 0 0-.97 1.712l-.194.779C10.485 20.75 9.397 21 8 21c-2.828 0-4.39-1.025-5.208-2.195a4.5 4.5 0 0 1-.778-2.07A3 3 0 0 1 2 16.529v-.278m1.5.245v.012l.007.08c.007.074.023.188.055.329c.066.281.198.656.459 1.029C4.514 18.65 5.578 19.5 8 19.5s3.486-.85 3.98-1.555a3 3 0 0 0 .513-1.358l.006-.08l.001-.012v-.245a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75zm15.6-3.826l-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/></svg></span></div>
            </div>
            <div class="flex flex-col items-start">
              <a href="{{ $dlogsUrl }}" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">{{- $dlogsCount | default 0 -}}</a>
            </div>
          </div>
          <div class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">分类列表</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"/></svg></span></div>
            </div>
            <div class="flex flex-col items-start">
              <a href="{{ $categoriesUrl }}" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">{{- $categoryCount | default 0 -}}</a>
            </div>
          </div>
          <div
            class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium">系列文章</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 20 20"><path fill="currentColor" d="M13.981 2H6.018s-.996 0-.996 1h9.955c0-1-.996-1-.996-1m2.987 3c0-1-.995-1-.995-1H4.027s-.995 0-.995 1v1h13.936zm1.99 1l-.588-.592V7H1.63V5.408L1.041 6C.452 6.592.03 6.75.267 8c.236 1.246 1.379 8.076 1.549 9c.186 1.014 1.217 1 1.217 1h13.936s1.03.014 1.217-1c.17-.924 1.312-7.754 1.549-9c.235-1.25-.187-1.408-.777-2M14 11.997c0 .554-.449 1.003-1.003 1.003H7.003A1.003 1.003 0 0 1 6 11.997V10h1v2h6v-2h1z"/></svg></span></div>
            </div>
            <div class="flex items-end justify-between">
              <div class="text-3xl font-bold">3</div>
            </div>
          </div>
          <div class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">标签</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/></g></svg></span></div>
            </div>
            <div class="flex flex-col items-start">
              <a href="{{ $tagsUrl }}" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">{{- lang.FormatNumber 0 (default 0 $tagCount) -}}</a>
            </div>
          </div>
          <div class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">友情链接</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.3rem" viewBox="0 0 1792 1536"><path fill="currentColor" d="M1792 1120v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96V832H960v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96V832H320v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96V832q0-52 38-90t90-38h512V512h-96q-40 0-68-28t-28-68V96q0-40 28-68t68-28h320q40 0 68 28t28 68v320q0 40-28 68t-68 28h-96v192h512q52 0 90 38t38 90v192h96q40 0 68 28t28 68"/></svg></span></div>
            </div>
            <div class="flex flex-col items-start">
              <a href="{{ $friendsUrl }}" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 no-underline">{{- $linkCount | default 36 -}}</a>
            </div>
          </div>
          <div
            class="bg-zinc rounded-xl shadow-md p-3 border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-[#1c2128] transition-colors duration-200">
            <div class="flex justify-between mb-0 items-center">
              <h3 class="text-lg font-medium">博客字数</h3>
              <div
                class="h-8 w-8 rounded-lg stats-icon-bg flex items-center justify-center">
                <span class="stats-icon-color" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256"><path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v48h-40ZM72 40h128v48h-40v-8a16 16 0 0 0-16-16H72ZM40 80h104v96H40Zm32 136v-24h72a16 16 0 0 0 16-16v-8h40v48Zm-3.76-62.06l-12-48a8 8 0 1 1 15.52-3.88l6.76 27l6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66l6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6a9 9 0 0 1-.87.05a8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64"/></svg></span></div>
            </div>
            <div class="flex items-end justify-between">
              <div class="text-3xl font-bold">{{- lang.FormatNumber 0 (default 0 $totalWords) -}}</div>
            </div>
          </div>
        </div>

        <div class="stats-cards grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
          <div
            class="bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200 hover:shadow-lg mb-4 flex flex-col h-full">
            <div class="h-32 relative flex-shrink-0">
              <div class="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-600">
              </div>
              <div class="absolute inset-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128"><path fill="#ff4088" d="m71.2 8.5l36.7 21.3c4.3 2.5 7 7.2 7 12.2v43.7c0 5.6-3 10.7-7.8 13.4l-36.4 20.5c-4.8 2.7-10.7 2.7-15.5-.1l-33.5-19.3c-5.3-3-8.5-8.6-8.5-14.7V44.1c0-6.1 3.2-11.8 8.4-15L54.4 8.8c5.1-3.2 11.6-3.3 16.8-.3"/><path fill="#c9177e" d="M63 126c-3.5 0-6.9-.9-10-2.7L19.5 104c-6.6-3.8-10.7-10.9-10.7-18.5V44.1c0-7.7 3.9-14.6 10.4-18.7L52.1 5.1c6.5-4 14.6-4.1 21.2-.3L110 26.1c5.7 3.3 9.2 9.4 9.2 15.9v43.7c0 7.1-3.8 13.7-10 17.2l-36.4 20.5c-3 1.7-6.4 2.6-9.8 2.6m0-115.3c-2.2 0-4.4.6-6.3 1.8l-33 20.3c-4 2.4-6.3 6.7-6.3 11.3v41.5c0 4.5 2.4 8.7 6.3 11l33.5 19.3c3.5 2 7.8 2 11.3.1l36.4-20.5c3.5-2 5.6-5.6 5.6-9.6V42.1c0-3.5-1.9-6.7-4.9-8.5L69 12.3c-1.8-1.1-3.9-1.6-6-1.6"/><path fill="#fff" d="M38.6 96.9V30.5h13.9v24.2h23V30.5h13.9v66.4H75.5v-29h-23v29z"/></svg>
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-10"></div>
              <div class="absolute bottom-3 left-4">
                <h3 class="text-xl font-bold text-zinc-50">Analytics</h3>
                <p class="text-sm text-zinc-200"></p>
              </div>
            </div>
            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 flex-grow flex flex-col min-h-0">
              <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 overflow-x-hidden flex-shrink-0">已停止使用网站统计工具。</p>
              <div class="flex w-full justify-between items-center gap-2">
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">浏览量</div>
                  <div class="font-semibold"><span class="line-through decoration-2 cursor-not-allowed text-zinc-400 dark:text-zinc-600">&nbsp;999&nbsp;</span><sup class="text-zinc-400 dark:text-zinc-600">+</sup></div>
                </div>
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">评论数</div>
                  <div class="font-semibold"><span class="line-through decoration-2 cursor-not-allowed text-zinc-400 dark:text-zinc-600">&nbsp;999&nbsp;</span><sup class="text-zinc-400 dark:text-zinc-600">+</sup></div>
                </div>
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">博客年龄</div>
                  <div class="font-semibold inline whitespace-nowrap group relative text-zinc-700 dark:text-zinc-300">
                    <span class="truncate max-w-[120px] inline-block align-bottom"><span id="stats_blog_online_year"></span></span>
                    <span class="w-max max-w-sm hidden group-hover:block absolute right-0 bottom-full bg-zinc-900 dark:bg-zinc-700 text-zinc-50 dark:text-zinc-100 text-sm rounded-sm py-2 px-3 shadow-lg z-50 hover:z-50 whitespace-nowrap -translate-y-1.5">
                        Creation: 2006-01-02 15:04:05 Monday
                      <div class="absolute top-full right-1/4 transform translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-zinc-900 dark:border-t-zinc-700"></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200 hover:shadow-lg mb-4 flex flex-col h-full">
            <div class="h-32 relative flex-shrink-0">
              <div class="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-600">
              </div>
              <div class="absolute inset-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-10"></div>
              <div class="absolute bottom-3 left-4">
                <h3 class="text-xl font-bold text-zinc-50">GitHub</h3>
                <p class="text-sm text-zinc-200"></p>
              </div>
            </div>
            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 flex-grow flex flex-col min-h-0">
              <p class="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 overflow-x-hidden flex-shrink-0">Let's build from here. <svg class="ml-2 mr-1 inline-block" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6.0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6.0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9M252.8 8C114.1 8 8 113.3 8 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1.0-6.2-.3-40.4-.3-61.4.0.0-70 15-84.7-29.8.0.0-11.4-29.1-27.8-36.6.0.0-22.9-15.7 1.6-15.4.0.0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5.0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9.0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4.0 33.7-.3 75.4-.3 83.6.0 6.5 4.6 14.4 17.3 12.1C436.2 457.8 504 362.9 504 252 504 113.3 391.5 8 252.8 8M105.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6.0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9.0-6.2-1.4-2.3-4-3.3-5.6-2"></path></svg> <a href="{{ $githubUrl }}/tree/{{- $commitHashLong -}}" target="_blank" rel="noopener noreferrer" class="bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-[#0969da] dark:text-blue-400 text-xs! m-0 py-0.5 px-1 whitespace-break-spaces font-normal! rounded-md transition-colors duration-200">{{- $commitHashShort -}}</a></p>
              <div class="flex w-full justify-between items-center gap-2">
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">Commits</div>
                  <div class="font-semibold text-zinc-700 dark:text-zinc-300">{{- lang.FormatNumber 0 (default 0 $totalCommits) -}}</div>
                </div>
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">Last Commit</div>
                  <div class="font-semibold text-zinc-700 dark:text-zinc-300"><span id="last-commit-date" data-date="{{ $lastCommitDate }}">-</span></div>
                </div>
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">Repo Size</div>
                  <div class="font-semibold text-zinc-700 dark:text-zinc-300">{{ $repoSize }}<span class="text-xs text-zinc-400 dark:text-zinc-500"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200 hover:shadow-lg mb-4 flex flex-col h-full">
            <div class="h-32 relative flex-shrink-0">
              <div class="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-600">
              </div>
              <div class="absolute inset-0 flex items-center justify-center"><svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" viewBox="0 0 512 512"><symbol id="b" viewBox="-32 -32 64 64"><linearGradient id="a" x1="7762.648" x2="7762.648" y1="-8454.313" y2="-8453.313" gradientTransform="matrix(63.931 0 0 64 -496273.844 541044)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#111d2e"/><stop offset=".212" style="stop-color:#051839"/><stop offset=".407" style="stop-color:#0a1b48"/><stop offset=".581" style="stop-color:#132e62"/><stop offset=".738" style="stop-color:#144b7e"/><stop offset=".873" style="stop-color:#136497"/><stop offset="1" style="stop-color:#1387b8"/></linearGradient><path d="M-30.7 9.2C-26.7 22.4-14.5 32 0 32c17.7 0 32-14.3 32-32S17.7-32 0-32c-17 0-30.9 13.2-32 29.9 2.1 3.5 2.9 5.6 1.3 11.3" style="fill:url(#a)"/><path d="M-1.7-8v.2L-9.5 3.5c-1.3-.1-2.5.2-3.7.7-.5.2-1 .5-1.5.8l-17.2-7.1s-.4 6.5 1.3 11.4l12.2 5c.6 2.7 2.5 5.1 5.2 6.3 4.5 1.9 9.7-.3 11.6-4.8.5-1.2.7-2.4.7-3.7l11.2-8h.3c6.7 0 12.2-5.5 12.2-12.2s-5.4-12.2-12.2-12.2C3.8-20.2-1.7-14.7-1.7-8m-1.8 23c-1.5 3.5-5.5 5.1-9 3.7-1.5-.7-2.8-1.8-3.5-3.4l4 1.6c2.6 1.1 5.5-.1 6.6-2.7s-.1-5.5-2.7-6.6L-12.3 6c1.6-.6 3.4-.6 5 .1 1.7.7 3 2 3.7 3.7s.7 3.5.1 5.2M10.5.1C6 .1 2.4-3.5 2.4-8s3.6-8.1 8.1-8.1 8.1 3.6 8.1 8.1S15 .1 10.5.1M4.4-8c0-3.4 2.7-6.1 6.1-6.1s6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1S4.4-4.7 4.4-8" style="fill:#fff"/></symbol><use xlink:href="#b" width="64" height="64" x="-32" y="-32" style="overflow:visible" transform="matrix(8 0 0 8 256 256)"/></svg>
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-10"></div>
              <div class="absolute bottom-3 left-4">
                <h3 class="text-xl font-bold text-zinc-50">Steam</h3>
                <p class="text-sm text-zinc-200"></p>
              </div>
            </div>
            <div class="p-4 bg-zinc-50 dark:bg-zinc-900 flex-grow flex flex-col min-h-0">
              <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 overflow-x-hidden flex-shrink-0">"Pay. Don't play." Steam  是畅玩游戏、讨论游戏、创造游戏的快乐所在。</p>
              <div class="flex w-full justify-between items-center gap-2">
                <div class="flex-1 text-center">
                  <div class="text-xs text-zinc-500 dark:text-zinc-500">游戏库</div>
                  <div class="font-semibold text-zinc-700 dark:text-zinc-300"><span>{{ $steamGameCount }}</span></div>
                </div>
                <div class="flex-2 text-center">
                  <a href="{{ $steamUrl }}" target="_blank" rel="noopener noreferrer" class="text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:ring-4 focus:outline-hidden focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer no-underline transition-colors duration-200">
                    View Details
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="按年份统计 - 文章数" class="headerLink mt-0"><a href="#按年份统计 - 文章数" class="header-mark" title="header-mark"></a>按年份统计 - 文章数</h3>

        <div class="bar-chart mb-24">
          {{ $currentYear := now.Year }}
          {{ $maxCount := 0 }}
          {{ range $year := (seq 2006 $currentYear) }}
            {{ $yearData := where $stats "year" (string $year) }}
            {{ $count := len $yearData }}
            {{ if gt $count $maxCount }}
              {{ $maxCount = $count }}
            {{ end }}
          {{ end }}

          {{ range $year := (seq 2006 $currentYear) }}
            {{ $yearData := where $stats "year" (string $year) }}
            {{ $count := len $yearData }}
            {{ $countPercentage := 0 }}
            {{ if ne $count 0 }}
              {{/*  懒得修复 CSS 在这里保证最大值为 100%  */}}
              {{ $countPercentage = div (mul (float $count) 100) $maxCount }}
            {{ end }}
            <div class="item" style="--val: {{ $countPercentage}}">
              <div class="label text-xs w-[2ch] md:w-8 text-clip overflow-hidden whitespace-nowrap -indent-4 md:indent-0">{{ $year }}</div>
              <div class="value">{{ $count }}</div>
            </div>
          {{ end }}
        </div>

        <h3 id="按分类统计 - 文章数" class="headerLink mt-0"><a href="#按分类统计 - 文章数" class="header-mark" title="header-mark"></a>按分类统计 - 文章数</h3>

        <div class="category flex items-center flex-col lg:flex-row gap-8 mx-auto max-w-full mb-24">
          <div class="w-full lg:w-[70%] flex justify-center">
            <svg id="cate-pie-chart" class="w-full max-w-xl" viewBox="0 0 400 400" style="height: auto; aspect-ratio: 1;"></svg>
          </div>
          <div class="w-full lg:w-[30%] labels">
            <h3 class="mb-6">分类统计</h3>
            <ul class="space-y-2">
              {{ $colors := slice "#f97316" "#06b6d4" "#f43f5e" "#2563eb" "#8b5cf6" "#10b981" "#f59e0b" "#ec4899" "#3b82f6" "#ef4444" "#14b8a6" "#a855f7" "#f97316" "#06b6d4" "#f43f5e" "#2563eb" "#8b5cf6" "#10b981" "#f59e0b" "#ec4899" }}
              {{ $cateCounter := 0 }}
              {{ range $category, $pages := .Site.Taxonomies.categories }}
                {{ $cateCounter = add $cateCounter 1 }}
                {{ $cateCount := len $pages }}
                {{ $catePercentage := div (mul (float $cateCount) 100) $articleCount }}
                {{ $color := index $colors (sub $cateCounter 1) }}
                <li id="legend-{{ sub $cateCounter 1 }}" class="flex items-center gap-2 py-1 px-2 rounded transition-all duration-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700" data-percentage='{{ printf "%.2f" $catePercentage }}'>
                  <span class="w-4 h-4 rounded-full flex-shrink-0" style="background-color: {{ $color }}"></span>
                  <span class="flex-1">{{ $category }}: {{ $cateCount }} 篇</span>
                  <span class="text-sm text-zinc-500 dark:text-zinc-400">({{ printf "%.1f" $catePercentage }}%)</span>
                </li>
              {{ end }}
            </ul>
          </div>
        </div>

        <h3 id="标签云" class="headerLink mt-0"><a href="#标签云" class="header-mark no-underline" title="header-mark"></a><a href="/tags/" class="no-underline hover:underline">标签云</a></h3>

        <div class="tag-cloud-tags">
          {{- range $.Site.Taxonomies.tags.ByCount -}}
            <a href="{{ .Page.RelPermalink }}"><div class="tags-shields"><div class="tags-shields-before">{{ .Page.Title }}</div><div class="tags-shields-after tags-count-{{ .Count }}">{{ .Count }}</div></div></a>
          {{- end -}}
        </div>

        
      </div>

    </div>

    <script type="text/javascript">
      // Whois Creation Date: 2006-01-02 15:04:05 Monday
      const now = new Date();
      const onlineStartDate = new Date("2006-01-02 15:04:05"); // 2010-03-26T14:41:14Z
      const diffTime = Math.abs(now - onlineStartDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);

      const diffDaysLocale = diffDays.toLocaleString();

      document.getElementById('stats_blog_online_year').innerHTML = `${diffDaysLocale}天 <span class="text-xs">(${years}yrs)</span>`;
    </script>

    <script type="text/javascript">
        // 计算相对时间的函数
        function getRelativeTime(dateString) {
          const rtf = new Intl.RelativeTimeFormat('zh-CN', { numeric: "auto", style: 'short' });
          const now = new Date();
          const date = new Date(dateString);

          // 检查日期是否有效
          if (isNaN(date.getTime())) {
            return dateString;
          }

          const diff = now - date;

          const seconds = Math.floor(diff / 1000);
          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);
          const months = Math.floor(days / 30);
          const years2 = Math.floor(days / 365);

          // 获取原始格式化的相对时间（如 "3 天前"）
          let formattedTime;
          if (years2 > 0) {
            formattedTime = rtf.format(-years2, 'year');
          } else if (months > 0) {
            formattedTime = rtf.format(-months, 'month');
          } else if (days > 0) {
            formattedTime = rtf.format(-days, 'day');
          } else if (hours > 0) {
            formattedTime = rtf.format(-hours, 'hour');
          } else if (minutes > 0) {
            formattedTime = rtf.format(-minutes, 'minute');
          } else {
            formattedTime = rtf.format(-seconds, 'second');
          }

          return formattedTime.replace(/(\d+)([^\d]+)/, '$1 $2');
        };
      </script>

    <script type="text/javascript">
      // Donut Chart
      let cateData = [
        {{ range $category, $pages := .Site.Taxonomies.categories }}
          {name: "{{ $category }}", value: {{ len $pages }}},
        {{ end }}
      ];

      let total = 0;
      cateData.forEach(item => {
        total += item.value;
      });

      const data = {
        total: total,
        category: cateData
      };

      const colors = [
        '#f97316',
        '#06b6d4',
        '#f43f5e',
        '#2563eb',
        '#8b5cf6',
        '#10b981',
        '#f59e0b',
        '#ec4899',
        '#3b82f6',
        '#ef4444',
        '#14b8a6',
        '#a855f7',
        '#f97316',
        '#06b6d4',
        '#f43f5e',
        '#2563eb',
        '#8b5cf6',
        '#10b981',
        '#f59e0b',
        '#ec4899',
      ];

      const svg = document.getElementById('cate-pie-chart');
      if (svg) {
        const centerX = 200;
        const centerY = 200;
        const radius = 160;
        const innerRadius = 80;

        let totalValue = 0;
        let currentAngle = -Math.PI / 2;

        data.category.forEach(item => {
          totalValue += item.value;
        });

        data.category.forEach((item, index) => {
          const sliceAngle = (item.value / totalValue) * 2 * Math.PI;
          const percentage = (item.value / totalValue) * 100;
          const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

          const startX = centerX + Math.cos(currentAngle) * radius;
          const startY = centerY + Math.sin(currentAngle) * radius;
          const endX = centerX + Math.cos(currentAngle + sliceAngle) * radius;
          const endY = centerY + Math.sin(currentAngle + sliceAngle) * radius;

          const innerStartX = centerX + Math.cos(currentAngle) * innerRadius;
          const innerStartY = centerY + Math.sin(currentAngle) * innerRadius;
          const innerEndX = centerX + Math.cos(currentAngle + sliceAngle) * innerRadius;
          const innerEndY = centerY + Math.sin(currentAngle + sliceAngle) * innerRadius;

          const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} L ${innerEndX} ${innerEndY} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY} Z`;

          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          const sliceColor = colors[index % colors.length];
          path.setAttribute('d', pathData);
          path.setAttribute('fill', sliceColor);
          path.setAttribute('stroke', 'white');
          path.setAttribute('stroke-width', '2');
          path.setAttribute('class', 'donut-slice');
          path.setAttribute('data-name', item.name);
          path.setAttribute('data-value', item.value);
          path.setAttribute('data-color', sliceColor);
          path.style.transition = 'opacity 0.3s ease';
          path.style.cursor = 'pointer';
          svg.appendChild(path);

          // 占比大于3%的分类，在环形图上显示名称
          if (percentage > 3) {
            const textAngle = currentAngle + sliceAngle / 2;
            const textRadius = (radius + innerRadius) / 2;
            const textX = centerX + Math.cos(textAngle) * textRadius;
            const textY = centerY + Math.sin(textAngle) * textRadius;

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textY);
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '13');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.style.fontWeight = '600';
            text.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
            text.style.pointerEvents = 'none';
            text.classList.add('donut-label');
            text.textContent = item.name;
            svg.appendChild(text);
          }

          path.addEventListener('mouseenter', function() {
            document.querySelectorAll('.donut-slice').forEach(p => {
              if (p !== this) {
                p.style.opacity = '0.3';
              }
            });
            const legendItem = document.getElementById(`legend-${index}`);
            if (legendItem) {
              legendItem.style.backgroundColor = sliceColor;
              legendItem.style.color = 'white';
              legendItem.style.fontWeight = 'bold';
            }
          });

          path.addEventListener('mouseleave', function() {
            document.querySelectorAll('.donut-slice').forEach(p => {
              p.style.opacity = '1';
            });
            const legendItem = document.getElementById(`legend-${index}`);
            if (legendItem) {
              legendItem.style.backgroundColor = 'transparent';
              legendItem.style.color = '';
              legendItem.style.fontWeight = 'normal';
            }
          });

          currentAngle += sliceAngle;
        });

        const totalText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        totalText.setAttribute('x', centerX);
        totalText.setAttribute('y', centerY - 10);
        totalText.setAttribute('fill', '#1f2937');
        totalText.setAttribute('font-size', '28');
        totalText.setAttribute('text-anchor', 'middle');
        totalText.setAttribute('font-weight', 'bold');
        totalText.textContent = totalValue;
        totalText.classList.add('dark-mode-text');

        const labelText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelText.setAttribute('x', centerX);
        labelText.setAttribute('y', centerY + 20);
        labelText.setAttribute('fill', '#6b7280');
        labelText.setAttribute('font-size', '14');
        labelText.setAttribute('text-anchor', 'middle');
        labelText.textContent = '篇';
        labelText.classList.add('dark-mode-text-secondary');

        svg.appendChild(totalText);
        svg.appendChild(labelText);

        const updateDarkModeText = () => {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          totalText.setAttribute('fill', isDark ? '#f9fafb' : '#1f2937');
          labelText.setAttribute('fill', isDark ? '#9ca3af' : '#6b7280');
        };

        const observer = new MutationObserver(updateDarkModeText);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        updateDarkModeText();
      }
    </script>

    <script>
        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
          // Github Card Last Commit
          const lastCommitDateElement = document.getElementById("last-commit-date");
          // const totalPlayedTimeElement = document.getElementById("total-played-time");
          if (lastCommitDateElement) {
            const commitDate = lastCommitDateElement.getAttribute("data-date");
            lastCommitDateElement.textContent = getRelativeTime(commitDate);
          }
          // totalPlayedTimeElement.textContent = getRelativeTime(commitDate);

          // createHeatmap 函数如果存在则调用
          if (typeof createHeatmap === 'function') {
            createHeatmap();
          }

        });
    </script>
  </div>
</article>
{{- end -}}
```

### 创建css文件
在博客根目录下创建`content/stats/stats.css`文件，内容如下：

```css
@charset "UTF-8";

@media(max-width: 730px) {
    :root {
        --ypb-bodyMargin:20px
    }
}

.headerLink a {
    color: unset!important
}

.article-content div ul {
    margin-top: -.5rem
}

.tag-cloud-tags {
    margin: 10px 0
}

.tag-cloud-tags a {
    display: inline-block;
    position: relative;
    margin: 5px 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-transition: all ease-out .3s;
    -moz-transition: all ease-out .3s;
    -o-transition: all ease-out .3s;
    transition: all ease-out .3s;
    text-decoration: none
}

.tags-shields {
    display: flex;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    align-items: center;
    border-radius: 4px
}

.tags-shields-before {
    font-size: 12px;
    padding: 0 4px 0 6px;
    background-color: #595959;
    color: #fff;
    display: inline-block;
    vertical-align: middle
}

.tags-shields-after {
    font-size: 10px;
    padding: 0 6px 0 4px;
    background-color: #0274b5;
    color: #fff;
    display: inline-block;
    vertical-align: middle
}

.tags-count-1 {
    background-color: #0274b5
}

.tags-count-2 {
    background-color: #3b8dbf
}

.tags-count-3 {
    background-color: #8ab802
}

.tags-count-4 {
    background-color: green
}

.tags-count-5 {
    background-color: #dab226
}

.tags-count-6 {
    background-color: #e77334
}

.tags-count-7 {
    background-color: #cc5640
}

.tags-count-8 {
    background-color: #e6adb7
}

.tags-count-9 {
    background-color: #740174
}

.tags-count-10,.tags-count-11,.tags-count-12,.tags-count-13,.tags-count-14,.tags-count-15,.tags-count-16,.tags-count-17,.tags-count-18,.tags-count-19 {
    background-color: orange
}

.tags-count-20,.tags-count-21,.tags-count-22,.tags-count-23,.tags-count-24,.tags-count-25,.tags-count-26,.tags-count-27,.tags-count-28,.tags-count-29 {
    background-color: #ff4500
}

.tags-count-30,.tags-count-31,.tags-count-32,.tags-count-33,.tags-count-34,.tags-count-35,.tags-count-36,.tags-count-37,.tags-count-38,.tags-count-39,.tags-count-40,.tags-count-41,.tags-count-42,.tags-count-43,.tags-count-44,.tags-count-45,.tags-count-46,.tags-count-47,.tags-count-48,.tags-count-49,.tags-count-50 {
    background-color: red
}

.bar-chart {
    height: 20rem;
    display: grid;
    grid-auto-flow: column;
    gap: 2%;
    align-items: end;
    padding-inline:2%;padding-block:1.5rem;position: relative;
    isolation: isolate
}

.bar-chart::after {
    content: "";
    position: absolute;
    inset: 1.5rem 0;
    z-index: -1;
    background-image: repeating-linear-gradient(to top,transparent 0 calc(calc(100%/10) - 1px),currentcolor 0 calc(100%/10));
    box-shadow: 0 1px currentcolor;
    opacity: .125
}

.bar-chart>.item {
    height: calc(1% * var(--val));
    width: 100%;
    background-color: #2563eb;
    position: relative;
    animation: item-height 1s ease forwards
}

@keyframes item-height {
    from {
        height: 0
    }
}

.bar-chart>.item>* {
    position: absolute;
    text-align: center
}

.bar-chart>.item>.label {
    inset: 100% 0 auto 0
}

.bar-chart>.item>.value {
    inset: auto 0 100% 0
}

.stats-cards a {
    font-weight: 600
}

/* Dark Theme Adaptation */
[data-theme='dark'] .bar-chart::after {
    opacity: .25;
    color: #71717a
}

[data-theme='dark'] .bar-chart>.item {
    background-color: #3b82f6
}

[data-theme='dark'] .tag-cloud-tags a:hover {
    filter: brightness(1.2)
}

/* Stat cards icon styles */
.stats-icon-bg {
    background: linear-gradient(to bottom right, #dbeafe, #dbeafe)
}

.stats-icon-color {
    color: #2563eb
}

[data-theme='dark'] .stats-icon-bg {
    background: linear-gradient(to bottom right, #1e3a8a, #1e40af) !important
}

[data-theme='dark'] .stats-icon-color {
    color: #60a5fa !important
}

/* Override Tailwind bg-zinc-50 and bg-zinc-100 */
.grid.grid-cols-2 > div {
    background-color: #fafafa !important
}

[data-theme='dark'] .grid.grid-cols-2 > div {
    background-color: #1c2128 !important
}

/* Dark theme border optimization - reduce border width for better dark mode appearance */
[data-theme='dark'] .border {
    border-width: 0.5px !important;
    border-color: #374151 !important;
}

/* Specific optimization for stat cards in dark theme */
[data-theme='dark'] .grid.grid-cols-2 > div,
[data-theme='dark'] .grid.md\:grid-cols-4 > div {
    border-color: #374151 !important;
    border-width: 0.5px !important;
}

/* Fix for GitHub/Steam/Analytics cards in dark theme */
[data-theme='dark'] .stats-cards .bg-zinc-50 {
    background-color: #111827 !important;
}

[data-theme='dark'] .stats-cards .bg-zinc-100 {
    background-color: #1f2937 !important;
}

/* Ensure text colors are properly adjusted for dark theme */
[data-theme='dark'] .text-zinc-600 {
    color: #d1d5db !important;
}

[data-theme='dark'] .text-zinc-700 {
    color: #e5e7eb !important;
}

[data-theme='dark'] .text-zinc-900 {
    color: #f9fafb !important;
}

/* Fix for specific text elements in cards */
[data-theme='dark'] .stats-cards .text-zinc-500 {
    color: #9ca3af !important;
}

/* Donut chart legend styles */
.category .labels ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.category .labels li {
    transition: all 0.2s ease;
}

.category .labels li:hover {
    transform: translateX(4px);
}

/* Responsive layout for category section */
@media (max-width: 1024px) {
    .category {
        flex-direction: column;
    }
    .category .labels {
        width: 100% !important;
        order: 2;
    }
    .category > div:first-child {
        width: 100% !important;
        order: 1;
    }
}
```

### 创建md文件

在博客根目录下创建`content/stats/index.md`文件，内容如下：

```markdown
---
title: "博客统计"
date: 2026-01-24T15:22:51+08:00
layout: stats
---
your content goes here.
```

## 参考

[1] 主要参考 [https://www.eallion.com/blog-heatmap/](https://www.eallion.com/blog-heatmap/)，感谢 eallion 的无私分享！



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/blog-stats/  

