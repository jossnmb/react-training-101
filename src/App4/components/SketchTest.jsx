import { ReactP5Wrapper } from 'react-p5-wrapper';

function sketch(p5) {
  let clicked = false;

  p5.setup = () => {
    p5.createCanvas(600, 400, p5.WEBGL);
  };

  p5.draw = (props) => {
    p5.tester();
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
    if (clicked) {
      p5.saveCanvas();
      clicked = false;
      props.setClicked(false);
    }
  };

  p5.updateWithProps = (props) => {
    if (props.clicked) {
      clicked = true;
    }
  };

  p5.tester = () => {
    // p5.print('cack');
  };
}

export default function SketchTest(props) {
  return (
    <ReactP5Wrapper
      sketch={sketch}
      clicked={props.clicked}
      setClicked={props.setClicked}
    />
  );
}
