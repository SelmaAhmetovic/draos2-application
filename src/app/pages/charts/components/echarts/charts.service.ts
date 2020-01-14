import { Injectable } from '@angular/core';

@Injectable()
export class ChartsService {
    xAxisData = [];
    data1 = [];
    data2 = [];
    constructor() {
        for (var i = 0; i < 100; i++) {
            this.xAxisData.push('Type ' + i);
            this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
    }

    PieOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['SQL', 'Java Spring Boot', 'C# .NET Framework','CSS' ,'HTML' ,'Angular 7','JavaScript','NodeJs']
        },
        roseType: 'angle',
        series: [
            {
                name: 'PieChart',
                type: 'pie',
                radius: [0, '50%'],
                data: [
                    { value: 235, name: 'SQL' },
                    { value: 210, name: 'Java Spring Boot' },
                    { value: 162, name: 'C# .NET Framework' },
                    { value: 150, name: 'CSS' },
                    { value: 150, name: 'PHP' },
                    { value: 234, name: 'HTML' },
                    { value: 150, name: 'Angular 7' },
                    { value: 150, name: 'JavaScript' },
                    { value: 150, name: 'NodeJs' },
                ]
            }
        ]
    }

    LineOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    };

    BarOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Level',
                type: 'bar',
                barWidth: '60%',
                data: [334, 334, 200, 100, 52]
            }
        ]
    };

  BarOptionUser = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Java Spring Boot', 'Angular', 'C#', 'JavaScript', 'C++'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Level',
        type: 'bar',
        barWidth: '40%',
        data: [5, 4, 3, 5, 3]
      }
    ]
  };





    AnimationBarOption = {
        legend: {
            data: ['Example data1', 'Example data2'],
            align: 'left'
        },
        /* toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        }, */
        tooltip: {},
        xAxis: {
            data: this.xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: 'Example data1',
            type: 'bar',
            data: this.data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'Example data2',
            type: 'bar',
            data: this.data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    getBarOption() {
        return this.BarOption;
    }
    getBarOptionUser() {
        return this.BarOptionUser;
    }
    getLineOption() {
        return this.LineOption;
    }
    getPieOption() {
        return this.PieOption;
    }
    getAnimationBarOption() {
        return this.AnimationBarOption;
    }
}
