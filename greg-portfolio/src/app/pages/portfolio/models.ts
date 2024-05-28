export enum FilterPortfolioBtnEnum {
    ALL= 'all',
    Angular = 'angular',
    React = 'react',
    JS = 'js',
    OOP = 'oop',
    NODE = 'node',
}

export interface FilterPortfolioBtnInterface {
    title: string;
    value: string;
}

export interface PortfolioInterface {
    title: string;
    stack: string
    value: string;
    img: string;
    url: string;
}