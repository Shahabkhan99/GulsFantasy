
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const heightInput = document.getElementById("height").value.trim();
  const weightInput = document.getElementById("weight").value.trim();

  if (!heightInput || !weightInput) {
    showResult("⚠️ Please enter both height and weight!");
    result.style.background = "rgba(255, 200, 80, 0.12)";
    return;
  }

  const h = parseFloat(heightInput);
  const w = parseFloat(weightInput);

  if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    showResult("⚠️ Please enter valid positive numbers!");
    result.style.background = "rgba(255, 100, 100, 0.08)";
    return;
  }

  const heightMeters = h / 100;
  const bmi = +(w / (heightMeters * heightMeters)).toFixed(1);

  let category = "";
  let bg = "rgba(255,255,255,0.08)";

  if (bmi < 18.5) {
    category = "Underweight 😟";
    bg = "rgba(255, 165, 0, 0.08)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal ✅";
    bg = "rgba(0, 200, 100, 0.08)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight ⚠️";
    bg = "rgba(255, 215, 0, 0.08)";
  } else {
    category = "Obese ❌";
    bg = "rgba(255, 100, 100, 0.08)";
  }

  result.style.background = bg;
  showResult(`Your BMI: ${bmi} (${category})`);
});

function showResult(text) {
  result.textContent = text;
  result.classList.remove("show");
  void result.offsetWidth;
  result.classList.add("show");
}
