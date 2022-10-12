import { jsPopulars } from '../../components/main-page/recommend-lecture/jsPopulars';
import { gitPopulars } from '../../components/main-page/recommend-lecture/gitPopulars';
import { similarRoots } from '../../components/main-page/recommend-lecture/similarRoots';

export const allLectures = jsPopulars.concat(gitPopulars, similarRoots);
