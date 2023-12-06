var crops = [
 { crop: 'Tomato', soil: 'sandy', season: 'summer' },
 { crop: 'Corn', soil: 'sandy', season: 'summer' },
 { crop: 'Cucumber', soil: 'sandy', season: 'monsoon' },
 { crop: 'Papaya', soil: 'sandy', season: 'monsoon' },
 { crop: 'Cabbage', soil: 'sandy', season: 'winter' },
 { crop: 'Carrot', soil: 'sandy', season: 'winter' },
 { crop: 'Banana', soil: 'loamy', season: 'summer' },
 { crop: 'Rice', soil: 'loamy', season: 'summer' },
 { crop: 'Begonia', soil: 'loamy', season: 'monsoon' },
 { crop: 'Tulip', soil: 'loamy', season: 'monsoon' },
 { crop: 'Bottle Gourd', soil: 'loamy', season: 'winter' },
 { crop: 'Chilli', soil: 'loamy', season: 'winter' },
 { crop: 'Cotton', soil: 'clay', season: 'summer' },
 { crop: 'Tea', soil: 'clay', season: 'summer' },
 { crop: 'Grapes', soil: 'clay', season: 'monsoon' },
 { crop: 'Jackfruit', soil: 'clay', season: 'monsoon' },
 { crop: 'Guava', soil: 'clay', season: 'winter' },
 { crop: 'Mango', soil: 'clay', season: 'winter' },
 { crop: 'Potato', soil: 'sandy', season: 'summer'},
  
  
];

function getCrop(soil, season) {
 var recommendedCrops = [];
 crops.forEach(function(crop) {
    if (crop.soil === soil && crop.season === season) {
      recommendedCrops.push(crop.crop);
    }
 });
 return recommendedCrops.join(', ');
}

document.getElementById('form').addEventListener('submit', function(event) {
 event.preventDefault();

 var soilType = document.getElementById('soilType').value;
 var season = document.getElementById('season').value;

 var result = '';

 if (soilType && season) {
    result = getCrop(soilType, season);
 } else {
    result = 'Please select both Soil Type and Season.';
 }

 document.getElementById('result').innerHTML = result;
});
