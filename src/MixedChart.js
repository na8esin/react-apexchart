class MixedChart extends Component {
    constructor(props) {
        super(props);
        this.updateCharts = this.updateCharts.bind(this);

        this.state = {
            optionsMixedChart: {
                chart: {
                  id: "basic-bar",
                  toolbar: {
                    show: false
                  }
                },
                plotOptions: {
                  bar: {
                    columnWidth: "50%",
                    endingShape: "arrow"
                  }
                },
                stroke: {
                  width: [4, 0, 0]
                },
                xaxis: {
                  categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                markers: {
                  size: 6,
                  strokeWidth: 3,
                  fillOpacity: 0,
                  strokeOpacity: 0,
                  hover: {
                    size: 8
                  }
                },
                yaxis: {
                  tickAmount: 5,
                  min: 0,
                  max: 100
                }
              },
        };
    }
    updateCharts() {
        const max = 90;
        const min = 30;

        this.state.seriesMixedChart.forEach(s => {
            const data = s.data.map(() => {
              return Math.floor(Math.random() * (max - min + 1)) + min;
            });
            newMixedSeries.push({ data: data, type: s.type });
          });
          this.setState({
            seriesMixedChart: newMixedSeries});
    }

    render() {
        return (
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="500"
            />
        );
    }
}