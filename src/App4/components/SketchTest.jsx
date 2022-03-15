import { ReactP5Wrapper } from 'react-p5-wrapper';
import items from './items.json';
import './sketch.css';

function sketch(p5) {
  let clicked = false;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.textSize(20);
    p5.textAlign('center');
  };

  p5.draw = (props) => {
    p5.background(250);
    let p = 0;
    for (let i = 1; i<5; i++) {
    p5.text(Object.keys(items[0])[i] + ': ' + Object.values(items[0])[i], 
      200, 200+p);
    p += 25;
  }
    if (clicked) {
      p5.saveCanvas('myNFT', 'png');
      clicked = false;
    }
  };

  p5.updateWithProps = (props) => {
    if (props.clicked) {
      clicked = true;
      props.setClicked(false);
      console.log(Object.values(items[0])[3]);
    }
  };
}

export default function SketchTest(props) {
  return (
    <div className="sketch">
      <ReactP5Wrapper 
        sketch={sketch}
        clicked={props.clicked}
        setClicked={props.setClicked}
      />  
    </div>
  );
}
