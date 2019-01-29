"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*BABEL: ES5 tüm browserlar destekliyor. Fakat ES6 ve sonrasını tüm browserlar desteklemiyor. Bunun için babel kullanıyoruz.
Babel; ES6 ve sonrası scriptlerimizi ES5 'e çevirmeye yarıyor.
Kurulumu için @babel/cli, @babel/core, @babel/polyfill ve @babel/preset-env --save-dev yani developer tool olarak ve
npm kullanarak kurmalıyız. İlk işlem için npm init işlemi yaparak package.json dosyasını oluşturmalıyız.
bunu local olarak kurduktan sonra .\node_modules\.bin\babel ile babel kullanabiliriz.
parametre  olarak verdiğimiz klasör veya dosyayı ES5 'e çevirerek lib isimli bir klasöre ekleyecektir.
*/
// Şimdi ES6 ile bir class oluşturup babel ile çevirelim
var Employee =
/*#__PURE__*/
function () {
  function Employee(name, age, salary) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  _createClass(Employee, [{
    key: "showInfos",
    value: function showInfos() {
      console.log('Adı:' + this.name + ' Yaş:' + this.age + ' Maaş:' + this.salary);
    }
  }], [{
    key: "calculateSalary",
    value: function calculateSalary(x) {
      console.log('Static method :' + x * 12);
    }
  }]);

  return Employee;
}();