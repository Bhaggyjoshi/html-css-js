var shoppingCart = function () {
    var obj = {}, items = [];

    obj.AddItem = function (name, quantity, price) {
        var item = {};
        item.name = itemNo;
        item.quantity = quantity;
        item.price = price;
        items.push(item)
    };

    obj.GetAllItems = function () {
        return items;
    };

    obj.GetItemByNo = function (item) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].itemNo === item)
                return item[i];
        }
        return null;
    };

    obj.CalculateTotal = function () {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total = total + (items[i].quantity * items[i].price);
        }
        return total;
    };

    return obj;
};