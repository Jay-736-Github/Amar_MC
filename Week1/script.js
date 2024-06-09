document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const threeMonthPrices = document.querySelectorAll('.price.three-month');
    const yearlyPrices = document.querySelectorAll('.price.yearly');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'block');
            threeMonthPrices.forEach(price => price.style.display = 'none');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'block');
            yearlyPrices.forEach(price => price.style.display = 'none');
            threeMonthPrices.forEach(price => price.style.display = 'none');
        }
    });

    // Default to monthly pricing
    monthlyPrices.forEach(price => price.style.display = 'block');
    yearlyPrices.forEach(price => price.style.display = 'none');
    threeMonthPrices.forEach(price => price.style.display = 'none');
});
