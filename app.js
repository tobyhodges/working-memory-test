const React = require('react')
const ReactDOM = require('react-dom')

const createLayout = () => {
  let test1Text    = "test 1 info..."
  ReactDOM.render(
    <p>words will appear here after the test has begun</p>,
    document.getElementById("app")
)
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1}>Start Part 1</button>
      <button name="startButton2" onClick={test2} disabled>Start Part 2</button>
      <button name="resetButton" onClick={createLayout} disabled>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )
  ReactDOM.render(
    <p className="infoText">{test1Text}</p>,
    document.getElementById("info")
  )
}

const workingMemoryTest = () => {
  const words = [ "Mars", "cherry", "sunburn", "stop", "angry", "tomato",
            "grass", "envy", "ecological", "leaf", "wasabi", "dragon",
            "peace", "surrender", "cloud", "salt", "snowman", "paper",
            "canary", "Imperial", "cowardice", "warning", "Sunflowers", "submarine"
          ]
  // run a countdown before the test begins
  const countdown = [3, 2, 1]
  for (let i in countdown) {
    setTimeout((number) => {
      ReactDOM.render(
        <p className="countdownNum">{number}</p>,
        document.getElementById("app")
    )}, i*1000, countdown[i])}
  // start test
  for (let j in words) {
    setTimeout(word => {
    ReactDOM.render(
      <p className="term">{word}</p>,
      document.getElementById("app")
  )}, (j+3)*1500, words[j])}
}

const runTest = (text) => {
  workingMemoryTest()
  ReactDOM.render(
    <p className="infoText">{text}</p>,
    document.getElementById("info")
  )
}

const test1 = () => {
  let test2Text = "test 2 info..."
  runTest(test2Text)
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2}>Start Part 2</button>
      <button name="resetButton" onClick={createLayout}>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )
}

const test2 = () => {
  let completeText = "test complete :)"
  runTest(completeText)
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2} disabled>Start Part 2</button>
      <button name="resetButton" onClick={createLayout}>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )
}

createLayout()
