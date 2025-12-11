import intialImg from '../assets/sally.png'
import initialComImg from '../assets/computer.png'

const Box = ({ title, item, result }) => {
  // console.log(props);

  // let result;
  // if(props.title === "Computer" && props.result !== "tie" && props.result !== "") { // computer 인가? 결과가 비겼나? 결과가 있나?
  //   result = props.result === "win" ? "lose" : "win"
  // } else { // 위의 경우가 아니라면 Props로 전달된 값 그대로
  //   result = props.result; 
  // }

  // 박스 안 이미지
  const imgSrc = item
    ? item.img
    : title === "Computer"
      ? initialComImg
      : intialImg

  return (
    <div className={`box ${result}`}>
      <p className='name'>{title}</p>
      <div className="box-img">
        {/* <img 
          src={item ? item.img 
          : title === "Computer"
          ? initialComImg
          : intialImg} 
        /> */}
        <img src={imgSrc} />
      </div>
      <p className="result">
        {result === "win" ? "win 🎉" : result}
      </p>
    </div>
  )
}

export default Box;