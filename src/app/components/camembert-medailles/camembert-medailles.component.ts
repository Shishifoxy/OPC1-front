
import { Component, Input, OnInit } from '@angular/core';
import {ChartDataset, ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Country } from '../../core/interfaces/country.interface';

@Component({
    selector: 'app-camembert-medailles',
    templateUrl: './camembert-medailles.component.html',
    styleUrls: ['./camembert-medailles.component.css'],
})
export class CamembertMedaillesComponent implements OnInit {
    @Input() countries: Country[] = [];

    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartLabels: string[] = [];
    public pieChartData: ChartDataSets[] = [];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;

    ngOnInit() {
        // Transform data to match Chart.js format
        this.countries.forEach((country) => {
            const totalMedals = country.participations.reduce(
                (acc, participation) => acc + participation.medalsCount,
                0
            );

            this.pieChartLabels.push(country.country);
            this.pieChartData.push({ data: [totalMedals], label: country.country });
        });
    }
}
