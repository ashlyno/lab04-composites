;
var DomElement = (function () {
    function DomElement(name, text) {
        this.name = name;
        this.element_list = [];
        this.text = text;
    }
    ;
    DomElement.prototype.addElement = function (element) {
        this.element_list.push(element);
    };
    ;
    DomElement.prototype.print = function () {
        if (this.name == 'div') {
            console.log(" <" + this.name + ">");
        }
        else if (this.name == 'p') {
            console.log("   <" + this.name + ">");
        }
        else {
            console.log("<" + this.name + ">");
        }
        ;
        if (this.text) {
            console.log(this.text);
        }
        this.element_list.forEach(function (e) {
            e.print();
        });
        if (this.name == 'div') {
            console.log(" </" + this.name + ">");
        }
        else if (this.name == 'p') {
            console.log("   </" + this.name + ">");
        }
        else {
            console.log("</" + this.name + ">");
        }
        ;
    };
    ;
    return DomElement;
}());
;
var TextNode = (function () {
    function TextNode(leaf) {
        this.leaf = leaf;
    }
    ;
    TextNode.prototype.print = function () {
        console.log('     ' + this.leaf);
    };
    ;
    return TextNode;
}());
;
