import { Color } from "./Color.jsx";
import { colors } from "../data/colordata.jsx";
export const App = () => {
  return (
    <div className="flex w-[70%] flex-wrap gap-10 m-auto mt-10 ">
      {colors.map((color) => (
        <Color key={color.name} code={color.code} name={color.name} />
      ))}
    </div>
  );
};
