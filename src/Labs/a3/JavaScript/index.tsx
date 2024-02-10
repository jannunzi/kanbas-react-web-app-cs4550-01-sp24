import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
  console.log("Hello, JavaScript!");
  return (
    <div>
      <h1>JavaScript</h1>
      <Spreading />
      <House />
      <JsonStringify />
      <MapFunction />
      <WorkingWithArrays />
      <ArrowFunctions />
      <ES5Functions />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}
export default JavaScript;
