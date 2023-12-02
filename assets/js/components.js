class UIGaugeChart extends HTMLElement {
    constructor() {
      super();
  
      const value = parseInt(this.getAttribute("value")) || 0;
      const color = this.getAttribute("color") || "red";
  
      const shadow = this.attachShadow({ mode: "open" });
  
      const chartGrandParent = document.createElement("div");
      chartGrandParent.style.cssText = "aspect-ratio: 1/0.5; overflow: hidden;";
  
      const chartParent = document.createElement("div");
      chartParent.style.margin = "-25% 0";
      chartParent.style.position = "relative";
    //   chartParent.style.minWidth = "50vh";
    //   chartParent.style.minHeight = "50vw";
  
      const canvas = document.createElement("canvas");
      canvas.id = "mychart";
  
      chartParent.appendChild(canvas);
      chartGrandParent.appendChild(chartParent);
      shadow.appendChild(chartGrandParent);
  
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