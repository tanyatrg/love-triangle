/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  var A = 0;
  var B = 0;
  var C = 0;
  var D = 0;
  var otvet = 0;
  for (var i = 0; i < preferences.length; i++) {
    if(i!=A-1 && i!=B-1 && i!=C-1 ){
      A = preferences[i];
      B = preferences[A-1];
      C = preferences[B-1];
      D = preferences[C-1];
      if (A != B && B != C && A != C && D == A )
        count++;
      else {
         i++;
           }
    }
  }
  return count;
};
// посчитать количество треугольников чисел) там где А имеет значение В, В имеет значение С, С имеет значение А
