import { FilterPortfolioBtnInterface, PortfolioInterface } from "./models";

export const filterButtons: FilterPortfolioBtnInterface[] = [
    {
        title: 'All',
        value: 'all',
    },
    {
        title: 'Angular',
        value: 'angular',
    },
    {
        title: 'React/Redux',
        value: 'react',
    },
    {
        title: 'JS/HTML/SCSS',
        value: 'js',
    },
    {
        title: 'OOP/TypeScript',
        value: 'oop',
    },
    {
        title: 'Node/Express',
        value: 'node',
    },

]

export const portfolios: PortfolioInterface[] = [
    {
        title: 'Gcore | Cloud Calculator',
        stack: 'Angular | Typescript | Strapi | Scully | StoryBook | SCSS',
        value: 'angular',
        url: './gcore',
        img: './assets/portfolio/gcore.png',
    },
    {
        title: 'Language learning application',
        stack: 'React | Redux toolkit | Typescript',
        value: 'react',
        url: './rslang',
        img: './assets/portfolio/lang-app.png',
    },
    {
        title: 'Tic Tac Toe game',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './tic-tac-toe',
        img: './assets/portfolio/tic-tac-toe.png',
    },
    {
        title: 'Poppy Cozy House for pets',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './shelter',
        img: './assets/portfolio/poppy.png',
    },
    {
        title: 'Photographer\'s portfolio',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './photo',
        img: './assets/portfolio/photographer.png',
    },
    {
        title: 'API image gallery',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './image',
        img: './assets/portfolio/image-gallery.png',
    },
    {
        title: 'Virtual keyboard',
        stack: 'JavaScript | OOP | HTML | SCSS',
        value: 'oop',
        url: './keyboard',
        img: './assets/portfolio/virtual-keyboard.png',
    },
    {
        title: 'HTML CSS bundler',
        stack: 'NODE',
        value: 'node',
        url: './bundler',
        img: './assets/portfolio/bundler.png',
    },
    {
        title: 'Travel agency',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './travel',
        img: './assets/portfolio/travel.png',
    },
    {
        title: 'Furniture collection',
        stack: 'JavaScript | HTML | SCSS',
        value: 'js',
        url: './furniture',
        img: './assets/portfolio/furniture.png',
    },
]