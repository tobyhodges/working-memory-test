const React = require('react')
const ReactDOM = require('react-dom')

const createLayout = () => {
  ReactDOM.render(
    <p>words will appear here after the test has begun...</p>,
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
    <p className="infoText">This site provides a simple test designed to measure the participant's working memory. The test is divided into two parts. During the first part of the test, you will be shown a number of words at short intervals. Try to remember as many of the words shown as possible, <strong>without writing any of them down</strong>. Only after the test is finished, write down a list as all the words that you can remember being shown. You will be given further information before starting the second part of the test.</p>
    <p  className="infoText">To begin, press the <strong>Start Part 1</strong> button above. You will be given a short countdown before the first word appears.</p>
    </div>,
    document.getElementById("info")
  )
}

const workingMemoryTest = (words) => {
  // run a countdown before the test begins
  const countdown = ['3...', '2...', '1...']
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
  )}, (j*1000)+3000, words[j])}
}

const runTest = (words, text) => {
  ReactDOM.render(
    <div><p><strong>Test in progress...</strong></p></div>,
    document.getElementById("info")
  )
  workingMemoryTest(words)
  setTimeout((text) => {
    ReactDOM.render(
      <div>{text}</div>,
      document.getElementById("info")
  )}, 23000, text)
}

const test1 = () => {
  const set1 = [ "Mars", "cherry", "sunburn", "stop", "anger",
            "grass", "envy", "ecological", "leaf", "wasabi",
            "peace", "surrender", "cloud", "salt", "snowman",
            "canary", "Imperial", "cowardice", "warning", "Sunflowers",
            ""
          ]
  let test2Text = <div><p className="infoText">Now write down as many of the words that you were just shown as you can recall. How many of the 20 words could you remember?</p>
  <p className="infoText">Research <sup>[1, 2]</sup> has shown that we are able to improve our recall of new information by associating it with prior knowledge.</p>
  <p className="infoText">Perhaps you already noticed that many of the words in the test are associated with colors? The words were arranged into four groups, according to a color that they are usually associated with: red, green, white, and yellow.</p>
  <p className="infoText">In the second part of the test, you will be shown another set of words, grouped by association with these same colors (in the same order). When you're ready, press <strong>Start Part 2</strong> to start last part of the test. Once the words have finished being shown, write down as many as you can remember and see if categorising the words by color helped.</p>
  <ol id="references">
    <li>Ericsson, KA, Chase, WG, & Faloon, S. (1980) <strong>Acquisition of a memory skill.</strong> <em>Science, 208</em>, 1181-1182.</li>
    <li>Ericsson, KA, & Staszewski, JJ. (1989) <strong>Skilled memory & expertise: Mechanisms of exceptional performance.</strong>  pp. 235-267 in Klahr, D, & Kotovsky, K (Eds.), <em>Complex information processing: The impact of Herber A. Simon</em>. Hillsdale, NJ: Erlbaum.</li>
  </ol>
  </div>
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2} disabled>Start Part 2</button>
      <button name="resetButton" onClick={createLayout} disabled>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )
  runTest(set1, test2Text)
  setTimeout(() => {
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2}>Start Part 2</button>
      <button name="resetButton" onClick={createLayout}>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )}, 23000)
}

const test2 = () => {
  const set2 = ["tomato", "strawberry", "blood", "rose", "blush",
            "dragon", "go", "emerald", "nausea", "lime",
            "paper", "milk", "blank", "tooth", "blizzard",
            "submarine", "lemon", "sunshine", "saffron", "sulphur",
            ""
          ]
  let completeText = <div><p className="infoText">As before, write down as many words as you can remember.</p>
  <p className="infoText">Did making the color associations between words help you to remember more of them?</p></div>
  ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2} disabled>Start Part 2</button>
      <button name="resetButton" onClick={createLayout} disabled>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )
  runTest(set2, completeText)
  setTimeout(() => {
    ReactDOM.render(
    <div id="buttons">
      <button name="startButton1" onClick={test1} disabled>Start Part 1</button>
      <button name="startButton2" onClick={test2} disabled>Start Part 2</button>
      <button name="resetButton" onClick={createLayout}>Reset</button>
    </div>,
    document.getElementById('buttonBox')
  )}, 23000)
}

createLayout()
