const str = `
Mark Johansson	waffle iron	80	2
Mark Johansson	blender	200	1
Mark Johansson	knife	10	4
Nikita Smith	waffle iron	80	1
Nikita Smith	knife	10	2
Nikita Smith	pot	20	3
`;

const output = str
    .trim()
    .split("\n")
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })

        return customers
    }, {})

console.log(output)