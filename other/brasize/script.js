let isInches = true;
const switchEl = document.getElementById('toggleSwitch');

function toggleUnit() {
    const band = parseFloat(document.getElementById('band').value) || 0;
    const bust = parseFloat(document.getElementById('bust').value) || 0;
    const unit1 = document.getElementById('unit1');
    const unit2 = document.getElementById('unit2');

    if (isInches) {
        // Convert to cm
        document.getElementById('band').value = (band * 2.54).toFixed(1);
        document.getElementById('bust').value = (bust * 2.54).toFixed(1);
        unit1.textContent = unit2.textContent = 'cm';
        switchEl.classList.add('active');
    } else {
        // Convert to inches
        document.getElementById('band').value = (band / 2.54).toFixed(2);
        document.getElementById('bust').value = (bust / 2.54).toFixed(2);
        unit1.textContent = unit2.textContent = 'in';
        switchEl.classList.remove('active');
    }
    isInches = !isInches;
    calc();
}

function calc() {
    let band = parseFloat(document.getElementById('band').value) || 0;
    let bust = parseFloat(document.getElementById('bust').value) || 0;

    if (!isInches) {
        band /= 2.54;
        bust /= 2.54;
    }

    let bandSize = Math.round(band);
    if (bandSize % 2 === 1) bandSize += 1;

    const diff = Math.round(bust - bandSize);
    const cups = ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'G', 'H', 'I', 'J'];
    const cup = diff >= 0 && diff < cups.length ? cups[diff] : 'J+';

    const result = document.getElementById('result');
    result.textContent = bandSize + cup;
    result.style.display = 'block';
}

// Auto-calculate on load
window.addEventListener('load', calc);