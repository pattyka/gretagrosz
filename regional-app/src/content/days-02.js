// Days 11–20 (16 and 18 are in reused.js). Keys are plan days (1–150).
// Every answer was checked by computer.
export default {
  11: {
    lesson: {
      idea: 'If x₁ and x₂ are the solutions of x² + px + q = 0, then x₁ + x₂ = −p and x₁·x₂ = q (Vieta). So you can compute any symmetric expression of the roots without solving: for example x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂. Conversely, two numbers with sum s and product P are the roots of x² − sx + P = 0.',
      steps: ['Write down the sum and the product of the roots.', 'Rewrite what you want using only x₁ + x₂ and x₁x₂.', 'Useful: x₁² + x₂² = s² − 2P, x₁³ + x₂³ = s³ − 3Ps, 1/x₁ + 1/x₂ = s/P.'],
      example: {
        q: 'The roots of x² − 5x + 3 = 0 are a and b. Find a² + b².',
        a: 'a + b = 5 and ab = 3, so a² + b² = 25 − 6 = 19.',
      },
      de: [['Satz von Vieta', 'Vieta’s formulas'], ['Nullstelle / Lösung', 'root / solution'], ['Summe', 'sum'], ['Produkt', 'product']],
    },
    problems: [
      {
        type: 'answer',
        q: 'The equation x² − 7x + 3 = 0 has the roots a and b.\n\nCompute a³ + b³.',
        answers: ['280'],
        hint: 'a³ + b³ = (a + b)³ − 3ab(a + b).',
        solution: 'a + b = 7, ab = 3. So a³ + b³ = 7³ − 3·3·7 = 343 − 63 = 280.',
      },
      {
        type: 'answer',
        q: 'The two real roots of x² − 6x + q = 0 satisfy x₁² + x₂² = 20.\n\nFind q.',
        answers: ['8'],
        hint: 'x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂.',
        solution: '36 − 2q = 20, so q = 8. Check: x² − 6x + 8 = (x − 2)(x − 4), real roots 2 and 4, and 4 + 16 = 20. ✓',
      },
      {
        type: 'proof',
        q: 'Let a and b be the roots of x² − x − 1 = 0.\n\nProve that aⁿ + bⁿ is an integer for every positive integer n.',
        hint: 'a² = a + 1. Multiply by aⁿ to get a recursion for sₙ = aⁿ + bⁿ.',
        keySteps: ['By Vieta: a + b = 1 and ab = −1, so s₁ = 1 and s₂ = (a + b)² − 2ab = 3.', 'a² = a + 1, so aⁿ⁺² = aⁿ⁺¹ + aⁿ; the same for b.', 'Adding: sₙ₊₂ = sₙ₊₁ + sₙ.', 'By induction all sₙ are integers (sums of integers).'],
        solution: 'Let sₙ = aⁿ + bⁿ. By Vieta a + b = 1 and ab = −1, so s₁ = 1 and s₂ = (a + b)² − 2ab = 1 + 2 = 3, both integers.\n\nSince a is a root, a² = a + 1; multiplying by aⁿ gives aⁿ⁺² = aⁿ⁺¹ + aⁿ, and the same holds for b. Adding: sₙ₊₂ = sₙ₊₁ + sₙ.\n\nBy induction: if sₙ and sₙ₊₁ are integers, so is sₙ₊₂. Hence every sₙ is an integer.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'Find all equations x² + px + q = 0 with integer p and q such that p + q = 198 and both roots are integers.',
      answers: ['x² − 202x + 400 and x² + 198x'],
      keySteps: ['Let the integer roots be m and n. By Vieta p = −(m + n), q = mn.', 'p + q = 198 becomes mn − m − n = 198, i.e. (m − 1)(n − 1) = 199.', '199 is prime, so {m − 1, n − 1} = {1, 199} or {−1, −199}.', 'Roots 2 and 200: x² − 202x + 400. Roots 0 and −198: x² + 198x. Both check out.'],
      solution: 'Let the roots be the integers m and n. By Vieta p = −(m + n) and q = mn, so p + q = mn − m − n = 198, i.e. (m − 1)(n − 1) = 199.\n\n199 is prime, so the two factors are 1 and 199, or −1 and −199.\n\n• m − 1 = 1, n − 1 = 199: roots 2 and 200, p = −202, q = 400.\n• m − 1 = −1, n − 1 = −199: roots 0 and −198, p = 198, q = 0.\n\nBoth satisfy p + q = 198. So the equations are x² − 202x + 400 = 0 and x² + 198x = 0.',
    },
  },

  12: {
    lesson: {
      idea: 'The binomial coefficient C(n, k) = n!/(k!(n − k)!) counts the ways to choose k things out of n, when the order doesn’t matter. It is symmetric, C(n, k) = C(n, n − k), and satisfies Pascal’s rule C(n, k) = C(n − 1, k − 1) + C(n − 1, k): either a fixed element is chosen or not. Many identities are easiest to prove by counting the same thing in two ways.',
      steps: ['Choosing without order → C(n, k).', 'To prove an identity, find a question that both sides answer.', 'Pascal’s rule: split by whether one special element is in the choice.'],
      example: {
        q: 'How many committees of 3 can be formed from 8 people?',
        a: 'C(8, 3) = 8·7·6/(3·2·1) = 56.',
      },
      de: [['Binomialkoeffizient', 'binomial coefficient'], ['n über k', 'n choose k'], ['Pascalsches Dreieck', 'Pascal’s triangle'], ['Teilmenge', 'subset']],
    },
    problems: [
      {
        type: 'answer',
        q: 'A team of 3 is chosen from 10 students. Two of the students, Anna and Bernd, refuse to be in the team together.\n\nHow many possible teams are there?',
        answers: ['112'],
        hint: 'Count all teams, then subtract the teams that contain both Anna and Bernd.',
        solution: 'All teams: C(10, 3) = 120. Teams with both Anna and Bernd: the third member can be any of the other 8. So 120 − 8 = 112.',
      },
      {
        type: 'answer',
        q: 'How many diagonals does a convex polygon with 12 corners have?',
        answers: ['54'],
        hint: 'Any two corners give a segment. Which segments are not diagonals?',
        solution: 'Pairs of corners: C(12, 2) = 66. Of these, 12 are sides. So 66 − 12 = 54 diagonals.',
      },
      {
        type: 'proof',
        q: 'Prove that for 1 ≤ k ≤ n,\n\nk · C(n, k) = n · C(n − 1, k − 1).',
        hint: 'Count committees of k people with one chairperson, from n people, in two ways.',
        keySteps: ['Count the committees of k people out of n with one of them as chair.', 'First the committee, then the chair: C(n, k)·k.', 'First the chair, then the other k − 1 members from the remaining n − 1: n·C(n − 1, k − 1).', 'Both count the same thing, so they are equal.'],
        solution: 'Count the ways to choose, from n people, a committee of k people with one of them as chairperson.\n\nWay 1: choose the committee (C(n, k) ways), then its chair (k ways): k·C(n, k).\nWay 2: choose the chair (n ways), then the other k − 1 members from the remaining n − 1 people: n·C(n − 1, k − 1).\n\nBoth count the same set, so k·C(n, k) = n·C(n − 1, k − 1).',
      },
    ],
    challenge: {
      source: 'Olympiad classic',
      q: 'Prove that\n\nC(n, 0)² + C(n, 1)² + … + C(n, n)² = C(2n, n).',
      keySteps: ['C(2n, n) counts the ways to choose n people from n boys and n girls.', 'Split by the number k of boys chosen: then n − k girls are chosen.', 'That gives C(n, k)·C(n, n − k) = C(n, k)² ways for each k.', 'Summing over k = 0, …, n gives the left side.'],
      solution: 'Take a group of n boys and n girls. The number of ways to choose n people from these 2n is C(2n, n).\n\nCount the same choices by the number k of boys chosen (k = 0, …, n). Then n − k girls are chosen, which gives C(n, k)·C(n, n − k) choices. Since C(n, n − k) = C(n, k), this is C(n, k)².\n\nAdding over all k: C(n, 0)² + … + C(n, n)² = C(2n, n).',
    },
  },

  13: {
    lesson: {
      idea: 'Strahlensätze (intercept theorems): if two lines through a point S are cut by two parallel lines, at A, B and at A′, B′, then SA : SA′ = SB : SB′ = AB : A′B′. It is the same as saying that the triangles SAB and SA′B′ are similar. A useful trick: draw an extra parallel line through a point you know something about.',
      steps: ['Find the centre S where the two lines meet, and the two parallels.', 'Write the ratios starting from S: SA/SA′ = SB/SB′ = AB/A′B′.', 'Stuck with a ratio on a line? Draw a parallel through a convenient point.'],
      example: {
        q: 'A 2 m stick casts a 3 m shadow at the same time as a tower casts a 45 m shadow. How tall is the tower?',
        a: 'The sun’s rays are parallel, so tower/stick = 45/3: the tower is 2·15 = 30 m tall.',
      },
      de: [['Strahlensatz', 'intercept theorem'], ['Strahl', 'ray'], ['Streckenverhältnis', 'ratio of segments'], ['Mittelpunkt', 'midpoint']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Two rays start at S. A parallel pair of lines cuts the first ray at A and A′ and the second at B and B′, with A between S and A′. Also SA = 3, AA′ = 5 and AB = 6.\n\nFind A′B′.',
        answers: ['16'],
        hint: 'SA′ = SA + AA′. Then use A′B′/AB = SA′/SA.',
        solution: 'SA′ = 3 + 5 = 8. By the intercept theorem A′B′/AB = SA′/SA = 8/3, so A′B′ = 6·8/3 = 16.',
      },
      {
        type: 'answer',
        q: 'A street lamp is 6 m high. A person who is 1.5 m tall stands 4 m away from the foot of the lamp.\n\nHow long is the person’s shadow, in metres? (A fraction is fine.)',
        answers: ['4/3'],
        hint: 'Let the shadow be s. The light ray from the top of the lamp passes over the person’s head to the end of the shadow.',
        solution: 'Seen from the end of the shadow: 1.5/s = 6/(s + 4), so 6s = 1.5s + 6, 4.5s = 6 and s = 4/3 m.',
      },
      {
        type: 'proof',
        q: 'In triangle ABC let M be the midpoint of AB and N the midpoint of AC.\n\nProve that MN is parallel to BC and MN = BC/2.',
        hint: 'Compare triangles AMN and ABC.',
        keySteps: ['AM/AB = AN/AC = 1/2, and the angle at A is common.', 'So triangles AMN and ABC are similar (SWS) with ratio 1/2.', 'Hence ∠AMN = ∠ABC, so MN ∥ BC (corresponding angles).', 'And MN = BC/2.'],
        solution: 'In triangles AMN and ABC the angle at A is common, and AM/AB = AN/AC = 1/2. So they are similar (SWS) with ratio 1/2. Therefore MN = BC/2, and ∠AMN = ∠ABC. Equal corresponding angles at the line AB mean MN ∥ BC.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'In triangle ABC the point D lies on BC with BD : DC = 1 : 2, and E is the midpoint of AD. The line BE meets AC at F.\n\nFind AF : FC and prove your answer.',
      answers: ['1:3'],
      keySteps: ['Draw the line through D parallel to BF; it meets AC at G.', 'In triangle CBF (Strahlensatz from C): CG : GF = CD : DB = 2 : 1.', 'In triangle ADG: E is the midpoint of AD and EF ∥ DG, so F is the midpoint of AG: AF = FG.', 'With FG = x: AF = x and FC = FG + GC = x + 2x = 3x, so AF : FC = 1 : 3.'],
      solution: 'Draw the line through D parallel to BE; it meets AC at G.\n\nIn triangle CBF, DG ∥ BF, so by the intercept theorem CG : GF = CD : DB = 2 : 1.\n\nIn triangle ADG, E is the midpoint of AD and EF ∥ DG, so (intercept theorem again) F is the midpoint of AG: AF = FG.\n\nLet FG = x. Then AF = x and GC = 2x, so FC = FG + GC = 3x. Hence AF : FC = 1 : 3.',
    },
  },

  14: {
    lesson: {
      idea: 'If n = p₁^a₁ · p₂^a₂ · … · pₖ^aₖ, every divisor is p₁^b₁ ⋯ pₖ^bₖ with 0 ≤ bᵢ ≤ aᵢ. So the number of divisors is τ(n) = (a₁ + 1)(a₂ + 1)⋯(aₖ + 1), and the sum of the divisors is σ(n) = (1 + p₁ + … + p₁^a₁)⋯(1 + pₖ + … + pₖ^aₖ). Divisors also come in pairs d ↔ n/d, which shows τ(n) is odd only for squares.',
      steps: ['Factor n into primes first.', 'τ(n): multiply (exponent + 1). σ(n): multiply the sums 1 + p + … + pᵃ.', 'Pair each divisor d with n/d.'],
      example: {
        q: 'Find τ(72) and σ(12).',
        a: '72 = 2³·3², so τ(72) = 4·3 = 12. 12 = 2²·3, so σ(12) = (1 + 2 + 4)(1 + 3) = 28.',
      },
      de: [['Teileranzahl', 'number of divisors'], ['Teilersumme', 'sum of divisors'], ['Primfaktorzerlegung', 'prime factorisation'], ['Exponent', 'exponent']],
    },
    problems: [
      {
        type: 'answer',
        q: 'What is the smallest positive integer with exactly 12 positive divisors?',
        answers: ['60'],
        hint: '12 = 12 = 6·2 = 4·3 = 3·2·2. Try the smallest primes with the largest exponents.',
        solution: 'Exponent patterns: 2¹¹ = 2048, 2⁵·3 = 96, 2³·3² = 72, 2²·3·5 = 60. The smallest is 60.',
      },
      {
        type: 'answer',
        q: 'What is the sum of all positive divisors of 360?',
        answers: ['1170'],
        hint: '360 = 2³·3²·5.',
        solution: 'σ(360) = (1 + 2 + 4 + 8)(1 + 3 + 9)(1 + 5) = 15·13·6 = 1170.',
      },
      {
        type: 'proof',
        q: 'Prove that a positive integer n has an odd number of positive divisors if and only if n is a perfect square.',
        hint: 'Pair every divisor d with n/d. When is a divisor paired with itself?',
        keySteps: ['Pair each divisor d with n/d, which is also a divisor.', 'Pairs with d ≠ n/d contribute 2 divisors each.', 'd = n/d happens only if d² = n, i.e. d = √n, which is an integer only when n is a square.', 'So τ(n) is odd exactly when n is a square.'],
        solution: 'If d divides n, so does n/d, and (n/d) pairs back with d. So the divisors split into pairs {d, n/d}. A pair has two different elements unless d = n/d, i.e. d² = n.\n\nIf n is not a square, there is no such d, so all divisors come in pairs and τ(n) is even. If n is a square, exactly one divisor (d = √n) is alone and all others are in pairs, so τ(n) is odd.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'Prove that τ(n) ≤ 2√n for every positive integer n.',
      keySteps: ['Pair each divisor d with n/d.', 'In every pair at least one element is ≤ √n (both > √n would give a product > n).', 'There are at most √n positive integers ≤ √n, so at most √n pairs (and a possible single √n).', 'Hence τ(n) ≤ 2√n.'],
      solution: 'Every divisor d of n is paired with n/d. In each pair, the smaller element is at most √n: if both d and n/d were greater than √n, their product n would be greater than n.\n\nSo each pair (or single divisor √n) is determined by its smaller element, which is a positive integer ≤ √n. There are at most √n such integers, so there are at most √n pairs, each containing at most 2 divisors. Therefore τ(n) ≤ 2√n.',
    },
  },

  15: {
    lesson: {
      idea: 'To solve an equation with square roots: find the domain first (what is under a root must be ≥ 0, and a root itself is ≥ 0), isolate a root, and square. Squaring can create fake solutions, so you must check every candidate in the original equation (die Probe). Sometimes it is better not to square but to estimate: one side is always ≤ something and the other side is always ≥ the same thing.',
      steps: ['Domain: everything under a root ≥ 0.', 'Isolate one root, square, repeat if needed.', 'Check every candidate in the original equation.', 'Alternatively: bound both sides and look at the equality case.'],
      example: {
        q: 'Solve √(x + 2) = x.',
        a: 'Squaring: x + 2 = x², so x = 2 or x = −1. Check: x = 2 gives 2 = 2 ✓; x = −1 gives 1 = −1 ✗. Only x = 2.',
      },
      de: [['Wurzelgleichung', 'equation with roots'], ['Definitionsbereich', 'domain'], ['Probe', 'check'], ['quadrieren', 'to square']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Solve √(2x + 3) = x.',
        answers: ['3'],
        hint: 'Square, then check both candidates.',
        solution: '2x + 3 = x² gives x² − 2x − 3 = 0, so x = 3 or x = −1. Check: x = 3 gives √9 = 3 ✓; x = −1 gives √1 = 1 ≠ −1 ✗. The solution is x = 3.',
      },
      {
        type: 'answer',
        q: 'Solve √(x + 5) + √x = 5.',
        answers: ['4'],
        hint: 'Write √(x + 5) = 5 − √x and square.',
        solution: 'x + 5 = 25 − 10√x + x gives 10√x = 20, √x = 2, x = 4. Check: √9 + √4 = 5 ✓.',
      },
      {
        type: 'proof',
        q: 'Find all real numbers x with\n\n√(x − 1) + √(3 − x) = x² − 4x + 6.',
        answers: ['2'],
        hint: 'Show the left side is at most 2 and the right side at least 2.',
        keySteps: ['Domain: 1 ≤ x ≤ 3.', 'Right side: x² − 4x + 6 = (x − 2)² + 2 ≥ 2, equality only at x = 2.', 'Left side: (√(x − 1) + √(3 − x))² = 2 + 2√((x − 1)(3 − x)) ≤ 2 + (x − 1) + (3 − x) = 4 by AM–GM, so it is ≤ 2.', 'Both sides equal 2 only at x = 2, and x = 2 works: 1 + 1 = 2.'],
        solution: 'The roots need 1 ≤ x ≤ 3.\n\nRight side: x² − 4x + 6 = (x − 2)² + 2 ≥ 2, with equality only for x = 2.\n\nLeft side: let u = √(x − 1), v = √(3 − x). Then (u + v)² = u² + v² + 2uv ≤ 2(u² + v²) = 2·2 = 4, because 2uv ≤ u² + v². So u + v ≤ 2.\n\nHence left ≤ 2 ≤ right, and equality needs x = 2. Indeed x = 2 gives √1 + √1 = 2 = 4 − 8 + 6. The only solution is x = 2.',
      },
    ],
    challenge: {
      source: 'Olympiad classic',
      q: 'Find all real numbers x with\n\n√(x + 3 − 4√(x − 1)) + √(x + 8 − 6√(x − 1)) = 1.',
      answers: ['5 ≤ x ≤ 10'],
      keySteps: ['Substitute t = √(x − 1) ≥ 0, so x = t² + 1.', 'Then x + 3 − 4t = (t − 2)² and x + 8 − 6t = (t − 3)², so the equation is |t − 2| + |t − 3| = 1.', '|t − 2| + |3 − t| ≥ 1 with equality exactly when 2 ≤ t ≤ 3.', 'So 5 ≤ x ≤ 10, and all of these are solutions.'],
      solution: 'We need x ≥ 1. With t = √(x − 1) ≥ 0, x + 3 − 4t = (t − 2)² and x + 8 − 6t = (t − 3)², so the equation reads |t − 2| + |t − 3| = 1.\n\nBy the triangle inequality |t − 2| + |3 − t| ≥ |(t − 2) + (3 − t)| = 1, with equality exactly when t − 2 and 3 − t have the same sign: 2 ≤ t ≤ 3. That means 4 ≤ x − 1 ≤ 9, i.e. 5 ≤ x ≤ 10, and all of these are solutions.',
    },
  },

  17: {
    lesson: {
      idea: 'In a right triangle with legs a, b and hypotenuse c: a² + b² = c² (Pythagoras). The altitude h onto the hypotenuse cuts it into p and q (p next to a). Then h² = p·q (Höhensatz) and a² = c·p, b² = c·q (Kathetensatz). All three come from the two smaller triangles being similar to the big one. And the area gives a·b = c·h.',
      steps: ['Spot the right angle (also Thales: an angle in a semicircle is 90°).', 'Draw the altitude to get two similar triangles.', 'For lengths, Pythagoras; for products of lengths, the similar triangles.'],
      example: {
        q: 'A right triangle has legs 5 and 12. Find the hypotenuse and the altitude onto it.',
        a: 'c = √(25 + 144) = 13. From the area: 5·12 = 13·h, so h = 60/13.',
      },
      de: [['rechtwinkelig', 'right-angled'], ['Hypotenuse / Kathete', 'hypotenuse / leg'], ['Höhensatz', 'altitude theorem'], ['Kathetensatz', 'leg theorem']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In a right triangle the altitude onto the hypotenuse divides it into pieces of length 4 and 9.\n\nHow long is the altitude?',
        answers: ['6'],
        hint: 'Höhensatz: h² = p·q.',
        solution: 'h² = 4·9 = 36, so h = 6.',
      },
      {
        type: 'answer',
        q: 'A right triangle has legs 6 and 8.\n\nHow long is the altitude onto the hypotenuse? (A fraction or decimal is fine.)',
        answers: ['24/5', '4.8'],
        hint: 'Compute the area in two ways.',
        solution: 'The hypotenuse is √(36 + 64) = 10. Area: 6·8/2 = 10·h/2, so h = 48/10 = 24/5 = 4.8.',
      },
      {
        type: 'proof',
        q: 'In triangle ABC the angle at C is 90°, and D is the foot of the altitude from C. Let p = AD, q = DB and h = CD.\n\nProve that h² = p·q.',
        hint: 'Show that triangles ADC and CDB are similar.',
        keySteps: ['Both triangles ADC and CDB have a right angle at D.', '∠ACD = 90° − ∠A = ∠B = ∠CBD.', 'So triangles ADC and CDB are similar (WW): AD/CD = CD/DB.', 'Hence CD² = AD·DB, i.e. h² = pq.'],
        solution: 'Triangles ADC and CDB both have a right angle at D. In triangle ADC, ∠ACD = 90° − ∠A, and in triangle ABC, ∠B = 90° − ∠A. So ∠ACD = ∠CBD, and the triangles are similar (WW), with A ↔ C and C ↔ B. Therefore AD/CD = CD/DB, i.e. h² = CD² = AD·DB = p·q.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'P is a point inside the rectangle ABCD with PA = 3, PB = 4 and PC = 5.\n\nFind PD and prove your answer.',
      answers: ['3√2', '√18'],
      keySteps: ['Drop perpendiculars from P to the sides: distances w, x to AB, CD and y, z to AD, BC.', 'By Pythagoras: PA² = w² + y², PB² = w² + z², PC² = x² + z², PD² = x² + y².', 'So PA² + PC² = PB² + PD².', 'PD² = 9 + 25 − 16 = 18, so PD = 3√2.'],
      solution: 'Let the distances from P to the sides AB, CD, DA, BC be w, x, y, z. The corners are where two sides meet, so by Pythagoras\nPA² = w² + y² (A lies on AB and DA), PB² = w² + z², PC² = x² + z², PD² = x² + y².\n\nHence PA² + PC² = w² + x² + y² + z² = PB² + PD².\n\nSo PD² = 9 + 25 − 16 = 18 and PD = √18 = 3√2.',
    },
  },

  19: {
    lesson: {
      idea: '|x| is x if x ≥ 0 and −x if x < 0, and |a − b| is the distance between a and b on the number line. To solve an equation with absolute values, split the number line at the points where an expression inside |…| is 0, solve on each piece, and keep only solutions that lie in that piece. Thinking in distances is often faster.',
      steps: ['Find where each |…| changes sign.', 'Solve on each interval without the bars, then check the solution lies in that interval.', 'Shortcut: |x − a| + |x − b| is the sum of distances to a and b.'],
      example: {
        q: 'Solve |x − 1| + |x + 2| = 5.',
        a: 'Distance to 1 plus distance to −2 equals 5. Between −2 and 1 the sum is only 3, so x is outside: x = 2 or x = −3.',
      },
      de: [['Betrag', 'absolute value'], ['Fallunterscheidung', 'case analysis'], ['Abstand', 'distance'], ['Intervall', 'interval']],
    },
    problems: [
      {
        type: 'answer',
        q: 'Find the sum of all real solutions of |2x − 3| = x + 1.\n\n(A fraction is fine.)',
        answers: ['14/3'],
        hint: 'Two cases: 2x − 3 ≥ 0 and 2x − 3 < 0.',
        solution: 'If 2x − 3 ≥ 0: 2x − 3 = x + 1, x = 4 ✓. If 2x − 3 < 0: 3 − 2x = x + 1, x = 2/3 ✓ (and x + 1 > 0). Sum: 4 + 2/3 = 14/3.',
      },
      {
        type: 'answer',
        q: 'How many integers x satisfy |x − 3| + |x + 4| = 7?',
        answers: ['8'],
        hint: 'Think of distances to 3 and −4.',
        solution: 'The distance between −4 and 3 is 7. The sum of distances is exactly 7 for all x between −4 and 3, and larger outside. The integers −4, …, 3: 8 of them.',
      },
      {
        type: 'proof',
        q: 'Prove that |a + b| ≤ |a| + |b| for all real numbers a and b, with equality exactly when ab ≥ 0.',
        hint: 'Both sides are ≥ 0, so compare their squares.',
        keySteps: ['Both sides are ≥ 0, so it is enough to compare the squares.', '|a + b|² = a² + 2ab + b² and (|a| + |b|)² = a² + 2|ab| + b².', 'ab ≤ |ab|, so |a + b|² ≤ (|a| + |b|)².', 'Equality ⇔ ab = |ab| ⇔ ab ≥ 0.'],
        solution: 'Both sides are non-negative, so the inequality is equivalent to the one for the squares. Now |a + b|² = a² + 2ab + b² and (|a| + |b|)² = a² + 2|a||b| + b² = a² + 2|ab| + b². Since ab ≤ |ab|, the first is at most the second, which proves |a + b| ≤ |a| + |b|. Equality holds exactly when ab = |ab|, i.e. ab ≥ 0.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'Find all real numbers x with\n\n|x − 1| + |x − 2| + |x − 3| + … + |x − 9| = 20.',
      answers: ['5'],
      keySteps: ['Pair the terms: |x − 1| + |x − 9| ≥ 8, |x − 2| + |x − 8| ≥ 6, |x − 3| + |x − 7| ≥ 4, |x − 4| + |x − 6| ≥ 2 (triangle inequality), and |x − 5| ≥ 0.', 'So the sum is ≥ 8 + 6 + 4 + 2 + 0 = 20.', 'Equality needs |x − 5| = 0, so x = 5.', 'Check: x = 5 gives 4 + 3 + 2 + 1 + 0 + 1 + 2 + 3 + 4 = 20. Only x = 5.'],
      solution: 'For a < b, |x − a| + |x − b| ≥ |(x − a) − (x − b)| = b − a. So\n|x − 1| + |x − 9| ≥ 8, |x − 2| + |x − 8| ≥ 6, |x − 3| + |x − 7| ≥ 4, |x − 4| + |x − 6| ≥ 2, and |x − 5| ≥ 0.\nAdding: the left side is always ≥ 20.\n\nEquality requires in particular |x − 5| = 0, so x = 5. And x = 5 gives 4 + 3 + 2 + 1 + 0 + 1 + 2 + 3 + 4 = 20. So the only solution is x = 5.',
    },
  },

  20: {
    lesson: {
      idea: 'Stars and bars: the number of ways to put n identical objects into k boxes is C(n + k − 1, k − 1): line up n stars and k − 1 bars, and choose where the bars go. If every box needs at least one object, it is C(n − 1, k − 1). Symmetry factor: if several arrangements count as the same (rotations of a round table, swapping identical groups), count them all and divide by how many look the same.',
      steps: ['Identical objects into boxes → stars and bars.', 'At least one per box → give each box one first, then distribute the rest.', 'Arrangements counted several times → divide by the symmetry factor.', 'Upper limits per box → inclusion–exclusion.'],
      example: {
        q: 'How many solutions does x + y + z = 10 have in non-negative integers?',
        a: '10 stars and 2 bars: C(12, 2) = 66.',
      },
      de: [['Verteilung', 'distribution'], ['ununterscheidbar', 'identical (indistinguishable)'], ['runder Tisch', 'round table'], ['nichtnegativ', 'non-negative']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In how many ways can 6 people sit around a round table, if two seatings that differ only by a rotation count as the same?',
        answers: ['120'],
        hint: '6! seatings, and each one looks the same as how many rotations?',
        solution: 'There are 6! = 720 seatings on numbered chairs, and each round arrangement appears 6 times (one per rotation). 720/6 = 120 = 5!.',
      },
      {
        type: 'answer',
        q: 'In how many ways can 10 identical sweets be shared among 4 children so that every child gets at least one?',
        answers: ['84'],
        hint: 'Give each child one sweet first.',
        solution: 'After giving one sweet to each child, 6 sweets remain for 4 children with no restriction: C(6 + 3, 3) = C(9, 3) = 84.',
      },
      {
        type: 'proof',
        q: 'Prove that the number of solutions of x₁ + x₂ + … + xₖ = n in non-negative integers is C(n + k − 1, k − 1).',
        hint: 'Write a solution as a row of n stars and k − 1 bars.',
        keySteps: ['Represent a solution as a row of n stars and k − 1 bars: x₁ stars, a bar, x₂ stars, a bar, …', 'Every solution gives exactly one row, and every row gives exactly one solution (a bijection).', 'A row is determined by choosing which k − 1 of the n + k − 1 positions are bars.', 'So there are C(n + k − 1, k − 1) solutions.'],
        solution: 'Map a solution (x₁, …, xₖ) to the row of symbols: x₁ stars, a bar, x₂ stars, a bar, …, a bar, xₖ stars. This row has n stars and k − 1 bars, n + k − 1 symbols in total.\n\nConversely, every row of n stars and k − 1 bars comes from exactly one solution: read off the numbers of stars between the bars. So solutions and rows correspond one-to-one.\n\nA row is determined by choosing which k − 1 of the n + k − 1 positions hold bars, which can be done in C(n + k − 1, k − 1) ways.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'How many solutions does a + b + c + d = 20 have in integers with 1 ≤ a, b, c, d ≤ 8? Prove your answer.',
      answers: ['315'],
      keySteps: ['Put a = a′ + 1 etc.: a′ + b′ + c′ + d′ = 16 with 0 ≤ each ≤ 7.', 'Without the upper limit: C(19, 3) = 969.', 'Inclusion–exclusion: one variable ≥ 8 → C(11, 3) = 165, four ways: −660. Two variables ≥ 8 → sum 0, 1 way, C(4, 2) = 6 ways: +6. Three or more is impossible.', '969 − 660 + 6 = 315.'],
      solution: 'Write a = a′ + 1, etc. Then a′ + b′ + c′ + d′ = 16 with 0 ≤ a′, b′, c′, d′ ≤ 7.\n\nWithout the upper limit, stars and bars gives C(19, 3) = 969 solutions.\n\nSolutions where a fixed variable is ≥ 8: subtract 8 from it, leaving a sum of 8: C(11, 3) = 165, and there are 4 choices of the variable. Solutions where two fixed variables are ≥ 8: the remaining sum is 0, so exactly 1, with C(4, 2) = 6 choices. Three variables ≥ 8 would need a sum of at least 24 > 16.\n\nBy inclusion–exclusion: 969 − 4·165 + 6 = 315.',
    },
  },
}
