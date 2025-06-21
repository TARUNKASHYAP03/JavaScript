let a = "hello";
let b = 42;
let c = true;
let d = null;
let e = undefined;
let f = { name: "Tarun" };
console.log(typeof e);

const arr = [12, 1, 2, 4, 5, 4];
function abc() {
  console.log(arr);
}
abc();

console.log(typeof abc, typeof arr);

/*
null is return in type of object
undefined is return in type of undefined
Ye ek JavaScript ka bug hai jo ECMAScript ke pehle version se chala aa raha hai.
null technically primitive hai, lekin typeof usko "object" return karta hai. 
Isko fix nahi kiya gaya backward compatibility ke liye.
*/

console.log(null == undefined); // ?
console.log("5" == 5); // ?
console.log("5" === 5); // ?

let x = NaN;
console.log(x === NaN); // true ya false?
console.log(isNaN(x)); // ?

/*

    
Here's a quick **JavaScript Type Coercion Cheat Sheet** to help you understand how values are converted:

---

### 🔢 **To Number**

| Value       | Coerced To Number |
| ----------- | ----------------- |
| `"123"`     | `123`             |
| `""`        | `0`               |
| `"abc"`     | `NaN`             |
| `true`      | `1`               |
| `false`     | `0`               |
| `null`      | `0`               |
| `undefined` | `NaN`             |
| `[]`        | `0`               |
| `[123]`     | `123`             |
| `{}`        | `NaN`             |

---

### 🔤 **To String**

| Value       | Coerced To String   |
| ----------- | ------------------- |
| `123`       | `"123"`             |
| `null`      | `"null"`            |
| `undefined` | `"undefined"`       |
| `true`      | `"true"`            |
| `[]`        | `""`                |
| `[1,2]`     | `"1,2"`             |
| `{}`        | `"[object Object]"` |

---

### ✅ **To Boolean**

| Value                                 | Coerced To Boolean |
| ------------------------------------- | ------------------ |
| `0`, `""`, `null`, `undefined`, `NaN` | `false`            |
| all others                            | `true`             |

---

### ⚖️ **Equality (`==`) Coercion Rules**

* `null == undefined` → `true`
* `"5" == 5` → `true`
* `false == 0` → `true`
* `"0" == false` → `true`
* `[] == false` → `true`
* `[] == ![]` → `true`

---

Let me know if you want a [printable PDF version](f) or [interactive practice questions](f).


*/
