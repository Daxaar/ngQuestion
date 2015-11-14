var Customer = (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getFullName = function () {
        return "";
    };
    return Customer;
})();
//# sourceMappingURL=tsoutput.js.map