$(document).ready(function() {
  $('#submitButton').click(function(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const factor = $('#factor').val();
    const protein = $('#protein').val();
    const fat = $('#fat').val();

    const caloriesProtein = protein * 4;
    const caloriesFat = fat * 9;
    const alternativeGrams = (caloriesProtein + caloriesFat) / 10;
    const recommendedDose = alternativeGrams / factor;

    $('#calories-protein').val(caloriesProtein);
    $('#calories-fat').val(caloriesFat);
    $('#alternative-grams').val(alternativeGrams);
    $('#recommended-dose').val(recommendedDose);
  });
});
