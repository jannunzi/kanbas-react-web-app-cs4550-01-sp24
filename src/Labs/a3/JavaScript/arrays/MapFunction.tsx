function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];

  const square = (a: number) => a * a;
  const squares = numberArray1.map(square);

  const cubes = numberArray1.map((a) => a * a * a);

  return (
    <div>
      <h2>Map Function</h2>
      numberArray1 = {numberArray1}
      <br />
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      {numberArray1.map((a, index) => (
        <div key={index} className="row">
          <div className="col">
            {a} squared = {square(a)}
          </div>
          <div className="col">
            {a} cubed = {a * a * a}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MapFunction;
