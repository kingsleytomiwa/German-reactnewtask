import "./index.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={0}
        color="255, 255, 255"
        outerAlpha={0.5}
        innerScale={5.2}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <section className="bg-black w-screen h-screen grid place-items-center">
        <ul className="text-white text-[4em] font-[300] flex flex-col gap-[1.5rem]">
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
