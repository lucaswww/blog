(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{161:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=s(4),e=Object(o.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[t._v("#")]),t._v(" path")]),t._v(" "),s("blockquote",[s("p",[t._v("今天讲一讲 path 模块.先说这个模块的使用场景,用途.才能在之后的使用中知道什么时候需要利用到它.对于较为重要的 api 给了链接...")])]),t._v(" "),s("p",[s("strong",[s("em",[t._v("据我现在的认知,最好统一使用 path.posix 进行对路径的处理")])])]),t._v(" "),s("p",[s("strong",[t._v("重要")]),t._v(": 在 path 的每一個方法中,都有对路径先做统一转换(方便方法内部处理),最后按照当前平台,统一返回适合平台下面的路径展示.")]),t._v(" "),s("p",[s("strong",[t._v("console.log("),s("code",[t._v("h:\\\\")]),t._v(") -> // h:\\")])]),t._v(" "),s("p",[t._v("在 console.log 下的输出会转义'\\',变成 single backslash.(下面的所有输出都是 console.log()下的输出结果)")]),t._v(" "),s("ul",[s("li",[t._v("获得一个文件相对于另外一个文件的相对地址.("),s("code",[t._v("path.relative(from, to)")]),t._v(")")])]),t._v(" "),s("p",[t._v("如果自己用字符串来描述,可能要看下目录,然后../../之类的拼接,很容易没看清楚,就出现错误少掉一个路径片段分割符.少掉一个 dot 之类的 typo 的错误.")]),t._v(" "),s("ul",[s("li",[t._v("拼接地址.("),s("code",[t._v("path.join(...[paths])")]),t._v(")")])]),t._v(" "),s("p",[t._v("当需要地址拼接的时候,比如"),s("code",[t._v("project")]),t._v("文件夹下,现在需要定位到"),s("code",[t._v("xxx/project/demo")]),t._v(", 那使用字符串拼接可能需要"),s("code",[t._v("xxx/project")]),t._v(" + "),s("code",[t._v("/demo")]),t._v(",但是使用"),s("code",[t._v("path.join('xxx/project', 'demo')")]),t._v("就可以实现了."),s("code",[t._v("join")]),t._v("真的只是纯粹的拼接,中间夹杂着对"),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("\\")]),t._v(", "),s("code",[t._v(".")]),t._v("的灵活处理,只要传入的参数是 string 类型,就一定能得到一个合适的处理结果.")]),t._v(" "),s("ul",[s("li",[t._v("把一个路径或路径片段的序列解析为一个绝对路径("),s("code",[t._v("path.resolve()")]),t._v(")")])]),t._v(" "),s("p",[t._v("把一个文件的地址解析成绝对路径,在使用 shelljs 进行目录切换,或者一些 cp 操作的时候都是很有用处的.")]),t._v(" "),s("h2",{attrs:{id:"path-posix-path-win32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-posix-path-win32","aria-hidden":"true"}},[t._v("#")]),t._v(" path.posix && path.win32")]),t._v(" "),s("p",[t._v("先讲一下区别.path 模块实现了对 posix(可移植性操作系统 j 接口),以及 win32(windows 下用这个接口处理)对路径片段的显示问题.根源是因为 windows 下的路径片段分割符使用的"),s("code",[t._v("\\")]),t._v(",而 posix 下使用的是"),s("code",[t._v("/")]),t._v(",这样在展示路径的时候会有差异性.所以在编程的时候统一使用一套规范就好了.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 假设我在windows下h盘下的操作.")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'project'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'tmp/file/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// H:\\Project\\hexo/project/tmp/file")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'project'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'tmp/file/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// H:\\Project\\hexo\\project\\tmp\\file")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 单纯的看下slash(/)和backslash(\\)用于posix和win32下的区别.这里在posix下返回的路径有\\\\也有/,这样是不统一规格的.因为我这里写的是'/tmp/file',如果使用path.win32.join('/tmp/file'),再用resolve去操作它.")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'project'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'tmp/file/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 'H:\\\\Project\\\\hexo\\\\project\\\\tmp\\\\file'")]),t._v("\n")])])]),s("h2",{attrs:{id:"path-sep-path-delimiter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-sep-path-delimiter","aria-hidden":"true"}},[t._v("#")]),t._v(" path.sep && path.delimiter")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("path.posix.sep(路径片段分割符) -> "),s("code",[t._v("/")])])]),t._v(" "),s("li",[s("p",[t._v("path.win32.sep(路径片段分割符) -> "),s("code",[t._v("\\\\")])])]),t._v(" "),s("li",[s("p",[t._v("path.posix.delimiter(路径分隔符) -> "),s("code",[t._v(":")])])]),t._v(" "),s("li",[s("p",[t._v("path.win32.delimiter(路径分隔符) -> "),s("code",[t._v(";")])])])]),t._v(" "),s("p",[t._v("这样看一眼,该明白的都明白了吧.")]),t._v(" "),s("h2",{attrs:{id:"path-resolve-path-relative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-path-relative","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://nodejs.cn/api/path.html#path_path_resolve_paths",target:"_blank",rel:"noopener noreferrer"}},[t._v("path.resolve"),s("OutboundLink")],1),t._v(" && "),s("a",{attrs:{href:"http://nodejs.cn/api/path.html#path_path_relative_from_to",target:"_blank",rel:"noopener noreferrer"}},[t._v("path.relative"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("说的很清楚,一定会返回一个"),s("code",[t._v("绝对路径")]),t._v(",如果最终结果不是绝对路径,name 会使用当前目录的绝对地址和最终结果进行拼接.")]),t._v(" "),s("p",[t._v("见上面对 path.posix 和 path.win32 的介绍.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 这里 /tmp/file 是一个绝对路径,所以直接返回了.")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'project'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/tmp/file/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// /tmp/file")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// windows下以当前盘符作为绝对路径的起始.")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'project'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/tmp/file'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// H:\\tmp\\file")]),t._v("\n")])])]),s("p",[t._v("path.relative(from, to)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" relative "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("relative")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'h:\\\\test\\\\123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'h:\\\\haha\\\\456'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("relative"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// ../h:\\haha\\456,结果多么的难以认读")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// fromPath + relativepath = toPath")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'h:\\\\test\\\\123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// h:\\haha\\456")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'h:/test/123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// h:/test/h:\\haha\\456")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 即使是path.posix,但是返回结果不一定遵循path.posix下的'h:/haha/456',path.posix只是按照这种风格去处理结果而已.")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// ***所以代码中不要出现命名想要posix处理,但是传递路径又有`\\`的情况.***")]),t._v("\n")])])]),s("h2",{attrs:{id:"path-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-join","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://nodejs.cn/api/path.html#path_path_join_paths",target:"_blank",rel:"noopener noreferrer"}},[t._v("path.join"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。\n长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。")]),t._v(" "),s("p",[t._v("讲的也很明白的了.(再结合上面的使用场景)")]),t._v(" "),s("h2",{attrs:{id:"path-parse-path-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parse-path-format","aria-hidden":"true"}},[t._v("#")]),t._v(" path.parse & path.format")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("win32"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'c://haha//123.txt'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// { root: 'c:/',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// dir: 'c://haha/',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// base: '123.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// ext: '.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// name: '123' }")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 在unix上的root就是空了,把C盘的盘符路径认为是文件夹.")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'c://haha//123.txt'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// { root: '',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// dir: 'c://haha/',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// base: '123.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// ext: '.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// name: '123' }")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 实现方法上感觉就是简单的切割,寻找到最后一个`\\`或者`/`, 之后的值为base,对base进行split('.'),得到ext和name,最后一个`\\`或者`/`之前的作为dir,在根据是win32还是posix,在对root进行一个经过处理后的赋值.整个parse估摸是这么实现的.")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// path.format就是path.parse的逆向过程了.")]),t._v("\n")])])]),s("h2",{attrs:{id:"path-basename-path-extname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-basename-path-extname","aria-hidden":"true"}},[t._v("#")]),t._v(" path.basename && path.extname")]),t._v(" "),s("p",[t._v("这看名字都知道是经过 parse 处理之后的产物了.没什么好讲的,对应 parse 处理结果的对应字段就是返回值了.")]),t._v(" "),s("h2",{attrs:{id:"path-normalize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-normalize","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://nodejs.cn/api/path.html#path_path_normalize_path",target:"_blank",rel:"noopener noreferrer"}},[t._v("path.normalize"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("也就是这么回事,也没啥好讲的.")]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" conclusion")]),t._v(" "),s("p",[s("strong",[s("em",[t._v("代码中不要出现明明想要 posix 处理,但是傳入參數的路径中又有"),s("code",[t._v("\\")]),t._v("的情况.")])])]),t._v(" "),s("p",[s("strong",[t._v("风格统一")])]),t._v(" "),s("p",[s("strong",[t._v("风格统一")])]),t._v(" "),s("p",[s("strong",[t._v("风格统一")])]),t._v(" "),s("p",[t._v("如果你的代码里面没有手动声明一个路径地址,比如"),s("code",[t._v("h:\\\\project")]),t._v("或者"),s("code",[t._v("/tmp/file")]),t._v("这种,仅仅只是通过"),s("code",[t._v("path")]),t._v("模块去操作"),s("code",[t._v("__dirname")]),t._v(", "),s("code",[t._v("__filename")]),t._v("这种,是不会出现返回的路径既有"),s("code",[t._v("/")]),t._v(",又有"),s("code",[t._v("\\")]),t._v("的情况的.")]),t._v(" "),s("p",[t._v("如果声明了一个路径地址,windows 用户可能习惯使用"),s("code",[t._v("\\")]),t._v("去表示一个路径(讲道理也是这样),但我个人可能还是习惯 posix 的那种风格.这样使用"),s("code",[t._v("path")]),t._v("模块的方法可能会出现不一致的情形,反正最终都可以用"),s("code",[t._v("path.normalize")]),t._v("处理一下,就可以得到对应平台下面的路径展示地址了.")]),t._v(" "),s("p",[t._v("写完发现,好累啊,写这些东西.只有在不懂的时候操作这些 api 才有感觉,理解的时候,要以一种更加术语的方式描述出来真的是挺费劲的..我感觉还是做 api 的列表,让自己便于 review.我看一遍分类的 api,比较联想,我大概就清楚是做什么的了.")]),t._v(" "),s("p",[t._v("写 api 的目的是为了以后可能会使用到,如果一个 api 你没有见过,不知道他有何种用处,你可能编码的时候会花上更多的时间去想象这个功能会如何实现.并且 bug 率还比较高.只有你掌握了一个 api,你才知道该在什么时候去使用他.联想记忆,对比记忆...")])])},[],!1,null,null,null);e.options.__file="Path in Node.js.md";a.default=e.exports}}]);