export const dummyIntroduction = {
  title: '함수형 프로그래밍과 JavaScript ES6+',
  for: '초급자',
  category: '웹 개발, 프로그래밍 언어',
  description: `ES6+와 함수형 프로그래밍을 배울 수 있는 강의입니다.

이 강의에서는 ES6+의 이터러블/이터레이터/제너레이터 프로토콜을 상세히 다루고 응용합니다.
이터러블을 기반으로한 함수형 프로그래밍, map/filter/reduce, 파이프라인, 제너레이터를 통한 지연 평가, Promise 합성, 동시성/병렬성, async/await와 비동기 에러 핸들링 등을 배울 수 있습니다.
    
이 강의를 통해 습득하고 연습하여 중급 자바스크립트 개발자로 성장하세요!`,
  learningList: [
    '함수형 프로그래밍 방법론',
    '최신 Javascript 프로토콜들의 의미와 사용법',
    '동시성, 지연성, 함수 합성.. 등 고급 프로그래밍 기법들',
    '비동기, 에러 핸들링 방법론',
  ],
  summary: `함수형 프로그래밍을 익히기 위한 최고의 강의!
    중급 자바스크립트 개발자로 성장하세요!`,
  reviewImg:
    'https://cdn.inflearn.com/public/files/courses/247815/92bd9ece-c206-48b3-b6ad-0e95989de27f/247815-img1.png',
  targets: [
    {
      title: `함수형 프로그래밍을
배우고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/469c879f-8922-4cc5-a612-8120ddce82f8/noun_Woman_1608890.png',
    },
    {
      title: `ES6+의 기술들을
깊게 다뤄보고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/d6b6970f-0964-4b31-91ed-499d0fe39cb8/noun_Man_1608891.png',
    },
    {
      title: `간결하고 우아한 코드를 작성하고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/8035df50-b608-44ee-a11d-4a481227ce8c/noun_Woman_1608896.png',
    },
    {
      title: `비동기 프로그래밍을
능숙하게 하고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/807b5ea2-f2a5-4416-a2ac-92491517da78/noun_boy_1608892.png',
    },
    {
      title: `지연성/동시성/병렬성
자세히 알고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/29aad935-f3fd-493c-b45b-19e09578aefd/noun_student_1618019.png',
    },
    {
      title: `에러 핸들링을 하는 게
어려웠던 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/94d300b2-c793-4369-b4ec-d29a934f24d5/noun_girl_1618026.png',
    },
    {
      title: `이터러블/이터레이터/제너레이터가 어려웠던 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/903a2f37-e130-47cd-986b-7781907d2e11/noun_boy_1618022.png',
    },
    {
      title: `중급 JS개발자로
성장하고 싶은 분`,
      icon: 'https://cdn.inflearn.com/public/files/courses/247815/210e31f6-a69f-4a73-8027-b3bdf29079c8/noun_student_1618021.png',
    },
  ],
  authorImg:
    'https://cdn.inflearn.com/public/files/courses/247815/140c1e14-ecbb-4e67-87b9-4499bdadddf3/KakaoTalk_Photo_2020-12-26-23-18-18.jpeg',
  authorComment: [
    `${{ link: 'SICP(컴퓨터 프로그램의 구조와 해석)' }}나, ${{
      link: '프로그램 디자인 어떻게 할 것인가',
    }} 같은 책들은 리스프의 매력과 함수형 프로그래밍의 이점을 한 껏 전달주며, ${{
      link: '클로저 프로그래밍의 즐거움',
    }}은 클로저와 함수형 프로그래밍이 즐겁다 말합니다.`,
    `저는 ES6+도 못지 않게 매력적인 언어라고 생각합니다. ES6+에서의 함수형 프로그래밍이 가진 매력과 이점을 전달하고 싶어 이 강의를 제작하게 되었습니다. 자바스크립트가 ES6+가 되면서 개발자들이 언어를 가지고 놀 수 있는 재밌는 규약들이 많이 만들어졌습니다. 또한 ES6+는 높은 수준의 함수형 프로그래밍을 할 수 있는 많은 기반을 갖추고 있습니다.`,
    `함수형 프로그래밍은 복잡한 문제를 간결한 코드로 해결하는 동시에 함수/비동기/지연성/동시성 등을 값으로 다뤄 적절한 시점에 평가하는식으로 높은 효율성을 얻는 특별한 아이디어들을 가지고 있습니다. 그리고 이것들은 너무나 재밌습니다. 이 강의에도 재밌는 코드들을 많이 담았습니다. 그 중 제너레이터를 통해 만든 지연된 이터레이터와 Promise를 합성한 코드가 특히 그렇다고 생각합니다. 이를 기반으로 Clojure의 코어 라이브러리인 reducers 같은 함수 세트도 ES6+로 구성해봅니다.`,
    [
      {
        src: 'https://cdn.inflearn.com/wp-content/uploads/es6_1.gif',
        label: '제네레이터와 이터레이터',
      },
      {
        src: 'https://cdn.inflearn.com/wp-content/uploads/es6_2.gif',
        label: 'reduce에서 nop 지원',
      },
    ],
    `이 자바스크립트 코드들은 아주 짧고 간결하며 잘 동작합니다! 좋은 표현력으로 무장한 ES6+와 간결하고 유연한 코드를 제공하는 함수형 프로그래밍을 즐겨보세요. :)`,

    // {
    //   letter: `${{ link: 'SICP(컴퓨터 프로그램의 구조와 해석)' }}나, ${{
    //     link: '프로그램 디자인 어떻게 할 것인가',
    //   }} 같은 책들은 리스프의 매력과 함수형 프로그래밍의 이점을 한 껏 전달주며, ${{
    //     link: '클로저 프로그래밍의 즐거움',
    //   }}은 클로저와 함수형 프로그래밍이 즐겁다 말합니다.`,
    // },
    // {
    //   letter: `저는 ES6+도 못지 않게 매력적인 언어라고 생각합니다. ES6+에서의 함수형 프로그래밍이 가진 매력과 이점을 전달하고 싶어 이 강의를 제작하게 되었습니다. 자바스크립트가 ES6+가 되면서 개발자들이 언어를 가지고 놀 수 있는 재밌는 규약들이 많이 만들어졌습니다. 또한 ES6+는 높은 수준의 함수형 프로그래밍을 할 수 있는 많은 기반을 갖추고 있습니다.`,
    // },
    // {
    //   letter: `함수형 프로그래밍은 복잡한 문제를 간결한 코드로 해결하는 동시에 함수/비동기/지연성/동시성 등을 값으로 다뤄 적절한 시점에 평가하는식으로 높은 효율성을 얻는 특별한 아이디어들을 가지고 있습니다. 그리고 이것들은 너무나 재밌습니다. 이 강의에도 재밌는 코드들을 많이 담았습니다. 그 중 제너레이터를 통해 만든 지연된 이터레이터와 Promise를 합성한 코드가 특히 그렇다고 생각합니다. 이를 기반으로 Clojure의 코어 라이브러리인 reducers 같은 함수 세트도 ES6+로 구성해봅니다.`,
    // },
    // {
    //   gif: 'https://cdn.inflearn.com/wp-content/uploads/es6_1.gif',
    //   label: '제네레이터와 이터레이터',
    // },
    // {
    //   gif: 'https://cdn.inflearn.com/wp-content/uploads/es6_2.gif',
    //   label: 'reduce에서 nop 지원',
    // },
    // {
    //   letter: `이 자바스크립트 코드들은 아주 짧고 간결하며 잘 동작합니다! 좋은 표현력으로 무장한 ES6+와 간결하고 유연한 코드를 제공하는 함수형 프로그래밍을 즐겨보세요. :)`,
    // },
  ],
  moreLecture: {
    title: '함수형 프로그래밍과 javascript ES6+ 응용편 ',
    description: `이 강좌의 후속강의 입니다.
이터러블과 함수형 프로그래밍을 더 깊이 다양하게 다룹니다.`,
    img: 'https://cdn.inflearn.com/public/files/courses/247815/90925f2d-728a-4c19-bfdb-585c062a1a98/es6_2.png',
  },
  qna: {
    q: '기존에 올라온 무료 강의와 무엇이 다른가요?',
    a: '약 8시간 7분의 내용 중 기존 강의와 중복되는 내용은 총 62분 정도이며, 나머지 7시간의 내용은 모두 새로운 내용입니다. 집필한 책에도 없는 내용이며, 모두 완전히 새로운 코드들 입니다. 그렇다고 기존 강의를 들으실 필요는 없습니다. 기존 강의 내용에서 군더더기를 덜어내고 62분으로 압축했습니다. 62분의 내용에서도 코드는 완전히 새로운 코드입니다. 커리큘럼을 통해 확인해보시면 됩니다! :)',
  },
  tips: {
    who: [
      '함수형 프로그래밍을 배우고 싶은 분',
      'ES6+의 기술들을 깊게 다뤄보고 싶은 분',
      '이터러블/이터레이터/제너레이터가 어려웠던 분',
      '비동기 프로그래밍을 능숙하게 하고 싶은 분',
      '지연성/동시성/병렬성에 대해 상세히 알고 싶은 분',
      '에러 핸들링을 어떻게 해야 하는지 어려웠던 분',
    ],
    prerequisite: [
      'JS 에 대한 기본 지식이 있는 분',
      '고급 프로그래머로 성장하고 싶은 분',
      '비동기, 에러 처리에 어려움을 느끼는 개발자',
    ],
  },
  author: '유인동',
  authorHistory: [
    '현재 MARPPLE CTO',
    '전 카카오, 엔씨소프트 오픈마루 스튜디오 개발자',
    '함수형 라이브러리리 FxJS 개발',
    '함수형 데이터베이스 쿼리 빌더 MQL.js 개발',
    '함수형 DOM 조작 라이브러리 FxJS-DOM 개발',
    '저서 함수형 자바스크립트 프로그래밍',
    '함수형 자바스크립트 페이스북 그룹 운영',
    '네이버, 카카오 페이지 등 함수형 프로그래밍 기술 교육, 기업 출강',
    '다수의 온/오프라인 강의',
  ],
};
