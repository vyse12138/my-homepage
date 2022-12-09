import {
  FaceRetouchingNatural,
  MusicNote,
  Edit,
  SportsEsports,
  BorderAll,
  Pets,
  YouTube,
  MenuBook
} from '@mui/icons-material'

import mc from '../public/images/mc.png'
import okcode from '../public/images/okcode.png'
import cocktail from '../public/images/cocktail.png'
import home from '../public/images/home.jpg'
import aye from '../public/images/aye.jpg'
import rp from '../public/images/rp.jpg'
import zen from '../public/images/zen.jpg'

import algo from '../public/images/algo.png'
import basis from '../public/images/basis.png'
import css from '../public/images/css.png'
import mo from '../public/images/mo.png'

const contents = {
  english: {
    intro: {
      title: "Hi there, I'm Yulei",
      role: 'Student / Software Engineer / Frontend Developer',
      bio: {
        title: 'Bio',
        sections: [
          "I'm a Software Engineer Intern at a startup in Shanghai.",
          'I graduated from Swinburne University of Technology with an Honours Bachelor of Software Engineering in 2022.',
          'My passion for software lies with dreaming up ideas and making them come true with elegant interface and great code quality.'
        ]
      },
      work: {
        title: 'Professional Experience',
        sections: [
          {
            date: '2022.08 - 2022.12',
            location: 'Shanghai, China',
            role: 'Software Engineer (Intern)',
            place: 'Naive Systems',
            link: 'https://naivesystems.com/',
            tech: 'TypeScript + Node.js + React + Tailwind CSS'
          },
          {
            date: '2021.07 - 2022.07',
            location: 'Melbourne, Australia',
            role: 'Full Stack Developer (Intern)',
            place: 'Movember',
            link: 'https://movember.com/',
            tech: 'TypeScript + React + Next.js + Node.js + AWS + Jest'
          },
          {
            date: '2020.12 - 2021.03',
            location: 'Melbourne, Australia',
            role: 'Frontend Developer (Intern)',
            place: 'Agriview',
            link: 'https://www.agriview.com.au/',
            tech: 'JavaScript + Vue 3 + C#'
          }
        ]
      },
      interest: {
        title: 'I',
        sections: [
          { label: 'EDM', icon: MusicNote },
          { label: "Rubik's Cube", icon: BorderAll },
          { label: 'Pen Spinning', icon: Edit },
          { label: 'Anime', icon: YouTube },
          { label: 'Cats and Dogs', icon: Pets },
          { label: 'Science Fiction', icon: MenuBook },
          { label: 'Video Game', icon: SportsEsports }
        ]
      },
      tech: {
        title: 'Tech Stack',
        subTitle: ['FE UIs', 'FE Techs', 'Other Techs'],
        sections: [
          { name: 'HTML', point: 9, type: 1 },
          { name: 'CSS', point: 9, type: 1 },
          { name: 'SASS', point: 8, type: 1 },
          { name: 'Styled Components', point: 8, type: 1 },
          { name: 'Tailwind CSS', point: 8, type: 1 },
          { name: 'Material UI', point: 7, type: 1 },

          { name: 'JavaScript', point: 9, type: 2 },
          { name: 'TypeScript', point: 9, type: 2 },
          { name: 'React.js', point: 9, type: 2 },
          { name: 'Vue.js', point: 8, type: 2 },
          { name: 'Next.js', point: 8, type: 2 },
          { name: 'Three.js', point: 7, type: 2 },
          { name: 'Vite', point: 6, type: 2 },
          { name: 'WebPack', point: 6, type: 2 },
          { name: 'WebGL', point: 5, type: 2 },

          { name: 'Git', point: 9, type: 3 },
          { name: 'Node.js', point: 9, type: 3 },
          { name: 'Bash', point: 7, type: 3 },
          { name: 'AWS', point: 7, type: 3 },
          { name: 'Jest', point: 6, type: 3 },
          { name: 'Linux', point: 6, type: 3 },
          { name: 'GraphQL', point: 5, type: 3 }
        ]
      },
      contact: {
        title: "I'm"
      }
    },
    nav: {
      name: 'Yulei',
      project: 'Projects',
      post: 'Posts'
    },
    project: {
      title: 'Projects',
      sections: [
        {
          id: 'mc',
          img: mc,
          title: 'Minecraft Clone',
          description:
            'Try out the Minecraft clone in your browser! It supports a lot of features from Minecraft, read more in my GitHub repository.',
          preview: 'https://mc.yulei.me',
          source: 'https://github.com/Vyse12138/minecraft-threejs'
        },
        {
          id: 'zen',
          img: zen,
          title: 'Zen.js',
          description:
            'Zen is an open source 3D charting library for React, it supports a very smooth control system',
          preview: 'https://zen.yulei.me',
          source: 'https://github.com/vyse12138/zen'
        },
        {
          id: 'okcode',
          img: okcode,
          title: 'OKCode',
          description:
            "My final year software development project, OKCode is a code analysis and visualize tool that also provides improvement suggestion. It targets to improve first-year Swinburne students' code quality.",
          preview: '',
          source: ''
        },
        {
          id: 'cocktail',
          img: cocktail,
          title: 'Cocktail Recipes',
          description:
            'Search for your favorite cocktail recipes and make a drink yourself.',
          preview: 'https://drink.yulei.me',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          id: 'home',
          img: home,
          title: 'My Homepage',
          description:
            "This is my homepage, you can find my bio and contact info here, I'll also update my projects and posts here regularly.",
          preview: 'https://yulei.me',
          source: 'https://github.com/Vyse12138/yulei-homepage'
        },
        {
          id: 'aye',
          img: aye,
          title: 'All Your Electronics',
          description:
            'A full-stack e-commercial website for electronic, include both user-end and admin-end, featured with login system and chat system.',
          preview: '',
          source: 'https://github.com/Vyse12138/all-your-electronics'
        },
        {
          id: 'rp',
          img: rp,
          title: 'React Projects Collection',
          description:
            'Collection of small projects implemented in React. Including shopping buddy, tic-tac-toe, markdown editor etc.',
          preview: 'https://react-projects.yulei.me/',
          source: 'https://github.com/Vyse12138/react-projects'
        }
      ]
    },
    post: {
      title: 'Posts',
      more: false,
      sections: [
        {
          id: 'algo',
          img: algo,
          title: 'Algorithms',
          description:
            'Reading notes on Algorithms, 4th edition. Implementing algorithms in TypeScript including sort, search, graph etc.',
          preview: 'https://github.com/Vyse12138/algorithms-4th-edition'
        },
        {
          id: 'basis',
          img: basis,
          title: 'JavaScript Basis',
          description:
            'Reading notes on JavaScript: The Definitive Guide, 7th Edition. Including pretty much everything we need to know about JavaScript.',
          preview: 'https://js.yulei.me/'
        },
        {
          id: 'css',
          img: css,
          title: 'CSS Selectors',
          description:
            "What's CSS selectors? What's pseudo elements and pseudo classes? Here's all you need to know about the CSS selectors.",
          preview: 'https://juejin.cn/post/6956856972004032520'
        },
        {
          id: 'mo',
          img: mo,
          title: 'Map vs Object',
          description:
            "Should we use Map or Object when developing JavaScript project? What's the difference and why?",
          preview: 'https://juejin.cn/post/6941232930945499173'
        }
      ]
    }
  },
  chinese: {
    intro: {
      title: '嗨, 这里是小诸',
      role: '学生 / 软件工程师 / 前端工程师',
      bio: {
        title: '简介',
        sections: [
          '我现在就职于一家位于上海的创业公司, 担任软件开发实习生一职, 主要负责前端开发.',
          '我在 2022 年毕业于斯威本科技大学, 取得了软件工程专业的荣誉学士学位.',
          '我对软件开发的热情在于用的代码去解决遇到的各种问题, 或者去实现自己的各种天马行空的想法. 并且希望在开发和维护代码的过程中, 我也能够学习到新的技术知识.'
        ]
      },
      work: {
        title: '工作经历',
        sections: [
          {
            date: '2022.08 - 2022.12',
            location: '中国 - 上海',
            role: '软件开发实习生',
            place: '那一科技',
            link: 'https://naivesystems.com/',
            tech: 'TypeScript + Node.js + React + Tailwind CSS'
          },
          {
            date: '2021.07 - 2022.07',
            location: '澳大利亚 - 墨尔本',
            role: '全栈开发实习生',
            place: 'Movember',
            link: 'https://movember.com/',
            tech: 'TypeScript + React + Next.js + Node.js + AWS + Jest'
          },
          {
            date: '2020.12 - 2021.03',
            location: '澳大利亚 - 墨尔本',
            role: '前端开发实习生',
            place: 'Agriview',
            link: 'https://www.agriview.com.au/',
            tech: 'JavaScript + Vue 3 + C#'
          }
        ]
      },
      tech: {
        title: '技术栈',
        subTitle: ['UI', '前端', '其他'],
        sections: [
          { name: 'HTML', point: 9, type: 1 },
          { name: 'CSS', point: 9, type: 1 },
          { name: 'SASS', point: 8, type: 1 },
          { name: 'Styled Components', point: 8, type: 1 },
          { name: 'Tailwind CSS', point: 8, type: 1 },
          { name: 'Material UI', point: 7, type: 1 },

          { name: 'JavaScript', point: 9, type: 2 },
          { name: 'TypeScript', point: 9, type: 2 },
          { name: 'React.js', point: 9, type: 2 },
          { name: 'Vue.js', point: 8, type: 2 },
          { name: 'Next.js', point: 8, type: 2 },
          { name: 'Three.js', point: 7, type: 2 },
          { name: 'Vite', point: 6, type: 2 },
          { name: 'WebPack', point: 6, type: 2 },
          { name: 'WebGL', point: 5, type: 2 },

          { name: 'Git', point: 9, type: 3 },
          { name: 'Node.js', point: 9, type: 3 },
          { name: 'Bash', point: 7, type: 3 },
          { name: 'AWS', point: 7, type: 3 },
          { name: 'Jest', point: 6, type: 3 },
          { name: 'Linux', point: 6, type: 3 },
          { name: 'GraphQL', point: 5, type: 3 }
        ]
      },
      interest: {
        title: '我',
        sections: [
          { label: '电子音乐', icon: MusicNote },
          { label: '魔方', icon: BorderAll },
          { label: '转笔', icon: Edit },
          { label: '动漫', icon: YouTube },
          { label: '小动物', icon: Pets },
          { label: '科幻小说', icon: MenuBook },
          { label: '游戏', icon: SportsEsports }
        ]
      },
      contact: {
        title: '我是'
      }
    },
    nav: {
      name: '小诸',
      project: '项目',
      post: '文章'
    },
    project: {
      title: '项目',
      sections: [
        {
          id: 'mc',
          img: mc,
          title: '我的世界网页版',
          description:
            '来试一下网页版的 MC 吧, 支持许多 MC 的特性, 包括但不限于无限随机地形, 丝滑的碰撞检测, 保存读取机制...',
          preview: 'https://mcz.yulei.me',
          source: 'https://github.com/Vyse12138/minecraft-threejs'
        },
        {
          id: 'zen',
          img: zen,
          title: 'Zen.js',
          description:
            'Zen 是一款 3D 图表库, 旨在通过为传统 2D 图表多增加一个维度的方式来更为高效的展示更多数据, 并且更便于进行数据间的比较',
          preview: 'https://zen.yulei.me',
          source: 'https://github.com/vyse12138/zen'
        },
        {
          id: 'okcode',
          img: okcode,
          title: 'OKCode',
          description:
            '我的毕业设计 OKCode 是一个代码复杂度分析软件. 分析输入代码并给予相应的改进建议, 目标是为我母校的大一的学生提高代码质量. ',
          preview: '',
          source: ''
        },
        {
          id: 'cocktail',
          img: cocktail,
          title: '调酒菜单',
          description: '找到你最喜欢的鸡尾酒, 然后看看它是怎么调出来的吧. ',
          preview: 'https://drink.yulei.me',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          id: 'home',
          img: home,
          title: '个人主页',
          description:
            '这里是我的个人主页, 有我的简介和联系方式, 我也会经常在这儿更新自己的文章以及项目. ',
          preview: 'https://yulei.me',
          source: 'https://github.com/Vyse12138/yulei-homepage'
        },
        {
          id: 'aye',
          img: aye,
          title: 'All Your Electronics',
          description:
            '一个全栈电商网站, 包含了用户界面, 后台管理界面, 登录系统, 以及聊天功能. ',
          preview: '',
          source: 'https://github.com/Vyse12138/all-your-electronics'
        },
        {
          id: 'rp',
          img: rp,
          title: 'React 小项目合集',
          description:
            '一些 React 小项目合集, 包含了记事本, 井字棋, markdown 编辑器等. ',
          preview: 'https://react-projects.yulei.me/',
          source: 'https://github.com/Vyse12138/react-projects'
        }
      ]
    },
    post: {
      title: '文章',
      more: true,
      sections: [
        {
          id: 'algo',
          img: algo,
          title: '算法笔记',
          description:
            '算法第四版阅读笔记. 用 TypeScript 编写各种算法比如：排序, 查找, 有向图, 无向图等. ',
          preview: 'https://github.com/Vyse12138/algorithms-4th-edition'
        },
        {
          id: 'basis',
          img: basis,
          title: 'JavaScript 基础',
          description:
            'JavaScript 权威指南第七版阅读笔记. 涵盖几乎所有 JavaScript 基础知识. ',
          preview: 'https://js.yulei.me/'
        },

        {
          id: 'css',
          img: css,
          title: 'CSS 选择器',
          description:
            '什么是 CSS 选择器？权重该如何计算？什么又是伪类和伪元素？让我们一起来看看吧. ',
          preview: 'https://juejin.cn/post/6956856972004032520'
        },
        {
          id: 'mo',
          img: mo,
          title: 'Map 还是 Object',
          description:
            '在日常的 JavaScript 项目中, 我们究竟应该使用 Object 还是 Map？他们有什么区别？什么情况下该选什么？',
          preview: 'https://juejin.cn/post/6941232930945499173'
        }
      ]
    }
  }
}

export default contents
