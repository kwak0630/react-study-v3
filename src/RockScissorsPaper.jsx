import { use, useState } from 'react'
import Box from './component/Box'
import './App.css'

// 가위바위보 게임 강의
// 1. 박스 2개 (타이틀, 가위바위보 이미지, 결과)
// 2. 버튼을 클릭하면 클릭한 값이 박스에 표시
// 3. 컴퓨터는 랜덤하게 아이템을 선택
// 4. 2,3의 결과로 누가 이겼는지를 승패를 따짐
// 5. 숭패 결과에 따라 테두리 색이 바뀜

// 6. 스코어 추가 <- 개인적으로 함
// 7. 리셋 버튼 추가 <- 개인적으로 함

const choice = {
  rock: {
    name: "Rock",
    img: "https://em-content.zobj.net/source/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44a-1f3fb_1f3fb.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://em-content.zobj.net/source/apple/81/victory-hand_emoji-modifier-fitzpatrick-type-1-2_270c-1f3fb_1f3fb.png"
  },
  paper: {
    name: "Paper",
    img: "https://em-content.zobj.net/source/apple/279/raised-hand_light-skin-tone_270b-1f3fb_1f3fb.png"
  }
}
const RockScissorsPaper = () => {

  const [userSelect, SetUserSelect] = useState(null)
  const [computerSelect, SetComputerSelect] = useState(null)
  const [result, SetResult] = useState("")
  const [score, SetScore] = useState({
    user: 0, computer: 0
  })

  // 가위바위보 버튼 선택
  const play = (userChioce) => {
    SetUserSelect(choice[userChioce]);

    let computerChoice = randomChoice();
    SetComputerSelect(computerChoice);

    // judgement(choice[userChioce], computerChoice);
    // SetResult(judgement(choice[userChioce], computerChoice)); > 스코어 생기면서 아래줄로 수정

    const gameResult = judgement(choice[userChioce], computerChoice);
    SetResult(gameResult);

    // 스코어 업데이트
    if (gameResult === "win") {
      SetScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else if (gameResult === "lose") {
      SetScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  }

  // 컴퓨터가 랜덤하게 선택
  const randomChoice = () => {
    let itamArray = Object.keys(choice) // 객체에 키값만 뽑아서 배열로 만들어 주는 함수 (가위바위보를 배열로)
    // let randomItem = Math.random(); // 1. 랜덤으로 뽑기
    // let randomItem = Math.random() * itamArray.length; // 2. 랜덤한 숫자에 배열 곱하기
    let randomItem = Math.floor(Math.random() * itamArray.length); // 3. Math.floor로 정수 가져오기
    let final = itamArray[randomItem]; // 4. 배열로 이름 가져옴
    return choice[final];
  }

  // 결과
  const judgement = (user, computer) => {
    console.log(user, computer)

    // user == computer > tie
    // user == rock , computer == scissor > user win
    // user == rock , computer == paper > user lose
    // user == scissor , computer == paper > user win
    // user == scissor , computer == rock > user lose
    // user == paper , computer == rock > user win
    // user == paper , computer == scissor > user lose

    if(user.name === computer.name){
      return "tie"
    // } else if(user.name == "Rock"){
      // if(computer.name == "Scissor"){
      //   return "win"
      // } else{
      //   return "lose"
      // }
    // 3항 연산자로 수정
    } else if(user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    else if(user.name === "Scissors") 
      return computer.name === "Paper" ? "win" : "lose"
    else if(user.name === "Paper") 
      return computer.name === "Rock" ? "win" : "lose"
  }

  // 리셋
  const reset = () => {
    SetUserSelect(null);
    SetComputerSelect(null);
    SetResult("");
    SetScore({ user: 0, computer: 0 });
  };

  return (
    <div className="rook-scissors-paper">
      <div className='score-box'>
        <div className={`score ${
          result === "win" ? "score-user-up" :
          result === "lose" ? "score-computer-up" :
          ""
        }`}>
          {score.user} : {score.computer}
        </div>
        <button className="reset" onClick={reset}>🔄 Reset</button>
      </div>
      <div className="box-wrap">
        <Box title="Sally" item={userSelect} result={result}/>
        {/* <Box title="Computer" item={computerSelect} result={result} /> */}
        <Box title="Computer" item={computerSelect} 
          result={
            result === "win"
              ? "lose"
              : result === "lose"
              ? "win"
              : result // tie 또는 "" 그대로
          } />
      </div>
      <div className="button">
        <button onClick={() => play("scissors")}>✌🏻</button>
        <button onClick={() => play("rock")}>👊🏻</button>
        <button onClick={() => play("paper")}>✋🏻</button>
      </div>
    </div>
  )
}

export default RockScissorsPaper
