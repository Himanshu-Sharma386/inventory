#include <iostream>
#include <fstream>
#include <string>
using namespace std;

class temp {
    string itemID, itemName;
    int itemQuantity, itemPrice;
    fstream file, file1;
    int totalAmount = 0, quantity, itemRate;
    string search;
    char _choice;

public:
    void addProduct(void);
    void viewProduct(void);
    void buyProduct(void);
    bool adminLogin(void);
} obj;

int main() {
    cout << "----------------------------------------" << endl;
    cout << "       Welcome to H-Mart!               " << endl;
    cout << "----------------------------------------" << endl;

    char choice;
    while (true) {
        cout << "\nPRESS A --> ADMIN (Add Products) " << endl;
        cout << "PRESS 1 --> START SHOPPING " << endl;
        cout << "PRESS 0 --> EXIT " << endl;
        cin >> choice;
        cin.ignore(); //  for Ignore remaining newline after choice input

        switch (choice) {
            case 'A':
                if (obj.adminLogin()) {
                    obj.addProduct();
                } else {
                    cout << "Access Denied. Incorrect Password!" << endl;
                }
                break;
            case '1':
                obj.viewProduct();
                obj.buyProduct();
                break;
            case '0':
                cout << "Thanks for shopping! Visit P-Mart again." << endl;
                return 0;
            default:
                cout << "INVALID SELECTION...!" << endl;
                break;
        }
    }
}

bool temp::adminLogin() {
    string password;
    cout << "Enter Admin Password: ";
    cin >> password;
    return password == "admin123"; 
}

void temp::addProduct() {
    char addMore = 'y';
    while (addMore == 'y' || addMore == 'Y') {
        cout << "Enter Product ID :: ";
        cin >> itemID;
        cin.ignore();

        cout << "Enter Product Name :: ";
        getline(cin, itemName); 

        cout << "Enter Product Quantity :: ";
        cin >> itemQuantity;
        cout << "Enter Product Price :: ";
        cin >> itemPrice;

        file.open("data.txt", ios::out | ios::app);
        file << itemID << "\t" << itemName << "\t" << itemQuantity << "\t" << itemPrice << "\n";
        file.close();
        cout << "Product added successfully!" << endl;

        cout << "Do you want to add another product? (Y/N): ";
        cin >> addMore;
        cin.ignore(); 
    }
}

void temp::viewProduct() {
    file.open("data.txt", ios::in);
    if (!file) {
        cout << "No data found." << endl;
        return;
    }
    cout << "------------------------------------------------------------------------" << endl;
    cout << "Product Id\tProduct Name\tProduct Quantity\tProduct Price" << endl;
    cout << "------------------------------------------------------------------------" << endl;

    while (file >> itemID) {
        file.ignore(); 
        getline(file, itemName, '\t'); // Read itemName with spaces until the tab character
        file >> itemQuantity >> itemPrice;
        file.ignore();

        cout << itemID << "\t\t" << itemName << "\t\t" << itemQuantity << "\t\t\t" << itemPrice << endl;
    }
    cout << "------------------------------------------------------------------------" << endl;
    file.close();
}

void temp::buyProduct() {
    _choice = 'y';

    while (_choice == 'y' || _choice == 'Y') {
        file.open("data.txt", ios::in);
        file1.open("temp.txt", ios::out | ios::app);

        cout << "ENTER PRODUCT ID :: ";
        cin >> search;
        cout << "ENTER QUANTITY: ";
        cin >> quantity;

        bool productFound = false;
        while (file >> itemID) {
            file.ignore();
            getline(file, itemName, '\t');
            file >> itemQuantity >> itemPrice;
            file.ignore();

            if (itemID == search) {
                productFound = true;
                if (quantity <= itemQuantity) {
                    itemQuantity -= quantity;
                    itemRate = quantity * itemPrice;
                    totalAmount += itemRate;
                    cout << "Product bought successfully!" << endl;
                } else {
                    cout << "Insufficient quantity available." << endl;
                }
            }
            file1 << itemID << "\t" << itemName << "\t" << itemQuantity << "\t" << itemPrice << "\n";
        }

        if (!productFound) {
            cout << "Product not found!" << endl;
        }

        file.close();
        file1.close();

        remove("data.txt");
        rename("temp.txt", "data.txt");

        cout << "--------------------------------" << endl;
        cout << "TOTAL PURCHASE AMOUNT  :: " << totalAmount << endl;
        cout << "--------------------------------" << endl;

        cout << "\nCONTINUE SHOPPING? (Y / N): ";
        cin >> _choice;
    }
}