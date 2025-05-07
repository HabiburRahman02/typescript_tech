{
    // 


    class Parent {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        makePharm() {
            console.log(`${this.name} Making farm in village`);
        };

    }

    const result = new Parent('Baba', 50);
    // console.log(result);

    class Child1 extends Parent {
        designation: string;
        innocent: boolean;
        constructor(name: string, age: number, designation: string, innocent: boolean) {
            super(name, age)
            this.designation = designation;
            this.innocent = innocent
        }

    }

    class Child2 extends Parent {
        smart: boolean;
        constructor(name: string, age: number, smart: boolean) {
            super(name, age)
            this.smart = smart
        }

    }


    const result2 = new Child2('abul', 23, true);
    console.log(result2);





    // 
}