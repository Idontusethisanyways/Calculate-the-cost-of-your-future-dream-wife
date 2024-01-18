function count_this() {
  const points = {
    age: 100 - parseInt(document.querySelector('input[name="age"]').value),
    height: parseInt(document.querySelector('input[name="age1"]').value),
    eyeColor: parseInt(document.querySelector('input[name="eye[]"]:checked').value || 0),
    hairColor: parseInt(document.querySelector('input[name="hair[]"]:checked').value || 0),
    hairLength: parseInt(document.querySelector('input[name="hairl[]"]:checked').value || 0),
    bodyShape: parseInt(document.querySelector('input[name="shape[]"]:checked').value || 0),
    education: parseInt(document.querySelector('input[name="yn[]"]:checked').value || 0),
    home: parseInt(document.querySelector('input[name="yn1[]"]:checked').value || 0),
    lifestyle: parseInt(document.querySelector('input[name="yn2[]"]:checked').value || 0),
    interests: parseInt(document.querySelector('input[name="yn3[]"]:checked').value || 0),
    nationality: parseInt(document.querySelector('input[name="yn4[]"]:checked').value || 0),
    religion: parseInt(document.querySelector('input[name="yn5[]"]:checked').value || 0),
  };

  const totalPoints = Object.values(points).reduce((total, value) => total + value, 0);

  alert('Қалын мал құны: ' + totalPoints * 5749 + 'KZT');
}