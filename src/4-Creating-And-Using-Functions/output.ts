const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id: string) {
  // TODO
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  };

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(77, 111));

  const sampleProducts = [
    { id: 10, name: 'Pizza slice', icon: 'fas fa-pizza-slice' },
    { id: 20, name: 'Ice cream', icon: 'fas fa-ice-cream' },
    { id: 30, name: 'Cheese', icon: 'fas fa-cheese' },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((p) => id === p.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(30));

  function displayProducts(products: ProductType[]) {
    const productNames = products.map((p) => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);
}
