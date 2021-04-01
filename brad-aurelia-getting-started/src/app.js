
import { Customer } from './customer';

export class App {
  constructor() {
    this.heading = 'Customer Manager';
    this.customers = JSON.parse(localStorage.getItem('customers'));

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  // getCustomersFromStorage() {
  //   let customers = JSON.parse(localStorage.getItem('customers'));

  //   if (!customers) {
  //     customers = [];
  //   }

  //   return customers;
  // } // Brads longer version

  // created() { this.customers = JSON.parse(localStorage.getItem('customers')); } // my solution with created() hook

  addCustomer() {
    if (this.customerName && this.customerEmail && this.customerPhone) {
      this.customers.push(new Customer(
        this.customerName,
        this.customerEmail,
        this.customerPhone
      ));
    }

    // store in local storage - LS only stores strings (not objects)
    localStorage.setItem('customers', JSON.stringify(this.customers));
    // this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone); // Brads version

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  // storeCustomer(name, email, phone) {
  //   let customers;

  //   if (localStorage.getItem('customers') === null) {
  //     customers = [];
  //   } else {
  //     customers = JSON.parse(localStorage.getItem('customers'));
  //   }

  //   customers.push({
  //     name: name,
  //     email: email,
  //     phone: phone
  //   });

  //   localStorage.setItem('customers', JSON.stringify(customers));
  // } // Brads version

  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);

    if (index !== -1) {
      this.customers.splice(index, 1);
      localStorage.setItem('customers', JSON.stringify(this.customers)); // my solution
      // this.removeFromStorage(index); // Brads version
    }
  }

  // removeFromStorage(index) {
  //   let customers = JSON.parse(localStorage.getItem('customers'));

  //   customers.splice(index, 1);

  //   localStorage.setItem('customers', JSON.stringify(this.customers));
  // } // Brads version

}
