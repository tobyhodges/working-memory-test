const React = require('react')
const ReactDOM = require('react-dom')

const createLayout = () => {
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
    <div>
    <p className="infoText">This site provides a simple test designed to measure the participant's working memory. The test is divided into two parts. During the first part of the test, you will be shown a number of words at short intervals. Try to remember as many of the words shown as possible, <strong>without writing any of them down</strong>. Only after the test is finished, write down a list as all the words that youkjbkjb can remember being shown. You will be given further information before starting the second part of the test.</p>
    <p  className="infoText">To begin, press the <strong>Start Part 1</strong> button above. You will be given a short countdown before the first word appears.</p>
    </div>,
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
    <div>{text}</div>,
    document.getElementById("info")
  )
}

const test1 = () => {
  let test2Text = <div><p className="infoText">Now write down as many of the words that you were just shown as you can recall. How many of the 24 words could you remember?</p>
  <p className="infoText">Research [citation needed] has shown that we are able to increase the number of individual pieces of information that we can hold in our working memory through an approach called "chunking". Chunking involves grouping information together according to some connection that we have already made between the individual pieces.</p>
  <p className="infoText">Perhaps you already noticed that many of the words in the test are associated with colors? The words were arranged into four groups, according to a color that they are usually associated with: red, green, white, and yellow.</p>
  <p className="infoText">In the second part of the test, you will be shown another set of words, grouped by association with these same colors (in the same order). Does making this association of between the words help you to remember more? When you're ready, press <strong>Start Part 2</strong> to start last part of the test. Once the words have finished being shown, write down as many as you can remember and see if chunking the words by color helped.</p>
  </div>
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
