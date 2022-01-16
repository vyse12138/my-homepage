import {
  MusicNote,
  Edit,
  SportsEsports,
  BorderAll,
  Pets,
  YouTube,
  MenuBook
} from '@mui/icons-material'

import mc from '../images/mc.png'
import cocktail from '../images/cocktail.png'
import okcode from '../images/okcode.png'
import css from '../images/css.png'
import mo from '../images/mo.png'
import basis from '../images/basis.png'
import algo from '../images/algo.png'

export default {
  english: {
    intro: {
      title: "Hi there, I'm Yulei",
      role: 'Student / Front-End Developer / Full-Stack Developer',
      bio: {
        title: 'Bio',
        sections: [
          "I started my uni journey at Swinburne University of Technology (SUT) in 2018, with a bachelor of Software Engineering (Honours) (professional) degree, and I'm goning to graduate from Uni at the end of 2022.",
          "In the third year of my uni, I found out that front-end development is what I'm passionate about and did some further study in the front-end area, then I got an internship opportunity as a front-end developer at Agriview. And in the next year, I accepted a 12-month placement offer as a full-stack developer at Movember."
        ]
      },
      work: {
        title: 'Work',
        sections: [
          {
            date: '2021.08 - Present',
            location: 'Melbourne',
            role: 'Full-Stack Developer @Movember',
            description:
              "Worked in an agile team to develop web product. Used react + TypeScript + Node + AWS Serverless as the main tech stack, wrote robust (95% + Jest coverage) and elegant (Airbnb based ESlint) code as well as reviewed teams' PRs."
          },
          {
            date: '2020.12 - 2021.03',
            location: 'Melbourne',
            role: 'Front-End Developer @Agriview',
            description:
              'Refactored an old project with Vue3 and featured more responsive supports. Reduced some redundant code, and added clear comments to make it more extensible.'
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
          img: mc,
          title: 'Minecraft Clone',
          description:
            'Try out the web-based Minecraft clone! It support placing/destroying blocks and dynamic/random terrain generation. Tech stack: three.js',
          preview: 'https://three-minecraft.netlify.app',
          source: 'https://github.com/Vyse12138/three-minecraft'
        },
        {
          img: cocktail,
          title: 'Cocktail Recipes',
          description:
            'Search for your favorite cocktail recipes and make a drink yourself. Tech stack: Vue3 + TypeScript',
          preview: 'https://main--vue-cocktail.netlify.app/',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          img: okcode,
          title: 'OKCode',
          description:
            "My final year software development project, OKCode is a code analysis and visualize tool that also provides improvement suggestion. It targets to improve first-year SUT(my uni) students' code quality.",
          preview: '',
          source: ''
        }
      ]
    },
    post: {
      title: 'Posts',
      sections: [
        {
          img: algo,
          title: 'Algorithms',
          description:
            'Reading notes on Algorithms, 4th edition. Implementing algorithms in TypeScript including sort, search, graph etc.',
          preview: 'https://github.com/Vyse12138/algorithms-4th-edition'
        },
        {
          img: css,
          title: 'CSS Selectors',
          description:
            "What's CSS selectors? What's pseudo elements and pseudo classes? Here's all you need to know about the CSS selectors.",
          preview: 'https://juejin.cn/post/6956856972004032520'
        },
        {
          img: mo,
          title: 'Map vs Object',
          description:
            "Should we use Map or Object when developing JavaScript project? What's the difference and why?",
          preview: 'https://juejin.cn/post/6941232930945499173'
        },
        {
          img: basis,
          title: 'JavaScript Basis',
          description:
            'Reading notes on JavaScript: The Definitive Guide, 7th Edition. Including pretty much everything we need to know about JavaScript.',
          preview:
            'https://vyse12138.github.io/javascript-the-definitive-guide/#/'
        }
      ]
    }
  },
  chinese: {
    intro: {
      title: '嗨，这里是小诸',
      role: '学生 / 前端工程师 / 全栈工程师',
      bio: {
        title: '简介',
        sections: [
          '我在2018年开始了我的大学旅程，在斯威本科技大学（SUT）攻读软件工程荣誉学士学位，计划于 2022 年底毕业。',
          '在大三时，我渐渐爱上了前端开发，并在前端领域进行了更深入的学习，与同年在 Agriview 进行了3个月的前端工程师实习；在大四时，接受了 Movember 为期12个月的全栈工程师 Placement Offer。'
        ]
      },
      work: {
        title: '工作',
        sections: [
          {
            date: '2021.08 - 至今',
            location: '墨尔本',
            role: '全栈工程师 @Movember',
            description:
              '在敏捷小组中开发网页项目，主要技术栈为 React + TypeScript + Node + AWS Serverless。编写优雅（Airbnb 风格）以及可靠（Jest 覆盖率 95%）代码，并审核他人 PRs'
          },
          {
            date: '2020.12 - 2021.03',
            location: '墨尔本',
            role: '前端工程师 @Agriview',
            description:
              '使用 Vue3 重构了旧项目，添加更为完善的响应式支持，并编写了用户反馈模块。减少冗余代码，添加清晰注释，增加代码的扩展性和维护性'
          }
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
          img: mc,
          title: '我的世界网页版',
          description:
            '来试一下网页版的简易我的世界吧，支持方块放置/破坏，动态/随机生成地形。技术栈： three.js',
          preview: 'https://three-minecraft.netlify.app',
          source: 'https://github.com/Vyse12138/three-minecraft'
        },
        {
          img: cocktail,
          title: '调酒菜单',
          description:
            '找到你最喜欢的鸡尾酒，然后看看它是怎么调出来的吧。技术栈：Vue3 + Typescript',
          preview: 'https://main--vue-cocktail.netlify.app/',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          img: okcode,
          title: 'OKCode',
          description:
            '我的毕设 OKCode 是一个代码复杂度分析软件。分析输入代码并给予相应的改进建议，目标是为 SUT（我的大学）大一的学生提高代码质量。技术栈：React + MUI + GraphQL + C#',
          preview: '',
          source: ''
        }
      ]
    },
    post: {
      title: '文章',
      sections: [
        {
          img: basis,
          title: 'JavaScript 基础',
          description:
            'JavaScript 权威指南第七版阅读笔记。涵盖几乎所有 JavaScript 基础知识。',
          preview:
            'https://vyse12138.github.io/javascript-the-definitive-guide/#/'
        },
        {
          img: algo,
          title: '算法笔记',
          description:
            '算法第四版阅读笔记。用 TypeScript 编写各种算法比如：排序，查找，有向图，无向图等。',
          preview: 'https://github.com/Vyse12138/algorithms-4th-edition'
        },
        {
          img: css,
          title: 'CSS 选择器',
          description:
            '什么是 CSS 选择器？权重该如何计算？什么又是伪类和伪元素？让我们一起来看看吧。',
          preview: 'https://juejin.cn/post/6956856972004032520'
        },
        {
          img: mo,
          title: 'Map 还是 Object',
          description:
            '在日常的 JavaScript 项目中，我们究竟应该使用 Object 还是 Map？他们有什么区别？什么情况下该选什么？',
          preview: 'https://juejin.cn/post/6941232930945499173'
        }
      ]
    }
  }
}
