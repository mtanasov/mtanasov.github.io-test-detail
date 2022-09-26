// let detail = {
//   length: 350,
//   width: 250,
//   lt: { radius: 0 },
//   lb: { radius: 0 },
//   rt: { radius: 50 },
//   rb: { radius: 0 }
// };
let detail = {
  length: 0,
  width: 0,
  lt: { radius: 0 },
  lb: { radius: 0 },
  rt: { radius: 0 },
  rb: { radius: 0 }
};

{
  const app = document.getElementById("app");
  const lengthInput = document.getElementById("lengthInput");
  const widthInput = document.getElementById("widthInput");
  const leftAngleInput = document.getElementById("rightAngleInput");
  const rotateZ = document.getElementById("rotateZ");

  //your code here....
  console.log("begin");

  console.log(lengthInput);
  console.log(widthInput);
  console.log(leftAngleInput);

  const canvasDetail = document.getElementById("canvas_detail_drawing");
  const ctxDetail = canvasDetail.getContext("2d");


  const drawDetail = (w, l, r) => {
    // if (detail.length && detail.width && detail.rt.radius) {
    // ctxDetail.lineCap = "butt"
    ctxDetail.beginPath();
    ctxDetail.moveTo(3, 3);
    ctxDetail.lineWidth = 1;
    ctxDetail.lineTo(3, w);
    ctxDetail.lineTo(l, w);
    // ctxDetail.lineTo(detail.length, detail.width - detail.rt.radius);
    // ctxDetail.lineTo(-(detail.length - detail.rt.radius), detail.width - detail.rt.radius);
    // ctxDetail.closePath();
    // ctxDetail.stroke();
    // ctxDetail.beginPath();
    ctxDetail.arc(l - r, r + 3, r, 0, 3 * Math.PI / 2, true);
    ctxDetail.stroke()
    ctxDetail.beginPath();
    ctxDetail.moveTo(l - r, 3)
    // ctxDetail.lineTo(-detail.length - detail.rt.radius, 3)
    ctxDetail.lineTo(2, 3)
    // ctxDetail.closePath()
    ctxDetail.stroke()
    // }
  }
  const inputValue = (event) => {
    let value = event.target.value
    console.log(value);
    switch (event.target.id) {
      case "lengthInput":
        console.log("lenght");
        console.log(value);
        detail.length = value;
        drawDetail(detail.width, detail.length, detail.rt.radius)
        break;
      case "widthInput":
        console.log("width");
        console.log(value);
        detail.width = value;
        drawDetail(detail.width, detail.length, detail.rt.radius)
        break;

      case "rightAngleInput":
        console.log("radius");
        console.log(value);
        detail.rt.radius = + value;
        drawDetail(detail.width, detail.length, detail.rt.radius)
        break;
    }
    ctxDetail.clearRect(0, 0, detail.length + 5, detail.width + 5)
    drawDetail(detail.width, detail.length, detail.rt.radius)
  }

  lengthInput.addEventListener("input", inputValue);
  widthInput.addEventListener("input", inputValue);
  leftAngleInput.addEventListener("input", inputValue);
  // document.addEventListener = ("input", (event) => inputValue(event));
  // widthInput.oninput = (event) => inputValue(event);
  // leftAngleInput.oninput = (event) => inputValue(event);

  // drawDetail(detail.width, detail.length, detail.rt.radius)
}

