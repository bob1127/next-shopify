'use client'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

export default function Home() {

    return (
        <>
          <div style={{ height: "500px" }}>
  <Marquee velocity={12} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {times(5, Number).map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "yellow",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          {id}
        </div>
      </Motion>
    ))}
  </Marquee>
</div>;
        </>
    )
}
