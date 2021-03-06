const markdownPlugins = require('./lib/markdownPlugins');

const config = {
    projectName: 'mdoc-example', // 工程名称，访问网站的时候会使用到：http://localhost:4000/mdoc-example
    domain: 'fang.smtwl.com.cn', // gh-pages 对应的网址，可以不设置，如果需要重定向域名
    title: '四面通物流大超市', // html 的 title
    favicon: 'img/favicon.ico', // html 的 favicon
    logo: 'img/logo.png', // logo
    colors: { // 颜色配置，在这里配置的颜色，在所有的css文件中使用 $primaryColor 来表示一个颜色即可 [可空]
        primaryColor: 'rgb(34, 34, 34)',
        secondaryColor: '#FF8C00',
        activeColor: '#FF4040',
        tintColor: '#005068',
    },
    highlight: { // 代码的风格 [可空]
        theme: 'solarized-dark',
    },
    markdownPlugins,  // 基于 markdown-it 的用户自定义 [可空]
    documentPath: 'root', //默认为doc [可空]
    styles: [], // 整个工程的 style，全局有效 [可空]
    scripts: [], // 整个工程的 script，全局有效 [可空]
    footer: 'lib/Footer.js', //设置footer [可空]
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: { // 首页 （每个页面都可以配自己的styles和scripts）
        name: 'mdoc的用法',  // 标题
        path: 'index.md',  // 文件路径
    },
    menus: [ // 菜单，第一级会显示在顶部菜单栏，menus 包含多个 menu
        { // 第一个 menu，这个menu没有groups和pages，只显示一个页面
            name: '帮助', // 标题及菜单名字
            mainPage: 'help.js', // 该菜单对应的首页
        },
        { // 第二个 menu
            name: '示例',  // 标题及菜单名字
            mainPage: 'md/container.md', // 该菜单对应的首页 (必须在pages中能找到)
            groups: [ // groups 包含多个 group, 一个 group包含一个 name 和 多个页面，都会在左侧菜单中呈现
                {
                    name: '常用', // group的名称
                    pages: [ // 该group包含的页面
                        {
                            name: 'toc',
                            path: 'common/toc.md',
                            tocList: ['h2', 'h3'], // 可选的值有: ['h2', 'h3'], true（true默认为['h2', 'h3']）
                        },
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
                        {
                            name: '对联',
                            path: 'common/mixed.md',
                        },
                        {
                            name: '新闻',
                            path: 'common/news.md',
                        },
                        {
                            name: '简历', // 页面的名称及标题
                            path: 'common/resume.md', // 对应的路径
                            container: { // 该页面拥有一个自定义的container
                                dom: 'div', // default: div [可空]
                                props: { className: 'resumeContainer' }, // 该container的属性
                            }
                        },
                        {
                            name: '超链接',
                            path: 'common/href.md',
                        },
                        {
                            name: '音视频',
                            path: 'common/media.md',
                        },
                        {
                            name: 'README',
                            path: 'common/README.md',
                        },
                        {
                            name: '图片',
                            path: 'common/img.md',
                        },
                        {
                            name: 'button',
                            path: 'common/button.md',
                        },
                    ]
                },
                {
                    name: '插件',
                    pages: [
                        {
                            name: 'rotateWord',
                            path: 'md/rotateWord.md',
                            supports: ['rotateWord'], // 旋转字体的支持
                        },
                        {
                            name: 'clockRotate',
                            path: 'md/clockRotate.md',
                            supports: ['clockRotate'], // 旋转字体的支持
                        },
                        {
                            name: 'mindmap',
                            path: 'md/mindmap.md',
                            supports: ['mindmap'], // 思维导图的支持
                        },
                        {
                            name: 'tagcloud',
                            path: 'md/tagcloud.md',
                            supports: ['tagcloud'], // 云标签的支持
                        },
                        {
                            name: 'untreejs',
                            path: 'md/untree.js',
                            supports: ['untree'], // 垂直树形控件的js格式的支持
                        },
                        {
                            name: 'untree',
                            path: 'md/untree.md',
                            supports: ['untree'], // 垂直树形控件的支持
                        },
                        {
                            name: 'list',
                            path: 'md/list.md',
                        },
                        {
                            name: '工具',
                            path: 'md/tools.md',
                        },
                        {
                            name: '表单',
                            path: 'md/form.md',
                            supports: ['antd'],
                        },
                        {
                            name: '表格',
                            path: 'md/table.md',
                            supports: ['antd'],
                        },
                        {
                            name: 'tabs',
                            path: 'md/tabs.md',
                            supports: ['tabs'],
                        },
                        {
                            name: 'swiper',
                            path: 'md/swiper.md',
                            supports: ['swiper'],
                        },
                        {
                            name: 'react',
                            path: 'md/react.md',
                            supports: ['react'],
                        },
                        {
                            name: '图片列表',
                            path: 'md/images.md',
                            supports: ['viewer'],
                        },
                        {
                            name: 'attrs',
                            path: 'md/attrs.md',
                        },
                        {
                            name: 'variable',
                            path: 'md/variable.md',
                        },
                        {
                            name: 'sequence',
                            path: 'md/sequence.md',
                            supports: ['sequence'],  // 该页面支持 sequence，可用的有[sequence, chart, flow, math, tree]
                        },
                        {
                            name: 'chart',
                            path: 'md/chart.md',
                            supports: ['chart'],
                        },
                        {
                            name: 'flow',
                            path: 'md/flow.md',
                            supports: ['flow'],
                        },
                        {
                            name: 'emoji',
                            path: 'md/emoji.md',
                        },
                        {
                            name: 'tabbreak',
                            path: 'md/tabbreak.md',
                        },
                        {
                            name: 'footnote',
                            path: 'md/footnote.md',
                        },
                        {
                            name: 'container',
                            path: 'md/container.md',
                        },
                        {
                            name: '数学公式',
                            path: 'md/katex.md',
                            supports: ['math'],
                        },
                    ]
                },
            ],
        },
        {
            name: '四面通',
            mainPage: 'smt/tuxiang.png',
            groups: [
                {
                    name: '快速了解',
                    pages: [
                        {
                            name: '四面通物流组织结构',
                            path: 'smt/四面通物流组织结构.png',
                        },
                        {
                            name: '概括',
                            path: 'smt/index.js',
                            styles: ['css/custom.css'],
                        },
                    ]
                },
                {
                    name: '公司风采',
                    pages: [
                        {
                            name: '公司面貌',
                            path: 'smt/tuxiang.png',
                        },
                        {
                            name: 'api文档',
                            path: 'smt/api.md',
                        },
                    ]
                },
                {
                    name: '招聘信息',
                    pages: [
                        {
                            name: '最新招聘',
                            path: 'smt/zhaopin.md',
                        },
                        {
                            name: '用户须知',
                            path: 'smt/user.html',
                        },
                        {
                            name: '说明',
                            path: 'smt/test.pdf',
                        },
                        {
                            name: '动态React',
                            path: 'button.js',
                            supports: ['react'],
                        },
                    ]
                },
            ],
        },
        { // 第二个 menu
            name: '文件夹展示1', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
            folder: 'dir/menu', // 指定的路径
            static: false, // 是否为static里面的文件
            expand: false, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 menuItem，此时 name 无效，否则，以 name 为 menuItem，子文件夹为 group
            // origin: 'https://pan.baidu.com/s/19n_i8LN74SSXRwB1AtRiHA#list/path=/', // 原始文件的链接
        },
        {
            name: '文件夹展示2',
            groups: [
                {
                    name: '文件夹展示实例1', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
                    folder: 'dir/group', // 指定的路径
                    static: false, // 是否为static里面的文件
                    expand: false, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 group，此时 name 无效，否则，以 name 为 group，子文件夹为 group 的内容
                    // origin: 'https://pan.baidu.com/s/19n_i8LN74SSXRwB1AtRiHA#list/path=/', // 原始文件的链接
                },
                {
                    name: '文件夹展示实例2',
                    pages: [
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
                        {
                            name: '文件夹展示实例3', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
                            folder: 'dir/page', // 指定的路径
                            static: false, // 是否为static里面的文件
                            expand: true, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 page，此时 name 无效，否则，以 name 为 page，子文件夹为 page 的内容
                            // origin: 'https://pan.baidu.com/s/19n_i8LN74SSXRwB1AtRiHA#list/path=/', // 原始文件的链接
                        },
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
                    ]
                },
            ]
        },
        {
            // 这个 menu item 没有 mainPage 和 groups， 但是拥有 pages，会以`下拉菜单`的方式，如果需要有树形目录的页面建议使用这种方式
            name: 'API',
            pages: [
                {
                    name: 'pdshop',
                    path: 'api/pdshop.md',
                    supports: ['tree'], //是否支持树形结构
                },
                {
                    name: 'pdclient',
                    path: 'api/pdclient.md',
                    supports: ['tree'],
                },
            ],
        },
        {
            name: 'baidu',
            mainPage: 'https://www.baidu.com/',
            blank: true,
        },
        {
            name: 'githubs',
            pages: [
                {
                    name: 'mdoc-example',
                    path: 'https://github.com/remobile/mdoc-example',
                    blank: true,
                },
                {
                    name: 'mdoc',
                    path: 'https://github.com/remobile/mdoc',
                    blank: true,
                },
            ],
        },
    ],
};

module.exports = config;
