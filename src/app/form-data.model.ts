export interface FormData {
    name: string;
    fieldofInterest: string;
    reasonForInterest: string;
}


// For Dynamic Template

export interface FormFieldOption {
    label: string;
    value: string | number | boolean;  //...value type can store values that are either strings, numbers, or booleans
  }
  
  export interface FormField {
    id: string;
    name: string;
    label: string;

    type: 'text' | 'number' | 'select' | 'radio' | 'checkbox';

    initialValue: string | number | boolean;
    options?: FormFieldOption[];
  }


  //Interface for shop

  export interface Product {
    id:number;
    name: string;
    description: string;
    price: number;

    imageUrl: string;

    quantity?: number; //optional

  }

   export interface BillItem {
    productId: number;
    productName: string;
    quantity: number;
    name: string;
    price: number;
  }
  

  // class for MachineAssignment

  export interface TestName {
    Id: number;
    Name: string;
  }
  
  export interface MachineName {
    Id: number;
    Name: string;
  }
  
 
  export class MachineAssignment {
    //testName: string = '';
    testName: TestName = { Id: 0, Name: '' };

    //machineName: string = '';

    machineName: MachineName = { Id: 0, Name: '' };

    isDefault: boolean = false;
    status: boolean = true;

    

  }
  