var elForm = document.querySelector('.form');
var elForm2 = document.querySelector('.form2');
var elInput = document.querySelector('.input1');
var elSelectLanguage = document.querySelector('.language');
var elResult = document.querySelector('.result');
var elExplain = document.querySelector('.explain');
var option1 = document.querySelector('.option1');
var elSelection = document.querySelector('.selection');
var elButton = document.querySelector('.btn');


elForm2.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (elSelectLanguage.value == 11) {
    elExplain.textContent = 'Toplagan balingizni kiriting!';
    option1.textContent = 'Universitetingizni tanlang';
    elResult.textContent = 'Javob shu yerda aks ettiriladi!';
    elButton.textContent = 'Jonatish';
    return;
  }else if (elSelectLanguage.value == 12) {
    elExplain.textContent = 'Введите свой балл!';
    option1.textContent = 'Выберите юниверситет';
    elResult.textContent = 'Ответ будет отображаться здесь!';
    elButton.textContent = 'Готова';
    return;
  }else if (elSelectLanguage.value == 13) {
    elExplain.textContent = 'Enter your score!';
    option1.textContent = 'Choose universities';
    elResult.textContent = 'Answer will be displayed here!';
    elButton.textContent = 'Done';
    return;
  };
})


elForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (elSelection.value == 1){
    if (elInput.value < 30) {
      elResult.textContent = 'Siz otmagan ekansiz!';
      return;
    } else if (elInput.value < 40) {
      elResult.textContent = 'Siz super kontraktga kirdingiz!';
      return;
    } else if (elInput.value < 70) {
      elResult.textContent = 'Siz kontraktga kirdingiz!';
      return;
    } else if (elInput.value <= 100) {
      elResult.textContent = 'Siz Grantga kirdingiz!';
      return;
    } return;
  } else if (elSelection.value == 2){
    if (elInput.value < 30) {
      elResult.textContent = 'Siz otmagan ekansiz!';
      return;
    } else if (elInput.value < 40) {
      elResult.textContent = 'Siz super kontraktga kirdingiz!';
      return;
    } else if (elInput.value < 70) {
      elResult.textContent = 'Siz kontraktga kirdingiz!';
      return;
    } else if (elInput.value <= 100) {
      elResult.textContent = 'Siz Grantga kirdingiz!';
      return;
    } return;
} else if (elSelection.value == 3){
  if (elInput.value < 40) {
    elResult.textContent = 'Siz otmagan ekansiz!';
    return;
  } else if (elInput.value < 50) {
    elResult.textContent = 'Siz super kontraktga kirdingiz!';
    return;
  } else if (elInput.value < 80) {
    elResult.textContent = 'Siz kontraktga kirdingiz!';
    return;
  } else if (elInput.value <= 100) {
    elResult.textContent = 'Siz Grantga kirdingiz!';
    return;
  } return;
}
})
