import Button from "./components/Button";
import Container from "./components/Container";
import Delete from "./components/Delete";
import Divide from "./components/Divide";
import Dot from "./components/Dot";
import Equal from "./components/Equal";
import Keypad from "./components/Keypad";
import Minus from "./components/Minus";
import Multiply from "./components/Multiply";
import Plus from "./components/Plus";
import Reset from "./components/Reset";
import Screen from "./components/Screen";
import Top from "./components/Top";
import Row from "./components/Row";
import { useState } from "react";
import "./styles/main.scss";
const App = () => {
  const { log } = console;
  const [currentNumber, currentNumberSet] = useState("0");
  const [previousNumber, previousNumberSet] = useState("0");
  const [numberOnScreen, numberOnScreenSet] = useState("currentNumber");
  const [operator, operatorSet] = useState("");
  // We need to check if the current number has 0 at the start of the calculations and remove it
  // then if someone removes all the numbers it needs to add a 0
  // and if a person is deleting numbers it should add a 0
  if (currentNumber.length < 1) {
    currentNumberSet("0");
  }
  if (currentNumber.length > 1) {
    if (currentNumber.slice(0, 1) == "0") {
      currentNumberSet((val) => val.slice(1));
    }
  }
  return (
    <div className="app">
      <Container>
        <Top />
        <Screen
          currentNumber={currentNumber}
          previousNumber={previousNumber}
          numberOnScreen={numberOnScreen}
        />
        <Keypad>
          <Row number="four">
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={7}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={8}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={9}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Delete currentNumberSet={currentNumberSet} />
          </Row>
          <Row number="four">
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={4}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={5}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={6}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Plus
              currentNumberSet={currentNumberSet}
              previousNumberSet={previousNumberSet}
              currentNumber={currentNumber}
              numberOnScreenSet={numberOnScreenSet}
              operatorSet={operatorSet}
              operator={operator}
            />
          </Row>
          <Row number="four">
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={1}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={2}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={3}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Minus />
          </Row>
          <Row number="four">
            <Dot />
            <Button
              numberOnScreenSet={numberOnScreenSet}
              num={0}
              currentNumberSet={currentNumberSet}
              numberOnScreen={numberOnScreen}
            />
            <Divide
            // currentNumberSet={currentNumberSet}
            // previousNumberSet={previousNumberSet}
            // currentNumber={currentNumber}
            // numberOnScreenSet={numberOnScreenSet}
            // operatorSet={operatorSet}
            // operator={operator}
            />
            <Multiply />
          </Row>
          <Row number="two">
            <Reset />
            <Equal
              previousNumber={previousNumber}
              currentNumberSet={currentNumberSet}
              previousNumberSet={previousNumberSet}
              currentNumber={currentNumber}
              numberOnScreenSet={numberOnScreenSet}
              operatorSet={operatorSet}
              operator={operator}
            />
          </Row>
        </Keypad>
      </Container>
    </div>
  );
};
export default App;
