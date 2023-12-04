// ui-gauge-chart component
class UIGaugeChart extends HTMLElement {
  constructor() {
    super();

    const value = parseInt(this.getAttribute("value")) || 0;
    const color = this.getAttribute("color") || "grey";

    const shadow = this.attachShadow({ mode: "open" });

    const chartGrandParent = createHTML("div", { style: "aspect-ratio: 1/1; overflow: hidden;" });
    const chartParent = createHTML("div", { style: "margin: -25% 0; position: relative" });
    const canvas = createHTML("canvas", { id: "mychart" });

    appendHTML(canvas, chartParent);
    appendHTML(chartParent, chartGrandParent);
    appendHTML(chartGrandParent, shadow)

    const ctx = canvas.getContext("2d");
    const chartText = {
      beforeDatasetsDraw(chart) {
        const { ctx } = chart;
        //   const canvasWidth = chart.canvas.width;
        //   const fontSize = canvasWidth * 0.3;

        const { x, y } = chart.getDatasetMeta(0).data[0];
        ctx.save();
        ctx.fillStyle = "#31343D";
        ctx.textAlign = "center";
        ctx.textBaseline = "baseline";
        ctx.font = `600 12px/100% sans-serif`;
        ctx.fillText(String(value), x, y);
      },
    };

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["", ""],
        datasets: [{
          data: [value, 400 - value],
          backgroundColor: [color, "#E6E6E6"],
          borderWidth: 0,
          circumference: 180,
          rotation: 270,
        }]
      },
      plugins: [chartText],
      options: {
        cutout: "87%",
        plugins: { legend: { display: false }, title: { display: false } },
      },
    });
  }
}
customElements.define("ui-gauge-chart", UIGaugeChart);

// ui-toggle
const uiToggles = document.querySelectorAll(".ui-toggle");

uiToggles.forEach(toggle => {
    const toggleHandler = toggle.querySelector(".ui-toggle-handler");

    toggleHandler.addEventListener("click", () => {
        toggle.classList.toggle("active");
    });
});

document.addEventListener("click", (event) => {
    uiToggles.forEach(selector => {
        if (selector.classList.contains("ui-toggle-auto-close") && !selector.contains(event.target)) {
            selector.classList.remove("active");
        }
    });
});

// ui-aqi-meter
const aqiMeters = document.querySelectorAll(".ui-aqi-meter");

aqiMeters.forEach(meter => {
  const value = meter.getAttribute("value") || 0;
  const digit = meter.querySelector(".digit");
  const digitValue = meter.querySelector(".digit-value");

  digitValue.textContent = value;

})


