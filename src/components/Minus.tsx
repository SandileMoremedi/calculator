interface Minus {
  currentNumber: string;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumber: string;
}

const Minus: React.FC<Minus> = ({
  currentNumberSet,
  previousNumberSet,
  currentNumber,
  numberOnScreenSet,
  operatorSet,
  previousNumber,
}) => {
  return (
    <button
      className="minus"
      onClick={() => {
        if (previousNumber == "0") {
          previousNumberSet(currentNumber);
          currentNumberSet("0");
          numberOnScreenSet("previousNumber");
          operatorSet("minus");
        } else {
          currentNumberSet("0");
          operatorSet("minus");
        }
      }}
    >
      -
    </button>
  );
};

export default Minus;
