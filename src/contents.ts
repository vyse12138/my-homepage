import {
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
      role: 'Student / Front End Developer / Full Stack Developer',
      bio: {
        title: 'Bio',
        sections: [
          "I'm an honors bachelor of software engineering student from Swinburne University and I'm going to graduate in the end of 2022.",
          "During one elective course (Creating Web Application) in 2020, I found out that front end development is what I'm passionate about. So I did some further study in the front end area, and got an internship opportunity as a front end developer at Agriview in the end of 2020. And in 2021, I accepted a 12-month placement offer as a full stack developer at Movember."
        ]
      },
      work: {
        title: 'Work',
        sections: [
          {
            date: '2021.08 - Present',
            location: 'Melbourne',
            role: 'Full-Stack Developer @Movember',
            type: 'Placement',
            description:
              "Worked in an agile team to develop web product. Used react + TypeScript + Node + AWS Serverless as the main tech stack, wrote robust (95% + Jest coverage) and elegant (Airbnb based ESlint) code as well as reviewed teams' PRs."
          },
          {
            date: '2020.12 - 2021.03',
            location: 'Melbourne',
            role: 'Front End Developer @Agriview',
            type: 'Internship',

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
      tech: {
        title: 'Tech Stack',
        sections: [
          { name: 'JavaScript', point: 9 },
          { name: 'React', point: 8 },
          { name: 'Vue', point: 8 },
          { name: 'TypeScript', point: 8 },
          { name: 'UI Libraries', point: 8 },
          { name: 'CSS', point: 7 },
          { name: 'Node.js', point: 6 },
          { name: 'Three.js', point: 6 },
          { name: 'Jest', point: 5 },
          { name: 'AWS Serverless', point: 5 }
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
          preview: 'https://mc.yuleiz.com',
          source: 'https://github.com/Vyse12138/minecraft-threejs'
        },
        {
          id: 'zen',
          img: zen,
          title: 'Zen.js',
          description:
            'Zen is an open source 3D charting library for React, it supports a very smooth control system',
          preview: 'https://zen.yuleiz.com',
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
          preview: 'https://drink.yuleiz.com',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          id: 'home',
          img: home,
          title: 'My Homepage',
          description:
            "This is my homepage, you can find my bio and contact info here, I'll also update my projects and posts here regularly.",
          preview: 'https://yuleiz.com',
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
          preview: 'https://react-projects.yuleiz.com/',
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
          preview: 'https://js.yuleiz.com/'
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
      title: '???, ???????????????',
      role: '?????? / ???????????? / ????????????',
      bio: {
        title: '??????',
        sections: [
          '?????? 2018 ??????????????????????????????, ???????????????????????? (Swinburne University of Technology) ????????????????????????????????????,????????? 2022 ????????????.',
          '??? 2020 ????????????????????????, ??????????????????????????????, ????????????????????????????????????????????????, ?????? 2020 ????????? Agriview ????????? 3 ???????????????????????????; ??? 2021 ??? 7 ??????, ????????????????????????????????????????????? Movember ???????????????.'
        ]
      },
      work: {
        title: '??????',
        sections: [
          {
            date: '2021.08 - ??????',
            location: '?????????',
            role: '???????????? @Movember',
            type: 'Placement',
            description:
              '????????????????????????????????????, ?????????????????? React + TypeScript + Node + AWS Serverless. ????????????(Airbnb ??????)????????????(Jest ????????? 95%)??????, ??????????????? PRs'
          },
          {
            date: '2020.12 - 2021.03',
            location: '?????????',
            role: '???????????? @Agriview',
            type: '??????',
            description:
              '?????? Vue3 ??????????????????, ????????????????????????????????????, ??????????????????????????????. ??????????????????, ??????????????????, ????????????????????????????????????'
          }
        ]
      },
      tech: {
        title: '?????????',
        sections: [
          { name: 'JavaScript', point: 9 },
          { name: 'React', point: 8 },
          { name: 'Vue', point: 8 },
          { name: 'TypeScript', point: 7 },
          { name: '?????? UI ??????', point: 8 },
          { name: 'CSS', point: 7 },
          { name: 'Node.js', point: 6 },
          { name: 'Three.js', point: 6 },
          { name: 'Jest', point: 5 },
          { name: 'AWS Serverless', point: 5 }
        ]
      },
      interest: {
        title: '???',
        sections: [
          { label: '????????????', icon: MusicNote },
          { label: '??????', icon: BorderAll },
          { label: '??????', icon: Edit },
          { label: '??????', icon: YouTube },
          { label: '?????????', icon: Pets },
          { label: '????????????', icon: MenuBook },
          { label: '??????', icon: SportsEsports }
        ]
      },
      contact: {
        title: '??????'
      }
    },
    nav: {
      name: '??????',
      project: '??????',
      post: '??????'
    },
    project: {
      title: '??????',
      sections: [
        {
          id: 'mc',
          img: mc,
          title: '?????????????????????',
          description:
            '???????????????????????? MC ???, ???????????? MC ?????????, ????????????????????????????????????, ?????????????????????, ??????????????????...',
          preview: 'https://mc-zh.yuleiz.com',
          source: 'https://github.com/Vyse12138/minecraft-threejs'
        },
        {
          id: 'zen',
          img: zen,
          title: 'Zen.js',
          description:
            'Zen ????????? 3D ?????????, ????????????????????? 2D ????????????????????????????????????????????????????????????????????????, ???????????????????????????????????????',
          preview: 'https://zen.yuleiz.com',
          source: 'https://github.com/vyse12138/zen'
        },
        {
          id: 'okcode',
          img: okcode,
          title: 'OKCode',
          description:
            '?????????????????? OKCode ????????????????????????????????????. ????????????????????????????????????????????????, ?????????????????????????????????????????????????????????. ',
          preview: '',
          source: ''
        },
        {
          id: 'cocktail',
          img: cocktail,
          title: '????????????',
          description: '??????????????????????????????, ???????????????????????????????????????. ',
          preview: 'https://drink.yuleiz.com',
          source: 'https://github.com/Vyse12138/cocktail-recipes'
        },
        {
          id: 'home',
          img: home,
          title: '????????????',
          description:
            '???????????????????????????, ??????????????????????????????, ?????????????????????????????????????????????????????????. ',
          preview: 'https://yuleiz.com',
          source: 'https://github.com/Vyse12138/yulei-homepage'
        },
        {
          id: 'aye',
          img: aye,
          title: 'All Your Electronics',
          description:
            '????????????????????????, ?????????????????????, ??????????????????, ????????????, ??????????????????. ',
          preview: '',
          source: 'https://github.com/Vyse12138/all-your-electronics'
        },
        {
          id: 'rp',
          img: rp,
          title: 'React ???????????????',
          description:
            '?????? React ???????????????, ??????????????????, ?????????, markdown ????????????. ',
          preview: 'https://react-projects.yuleiz.com/',
          source: 'https://github.com/Vyse12138/react-projects'
        }
      ]
    },
    post: {
      title: '??????',
      more: true,
      sections: [
        {
          id: 'algo',
          img: algo,
          title: '????????????',
          description:
            '???????????????????????????. ??? TypeScript ?????????????????????????????????, ??????, ?????????, ????????????. ',
          preview: 'https://github.com/Vyse12138/algorithms-4th-edition'
        },
        {
          id: 'basis',
          img: basis,
          title: 'JavaScript ??????',
          description:
            'JavaScript ?????????????????????????????????. ?????????????????? JavaScript ????????????. ',
          preview: 'https://js.yuleiz.com/'
        },

        {
          id: 'css',
          img: css,
          title: 'CSS ?????????',
          description:
            '????????? CSS ????????????????????????????????????????????????????????????????????????????????????????????????. ',
          preview: 'https://juejin.cn/post/6956856972004032520'
        },
        {
          id: 'mo',
          img: mo,
          title: 'Map ?????? Object',
          description:
            '???????????? JavaScript ?????????, ???????????????????????? Object ?????? Map?????????????????????????????????????????????????????????',
          preview: 'https://juejin.cn/post/6941232930945499173'
        }
      ]
    }
  }
}

export default contents
