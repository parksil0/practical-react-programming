const friends = [
  { name: "홍길동", age: 15 },
  { name: "강감찬", age: 20 },
  { name: "이순신", age: 25 },
  { name: "한석봉", age: 30 },
];

const timelines = [
  { desc: "도둑놈 잡을사람", likes: 0 },
  { desc: "과거시험 준비할사람", likes: 10 },
  { desc: "거북선 만들기 힘들다ㅜ", likes: 20 },
  { desc: "켈라그래피 짱짱맨!", likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
