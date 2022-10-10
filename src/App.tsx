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
import "./styles/main.scss";
const App = () => {
  return (
    <div className="app">
      <Container>
        <Top />
        <Screen />
        <Keypad>
          <Row number="four">
            <Button num={7} />
            <Button num={8} />
            <Button num={9} />
            <Delete />
          </Row>
          <Row number="four">
            <Button num={4} />
            <Button num={5} />
            <Button num={6} />
            <Plus />
          </Row>
          <Row number="four">
            <Button num={1} />
            <Button num={2} />
            <Button num={3} />
            <Minus />
          </Row>
          <Row number="four">
            <Dot />
            <Button num={0} />
            <Divide />
            <Multiply />
          </Row>
          <Row number="two">
            <Reset />
            <Equal />
          </Row>
        </Keypad>
      </Container>
    </div>
  );
};
export default App;
