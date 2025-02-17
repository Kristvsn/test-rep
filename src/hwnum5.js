 /**
 * Функция для подсчета суммы всех баллов из объекта с успеваемостью.
 * 
 * @param {Object} scores - Объект, где ключи — имена пользователей (строки), а значения — их баллы (числа).
 * @returns {number} Возвращает сумму всех баллов.
 *
 * @example
 * const scores = {
 *   Anna: 10,
 *   Olga: 1,
 *   Ivan: 5,
 * };
 * console.log(getScore(scores));  // Выведет: 16
 */
function getScore(scores) {
    let totalScore = 0;
    for (let key in scores) {
      totalScore += scores[key];
    }
    return totalScore;
  }
  const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  console.log(getScore(scores));