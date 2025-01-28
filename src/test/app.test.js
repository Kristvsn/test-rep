// import { nameIsValid } from "../app"

import { fullTrim, getTotal } from "../app"

// describe('nameIsValid',()=>{
//     it('amountSymbol',()=>{
//         expect(nameIsValid("ivan")).toBe(true)
//         expect(nameIsValid("m")).toBe(false)
//     })
//     it('typeName',()=>{
//         expect(nameIsValid('ivan')).toBe(true)
//         expect(nameIsValid(2)).toBe(false)
//     })
//     it('testFun',()=>{
//         expect(nameIsValid('ivan')).toBe(true)
//         expect(nameIsValid('Иван')).toBe(false)
//         expect(nameIsValid('Ivan')).toBe(false)
//     })
// })

// describe('fullTrim',()=>{
//     it('deleteSpace',()=>{
//         expect(fullTrim("i van")).toBe('ivan')
//         expect(fullTrim("ivan")).toBe('ivan')
//     })
// })

// describe('getTotal',()=>{
//     it('getSum',()=>{
//         expect(()=>getTotal([{quantity: 10, price:10}],'number')).toThrowError('Скидка должна быть числом')
//     })
// })

describe('getTotal', () =>{
    it.each([
    // Тест без скидки
    [{ items: [{ price: 10, quantity: 10 }], discount: 0 }, 100],
    // Тест с скидкой 10%
    [{ items: [{ price: 10, quantity: 10 }], discount: 10 }, 90],
    // Тест с нулевым количеством товара
    [{ items: [{ price: 10, quantity: 0 }], discount: 90}, 0],
    // Тест с отрицательной скидкой (должен выбросить ошибку)
    [{ items: [{ price: 10, quantity: 10 }], discount: -1 }, 'Процент скидки должен быть от 0 до 99'],
    // Тест с скидкой больше 99 (должен выбросить ошибку)
    [{ items: [{ price: 10, quantity: 10 }], discount: 100 }, 'Процент скидки должен быть от 0 до 99'],
    // Тест с некорректным типом скидки (должен выбросить ошибку)
    [{ items: [{ price: 10, quantity: 10 }], discount: 'not-a-number' }, 'Скидка должна быть числом']
  ])(
    'getTotal',
    ({ items, discount }, expected) => {
      if (typeof expected == 'number') {
        expect(getTotal(items, discount)).toBe(expected);
      } else {
        expect(() => getTotal(items, discount)).toThrow(expected);
      }
    }
  );
});
       
