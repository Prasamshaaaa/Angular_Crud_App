import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }


  printTable(){
    let printContents = document.getElementById('printtable').innerHTML;
    let originalContents = document.body.innerHTML;   //......This is done to restore the original content after printing.

    // Open a new window
    let printWindow = window.open();
    printWindow.document.open();

    // Set the contents of the new window to the table
    printWindow.document.write(`
        <html>
            <head>

                <title>Table Print</title>
                <link rel="stylesheet" type ='text/css' href="../../../../test.css">
                <style>

                .table-box {
                  margin: 10px;
                  border: 1px solid black; /* Border around the box */
                  padding: 10px; /* Padding inside the box */
                  width: fit-content; /* Adjust the width based on content */
              }
              
              table {
                  border-collapse: collapse;
                  width: 100%;
                  width: 1000px;
              }
              
              th, td {
                  padding: 2px;
                  text-align: left;
                  font-size: 12px; 
              
              }
              
              th {
                  background-color: #f2f2f2;
              }
              
              .bbbutton{
                  background-color: #4CAF50; 
                  border: none;
                  color: white;
                  padding: 8px 20px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 6px 2px;
                  cursor: pointer;
              }

                </style>
            </head>
            <body onload="window.print();">${printContents}</body>
        </html>
    `);

    printWindow.document.close();

    // Restore the original contents
    document.body.innerHTML = originalContents;
  }

  // printPage(){
  //   window.print();
  // }
  ngOnInit() {
  }

}
