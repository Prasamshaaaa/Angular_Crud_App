export class MenuItems {
    routerLink: string = '';
    value: string = '';
    displayOrder: number = 0;

    constructor(routerLink: string, value: string, displayOrder: number) {
        this.routerLink = routerLink;
        this.value = value;
        this.displayOrder = displayOrder;
    }

}

export class ThisIsAClassThatGivesMenuItems {
    static getMenuItems(): Array<MenuItems> {
        const menuItems = new Array<MenuItems>();
        menuItems.push(new MenuItems('add', 'Add', 2));
        menuItems.push(new MenuItems('employees', 'Employees', 1));
        menuItems.push(new MenuItems('aggg', 'Server Grid', 4));
        menuItems.push(new MenuItems('ag-grid', 'Grid', 3));
        menuItems.push(new MenuItems('category', 'Category', 5));
        menuItems.push(new MenuItems('db', 'DB', 7));
        menuItems.push(new MenuItems('material', 'Material', 6));
        menuItems.push(new MenuItems('shop', 'Shop', 8));
        menuItems.push(new MenuItems('report', 'Report', 10));
        menuItems.push(new MenuItems('cart', 'Cart', 9));
        menuItems.push(new MenuItems('lab-reagent-consumption', 'Lab Reagent Consumption', 11));
        menuItems.push(new MenuItems('autocomplete', 'Autocomplete', 12));
        menuItems.push(new MenuItems('assignmachine', 'Assign Machine', 13));

        //You can sort menuItems before returning them.
        return menuItems;
    }
}