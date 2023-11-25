$(document).ready(function() {
  $('#submitButton').click(function(event) {
    event.preventDefault(); // Prevent form submission

    if (!validateForm()) { // Validate user input
      return;
    }

    const factor = $('#factor').val();
    const protein = $('#protein').val();
    const fat = $('#fat').val();

    // Perform calculations
    const caloriesProtein = protein * 4;
    const caloriesFat = fat * 9;
    const alternativeGrams = (caloriesProtein + caloriesFat) / 10;
    const recommendedDose = alternativeGrams / factor;

    // Update result fields
    $('#calories-protein').val(caloriesProtein);
    $('#calories-fat').val(caloriesFat);
    $('#alternative-grams').val(alternativeGrams);
    $('#recommended-dose').val(recommendedDose);
  });
});
