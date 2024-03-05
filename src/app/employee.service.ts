import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://dummy.restapiexample.com/api/v1/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});    // headers are mostly used for sending data to a server
  
  constructor(private http: HttpClient) { }   
getEmployee(id:number): Observable<Object> { //returns an observable of type Object
  return this.http.get(`${this.baseUrl}employees/${id}`);
}

createEmployee(employee: Object): Observable<Object>{
  return this.http.post(`${this.baseUrl}create`,employee, { headers:this.headers }); // post the employee data to api
}

CreateEmployeeatLocalStorage(employee: Employee){
  let storedEmployees = this.getEmployeeListFromLocalStorage();
  storedEmployees.push(employee);
  localStorage.setItem('employeesList', JSON.stringify(storedEmployees));
  return storedEmployees;
}

updateEmployee(id:number,value:any):Observable<Object> { //id represent the unique identifier of the employee and value represent the new data of the employee

  return this.http.put(`${this.baseUrl}update/${id}`, value, { headers:this.headers }); //It makes a PUT request to the API to update an existing employee with the provided id, sending the updated value data in the request body.
}


deleteEmployee(id:number): Observable<any> {

  return this.http.delete(`${this.baseUrl}delete/${id}`, { headers:this.headers });
}

getEmployeesList(): Observable<any> {
  return this.http.get(`${this.baseUrl}employees`)
} 

saveEmployeeListToLocalStorage(data: any):void {

localStorage.setItem('employeesList', JSON.stringify(data));

}


getEmployeeListFromLocalStorage(): Array<Employee> {
  const apiData = localStorage.getItem('employeesList');
  return apiData ? JSON.parse(apiData) : []; 
}


deleteEmployeeFromLocalStorage(id: number): Array<Employee> {
  let storedEmployees = this.getEmployeeListFromLocalStorage();
  if (storedEmployees) {
    const index = storedEmployees.findIndex((employee: Employee) => employee.id === id);
    if(index !== -1) {
    storedEmployees.splice(index,1);
    localStorage.setItem('employeesList',JSON.stringify(storedEmployees))
  }
  return storedEmployees;
}

}

updateEmployeeFromLocalStorage(id:number, value:any): Array<Employee> {
  let storedEmployees = this.getEmployeeListFromLocalStorage();
if (storedEmployees) {
  const index = storedEmployees.findIndex((employee: Employee) => employee.id === id);
if(index !== -1) {
  storedEmployees[index] = value;
  localStorage.setItem('employeesList',JSON.stringify(storedEmployees))

}

return storedEmployees;

}

}

}
