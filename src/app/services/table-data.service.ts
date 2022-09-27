import { Injectable } from '@angular/core';
import {TableData} from "../TableData";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  tableData: TableData[] = [];

  private initTable(): void {
    for(let i = 0; i < 256; i++) {
      this.tableData.push({
        ID: i,
        Name: `Jacek ${1}`,
        Description: "Lorem ipsum",
        Created: "2005-04-02"
      })
    }
  }

  getTableData(): TableData[] {
    return this.tableData;
  }

  constructor() {
    this.initTable();
  }
}
