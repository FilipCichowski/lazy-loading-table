import { Component, OnInit } from '@angular/core';
import {TableData} from "../../TableData";
import {TableDataService} from "../../services/table-data.service";

@Component({
  selector: 'app-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.css']
})
export class LazyTableComponent implements OnInit {
  displayedColumns = ['ID', 'Name', 'Description', 'Created'];
  dataSource: TableData[] = [];
  selectedRowIndex!: number;
  triggerOffset = 0;

  // onTableScroll(event: any): void {
  //   console.table(event.target);
  //   console.log(event.target.offsetHeight);
  //   console.log(event.target.scrollTop);
  //   const rowHeight = event.srcElement.childNodes[2].clientHeight;
  //   const numberOfColumnsScrolled = 30;
  //   const triggerValue = numberOfColumnsScrolled*rowHeight;
  //   const scrollLocation = event.target.scrollTop;
  //   //console.log(event);
  //   if (scrollLocation % triggerValue < 100) {
  //     console.log("event triggered");
  //   }
  // }

  onTableScroll(event: any): void {
    const tableHeight = event.target.offsetHeight;
    const offset = 50; // how many pixels before reaching bottom of the table event should be triggered
    const tableHeightWithOffset = tableHeight - offset;
    const scrollLocation = event.target.scrollTop;

    if(scrollLocation >= tableHeightWithOffset + this.triggerOffset) {
      console.log("event triggered");
      this.triggerOffset += tableHeightWithOffset;
    }
  }

  selectedRow(row: any) {
    console.log('selectedRow', row)
  }
  constructor(private tableDataService: TableDataService) { }

  ngOnInit(): void {
    this.dataSource = this.tableDataService.getTableData();
  }

}
