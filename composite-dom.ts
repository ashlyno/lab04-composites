interface IDomElement {
  print();
};

class DomElement implements IDomElement {
  name : string;
  text: string;
  element_list: IDomElement[];

  constructor(name : string, text?: string) {
    this.name = name;
    this.element_list = [];
    this.text = text;
  };

  addElement(element: IDomElement) {
    this.element_list.push(element);
  };

  print() {
    if (this.name == 'div') {
      console.log(` <${this.name}>`);
    } else if (this.name == 'p') {
      console.log(`   <${this.name}>`);
    } else {
      console.log(`<${this.name}>`);
    };
    if (this.text) {
      console.log(this.text);
    }
    this.element_list.forEach(e => {
      e.print();
    });
    if (this.name == 'div') {
      console.log(` </${this.name}>`);
    } else if (this.name == 'p') {
      console.log(`   </${this.name}>`);
    } else {
      console.log(`</${this.name}>`);
    };
  };
};

class TextNode implements IDomElement {
  private leaf : string;
  constructor(leaf : string) {
    this.leaf = leaf;
  };
  print() {
    console.log('     ' + this.leaf);
  };
};
