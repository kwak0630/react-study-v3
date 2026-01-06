// 초기값
let initialState = {
  count : 0
}

function reducer(state = initialState, action) {

  console.log(action);

  // ...state 는 기본 상태는 유지하되, count만 바꾼다! -> ...state는 걍 기본으로 쓴다고 생각.
  // if문이나 switch문으로 하면 된다.

  // if문 버전
  // if(action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1}
  // } else if(action.type === "DECREMENT") {
  //   return { ...state, count: state.count - 1}
  // }

  // switch문 버전
  switch(action.type) {
    case "INCREMENT" :
      // return { ...state, count: state.count + 1}
      // payload로 받은 데이터 사용 (5씩 증가)
      return { ...state, count: state.count + action.payload.num}
    case "DECREMENT" :
      return { ...state, count: state.count - 1}
    default : 
      return { ...state }
  }

  return { ...state };
}

export default reducer
