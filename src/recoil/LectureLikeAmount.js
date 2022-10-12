import { atom } from 'recoil';
import { allLectures } from '../assets/dummy-datas/allLectures';

export const lectureLikeAmountState = atom({
  key: 'lectureLikeAmountState',
  default: allLectures.map(lecture => lecture.likes),
});
