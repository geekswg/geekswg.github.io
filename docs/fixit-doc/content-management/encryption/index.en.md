---
title: Content Encryption
date: 2023-02-24T20:32:41+08:00
type: posts
aliases:
  - /theme-documentation-content-encryption/
author:
  name: Lruihao
  link: https://lruihao.cn
description: Find out how to encrypt content in FixIt theme.
keywords:
  - Hugo Encryption
  - Content Encryption
  - FixIt
password: 1212
message: Password is 1212
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Content
  - Encryption
  - Advanced
categories:
  - Documentation
reward: true
hiddenFromHomePage: true
---

Find out how to encrypt content in FixIt theme.

<!--more-->

## Page Encryption

### Frontmatter

The FixIt theme provides two frontmatters for page encryption.

* **password**: *[required]* password of encrypted page content
* **message**: *[optional]* encryption prompt

For example, the frontmatters in this article are as follows:

```yaml
---
title: Theme Documentation - Content Encryption
date: 2022-05-28T11:51:41+08:00
author:
  name: Lruihao
  link: https://lruihao.cn
description: Find out how to encrypt content in FixIt theme.
password: 1212
message: Password is 1212
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Encryption
categories:
  - Documentation
---
```

{{< admonition info >}}

1. After entering the correct password each time, the password hash value will be cached locally by the user, and the pages will be unlocked automatically when accessed again within one day
2. A "Encrypt again" button is provided at the end of the article. Click it to immediately forget the password and re encrypt the content
3. Encrypted pages have been hidden from search
4. The markdown output of encrypted pages has been disabled. To prevent password disclosure, **do not make encrypted pages public in any form**

{{< /admonition >}}

### Advanced use

FixIt Dcryptor has two lifecycle hooks, see [Class FixItDecryptor API](#fixit-decryptor-api)

For example, after unlocking the article, output the text:

```go-html-template
{{</* script */>}}
document.addEventListener('DOMContentLoaded', () => {
  fixit.theme.decryptor.addEventListener('decrypted', function() {
    console.log('after password decryption')
  })
  if (window.localStorage.getItem(`fixit-decryptor/#${location.pathname}`)) {
    console.log('after automatic decryption')
  }
});
{{</* /script */>}}
```

You can see the output in the console of the developer tool.

{{< script >}}
document.addEventListener('DOMContentLoaded', () => {
  fixit.decryptor.addEventListener('decrypted', function() {
    console.log('after password decryption')
  })
  if (window.localStorage.getItem(`fixit-decryptor/#${location.pathname}`)) {
    console.log('after automatic decryption')
  }
});
{{< /script >}}

## Partial Encryption {#partial-encryption}

{{< version 0.2.15 >}}

You can use `fixit-encryptor` shortcode to encrypt partial content.

The `fixit-encryptor` shortcode has the following named parameters:

* **password** *[required]* (**first** positional parameter)

    Password of the partial encrypted content.

* **message** *[optional]* (**second** positional parameter)

    Placeholder of the decryptor input.

Example `fixit-encryptor` input:

```go-html-template
{{%/* fixit-encryptor "1212" "Password is 1212" */%}}
The `fixit-encryptor` shortcode was supported in version {{</* version 0.2.15 */>}}.
{{%/* /fixit-encryptor */%}}
Or
{{%/* fixit-encryptor password="1212" message="Password is 1212" */%}}
The `fixit-encryptor` shortcode was supported in version {{</* version 0.2.15 */>}}.
{{%/* /fixit-encryptor */%}}
```

The rendered output looks like this:

{{% fixit-encryptor "1212" "Password is 1212" %}}
The `fixit-encryptor` shortcode was supported in version {{< version 0.2.15 >}}.
{{% /fixit-encryptor %}}

## Summary

Compared with encrypting content through script batch processing such as golang/python/javascript, FixIt theme built-in encryption has the following advantages and disadvantages:

* **Advantages**: High usability, out of the box, without further batch processing
* **Disadvantages**: Low security, the encryption algorithm is limited by the `go-html-template` syntax

> "The simplest password is enough to prevent 90% of people!"
>
> There is no trivial matter about privacy. Please do not upload important and private contents, and keep them properly!

---

## Class FixItDecryptor API {#fixit-decryptor-api}

FixIt decryptor for encrypted pages

### new FixItDecryptor(options)

| Name    | Type   | Description                                          |
| ------- | ------ | ---------------------------------------------------- |
| options | Object | The options of FixItDecryptor（[Options](#options)） |

#### Options

| Name      | Type     | Attributes   | Default | Description                                               |
| --------- | -------- | ------------ | ------- | --------------------------------------------------------- |
| decrypted | Function | \<optional\> |         | [Lifecycle Hooks] handler after decrypting                |
| reset     | Function | \<optional\> |         | [Lifecycle Hooks] handler after encrypting again          |
| duration  | Number   | \<optional\> | 86400   | number of seconds to cache decryption statistics. unit: s |

### Methods

#### init()

initialize FixIt decryptor

#### initShortcodes()

initialize fixit-encryptor shortcodes

#### validateCache()

validate the cached decryption statistics in localStorage

#### addEventListener(event, listener)

add event listener for FixIt Decryptor

| Name     | Type     | Description   |
| -------- | -------- | ------------- |
| event    | String   | event name    |
| listener | Function | event handler |

#### removeEventListener(event, listener)

remove event listener for FixIt Decryptor

| Name     | Type     | Description   |
| -------- | -------- | ------------- |
| event    | String   | event name    |
| listener | Function | event handler |

### Events

#### decrypted

after decrypting

#### reset

after encrypting again
