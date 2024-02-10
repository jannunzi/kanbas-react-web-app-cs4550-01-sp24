const subtract = (a: number, b: number) => {
  const c = a - b;
  return c;
};

function ArrowFunctions() {
  const threeMinusOne = subtract(3, 1);
  const typeofsubtract = typeof subtract;
  console.log(threeMinusOne);

  return (
    <>
      <h3>New ES6 arrow functions</h3>
      threeMinusOne = {threeMinusOne}
      <br />
      subtract(3, 1) = {subtract(3, 1)}
      <br />
      typeofsubtract = {typeofsubtract}
    </>
  );
}

export default ArrowFunctions;
