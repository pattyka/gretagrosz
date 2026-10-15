// Days 21–35 (27 and 28 are in reused.js). Keys are plan days (1–150).
// Every answer was checked by computer. hints = [a small nudge, the key idea, the first step].
export default {
  21: {
    lesson: {
      idea: 'Thales: if BC is a diameter of a circle and A is any other point on it, then ∠BAC = 90°. And the other way round: a right triangle’s hypotenuse is a diameter of its circumcircle, so the midpoint of the hypotenuse is the circumcentre and is equally far from all three vertices. In every triangle the circumcentre O is where the perpendicular bisectors of the sides meet, because each point on the bisector of BC is equally far from B and C.',
      steps: ['See a diameter? Look for a right angle on the circle.', 'See a right angle? Draw the circle on the hypotenuse; its midpoint is the centre.', 'O is equally far from A, B, C, so triangles OAB, OBC, OCA are isosceles. Use their equal base angles.'],
      example: {
        q: 'A right triangle has legs 6 and 8. Find its circumradius.',
        a: 'The hypotenuse is √(36 + 64) = 10 and it is a diameter, so R = 5.',
      },
      de: [['Satz des Thales', 'Thales’ theorem'], ['Umkreis', 'circumcircle'], ['Umkreismittelpunkt', 'circumcentre'], ['Streckensymmetrale', 'perpendicular bisector']],
    },
    problems: [
      {
        type: 'answer',
        q: 'A right triangle has legs 5 and 12. M is the midpoint of the hypotenuse.\n\nHow far is M from the vertex with the right angle?',
        answers: ['6.5', '13/2'],
        hints: ['Where is the centre of the circumcircle of a right triangle?', 'M is the circumcentre, so it is equally far from all three vertices.', 'The hypotenuse is √(25 + 144) = 13.'],
        solution: 'The hypotenuse is 13. By Thales, M is the circumcentre, so its distance to every vertex is the radius 13/2 = 6.5.',
      },
      {
        type: 'answer',
        q: 'ABC is an acute triangle with circumcentre O and ∠BAC = 50°.\n\nFind ∠OBC in degrees.',
        answers: ['40'],
        hints: ['Triangle OBC is isosceles. Why?', 'The angle at the centre is twice the angle at the circle: ∠BOC = 2·∠BAC.', '∠BOC = 100°, and OB = OC.'],
        solution: '∠BOC = 2·50° = 100°. OB = OC, so ∠OBC = (180° − 100°)/2 = 40°.',
      },
      {
        type: 'proof',
        q: 'In triangle ABC, M is the midpoint of BC and MA = MB = MC.\n\nProve that ∠BAC = 90°.',
        hints: ['Look at the two triangles ABM and ACM.', 'Both are isosceles, so they have equal base angles.', 'Call ∠ABC = β and ∠ACB = γ. Then ∠MAB = β and ∠MAC = γ.'],
        keySteps: ['MA = MB, so triangle ABM is isosceles and ∠MAB = ∠MBA = β.', 'MA = MC, so ∠MAC = ∠MCA = γ.', 'So ∠BAC = β + γ.', 'Angle sum: ∠BAC + β + γ = 180°, so 2·∠BAC = 180° and ∠BAC = 90°.'],
        solution: 'Let β = ∠ABC and γ = ∠ACB. Since MA = MB, triangle ABM is isosceles and ∠MAB = β. Since MA = MC, ∠MAC = γ. M lies on BC, so ∠BAC = ∠MAB + ∠MAC = β + γ.\n\nThe angles of ABC add up to 180°: (β + γ) + β + γ = 180°, so β + γ = 90° and ∠BAC = 90°.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Two circles meet at the points A and B. AC is a diameter of the first circle and AD is a diameter of the second.\n\nProve that C, B and D lie on one line.',
      keySteps: ['AC is a diameter and B is on the first circle, so ∠ABC = 90° (Thales).', 'AD is a diameter and B is on the second circle, so ∠ABD = 90°.', 'So BC and BD are both perpendicular to AB at B.', 'There is only one line through B perpendicular to AB, so C, B, D are collinear.'],
      solution: 'B lies on the first circle and AC is its diameter, so ∠ABC = 90° by Thales. In the same way ∠ABD = 90°.\n\nSo the lines BC and BD are both perpendicular to AB and both pass through B. There is only one such line, so C, B and D lie on it.\n\n(If B = C or B = D the statement is trivial.)',
    },
  },

  22: {
    lesson: {
      idea: 'In congruences you may add, subtract and multiply, but dividing is careful work. If ac ≡ bc (mod m), you may cancel c only if gcd(c, m) = 1; in general a ≡ b (mod m/gcd(c, m)). Instead of dividing by a, multiply by its inverse: a number a′ with a·a′ ≡ 1 (mod m). It exists exactly when gcd(a, m) = 1, and you find it by trying multiples or with Euclid’s algorithm.',
      steps: ['To solve ax ≡ b (mod m): check gcd(a, m) = 1.', 'Find the inverse a′ (try a·1, a·2, … until you get 1).', 'Multiply both sides by a′: x ≡ a′b (mod m).', 'If gcd(a, m) = d > 1: there are solutions only if d divides b; then divide a, b and m by d.'],
      example: {
        q: 'Solve 3x ≡ 4 (mod 7).',
        a: '3·5 = 15 ≡ 1, so the inverse of 3 is 5. Multiply: x ≡ 20 ≡ 6 (mod 7). Check: 18 = 14 + 4. ✓',
      },
      de: [['Inverses Element', 'inverse'], ['kürzen', 'cancel'], ['teilerfremd', 'coprime'], ['lineare Kongruenz', 'linear congruence']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Find the smallest positive integer x with\n\n7x ≡ 3 (mod 11).',
        answers: ['2'],
        hints: ['Don’t divide by 7. What can you multiply by instead?', 'Find the inverse of 7 mod 11: which multiple of 7 is 1 more than a multiple of 11?', '7·8 = 56 = 55 + 1, so the inverse is 8.'],
        solution: '7·8 = 56 ≡ 1 (mod 11), so multiply by 8: x ≡ 24 ≡ 2 (mod 11). Check: 14 = 11 + 3. ✓',
      },
      {
        type: 'answer',
        q: 'How many of the numbers x = 1, 2, …, 100 satisfy\n\n6x ≡ 4 (mod 10)?',
        answers: ['20'],
        hints: ['gcd(6, 10) = 2, so you can’t just cancel. What can you do instead?', 'Divide everything, including the modulus, by 2.', '6x ≡ 4 (mod 10) is the same as 3x ≡ 2 (mod 5).'],
        solution: 'Divide by 2 including the modulus: 3x ≡ 2 (mod 5). The inverse of 3 mod 5 is 2, so x ≡ 4 (mod 5). The numbers 4, 9, …, 99: that is 20 numbers.',
      },
      {
        type: 'proof',
        q: 'Let p be a prime and a an integer not divisible by p.\n\nProve that the numbers a, 2a, 3a, …, (p − 1)a all leave different remainders when divided by p, and none of them leaves remainder 0.',
        hints: ['Suppose two of them had the same remainder. What would that mean?', 'Same remainder means p divides the difference ia − ja = (i − j)a.', 'p is prime and doesn’t divide a, so p must divide i − j.'],
        keySteps: ['Suppose ia ≡ ja (mod p) with 1 ≤ j < i ≤ p − 1.', 'Then p | (i − j)a. Since p is prime and p ∤ a, p | i − j.', 'But 0 < i − j < p, contradiction. So the remainders are all different.', 'ia ≡ 0 would mean p | i·a, impossible since p ∤ i and p ∤ a.'],
        solution: 'Suppose ia and ja (1 ≤ j < i ≤ p − 1) leave the same remainder. Then p divides ia − ja = (i − j)a. A prime that divides a product divides one of the factors, and p ∤ a, so p | i − j. But 0 < i − j < p, a contradiction.\n\nIf p divided ia, then p | i or p | a; both are impossible since 1 ≤ i ≤ p − 1. So no remainder is 0.',
      },
    ],
    challenge: {
      source: 'IMO 1959',
      q: 'Prove that the fraction\n\n(21n + 4) / (14n + 3)\n\ncannot be reduced for any natural number n.',
      keySteps: ['Let d be a common divisor of 21n + 4 and 14n + 3.', 'Then d divides every combination, e.g. 3(14n + 3) − 2(21n + 4).', 'That combination equals 42n + 9 − 42n − 8 = 1.', 'So d = 1: numerator and denominator are coprime.'],
      solution: 'Let d divide both 21n + 4 and 14n + 3. Then d also divides 3(14n + 3) − 2(21n + 4) = 42n + 9 − 42n − 8 = 1. So d = 1, and the fraction is already in lowest terms.',
    },
  },

  23: {
    lesson: {
      idea: 'To solve a system, remove one unknown at a time: solve one equation for a variable and substitute it, or add and subtract equations so that a variable cancels. If the system doesn’t change when you swap x and y (a symmetric system), set s = x + y and p = xy. Then x and y are the roots of t² − st + p = 0, and they are real only if s² ≥ 4p.',
      steps: ['Linear system: add or subtract equations to cancel a variable.', 'Symmetric system: rewrite everything with s = x + y and p = xy. Useful: x² + y² = s² − 2p.', 'Solve for s and p, then get x and y from t² − st + p = 0.', 'Check every solution in the original system.'],
      example: {
        q: 'Solve x + y = 5, xy = 6.',
        a: 'x and y are the roots of t² − 5t + 6 = (t − 2)(t − 3). So (x, y) = (2, 3) or (3, 2).',
      },
      de: [['Gleichungssystem', 'system of equations'], ['einsetzen', 'substitute'], ['symmetrisch', 'symmetric'], ['Lösungsmenge', 'solution set']],
    },
    problems: [
      {
        type: 'answer',
        q: 'The real numbers x and y satisfy x + y = 7 and x² + y² = 29.\n\nFind xy.',
        answers: ['10'],
        hints: ['You don’t need x and y themselves.', 'Write x² + y² using x + y and xy.', '(x + y)² = x² + 2xy + y².'],
        solution: '49 = (x + y)² = x² + y² + 2xy = 29 + 2xy, so xy = 10. (Indeed x, y = 2 and 5.)',
      },
      {
        type: 'answer',
        q: 'Solve the system\n\nx + 2y + 3z = 14\n2x + y + z = 7\n3x + y + 2z = 11\n\nand give the value of xyz.',
        answers: ['6'],
        hints: ['Cancel one variable using two pairs of equations.', 'Subtract the second equation from the third to get a simple equation in x and z.', 'Third minus second: x + z = 4.'],
        solution: 'Third minus second: x + z = 4. Second times 2 minus first: 3x − z = 0, so z = 3x and x = 1, z = 3. From the second equation y = 7 − 2 − 3 = 2. So (x, y, z) = (1, 2, 3) and xyz = 6.',
      },
      {
        type: 'proof',
        q: 'Find all real numbers x, y, z with\n\nx + y = 2 and xy − z² = 1,\n\nand prove there are no others.',
        hints: ['Use the first equation to remove y.', 'After substituting, try to write everything as a sum of squares.', 'With y = 2 − x: x(2 − x) − z² = 1, i.e. −(x − 1)² − z² = 0.'],
        keySteps: ['From the first equation y = 2 − x.', 'Substituting: 2x − x² − z² = 1, so (x − 1)² + z² = 0.', 'A sum of squares of reals is 0 only if each square is 0: x = 1, z = 0.', 'Then y = 1. Check: (1, 1, 0) works.'],
        solution: 'From x + y = 2 we get y = 2 − x. Then the second equation becomes 2x − x² − z² = 1, i.e. x² − 2x + 1 + z² = 0, i.e. (x − 1)² + z² = 0.\n\nBoth squares are ≥ 0, so both are 0: x = 1 and z = 0, and then y = 1. Check: 1 + 1 = 2 and 1 − 0 = 1. So the only solution is (x, y, z) = (1, 1, 0).',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Find all pairs of real numbers (x, y) with\n\nx + y + xy = 11 and x²y + xy² = 30.',
      answers: ['(1, 5), (5, 1), (2, 3), (3, 2)'],
      keySteps: ['With s = x + y, p = xy: s + p = 11 and sp = 30.', 'So s and p are the roots of t² − 11t + 30 = 0: {s, p} = {5, 6}.', 's = 5, p = 6: x, y are roots of t² − 5t + 6, giving (2, 3) and (3, 2).', 's = 6, p = 5: roots of t² − 6t + 5, giving (1, 5) and (5, 1). Both cases have s² ≥ 4p, so all four are real and check out.'],
      solution: 'Let s = x + y and p = xy. The second equation is xy(x + y) = sp. So s + p = 11 and sp = 30, which means s and p are the roots of t² − 11t + 30 = (t − 5)(t − 6).\n\n• s = 5, p = 6: x, y are the roots of t² − 5t + 6, so {x, y} = {2, 3}.\n• s = 6, p = 5: x, y are the roots of t² − 6t + 5, so {x, y} = {1, 5}.\n\nThe solutions are (2, 3), (3, 2), (1, 5), (5, 1).',
    },
  },

  24: {
    lesson: {
      idea: 'Induction proves a statement for every n ≥ n₀ in two steps. Base case: check it for n₀. Induction step: assume it holds for n (the induction hypothesis) and prove it for n + 1. In combinatorics the trick is to find the n-sized problem inside the (n + 1)-sized one. Strong induction lets you assume all smaller cases, not just n.',
      steps: ['Write the statement P(n) clearly.', 'Check the base case.', 'In the step, find where P(n) appears inside P(n + 1) and use it.', 'Write the conclusion: by induction P(n) holds for all n ≥ n₀.'],
      example: {
        q: 'Prove 1 + 3 + 5 + … + (2n − 1) = n².',
        a: 'n = 1: 1 = 1². Step: if the sum of the first n odd numbers is n², adding 2n + 1 gives n² + 2n + 1 = (n + 1)². ✓',
      },
      de: [['vollständige Induktion', 'induction'], ['Induktionsanfang', 'base case'], ['Induktionsschritt', 'induction step'], ['Induktionsvoraussetzung', 'induction hypothesis']],
    },
    problems: [
      {
        type: 'answer',
        q: 'a₁ = 1 and aₙ₊₁ = 2aₙ + 1 for n ≥ 1.\n\nFind a₁₀.',
        answers: ['1023'],
        hints: ['Write out the first few terms.', '1, 3, 7, 15, … Compare each term with a power of 2.', 'Guess aₙ = 2ⁿ − 1 and check it with induction.'],
        solution: 'The terms are 1, 3, 7, 15, …, so guess aₙ = 2ⁿ − 1. Induction: a₁ = 1 ✓, and if aₙ = 2ⁿ − 1 then aₙ₊₁ = 2ⁿ⁺¹ − 2 + 1 = 2ⁿ⁺¹ − 1 ✓. So a₁₀ = 1023.',
      },
      {
        type: 'answer',
        q: 'In how many ways can a 2 × 10 board be covered with 1 × 2 dominoes?',
        answers: ['89'],
        hints: ['Count small boards first: 2 × 1, 2 × 2, 2 × 3.', 'Look at the left edge: it is covered either by one vertical domino or by two horizontal ones.', 'That gives fₙ = fₙ₋₁ + fₙ₋₂ with f₁ = 1, f₂ = 2.'],
        solution: 'Let fₙ be the number for 2 × n. The left column is either one vertical domino (fₙ₋₁ ways for the rest) or two horizontal dominoes stacked (fₙ₋₂ ways). So fₙ = fₙ₋₁ + fₙ₋₂, f₁ = 1, f₂ = 2: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.',
      },
      {
        type: 'proof',
        q: 'A 2ⁿ × 2ⁿ board has one square removed (any square).\n\nProve that the rest can always be covered with L-shaped pieces made of 3 squares.',
        hints: ['Use induction on n. How does a 2ⁿ⁺¹ board split into 2ⁿ boards?', 'Cut it into four quarters. Only one quarter has the missing square.', 'Place one L in the centre so that it covers one square of each of the other three quarters.'],
        keySteps: ['Base case n = 1: a 2 × 2 board minus one square is exactly one L.', 'Step: split the 2ⁿ⁺¹ × 2ⁿ⁺¹ board into four 2ⁿ × 2ⁿ quarters; the missing square is in one of them.', 'Place one L at the centre covering the corner square of each of the other three quarters.', 'Now every quarter has exactly one square missing or covered; by the hypothesis each can be tiled.'],
        solution: 'Induction on n. For n = 1 the board minus one square is an L.\n\nStep: cut the 2ⁿ⁺¹ × 2ⁿ⁺¹ board into four 2ⁿ × 2ⁿ quarters. The removed square lies in one of them. The other three quarters meet at the centre of the board; put one L there so that it covers the centre corner square of each of those three quarters.\n\nNow each of the four quarters is a 2ⁿ × 2ⁿ board with exactly one square taken away, so by the induction hypothesis each can be tiled. Together with the central L, this tiles the whole board.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Prove that every integer n ≥ 8 can be written as n = 3a + 5b with non-negative integers a and b.',
      keySteps: ['Base cases: 8 = 3 + 5, 9 = 3·3, 10 = 5·2.', 'Strong induction: for n ≥ 11, n − 3 ≥ 8, so n − 3 = 3a + 5b.', 'Then n = 3(a + 1) + 5b.', 'The three base cases cover all remainders mod 3, so every n ≥ 8 is reached.'],
      solution: 'Base cases: 8 = 3 + 5, 9 = 3 + 3 + 3, 10 = 5 + 5.\n\nStep: let n ≥ 11 and assume the statement for all numbers from 8 to n − 1. Then n − 3 ≥ 8, so n − 3 = 3a + 5b, and n = 3(a + 1) + 5b.\n\nBy (strong) induction every n ≥ 8 works.',
    },
  },

  25: {
    lesson: {
      idea: 'The three angle bisectors of a triangle meet at the incentre I, which is equally far (r) from all three sides. The incircle touches the sides, and the two tangents from a vertex are equally long: from A it is s − a, where s is half the perimeter. Two facts to know by heart: ∠BIC = 90° + ∠A/2, and the area is r·s.',
      steps: ['Draw I and the three touching points; mark equal tangent lengths x, y, z.', 'x + y = c, y + z = a, z + x = b, so each tangent length is s minus the opposite side.', 'For angles at I, use ∠IBC = β/2 and ∠ICB = γ/2.', 'For r, use area = r·s.'],
      example: {
        q: 'Find the inradius of the 3-4-5 triangle.',
        a: 'Area = 6 and s = 6, so r = 6/6 = 1.',
      },
      de: [['Inkreis', 'incircle'], ['Inkreismittelpunkt', 'incentre'], ['Winkelsymmetrale', 'angle bisector'], ['Berührpunkt', 'point of tangency']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In triangle ABC, ∠BAC = 70° and I is the incentre.\n\nFind ∠BIC in degrees.',
        answers: ['125'],
        hints: ['BI and CI are angle bisectors.', 'In triangle BIC the angles at B and C are β/2 and γ/2.', 'β + γ = 110°.'],
        solution: '∠BIC = 180° − (β + γ)/2 = 180° − 55° = 125°. (That is 90° + 70°/2.)',
      },
      {
        type: 'answer',
        q: 'A triangle has sides 13, 14 and 15.\n\nFind the radius of its incircle.',
        answers: ['4'],
        hints: ['Use area = r·s.', 'Find the area first, e.g. with Heron or by splitting the triangle with the height to side 14.', 's = 21 and the area is 84.'],
        solution: 's = 21. Heron: area = √(21·8·7·6) = 84. So r = 84/21 = 4.',
      },
      {
        type: 'proof',
        q: 'The incircle of triangle ABC touches BC at D. Let a = BC, b = CA, c = AB.\n\nProve that BD = (a + c − b)/2.',
        hints: ['Tangents from one point to a circle are equally long.', 'Call the tangent lengths from A, B, C x, y, z.', 'Then x + y = c, y + z = a, z + x = b.'],
        keySteps: ['Tangent segments from one point are equal: call them x (from A), y (from B), z (from C).', 'The sides are c = x + y, a = y + z, b = z + x.', 'Then a + c − b = (y + z) + (x + y) − (z + x) = 2y.', 'So BD = y = (a + c − b)/2.'],
        solution: 'The two tangent segments from a point to a circle are equally long. Let them be x from A, y from B and z from C. Then BD = y and\n\nc = AB = x + y, a = BC = y + z, b = CA = z + x.\n\nSo a + c − b = (y + z) + (x + y) − (z + x) = 2y, and BD = y = (a + c − b)/2.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Find all right triangles with integer side lengths whose incircle has radius 1. Prove your answer.',
      answers: ['3, 4, 5'],
      keySteps: ['In a right triangle with legs a, b and hypotenuse c: r = (a + b − c)/2 (the tangents from the right angle have length r).', 'r = 1 gives c = a + b − 2.', 'Substituting into a² + b² = c²: 2ab − 4a − 4b + 4 = 0, i.e. (a − 2)(b − 2) = 2.', 'So {a − 2, b − 2} = {1, 2}: the only triangle is 3, 4, 5.'],
      solution: 'In a right triangle the incircle and the two legs form a square of side r at the right angle, so the tangent lengths from the right-angle vertex are r, and from the tangent lengths (as in the proof above) r = (a + b − c)/2.\n\nr = 1 gives c = a + b − 2. Then a² + b² = (a + b − 2)² = a² + b² + 4 + 2ab − 4a − 4b, so 2ab − 4a − 4b + 4 = 0, i.e. (a − 2)(b − 2) = 2.\n\na − 2 and b − 2 are integers with product 2. If both were negative they would be −1 and −2, giving a side of length 0 or 1 with the other ≤ 1, impossible. So they are 1 and 2: a = 3, b = 4, c = 5. Check: r = (3 + 4 − 5)/2 = 1. ✓',
    },
  },

  26: {
    lesson: {
      idea: 'The last digit of a number is its remainder mod 10, the last two digits are its remainder mod 100. Powers mod m always repeat after a while: write down a, a², a³, … mod m until you see a value again. Then you only need the exponent mod the length of the cycle.',
      steps: ['List aᵏ mod m for k = 1, 2, 3, … until it repeats.', 'Note the cycle length L.', 'Reduce the big exponent mod L.', 'Read off the answer from your list.'],
      example: {
        q: 'Find the last digit of 7²⁰²⁶.',
        a: 'Last digits of 7, 7², 7³, 7⁴: 7, 9, 3, 1, then it repeats (length 4). 2026 ≡ 2 (mod 4), so the last digit is 9.',
      },
      de: [['Einerziffer / letzte Ziffer', 'last digit'], ['Periode', 'period / cycle'], ['Potenz', 'power'], ['Rest', 'remainder']],
    },
    problems: [
      {
        type: 'answer',
        q: 'What is the last digit of 3²⁰²⁷?',
        answers: ['7'],
        hints: ['Look at the last digits of 3, 9, 27, 81, …', 'They repeat with period 4.', '2027 ≡ 3 (mod 4).'],
        solution: 'Last digits of the powers of 3: 3, 9, 7, 1, then repeat. 2027 = 4·506 + 3, so the last digit is the third one: 7.',
      },
      {
        type: 'answer',
        q: 'What are the last two digits of 7¹⁰⁰? (Give them as a number, e.g. 07.)',
        answers: ['01', '1'],
        hints: ['Last two digits means mod 100.', 'Compute 7⁴ exactly.', '7⁴ = 2401 ≡ 1 (mod 100).'],
        solution: '7⁴ = 2401 ≡ 1 (mod 100). So 7¹⁰⁰ = (7⁴)²⁵ ≡ 1, and the last two digits are 01.',
      },
      {
        type: 'proof',
        q: 'Prove that 2ⁿ + 1 is never divisible by 7, for any positive integer n.',
        hints: ['Look at the powers of 2 mod 7.', 'They cycle with period 3: 2, 4, 1.', 'So 2ⁿ + 1 can only be 3, 5 or 2 mod 7.'],
        keySteps: ['2¹ ≡ 2, 2² ≡ 4, 2³ = 8 ≡ 1 (mod 7).', 'Since 2³ ≡ 1, the remainders repeat with period 3: 2ⁿ mod 7 ∈ {1, 2, 4}.', 'So 2ⁿ + 1 mod 7 ∈ {2, 3, 5}.', 'None of these is 0, so 7 ∤ 2ⁿ + 1.'],
        solution: '2³ = 8 ≡ 1 (mod 7). Write n = 3k + r with r ∈ {0, 1, 2}. Then 2ⁿ = (2³)ᵏ·2ʳ ≡ 2ʳ ∈ {1, 2, 4} (mod 7).\n\nSo 2ⁿ + 1 ≡ 2, 3 or 5 (mod 7), never 0. Hence 7 never divides 2ⁿ + 1.',
    },
    ],
    challenge: {
      source: 'Classic',
      q: 'Prove that 1ⁿ + 2ⁿ + 3ⁿ + 4ⁿ is divisible by 5 exactly when n is not divisible by 4.',
      keySteps: ['Mod 5: 4 ≡ −1 and 3 ≡ −2, and 2⁴ ≡ 1, so all powers depend only on n mod 4.', 'n ≡ 0 (mod 4): every term is ≡ 1, the sum is ≡ 4, not divisible.', 'n odd: 3ⁿ ≡ −2ⁿ and 4ⁿ ≡ −1, so the sum ≡ 1 + 2ⁿ − 2ⁿ − 1 = 0.', 'n ≡ 2 (mod 4): 1 + 4 + 4 + 1 = 10 ≡ 0.'],
      solution: 'All of 1, 2, 3, 4 satisfy a⁴ ≡ 1 (mod 5), so the sum only depends on n mod 4.\n\n• n ≡ 0: each term ≡ 1, sum ≡ 4. Not divisible.\n• n odd: 4 ≡ −1 and 3 ≡ −2 give 4ⁿ ≡ −1, 3ⁿ ≡ −2ⁿ, so the sum ≡ 1 + 2ⁿ − 2ⁿ − 1 = 0.\n• n ≡ 2: 1 + 4 + 9 + 16 = 30 ≡ 0.\n\nSo 5 divides the sum exactly when 4 ∤ n.',
    },
  },

  29: {
    lesson: {
      idea: 'The three medians (from a vertex to the midpoint of the opposite side) meet at the centroid S, which divides each median in the ratio 2 : 1, the longer part at the vertex. Each median cuts the triangle into two halves of equal area, and the three medians cut it into six small triangles of equal area. In coordinates, S is the average of the three vertices.',
      steps: ['Mark the midpoints; the midline joining two of them is parallel to the third side and half as long.', 'Use AS = 2/3 of the median, SM = 1/3.', 'Areas: triangles ABS, BCS, CAS are each 1/3 of the whole.', 'Coordinates: S = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3).'],
      example: {
        q: 'A(0, 0), B(6, 0), C(0, 9). Find S.',
        a: 'S = ((0 + 6 + 0)/3, (0 + 0 + 9)/3) = (2, 3).',
      },
      de: [['Schwerpunkt', 'centroid'], ['Schwerlinie', 'median'], ['Seitenmittelpunkt', 'midpoint of a side'], ['Mittellinie', 'midline']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In triangle ABC the median from A to the midpoint M of BC has length 12. S is the centroid.\n\nFind AS.',
        answers: ['8'],
        hints: ['In which ratio does S divide the median?', 'AS : SM = 2 : 1.', 'So AS is 2/3 of 12.'],
        solution: 'S divides AM in the ratio 2 : 1, so AS = 2/3 · 12 = 8.',
      },
      {
        type: 'answer',
        q: 'Triangle ABC has area 60 and centroid S.\n\nFind the area of triangle ABS.',
        answers: ['20'],
        hints: ['Compare the heights of ABS and ABC over the same base AB.', 'S is 1/3 of the way from the midpoint of AB to C.', 'So the height of ABS is 1/3 of the height of ABC.'],
        solution: 'Let M be the midpoint of AB. S lies on MC with MS = 1/3·MC, so S is 1/3 as far from AB as C is. Same base, 1/3 the height: area 60/3 = 20.',
      },
      {
        type: 'proof',
        q: 'In triangle ABC, E is the midpoint of AC and F is the midpoint of AB. The medians BE and CF meet at S.\n\nProve that BS = 2·SE.',
        hints: ['Look at the segment EF.', 'EF is a midline: parallel to BC and half as long.', 'Then the triangles SEF and SBC are similar.'],
        keySteps: ['EF is a midline of ABC, so EF ∥ BC and EF = BC/2.', 'Because EF ∥ BC, ∠SEF = ∠SBC and ∠SFE = ∠SCB (alternate angles).', 'So triangles SEF and SBC are similar with ratio EF : BC = 1 : 2.', 'Hence SE : SB = 1 : 2, i.e. BS = 2·SE.'],
        solution: 'E and F are midpoints of AC and AB, so EF is a midline: EF ∥ BC and EF = BC/2.\n\nSince EF ∥ BC, the alternate angles are equal: ∠SEF = ∠SBC and ∠SFE = ∠SCB. So triangles SEF and SBC are similar, with ratio EF : BC = 1 : 2.\n\nCorresponding sides: SE : SB = 1 : 2, so BS = 2·SE.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'In triangle ABC, BC = 6 and CA = 8, and the medians from A and from B are perpendicular.\n\nFind AB. Prove your answer.',
      answers: ['2√5', '√20'],
      keySteps: ['Let the medians AM and BN meet at S; then SA = 2/3·AM and SB = 2/3·BN, and ∠ASB = 90°.', 'Pythagoras in ASB: (4/9)(AM² + BN²) = AB².', 'Median formula: AM² = (2b² + 2c² − a²)/4 and BN² = (2a² + 2c² − b²)/4, so AM² + BN² = (a² + b² + 4c²)/4.', 'This gives a² + b² = 5c², so 100 = 5c² and AB = c = √20 = 2√5.'],
      solution: 'Let a = BC = 6, b = CA = 8, c = AB, and let the medians AM, BN meet at S. Then SA = (2/3)AM, SB = (2/3)BN and ∠ASB = 90°, so (4/9)(AM² + BN²) = c².\n\nThe median formula gives AM² = (2b² + 2c² − a²)/4 and BN² = (2a² + 2c² − b²)/4, so AM² + BN² = (a² + b² + 4c²)/4. Then (a² + b² + 4c²)/9 = c², i.e. a² + b² = 5c².\n\nSo 36 + 64 = 5c², c² = 20 and AB = 2√5.',
    },
  },

  30: {
    lesson: {
      idea: 'Squares and cubes can only leave a few remainders. Squares: mod 3 only 0, 1; mod 4 only 0, 1; mod 8 only 0, 1, 4 (odd squares are always 1 mod 8). Cubes: mod 7 only 0, 1, 6; mod 9 only 0, 1, 8. This is the fastest way to show an equation has no integer solutions: pick a modulus where the two sides can never match.',
      steps: ['Spot squares → try mod 4 or mod 8 (or mod 3). Spot cubes → try mod 9 or mod 7.', 'Make the list of possible remainders of each side.', 'If the lists don’t overlap, there are no solutions.', 'If they do overlap, the remainders still tell you something (e.g. x must be even).'],
      example: {
        q: 'Can 2027 be written as a sum of two squares?',
        a: 'Squares are 0 or 1 mod 4, so a sum of two squares is 0, 1 or 2 mod 4. But 2027 ≡ 3 (mod 4). No.',
      },
      de: [['Quadratzahl', 'square number'], ['Kubikzahl', 'cube'], ['Restklasse', 'residue class'], ['keine ganzzahlige Lösung', 'no integer solution']],
    },
    problems: [
      {
        type: 'answer',
        q: 'For how many integers n with 1 ≤ n ≤ 100 is n² + 2 divisible by 3?',
        answers: ['67'],
        hints: ['Which remainders can a square leave mod 3?', 'n² ≡ 0 if 3 | n, and n² ≡ 1 otherwise.', 'So n² + 2 ≡ 0 (mod 3) exactly when 3 does not divide n.'],
        solution: 'If 3 | n then n² + 2 ≡ 2. Otherwise n² ≡ 1 and n² + 2 ≡ 0. So we count the n from 1 to 100 not divisible by 3: 100 − 33 = 67.',
      },
      {
        type: 'answer',
        q: 'What is the smallest positive integer that is NOT a sum of three squares of integers (0 is allowed)?',
        answers: ['7'],
        hints: ['Try small numbers: 1, 2, 3, …', 'Squares mod 8 are 0, 1, 4.', 'Which remainder mod 8 can three of them never add up to?'],
        solution: '1 = 1, 2 = 1 + 1, 3 = 1 + 1 + 1, 4 = 4, 5 = 4 + 1, 6 = 4 + 1 + 1. Squares mod 8 are 0, 1, 4, and no three of them add to 7 mod 8, so 7 is impossible.',
      },
      {
        type: 'proof',
        q: 'Prove that no integer of the form 8k + 7 can be written as a sum of three squares of integers.',
        hints: ['Which remainders can a square leave mod 8?', 'Check 0², 1², …, 7² mod 8: only 0, 1, 4.', 'List all sums of three of the numbers 0, 1, 4 mod 8.'],
        keySteps: ['x² mod 8 is 0, 1 or 4 (check x = 0, …, 7; or: odd squares ≡ 1, even squares ≡ 0 or 4).', 'Sums of three values from {0, 1, 4}: 0, 1, 2, 3, 4, 5, 6 (from 4+1+1), 8 ≡ 0, 9 ≡ 1, 12 ≡ 4.', '7 is never reached.', 'So x² + y² + z² ≢ 7 (mod 8), and 8k + 7 is never a sum of three squares.'],
        solution: 'If x is odd, x = 2m + 1 and x² = 4m(m + 1) + 1 ≡ 1 (mod 8), because m(m + 1) is even. If x is even, x² = 4m² ≡ 0 or 4 (mod 8). So every square is 0, 1 or 4 mod 8.\n\nAdding three of these: the possible sums mod 8 are 0, 1, 2, 3, 4, 5, 6 and (4 + 4 + 4 = 12) 4, (4 + 4 + 1) 1, (4 + 4 + 0) 0. 7 never appears.\n\nSo a number ≡ 7 (mod 8) is never a sum of three squares.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Prove that the equation\n\nx³ + y³ + z³ = 2030\n\nhas no integer solutions.',
      keySteps: ['Cubes mod 9 are only 0, 1, 8 (≡ −1): check x ≡ 0, ±1, ±2, ±3, ±4.', 'So x³ + y³ + z³ mod 9 is a sum of three numbers from {0, 1, −1}: between −3 and 3, i.e. 0, 1, 2, 3, 6, 7, 8.', '2030 = 9·225 + 5 ≡ 5 (mod 9).', '5 is not on the list, so there are no solutions.'],
      solution: 'Check the cubes mod 9: x ≡ 0, ±3 give 0; x ≡ ±1, ±4 give ±1 (e.g. 4³ = 64 ≡ 1); x ≡ ±2 give ±8 ≡ ∓1. So x³ ≡ 0, 1 or −1 (mod 9).\n\nA sum of three such numbers lies between −3 and 3, so it is ≡ 0, 1, 2, 3, 6, 7 or 8 (mod 9).\n\nBut 2030 = 2025 + 5 ≡ 5 (mod 9). So x³ + y³ + z³ = 2030 is impossible.',
    },
  },

  31: {
    lesson: {
      idea: 'A telescoping sum is one where each term is a difference f(k) − f(k + 1), so almost everything cancels and only the first and last pieces remain. The classic: 1/(k(k + 1)) = 1/k − 1/(k + 1). Products telescope too: each factor is a fraction g(k + 1)/g(k), and the inside cancels.',
      steps: ['Try to write the k-th term as f(k) − f(k + 1) (partial fractions, or rationalise roots).', 'Write out the first two and the last term to see what cancels.', 'Products: factor each term, e.g. 1 − 1/k² = (k − 1)(k + 1)/k².', 'For inequalities: compare with a sum that telescopes, e.g. 1/k² < 1/(k(k − 1)).'],
      example: {
        q: 'Compute 1/(1·2) + 1/(2·3) + … + 1/(99·100).',
        a: 'Each term is 1/k − 1/(k + 1). Everything cancels except 1 − 1/100 = 99/100.',
      },
      de: [['Teleskopsumme', 'telescoping sum'], ['Partialbruchzerlegung', 'partial fractions'], ['Produkt', 'product'], ['kürzt sich weg', 'cancels']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Compute\n\n(1 − 1/4)(1 − 1/9)(1 − 1/16) ⋯ (1 − 1/100).',
        answers: ['11/20', '0.55'],
        hints: ['Factor each bracket.', '1 − 1/k² = (k − 1)(k + 1)/k².', 'Write the product for k = 2 to 10 as two separate products: (1/2·2/3·…·9/10)·(3/2·4/3·…·11/10).'],
        solution: '1 − 1/k² = ((k − 1)/k)·((k + 1)/k). For k = 2, …, 10: the product of (k − 1)/k is 1/10, the product of (k + 1)/k is 11/2. Answer: 11/20.',
      },
      {
        type: 'answer',
        q: 'Compute\n\n1/(√1 + √2) + 1/(√2 + √3) + … + 1/(√48 + √49).',
        answers: ['6'],
        hints: ['Get rid of the roots in the denominators.', 'Multiply by (√(k + 1) − √k)/(√(k + 1) − √k).', '1/(√k + √(k + 1)) = √(k + 1) − √k.'],
        solution: '1/(√k + √(k + 1)) = √(k + 1) − √k (multiply top and bottom by √(k + 1) − √k). The sum telescopes to √49 − √1 = 6.',
      },
      {
        type: 'proof',
        q: 'Prove that for every n ≥ 2,\n\n1/2² + 1/3² + … + 1/n² < 1.',
        hints: ['You can’t compute this sum exactly. Compare it with something you can.', 'Make each term a bit bigger so the sum telescopes.', '1/k² < 1/(k(k − 1)) = 1/(k − 1) − 1/k.'],
        keySteps: ['For k ≥ 2: k² > k(k − 1), so 1/k² < 1/(k(k − 1)).', '1/(k(k − 1)) = 1/(k − 1) − 1/k.', 'Summing for k = 2 to n telescopes to 1 − 1/n.', 'So the sum is < 1 − 1/n < 1.'],
        solution: 'For k ≥ 2, k² > k(k − 1), so 1/k² < 1/(k(k − 1)) = 1/(k − 1) − 1/k. Adding these for k = 2, …, n:\n\n1/2² + … + 1/n² < (1 − 1/2) + (1/2 − 1/3) + … + (1/(n − 1) − 1/n) = 1 − 1/n < 1.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Prove that for every positive integer n,\n\n1/(1·2·3) + 1/(2·3·4) + … + 1/(n(n + 1)(n + 2)) < 1/4.',
      keySteps: ['Find the split: 1/(k(k + 1)(k + 2)) = ½·(1/(k(k + 1)) − 1/((k + 1)(k + 2))).', 'Check: the difference is ((k + 2) − k)/(k(k + 1)(k + 2)) = 2/(k(k + 1)(k + 2)).', 'The sum telescopes to ½·(1/2 − 1/((n + 1)(n + 2))).', 'That equals 1/4 − 1/(2(n + 1)(n + 2)) < 1/4.'],
      solution: '1/(k(k + 1)) − 1/((k + 1)(k + 2)) = ((k + 2) − k)/(k(k + 1)(k + 2)) = 2/(k(k + 1)(k + 2)).\n\nSo each term is half of such a difference, and the sum telescopes:\n\n½·(1/(1·2) − 1/((n + 1)(n + 2))) = 1/4 − 1/(2(n + 1)(n + 2)) < 1/4.',
    },
  },

  32: {
    lesson: {
      idea: 'The extremal principle: look at the largest, smallest, first or last object (the biggest number, the point furthest left, the player with the most wins). Because it is extreme, it has a special property you can use, often to get a contradiction or to build what you need. It works because a finite set always has a largest and smallest element.',
      steps: ['Ask: what is the natural “size” here?', 'Take the object where it is largest or smallest.', 'Use what being extreme means: nothing beats it.', 'Get a contradiction (“then something would be even bigger”) or a construction.'],
      example: {
        q: 'Finitely many points in the plane: is it possible that every one of them is the midpoint of two others?',
        a: 'No. Take the leftmost point (lowest on a tie). A midpoint of two points of the set lies between them, so one of the two would be further left (or equally far left and lower). Contradiction.',
      },
      de: [['Extremalprinzip', 'extremal principle'], ['größtes / kleinstes Element', 'largest / smallest element'], ['Widerspruch', 'contradiction'], ['endlich', 'finite']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Ten different positive integers add up to 100.\n\nWhat is the largest possible value of the smallest of them?',
        answers: ['5'],
        hints: ['Call the smallest number m. How small can the sum be?', 'The other nine are different and bigger than m, so the sum is at least m + (m + 1) + … + (m + 9).', 'That is 10m + 45 ≤ 100.'],
        solution: 'With smallest number m, the sum is at least m + (m + 1) + … + (m + 9) = 10m + 45, so 10m + 45 ≤ 100 and m ≤ 5. m = 5 works: 5, 6, …, 13 and 19 (sum 100).',
      },
      {
        type: 'answer',
        q: 'What is the largest number of numbers you can choose from 1, 2, …, 20 so that none of the chosen numbers divides another?',
        answers: ['10'],
        hints: ['Find a big example first: try the top half.', '11, 12, …, 20 works: 10 numbers. Why can’t you have 11?', 'Write each number as 2ᵏ·(odd number). There are only 10 odd parts.'],
        solution: '11, …, 20 works. Write each number as 2ᵏ·u with u odd; u is one of the 10 odd numbers 1, 3, …, 19. With 11 numbers two have the same u, and then the smaller divides the larger. So 10 is the maximum.',
      },
      {
        type: 'proof',
        q: 'In a tournament every two players play once and there are no draws.\n\nProve that there is a player A such that for every other player B, either A beat B, or A beat someone who beat B.',
        hints: ['Which player is the natural candidate?', 'Take a player A with the most wins.', 'Suppose some B beat A and also beat everyone A beat. Count B’s wins.'],
        keySteps: ['Let A be a player with the largest number of wins.', 'Suppose there is a B such that B beat A and B also beat everyone that A beat.', 'Then B has all of A’s wins plus the win against A: more wins than A.', 'Contradiction with the choice of A, so A has the property.'],
        solution: 'Let A be a player with the maximum number of wins, and suppose A doesn’t have the property. Then there is a player B such that A did not beat B (so B beat A) and A beat nobody who beat B, which means B beat every player A beat.\n\nThen B beat all the players A beat and also A, so B has at least one more win than A. This contradicts the choice of A. So A has the property.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Every square of an infinite chessboard contains a positive integer, and each number is the average of its four neighbours (up, down, left, right).\n\nProve that all the numbers are equal.',
      keySteps: ['Positive integers have a smallest value m that appears somewhere (well-ordering).', 'Take a square with value m. Its four neighbours average to m and all are ≥ m.', 'So all four neighbours equal m.', 'Repeating from those squares, m spreads to every square of the board.'],
      solution: 'The numbers are positive integers, so there is a smallest value m that appears on the board. Take a square with value m. Its four neighbours are all ≥ m and their average is m, so each of them is exactly m.\n\nApplying the same argument to those neighbours, and so on, every square that can be reached by steps up, down, left and right has value m. That is every square. So all numbers are equal.\n\n(Note the argument needs a minimum. With real numbers instead of integers it can fail without extra assumptions.)',
    },
  },

  33: {
    lesson: {
      idea: 'The three altitudes of a triangle meet at the orthocentre H. In an acute triangle H is inside, in a right triangle it is the vertex with the right angle. The quadrilateral formed by A, H and the feet of the altitudes from B and C has two right angles, which gives ∠BHC = 180° − ∠A. The orthocentre H, the centroid S and the circumcentre O lie on one line (the Euler line), with HS = 2·SO.',
      steps: ['Draw the altitudes and mark the right angles at their feet.', 'Look for quadrilaterals with two right angles: their other angles add to 180°.', 'Remember ∠BHC = 180° − α.', 'In coordinates: intersect two altitudes.'],
      example: {
        q: 'Where is the orthocentre of a right triangle?',
        a: 'At the right-angle vertex: the two legs are altitudes, and they meet there.',
      },
      de: [['Höhe', 'altitude'], ['Höhenschnittpunkt', 'orthocentre'], ['Höhenfußpunkt', 'foot of the altitude'], ['Euler-Gerade', 'Euler line']],
    },
    problems: [
      {
        type: 'answer',
        q: 'ABC is an acute triangle with orthocentre H and ∠BAC = 65°.\n\nFind ∠BHC in degrees.',
        answers: ['115'],
        hints: ['Let E and F be the feet of the altitudes from B and C.', 'In the quadrilateral AFHE the angles at E and F are 90°.', 'So ∠FHE = 180° − 65°, and ∠BHC is the vertical angle.'],
        solution: 'In AFHE the angles at E and F are 90°, so ∠FHE = 360° − 180° − 65° = 115°. ∠BHC is the vertical angle, so ∠BHC = 115°.',
      },
      {
        type: 'answer',
        q: 'A(0, 0), B(6, 0), C(2, 4).\n\nFind the y-coordinate of the orthocentre H.',
        answers: ['2'],
        hints: ['Intersect two altitudes.', 'AB is horizontal, so the altitude from C is the vertical line x = 2.', 'The altitude from A is perpendicular to BC; BC has direction (−4, 4).'],
        solution: 'Altitude from C: x = 2. BC has direction (−4, 4), so the altitude from A has direction (1, 1): y = x. They meet at H = (2, 2). Check: BH = (−4, 2) is perpendicular to AC = (2, 4). ✓',
      },
      {
        type: 'proof',
        q: 'ABC is an acute triangle with orthocentre H.\n\nProve that ∠BHC = 180° − ∠BAC.',
        hints: ['Name the feet of the altitudes from B and C: E on AC and F on AB.', 'Look at the quadrilateral AFHE.', 'Its angles at E and F are right angles.'],
        keySteps: ['Let E, F be the feet of the altitudes from B and C; they lie on AC and AB (acute triangle).', 'In AFHE: ∠AFH = ∠AEH = 90°.', 'Angle sum of the quadrilateral: ∠FHE = 360° − 90° − 90° − α = 180° − α.', '∠BHC and ∠FHE are vertical angles, so ∠BHC = 180° − α.'],
        solution: 'Let E be the foot of the altitude from B and F the foot of the altitude from C. As the triangle is acute, E lies on AC, F on AB and H inside.\n\nIn the quadrilateral AFHE, ∠AFH = ∠AEH = 90°, so ∠FHE = 360° − 90° − 90° − α = 180° − α.\n\nB, H, E are collinear and C, H, F are collinear, so ∠BHC and ∠EHF are vertical angles. Hence ∠BHC = 180° − α.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Prove that the three altitudes of a triangle meet in one point.',
      keySteps: ['Through each vertex draw the line parallel to the opposite side; they form a bigger triangle A′B′C′.', 'ABCB′ and AC′BC are parallelograms, so AB′ = BC = AC′: A is the midpoint of B′C′ (the same for B and C).', 'The altitude from A is perpendicular to BC, hence to B′C′, and passes through its midpoint A: it is a perpendicular bisector of A′B′C′.', 'The perpendicular bisectors of a triangle meet in one point (the circumcentre), so the altitudes do too.'],
      solution: 'Through A, B, C draw the lines parallel to BC, CA, AB. They form a triangle A′B′C′, where B′ is on the lines through A and C, and C′ on the lines through A and B.\n\nABCB′ is a parallelogram (AB′ ∥ BC and CB′ ∥ AB), so AB′ = BC. Likewise AC′BC is a parallelogram (AC′ ∥ BC and C′B ∥ CA), so AC′ = BC. Hence A is the midpoint of B′C′, and in the same way B and C are midpoints of the other sides.\n\nThe altitude from A is perpendicular to BC, so also to B′C′ ∥ BC, and it passes through the midpoint A of B′C′. So it is the perpendicular bisector of B′C′. The same holds for the other two altitudes.\n\nThe perpendicular bisectors of triangle A′B′C′ meet in one point (its circumcentre, which is equally far from all three vertices). So the altitudes of ABC meet in one point.',
    },
  },

  34: {
    lesson: {
      idea: 'Fermat’s little theorem: if p is prime and p does not divide a, then aᵖ⁻¹ ≡ 1 (mod p). For every a, aᵖ ≡ a (mod p). So with a prime modulus you may reduce the exponent mod p − 1. It follows from the fact that a, 2a, …, (p − 1)a are just 1, 2, …, p − 1 in a different order (day 22).',
      steps: ['Check that the modulus is prime and doesn’t divide the base.', 'Reduce the exponent mod p − 1.', 'For divisibility by a product like 42 = 2·3·7: use Fermat for each prime separately.', 'Remember aᵖ ≡ a works even if p | a.'],
      example: {
        q: 'Find 3¹⁰⁰ mod 7.',
        a: '3⁶ ≡ 1 (mod 7). 100 = 6·16 + 4, so 3¹⁰⁰ ≡ 3⁴ = 81 ≡ 4.',
      },
      de: [['Kleiner Satz von Fermat', 'Fermat’s little theorem'], ['Primzahl', 'prime'], ['Exponent', 'exponent'], ['teilbar durch', 'divisible by']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Find the remainder of 2²⁰²⁶ when divided by 11.',
        answers: ['9'],
        hints: ['11 is prime. What does Fermat say about 2¹⁰?', '2¹⁰ ≡ 1 (mod 11).', '2026 ≡ 6 (mod 10).'],
        solution: '2¹⁰ ≡ 1 (mod 11). 2026 = 10·202 + 6, so 2²⁰²⁶ ≡ 2⁶ = 64 = 55 + 9 ≡ 9.',
      },
      {
        type: 'answer',
        q: 'Find the remainder of 7²⁰²⁶ when divided by 17.',
        answers: ['2'],
        hints: ['17 is prime, so 7¹⁶ ≡ 1.', '2026 ≡ 10 (mod 16).', '7² = 49 ≡ −2 (mod 17), so 7¹⁰ = (7²)⁵ ≡ (−2)⁵.'],
        solution: '7¹⁶ ≡ 1 (mod 17) and 2026 = 16·126 + 10, so 7²⁰²⁶ ≡ 7¹⁰. 7² = 49 ≡ −2, so 7¹⁰ ≡ (−2)⁵ = −32 ≡ −32 + 34 = 2.',
      },
      {
        type: 'proof',
        q: 'Prove that n⁷ − n is divisible by 42 for every integer n.',
        hints: ['42 = 2·3·7. Show each prime divides n⁷ − n.', 'For 7 this is exactly Fermat: n⁷ ≡ n (mod 7).', 'For 3: n³ ≡ n, so n⁷ = n³·n³·n ≡ n·n·n = n³ ≡ n.'],
        keySteps: ['42 = 2·3·7 with coprime factors, so it is enough to show 2, 3 and 7 each divide n⁷ − n.', 'Mod 7: n⁷ ≡ n by Fermat.', 'Mod 3: n³ ≡ n by Fermat, so n⁷ = (n³)²·n ≡ n²·n = n³ ≡ n.', 'Mod 2: n⁷ and n have the same parity.'],
        solution: 'Since 2, 3, 7 are coprime, it suffices to show each divides n⁷ − n.\n\n• 7: by Fermat n⁷ ≡ n (mod 7).\n• 3: by Fermat n³ ≡ n (mod 3), so n⁷ = (n³)²·n ≡ n²·n = n³ ≡ n.\n• 2: n⁷ − n = n(n⁶ − 1) and n⁷ and n are both even or both odd.\n\nSo 42 | n⁷ − n.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Find all primes p such that p divides 2ᵖ + 1. Prove your answer.',
      answers: ['3'],
      keySteps: ['By Fermat, 2ᵖ ≡ 2 (mod p) for every prime p.', 'So 2ᵖ + 1 ≡ 3 (mod p).', 'p | 2ᵖ + 1 then means p | 3, so p = 3.', 'Check: 2³ + 1 = 9 is divisible by 3. ✓'],
      solution: 'By Fermat 2ᵖ ≡ 2 (mod p), so 2ᵖ + 1 ≡ 3 (mod p). If p divides 2ᵖ + 1, then p divides 3, so p = 3. And indeed 3 | 2³ + 1 = 9. The only prime is p = 3.',
    },
  },

  35: {
    lesson: {
      idea: 'An arithmetic sequence adds the same difference d each time: aₙ = a₁ + (n − 1)d, and the sum of the first n terms is n·(a₁ + aₙ)/2 (pair the first with the last). A geometric sequence multiplies by the same ratio q: bₙ = b₁·qⁿ⁻¹, with sum b₁(qⁿ − 1)/(q − 1) for q ≠ 1. Three numbers a, b, c are arithmetic if 2b = a + c, geometric if b² = ac.',
      steps: ['Two terms of an arithmetic sequence give d: aₘ − aₖ = (m − k)d.', 'Sum: number of terms × average of first and last.', 'Geometric: use b² = ac for the middle term.', 'Unknown sequences: write them with a₁ and d (or b₁ and q) and solve.'],
      example: {
        q: 'Compute 1 + 2 + … + 100.',
        a: '100 terms with average (1 + 100)/2, so 100·101/2 = 5050.',
      },
      de: [['arithmetische Folge', 'arithmetic sequence'], ['geometrische Folge', 'geometric sequence'], ['Differenz', 'common difference'], ['Quotient', 'common ratio']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In an arithmetic sequence a₃ = 10 and a₈ = 25.\n\nFind a₁ + a₂ + … + a₂₀.',
        answers: ['650'],
        hints: ['First find the difference d.', 'a₈ − a₃ = 5d.', 'd = 3 and a₁ = 4; then a₂₀ = 61.'],
        solution: '5d = 15, so d = 3 and a₁ = 10 − 6 = 4. a₂₀ = 4 + 19·3 = 61. Sum = 20·(4 + 61)/2 = 650.',
      },
      {
        type: 'answer',
        q: 'An increasing geometric sequence has b₁ + b₂ + b₃ = 13 and b₁·b₂·b₃ = 27.\n\nFind b₅.',
        answers: ['81'],
        hints: ['Use the product first.', 'b₁·b₃ = b₂², so the product is b₂³.', 'b₂ = 3, so b₁ + b₃ = 10 and b₁b₃ = 9.'],
        solution: 'b₁b₃ = b₂², so b₂³ = 27 and b₂ = 3. Then b₁ + b₃ = 10 and b₁b₃ = 9, so {b₁, b₃} = {1, 9}; increasing means b₁ = 1, q = 3. b₅ = 3⁴ = 81.',
      },
      {
        type: 'proof',
        q: 'a, b, c form an arithmetic sequence.\n\nProve that a² − bc, b² − ca, c² − ab also form an arithmetic sequence.',
        hints: ['Write everything with a and d.', 'b = a + d and c = a + 2d.', 'Compute the three expressions and their differences.'],
        keySteps: ['Write b = a + d, c = a + 2d.', 'a² − bc = −3ad − 2d², b² − ca = d², c² − ab = 3ad + 4d².', 'Differences: d² − (−3ad − 2d²) = 3ad + 3d² and (3ad + 4d²) − d² = 3ad + 3d².', 'The differences are equal, so the three numbers are arithmetic.'],
        solution: 'Let b = a + d and c = a + 2d. Then\n\na² − bc = a² − (a + d)(a + 2d) = −3ad − 2d²,\nb² − ca = (a + d)² − a(a + 2d) = d²,\nc² − ab = (a + 2d)² − a(a + d) = 3ad + 4d².\n\nThe consecutive differences are d² + 3ad + 2d² = 3ad + 3d² and 3ad + 4d² − d² = 3ad + 3d², which are equal. So the three numbers form an arithmetic sequence.',
      },
    ],
    challenge: {
      source: 'Classic',
      q: 'Find all ways to write 1000 as a sum of at least two consecutive positive integers. Prove that there are no others.',
      answers: ['198–202, 55–70, 28–52'],
      keySteps: ['n consecutive numbers from a: sum n(2a + n − 1)/2 = 1000, so n(2a + n − 1) = 2000.', 'The two factors n and 2a + n − 1 have different parity, and n < 2a + n − 1.', '2000 = 2⁴·5³: the odd factor is 1, 5, 25 or 125; the other is 2000, 400, 80 or 16.', 'n ≥ 2 and n smaller: (n, 2a + n − 1) = (5, 400), (16, 125), (25, 80): a = 198, 55, 28.'],
      solution: 'If the n ≥ 2 numbers start at a, their sum is n(2a + n − 1)/2. So n(2a + n − 1) = 2000 = 2⁴·5³.\n\nThe two factors differ by 2a − 1, an odd number, so one is odd and one even, and n is the smaller one. The odd factor divides 125: it is 1, 5, 25 or 125, with partner 2000, 400, 80 or 16.\n\n• n = 5, 2a + 4 = 400: a = 198 → 198 + … + 202.\n• n = 16, 2a + 15 = 125: a = 55 → 55 + … + 70.\n• n = 25, 2a + 24 = 80: a = 28 → 28 + … + 52.\n(n = 1 is excluded.)\n\nSo there are exactly three ways.',
    },
  },
}
