'use strict'

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
  const rotate = document.getElementById("rotate");

  //your code here....
  console.log("begin");

  console.log(lengthInput);
  console.log(widthInput);
  console.log(leftAngleInput);

  const canvasDetail = document.getElementById("canvas_detail_drawing");
  const ctxDetail = canvasDetail.getContext("2d");

  const drawDetail = (w, l, r) => {
    ctxDetail.beginPath();
    ctxDetail.moveTo(3, 3);
    ctxDetail.lineWidth = 1;
    ctxDetail.lineTo(3, w);
    ctxDetail.lineTo(l, w);
    ctxDetail.arc(l - r, r + 3, r, 0, 3 * Math.PI / 2, true);
    ctxDetail.stroke()

    ctxDetail.beginPath();
    ctxDetail.moveTo(l - r, 3)
    ctxDetail.lineTo(2, 3)
    ctxDetail.stroke()

    ctxDetail.beginPath();
    ctxDetail.moveTo(detail.length, 3);
    ctxDetail.lineTo(detail.length - detail.rt.radius, detail.rt.radius);
    ctxDetail.stroke();

    ctxDetail.beginPath();
    ctxDetail.moveTo(detail.length - detail.rt.radius, 3)
    ctxDetail.lineTo(detail.length - detail.rt.radius, detail.rt.radius)
    ctxDetail.stroke()

    ctxDetail.beginPath()
    ctxDetail.moveTo(detail.length - detail.rt.radius, detail.rt.radius)
    ctxDetail.lineTo(detail.length, detail.rt.radius)
    ctxDetail.stroke()
  }

  const inputValue = (event) => {
    let value = event.target.value
    let element = document.querySelector(".detailDrawing")
    let h = document.getElementById("height")
    let w = document.getElementById("width")
    let r = document.getElementById("radius")
    console.log(value);
    switch (event.target.id) {
      case "lengthInput":
        console.log("lenght");
        console.log(value);
        detail.length = value;
        canvasDetail.setAttribute("width", Number(detail.length) + 3);
        canvasDetail.style.paddingTop = detail.rt.radius * 2;
        w.textContent = detail.length
        w.style.left = (-detail.length / 2 - 10) + "px"
        if (detail.length > detail.width) {
          element.style.width = String(detail.length) + "px";
          element.style.height = String(detail.length) + "px";
        } else {
          element.style.width = String(detail.width) + "px";
          element.style.height = String(detail.width) + "px";
        }
        drawDetail(detail.width, detail.length, detail.rt.radius)
        console.log(element.style.width);
        break;
      case "widthInput":
        console.log("width");
        console.log(value);
        detail.width = value;
        canvasDetail.setAttribute("height", Number(detail.width) + 3);
        canvasDetail.style.paddingTop = detail.rt.radius * 2;
        h.textContent = detail.width
        w.style.top = detail.width / 2 + 10 + "px"
        if (detail.length > detail.width) {
          element.style.width = String(detail.length) + "px";
          element.style.height = String(detail.length) + "px";
        } else {
          element.style.width = String(detail.width) + "px";
          element.style.height = String(detail.width) + "px";
        }
        drawDetail(detail.width, detail.length, detail.rt.radius)
        console.log(element.style.width);
        break;

      case "rightAngleInput":
        console.log("radius");
        console.log(value);
        detail.rt.radius = + value;
        r.textContent = "R" + detail.rt.radius;
        r.style.top = String(-(detail.width / 2) - 6) + "px"
        r.style.left = String(-detail.rt.radius / 2 - 4) + "px"
        drawDetail(detail.width, detail.length, detail.rt.radius)
        console.log(element.style.width);
        break;
    }
    ctxDetail.clearRect(0, 0, detail.length + 5, detail.width + 5)
    drawDetail(detail.width, detail.length, detail.rt.radius)
  }

  lengthInput.addEventListener("input", inputValue);
  widthInput.addEventListener("input", inputValue);
  leftAngleInput.addEventListener("input", inputValue);

  const rotateElement = () => {
    const el = document.getElementById("dDrawing")
    const w = document.getElementById("width")
    const h = document.getElementById("height")
    const r = document.getElementById("radius")
    if (!el.style.transform /* === "rotate(0deg)" */) {
      el.style.transform = "rotate(90deg)";
      w.style.transform = "rotate(180deg)";
      r.style.transform = "rotate(270deg)";
      console.log("основной стал 90дег");
    } else if (el.style.transform === "rotate(90deg)") {
      el.style.transform = "rotate(180deg)";
      w.style.transform = "rotate(180deg)";
      r.style.transform = "rotate(180deg)";
      console.log("основной стал 180дег");
    } else if (el.style.transform === "rotate(180deg)") {
      el.style.transform = "rotate(270deg)";
      w.style.transform = "rotate(180deg)";
      h.style.transform = "rotate(90deg)";
      r.style.transform = "rotate(90deg)";
      console.log("основной стал 270дег");
    } else if (el.style.transform === "rotate(270deg)") {
      el.style.transform = "rotate(360deg)"
      w.style.transform = "rotate(360deg)"
      h.style.transform = "rotate(270deg)"
      r.style.transform = "rotate(0deg)";
      console.log("основной стал 360дег");
    } else if (el.style.transform === "rotate(360deg)") {
      el.style.transform = "rotate(90deg)"
      h.style.transform = "rotate(270deg)";
      w.style.transform = "rotate(180deg)";
      r.style.transform = "rotate(270deg)";
      console.log("основной стал 90дег");

    }
    console.log("rotate good")
  }
  rotate.addEventListener("click", rotateElement)
}